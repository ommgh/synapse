import { FAQ } from "./faq"
import { Services } from "./services"
import { About } from "./about-us"
import { Home } from "./home"
import { Projects } from "./projects"
import { Footer } from "./footer"

export const LandingPage = () => {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Projects />
            <FAQ />
            <Footer />
        </>
    )
}