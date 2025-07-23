import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10 md:px-16">
      <header className="mb-12 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Welcome to Third Eye</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          A mindful space to reflect, connect, and heal. Post journal entries, receive thoughtful replies from friends with curated book quotes, and explore book suggestions and uplifting quotes from intellectual works tailored to what you're feeling(Therapize Mode). You can also share moments of wellness with those who matter most.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/post" className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-medium">Write a Journal Entry</h2>
          <p className="mt-2 text-sm text-gray-500">Reflect on your thoughts—publicly or privately.</p>
        </Link>

        <Link href="/explore" className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-medium">Explore Book Quotes</h2>
          <p className="mt-2 text-sm text-gray-500">Send excerpts that resonate with your friends’ entries.</p>
        </Link>

        <Link href="/inbox" className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-medium">Your Reflections Inbox</h2>
          <p className="mt-2 text-sm text-gray-500">See responses and support from your community.</p>
        </Link>

        <Link href="/therapistmode" className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-medium">Therapize Mode</h2>
          <p className="mt-2 text-sm text-gray-500">Receive personalized literary guidance for your challenges.</p>
        </Link>

        <Link href="/wellness" className="block p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-medium">Share a Wellness Moment</h2>
          <p className="mt-2 text-sm text-gray-500">Capture and share how you're caring for yourself today.</p>
        </Link>
      </section>
    </main>
  );
}