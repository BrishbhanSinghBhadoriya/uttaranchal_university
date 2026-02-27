"use client";

export default function MobileStickyBar() {
  function openForm(source: string) {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("request-enquiry", { detail: { source } }));
    }
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex w-full">
        <button
          onClick={() => openForm("Call Now")}
          className="flex-1 bg-red-600 text-white py-3 text-center font-bold flex items-center justify-center gap-2"
        >
          <span aria-hidden>📞</span>
          <span>Call Now</span>
        </button>
        <button
          onClick={() => openForm("WhatsApp Live Chat")}
          className="flex-1 bg-green-600 text-white py-3 text-center font-bold flex items-center justify-center gap-2"
        >
          <span aria-hidden>🟢</span>
          <span>Live Chat</span>
        </button>
      </div>
    </div>
  );
}

