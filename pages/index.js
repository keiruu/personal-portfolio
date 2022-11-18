import Header from "../src/components/Header"
import Navbar from "../src/components/Navbar"
import Projects from "../src/components/Projects"
import Tech from "../src/components/Tech"

export default function Home() {
  return (
    <div className="font-rubik">

      <Navbar/>
      <Header/>
      <Projects/>
      <Tech/>

    </div>
  )
}