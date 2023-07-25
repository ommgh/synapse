import { poppins } from "@/lib/fonts"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Tagline from "./Tagline"
import Team from "./Team"
import Services from "./Services"
import Footer from "./Footer"

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
            <Footer />
        </>
    )
}

export default LandingPage