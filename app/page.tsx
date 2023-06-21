"use client";

import LandingPage from "@/components/LandingPage";
import Project1 from "@/components/Projects/Project1";
import Tagline from "@/components/Tagline";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LandingPage />
      <Tagline />
      <Project1 />
    </main>
  )
}
