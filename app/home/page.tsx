// 📁 /src/app/page.tsx
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

// "use client";

// import { useState } from "react";

// export default function PostPage() {
//   const [entry, setEntry] = useState("");
//   const [isAnonymous, setIsAnonymous] = useState(true);
//   const [file, setFile] = useState<File | null>(null);

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-[#fdfcfb] to-[#e2d1c3] px-4 py-10 flex justify-center items-start font-serif">
//       <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl space-y-6 border border-gray-200">
//         <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-2">
//           🧘‍♀️ Wellness Journal
//         </h1>
//         <p className="text-gray-600 leading-relaxed">
//           Reflect on your wellness journey 🌿 — how you're feeling, your rituals, or simply a photo that captures your moment. Share it with intention, or anonymously if you prefer.
//         </p>

//         <div className="space-y-2">
//           <label className="text-gray-700 font-medium">Your Journal Entry</label>
//           <textarea
//             rows={6}
//             className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-sm resize-none bg-gray-50"
//             placeholder="Write your thoughts here..."
//             value={entry}
//             onChange={(e) => setEntry(e.target.value)}
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="text-gray-700 font-medium">Upload a wellness photo (optional)</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               if (e.target.files && e.target.files[0]) {
//                 setFile(e.target.files[0]);
//               }
//             }}
//             className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200 cursor-pointer"
//           />
//         </div>

//         {file && (
//           <div className="space-y-2">
//             <p className="font-medium text-gray-700">Photo Preview:</p>
//             <img
//               src={URL.createObjectURL(file)}
//               alt="Preview"
//               className="w-full max-h-80 object-contain border rounded-xl shadow-md"
//             />
//           </div>
//         )}

//         <div className="flex items-center gap-2">
//           <input
//             type="checkbox"
//             checked={isAnonymous}
//             onChange={(e) => setIsAnonymous(e.target.checked)}
//             className="h-5 w-5 accent-indigo-500 rounded focus:ring-2 focus:ring-indigo-400"
//           />
//           <label className="text-gray-700">Post anonymously</label>
//         </div>

//         <div className="pt-4">
//           <button
//             onClick={() => alert("Submitted! (You can replace this with actual logic)")}
//             className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-lg font-semibold py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
//           >
//             ✨ Submit Entry
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }