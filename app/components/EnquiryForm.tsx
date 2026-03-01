"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
  defaultCourse?: string | null;
  source?: string | null;
  courseOptions?: string[];
};

export default function EnquiryForm({ onClose, defaultCourse, source, courseOptions }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(defaultCourse ?? "");
  const [stateVal, setStateVal] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, course, source, state: stateVal }),
      });
      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        throw new Error("Failed");
      }
    } catch (err: unknown) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <div style={{ display: "grid", gap: 8 }}>
        <button onClick={onClose} aria-label="Close form" style={{ border: "none", background: "transparent", fontSize: 18, cursor: "pointer", justifySelf: "end" }}>✕</button>
        <div style={{ textAlign: "center" }}>
          <img src="/logo.png" alt="Uttaranchal University" style={{ height: 64, width: "auto", display: "inline-block" }} />
          <div style={{ fontWeight: 800, color: "#111827", fontSize: 20, marginTop: 6 }}>Speak to an admission counsellor</div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 6, fontSize: 12, alignItems: "center" }}>
            <span style={{ color: "#2563eb", display: "inline-flex", alignItems: "center", gap: 6 }}>✔ Online Exam</span>
            <span style={{ color: "#2563eb", display: "inline-flex", alignItems: "center", gap: 6 }}>✔ 100% Placement Assistance</span>
          </div>
        </div>
      </div>
      {!done ? (
        <form onSubmit={submit} style={{ display: "grid", gap: 10, marginTop: 10 }}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" required style={inputStyle} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required style={inputStyle} />
          <div style={{ position: "relative" }}>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone No." required style={{ ...inputStyle, width: "100%" }} />
            <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", fontSize: 12, color: "#16a34a", background: "#e9fce9", padding: "2px 6px", borderRadius: 12 }}>We don&apos;t spam</span>
          </div>
          <select value={stateVal} onChange={(e) => setStateVal(e.target.value)} style={inputStyle}>
            <option value="">Select State</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
          </select>
          {courseOptions && courseOptions.length > 0 ? (
            <select value={course} onChange={(e) => setCourse(e.target.value)} style={inputStyle}>
              <option value="">Select Course</option>
              {courseOptions.map((co) => (
                <option key={co} value={co}>{co}</option>
              ))}
            </select>
          ) : (
            <input value={course} onChange={(e) => setCourse(e.target.value)} placeholder="Course (optional)" style={inputStyle} />
          )}

          {error && <div style={{ color: "#e31e24", fontSize: 14 }}>{error}</div>}
          <button disabled={submitting} style={submitStyle}>{submitting ? "Your enquiry is submitting..." : "Apply Now"}</button>
        </form>
      ) : (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ fontSize: 36 }}>✅</div>
          <div style={{ marginTop: 8, fontWeight: 700, color: "#003087" }}>Thank you</div>
          <div style={{ fontSize: 14, color: "#444", marginTop: 4 }}>We will contact you soon.</div>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 12 }}>
            <a href="tel:+917042646766" style={{ ...submitStyle, background: "#dc2626", textDecoration: "none", display: "inline-block", padding: "10px 14px" }}>📞 Call Now</a>
            <a href="https://wa.me/917042646766" target="_blank" rel="noreferrer" style={{ ...submitStyle, background: "#16a34a", textDecoration: "none", display: "inline-block", padding: "10px 14px" }}>🟢 Live Chat</a>
          </div>
          <button onClick={onClose} style={{ ...submitStyle, marginTop: 12 }}>Close</button>
        </div>
      )}
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
