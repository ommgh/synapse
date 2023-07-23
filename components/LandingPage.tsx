import { poppins } from "@/lib/fonts"
import Hero from "./Hero"
import About from "./About"
import ContactUs from "./ContactUs"
import Project from "./Projects/Project"
import Skills from "./Skills"
import Tagline from "./Tagline"
import Team from "./Team"

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Tagline />
            <Project />
            <About />
            <Skills />
            <Team />
            <ContactUs />
        </>
    )
}

export default LandingPage