import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


export async function POST(req: NextRequest) {
  try {
    if (!clientPromise) {
      return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }

    const dbName         = process.env.DB_NAME || "uttaranchal_university";
    const collectionName = "enquiries";

    const body       = await req.json();
    const name       = typeof body?.name       === "string" ? body.name.trim()        : "";
    const email      = typeof body?.email      === "string" ? body.email.trim()       : "";
    const phone      = typeof body?.phone      === "string" ? body.phone.trim()       : "";
    const course     = typeof body?.course     === "string" ? body.course.trim()      : "";
    const state      = typeof body?.state      === "string" ? body.state.trim()       : "";
    const source     = typeof body?.source     === "string" ? body.source.trim()      : "";
    const source_url = typeof body?.source_url === "string" ? body.source_url.trim()  : "";
    const source_id  = "uttaranchal_online";

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "name, email, phone are required" }, { status: 400 });
    }


    // ✅ Phone number validation: must be exactly 10 digits
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      return NextResponse.json({ error: "Please enter a valid 10-digit phone number." }, { status: 400 });
    }


    const client = await clientPromise;
    const db = client.db(dbName);
    const doc = {
      name,
      email: email.toLowerCase(),
      phone,
      course: course || null,
      state: state || null,
      source: source || null,
      source_id,
      source_url: source_url || null,
      createdAt: new Date(),
    };
    const result = await db.collection(collectionName).insertOne(doc);


    // ✅ Send lead to CRM as well
    const apiEndpoint = process.env.API_ENDPOINT;
    if (apiEndpoint) {
      try {
        const crmData = {
          name,
          email: email.toLowerCase(),
          phone,
          program: course || null,
          state: state || null,
          source: source || null,
          url: source_url || null,
          source_id: source_id,
        };

        const crmResponse = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(crmData),
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
        // We continue because the lead is already saved in MongoDB
      }
    }


    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


export const dynamic = "force-dynamic";