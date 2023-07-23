import { poppins } from "@/lib/fonts"
import Hero from "./Hero"
import About from "./About"
import ContactUs from "./ContactUs"
import Project from "./Projects/Project"
import Skills from "./Skills"
import Tagline from "./Tagline"
import Team from "./Team"
import Services from "./Services"

const LandingPage = () => {
    return (
        <>
            <Hero />
            {/* <Tagline /> */}
            {/* <Project /> */}
            <About />
            {/* <Skills />
            <Team /> */}
            <Services />
            <ContactUs />
        </>
    )
}

export default LandingPage