"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Good
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Click
        {count}
      </button>
    </div>
  );
}
