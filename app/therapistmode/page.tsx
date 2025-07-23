// 📁 /src/app/page.tsx
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Quotely 🌱</h1>
      <p className="mb-6 text-lg">A safe space to reflect, share quotes, and support each other through literature and wellness.</p>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/post" className="block p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">📝 Post a Journal Entry</h2>
          <p className="text-sm text-gray-600">Share how you're feeling—anonymously or not.</p>
        </Link>

        <Link href="/explore" className="block p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">📚 Explore Quotes</h2>
          <p className="text-sm text-gray-600">Discover and send uplifting quotes to your friends.</p>
        </Link>

        <Link href="/inbox" className="block p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">💌 View Your Inbox</h2>
          <p className="text-sm text-gray-600">See what your friends have sent you.</p>
        </Link>

        <Link href="/therapist" className="block p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">🧠 Therapist Mode</h2>
          <p className="text-sm text-gray-600">Get quote-based support for what you're going through.</p>
        </Link>

        <Link href="/wellness" className="block p-6 bg-white rounded shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">📷 Share Wellness Check-In</h2>
          <p className="text-sm text-gray-600">Post what you did for self-care today.</p>
        </Link>
      </div>
    </main>
  );
}