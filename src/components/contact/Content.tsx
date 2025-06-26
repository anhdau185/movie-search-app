"use client";

import { useState } from "react";

export default function ContactContent() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("");

  const saveToCookie = async () => {
    const res = await fetch("/api/save-sample-data", {
      method: "POST",
      body: JSON.stringify({ data: input }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("✅ Saved to HttpOnly cookie!");
    } else {
      const err = await res.json();
      setStatus(`❌ Error: ${err.error}`);
    }
  };

  return (
    <main className="p-4">
      <h1 className="mb-2 text-xl font-bold">🏠 Home</h1>
      <input
        className="mr-2 rounded border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Nhập dữ liệu userData..."
      />
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white"
        onClick={saveToCookie}
      >
        Save
      </button>
      <p className="mt-3">{status}</p>
    </main>
  );
}
