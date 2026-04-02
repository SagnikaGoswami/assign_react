import Features from "../components/Features"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Features />
        <Services />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home