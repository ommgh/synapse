"use client";

import LandingPage from "@/components/LandingPage";
import Project1 from "@/components/Projects/Project1";
import Project2 from "@/components/Projects/Project2";
import Tagline from "@/components/Tagline";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LandingPage />
      <Tagline />
      <Project1 />
      <Project2 />
    </main>
  )
}
