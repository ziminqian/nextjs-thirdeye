"use client";

import { useState } from "react";

export default function ExplorePage() {
  const [filter, setFilter] = useState("");

  return (
    <main>
      <h1>🌎 Explore Quotes</h1>
      <input
        className="border p-2 rounded w-full mt-2"
        type="text"
        placeholder="Search quotes by tag or keyword..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="mt-4 space-y-2">
        <div className="border p-3 rounded">"Every day is a fresh start."</div>
        <div className="border p-3 rounded">"Healing is not linear."</div>
      </div>
    </main>
  );
}