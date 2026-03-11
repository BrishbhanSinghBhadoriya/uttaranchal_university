"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
  defaultCourse?: string | null;
  campaign?: "Meta_Search" | "Google_Search"; // ✅ NEW
  courseOptions?: string[];
};

export default function EnquiryForm({ onClose, defaultCourse, campaign, courseOptions }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(defaultCourse ?? "");
  const [stateVal, setStateVal] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const source = typeof window !== "undefined" ? window.location.href : ""; // ✅ source = URL

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          course,
          state: stateVal,
          source,                              // ✅ current page URL
          campaign: campaign || "",            // ✅ "Meta_Search" ya "Google_Search"
          university: "Uttaranchal University", // ✅ hamesha fixed
        }),
      });

      if (res.ok) window.location.href = "/thank-you";
      else throw new Error("Failed");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const states = [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
    "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
    "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
    "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
    "Uttarakhand","West Bengal",
    "Andaman and Nicobar Islands","Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu","Delhi",
    "Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"
  ];

  return (
    <div>
      {/* HEADER */}
      <div style={{ display: "grid", gap: 8 }}>
        <button onClick={onClose} style={{ border: "none", background: "transparent", fontSize: 18, cursor: "pointer", justifySelf: "end" }}>✕</button>
        <div style={{ textAlign: "center" }}>
          <img src="/logo.png" alt="University" style={{ height: 64 }} />
          <div style={{ fontWeight: 800, fontSize: 20, marginTop: 6 }}>Speak to an admission counsellor</div>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={submit} style={{ display: "grid", gap: 10, marginTop: 10 }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required style={inputStyle} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required style={inputStyle} />

        {/* PHONE */}
        <div style={{ position: "relative" }}>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone No." required style={{ ...inputStyle, width: "100%" }} />
          <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: "#16a34a", background: "#e9fce9", padding: "2px 6px", borderRadius: 12 }}>
            We don't spam
          </span>
        </div>

        {/* STATE */}
        <select value={stateVal} onChange={(e) => setStateVal(e.target.value)} style={inputStyle}>
          <option value="">Select State</option>
          {states.map((st, i) => (
            <option key={st + i} value={st}>{st}</option>
          ))}
        </select>

        {/* COURSE */}
        {courseOptions?.length ? (
          <select value={course} onChange={(e) => setCourse(e.target.value)} style={inputStyle}>
            <option value="">Select Course</option>
            {courseOptions.map((co, i) => (
              <option key={co + i} value={co}>{co}</option>
            ))}
          </select>
        ) : (
          <input value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course (optional)" style={inputStyle} />
        )}

        {error && <div style={{ color: "#e31e24", fontSize: 14 }}>{error}</div>}

        <button disabled={submitting} style={submitStyle}>
          {submitting ? "Submitting..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #cfd9ea",
  fontSize: 14,
};

const submitStyle: React.CSSProperties = {
  background: "#e31e24",
  color: "white",
  border: "none",
  padding: "11px 16px",
  borderRadius: 6,
  fontWeight: 700,
  cursor: "pointer",
  fontSize: 15,
};