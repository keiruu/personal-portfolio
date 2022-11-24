import { motion } from "framer-motion"
import About from "../src/components/About"
import Header from "../src/components/Header"
import Navbar from "../src/components/Navbar"
import Projects from "../src/components/Projects"
import Tech from "../src/components/Tech"
import Contact from "../src/components/Contact"
import Footer from "../src/components/Footer"
import Circles from "../src/components/Circles"
import ParticlesBackground from "../src/components/ParticlesBackground"
import Intro from "../src/components/Intro"

export default function Home() {
  return (
    <div className="">
      <motion.div className="font-rubik overflow-y-hidden">
        {/* <Intro/> */}
      <motion.div className="flex flex-col z-10 absolute w-full overflow-y-scroll">
        <Navbar/>
        <Circles/>
        <Header/>
        <Projects/>
        <Tech/>
        <About/>
        <Contact/>
        <footer>
          <Footer/>
        </footer>
      </motion.div>
      <div className="absolute z-0">
        <ParticlesBackground/>
      </div>
    </motion.div>
    </div>
  )
}
