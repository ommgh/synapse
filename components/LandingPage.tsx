import { About } from './About'
import { FAQ } from './FAQ'
import { Hero } from './Hero'
import { Project } from './Project'
import { Services } from './Services'
import { Footer } from './Footer'

export const LandingPage = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Project />
            <FAQ />
            <Footer />
        </>
    )
}
