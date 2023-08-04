import { About } from './About'
import { FAQ } from './FAQ'
import { Home } from './Home'
import { Project } from './Project'
import { Services } from './Services'
import { Footer } from './Footer'

export const LandingPage = () => {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Project />
            <FAQ />
            <Footer />
        </>
    )
}
