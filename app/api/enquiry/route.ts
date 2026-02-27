import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const name = (data?.name ?? "").toString().trim();
    const email = (data?.email ?? "").toString().trim();
    const phone = (data?.phone ?? "").toString().trim();
    const course = (data?.course ?? "").toString().trim();
    const message = (data?.message ?? "").toString().trim();
    const state = (data?.state ?? "").toString().trim();
    const source = (data?.source ?? "").toString().trim();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await getDb();
    const col = db.collection("enquiries");
    const doc = {
      name,
      email,
      phone,
      course: course || null,
      message: message || null,
      source: source || null,
      createdAt: new Date(),
      state: state || null,
    };
    const result = await col.insertOne(doc);

    return NextResponse.json({ ok: true, id: result.insertedId }, { status: 201 });
  } catch (e: unknown) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
