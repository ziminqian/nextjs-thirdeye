export default function InboxPage() {
  return (
    <main>
      <h1>📥 Your Inbox</h1>
      <p>Quotes and book excerpts sent to you will appear here.</p>
      <ul className="mt-4 space-y-2">
        <li className="border p-3 rounded">"You are capable of amazing things."</li>
        <li className="border p-3 rounded">"Take a deep breath. You're doing fine."</li>
      </ul>
    </main>
  );
}