import Features from "../components/Features"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import Services from "../components/Services"

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Features />
        <Services />
    </div>
  )
}

export default Home