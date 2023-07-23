"use client";

import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import Project from "@/components/Projects/Project";
import Skills from "@/components/Skills";
import Tagline from "@/components/Tagline";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <LandingPage />
      <Tagline />
      <Project />
      <About />
      <Skills />
      <Team />
      <ContactUs />
    </main>
  )
}
