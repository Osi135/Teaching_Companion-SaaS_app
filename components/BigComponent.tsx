"use client";

// Simulate module-level delay
const start = Date.now();
while (Date.now() - start < 5000) {
  // Just spin here for 5 seconds
  // This blocks module resolution, which simulates a slow import
}

// Then define the component
export default function BigComponent() {
  return (
    <div style={{ padding: "2rem", border: "2px solid green" }}>
      <h2>✅ BigComponent finished loading!</h2>
    </div>
  );
}
