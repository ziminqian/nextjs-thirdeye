// // 📁 /src/app/therapist/page.tsx
// 'use client';

// import React, { useState } from 'react';
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export default function TherapistMode() {
//   const [entry, setEntry] = useState('');
//   const [tags, setTags] = useState('');
//   const [response, setResponse] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const systemPrompt = `You are a bibliotherapist. Based on the user's journal entry and optional tags, recommend one relevant quote from a well-known book or thinker. Also return the book source and suggested worldview tag (e.g. Stoicism, Christianity, Buddhism).`;
//       const userPrompt = `Journal entry: ${entry}\nTags: ${tags}`;

//       const chatResponse = await openai.createChatCompletion({
//         model: 'gpt-4',
//         messages: [
//           { role: 'system', content: systemPrompt },
//           { role: 'user', content: userPrompt }
//         ]
//       });

//       const result = chatResponse.data.choices[0].message?.content || '';
//       setResponse(result);
//     } catch (error) {
//       setResponse('Sorry, something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4">🧠 Therapist Mode</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <textarea
//           className="w-full p-3 border rounded"
//           rows={5}
//           placeholder="Write about what's on your mind..."
//           value={entry}
//           onChange={(e) => setEntry(e.target.value)}
//         />
//         <input
//           className="w-full p-3 border rounded"
//           type="text"
//           placeholder="Optional tags: stoicism, grief, Christianity, etc."
//           value={tags}
//           onChange={(e) => setTags(e.target.value)}
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//           disabled={loading}
//         >
//           {loading ? 'Finding quote...' : 'Get Quote'}</button>
//       </form>

//       {response && (
//         <div className="mt-6 p-4 bg-white border rounded shadow">
//           <h3 className="text-lg font-semibold mb-2">Recommended Quote 📚</h3>
//           <p className="italic whitespace-pre-line text-gray-800">{response}</p>
//         </div>
//       )}
//     </div>
//   );
// }
