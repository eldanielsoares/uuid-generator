'use client'

import { HomePage } from "@/components/Home";
import { Suspense } from "react";

export default function Home() {
  

  return (
    <Suspense>
      <HomePage/>
    </Suspense>
  );
}
