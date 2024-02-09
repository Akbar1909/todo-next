"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Counter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const count = parseInt(searchParams.get("count"), 10) || 0;
  return (
    <div>
      <hr />
      <h1>{count}</h1>
      <button onClick={() => router.push(`?count=${count + 1}`)}>inc</button>
    </div>
  );
};

export default Counter;
