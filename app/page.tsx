"use client";

import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Project from "@/components/Projects/Project";
import Tagline from "@/components/Tagline";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LandingPage />
      <Tagline />
      <Project />
      <About />
    </main>
  )
}
