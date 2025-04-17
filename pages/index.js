import { Analytics } from '@vercel/analytics/react';
export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "100px" }}>
      <h1>Welcome to Omamek 🚀</h1>
      <p>The Omni-Memory Keeper is live and evolving.</p>
  <Analytics />
    </div>
  );
}
