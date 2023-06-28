"use client";

import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills";
import Tagline from "@/components/Tagline";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LandingPage />
      <Tagline />
      <Project />
      <About />
      <Skills />
      <Team />
    </main>
  )
}
