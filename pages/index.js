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
import Head from "next/head"
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const topRef = useRef(null);
  return (
    <div className="">
      <Head>
        <title>Abigail Kaye Unating</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <motion.div className="font-rubik overflow-y-hidden">
        {/* <Intro/> */}
        <motion.div className="flex flex-col z-10 absolute w-full overflow-y-scroll lg:overflow-auto">
          <Navbar aboutRef={aboutRef} contactRef={contactRef}/>
          <Circles ref={topRef}/>
          <Header/>
          <Projects/>
          <Tech/>
          <About ref={aboutRef}/>
          <Contact ref={contactRef}/>
          <footer>
            <Footer topRef={topRef}/>
          </footer>
        </motion.div>
        <div className="absolute z-0">
          <ParticlesBackground/>
        </div>
      </motion.div>
    </div>
  )
}
