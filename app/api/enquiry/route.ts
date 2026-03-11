import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    if (!clientPromise) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }

    const dbName         = process.env.DB_NAME || "uttaranchal_university";
    const collectionName = "enquiries";

    const body = await req.json();

    const name     = typeof body?.name     === "string" ? body.name.trim()     : "";
    const email    = typeof body?.email    === "string" ? body.email.trim()    : "";
    const phone    = typeof body?.phone    === "string" ? body.phone.trim()    : "";
    const course   = typeof body?.course   === "string" ? body.course.trim()   : "";
    const state    = typeof body?.state    === "string" ? body.state.trim()    : "";

    // ✅ source = URL, campaign, university
    const source     = typeof body?.source     === "string" ? body.source.trim()     : "";
    const campaign   = typeof body?.campaign   === "string" ? body.campaign.trim()   : "";
    const university = typeof body?.university === "string" ? body.university.trim() : "Uttaranchal University";

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "name, email, phone are required" }, { status: 400 });
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(dbName);

    const doc = {
      name,
      email:      email.toLowerCase(),
      phone:      cleanPhone,
      course:     course     || null,
      state:      state      || null,
      source:     source     || null,   // ✅ current page URL
      campaign:   campaign   || null,   // ✅ "Google_Search" ya "Meta_Search"
      university: university,           // ✅ "Uttaranchal University"
      createdAt:  new Date(),
    };

    const result = await db.collection(collectionName).insertOne(doc);

    // ✅ Send lead to CRM
    const apiEndpoint = process.env.API_ENDPOINT;
    if (apiEndpoint) {
      try {
        const crmResponse = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email:      email.toLowerCase(),
            phone:      cleanPhone,
            program:    course     || null,
            state:      state      || null,
            source:     source     || null,   // ✅ URL
            campaign:   campaign   || null,   // ✅ "Google_Search" ya "Meta_Search"
            university: university,           // ✅ "Uttaranchal University"
          }),
        });

        if (!crmResponse.ok) {
          const errorData = await crmResponse.json().catch(() => null);
          console.error("CRM API Error:", {
            status:     crmResponse.status,
            statusText: crmResponse.statusText,
            errorData,
          });
        }
      } catch (crmErr) {
        console.error("Failed to send lead to CRM:", crmErr);
      }
    }

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export const dynamic = "force-dynamic";