import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import line from '../assets/line.svg'
import { motion } from "framer-motion"

export default function Header() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
          return {
            pathLength: 1,
            opacity: 1,
            transition: {
              pathLength: { delay, type: "spring", duration: 1, bounce: 0, delay: 0.5},
              opacity: { delay, duration: 0.01 }
            }
          };
        }
      };

    return (
        <div className="flex flex-row justify-center h-view items-center">
            <div className="flex flex-col items-center justify-center text-primary font-rubik text-4xl font-bold">
                    <div className='relative z-10'>
                        <h2 className="font-medium text-2xl lg:text-4xl">hi I&apos;m</h2>
                        <h1 className="text-7xl lg:text-8xl font-extrabold">abby.</h1>
                    </div>
                    <div className='relative z-0 scale-[0.8] lg:scale-[1.0]'>
                        {/* <Image src={line} /> */}
                        <motion.svg initial="hidden" animate="visible" width="316" height="27" viewBox="0 0 316 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path variants={draw} d="M5 21.8834C53.6667 17.2168 165 7.48344 221 5.88344C277 4.28344 304.333 5.21678 311 5.88344" stroke="#919B81" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
                        </motion.svg>
                    </div>
                <p className="text-sm text-center font-extralight pt-4">IT Student at West Visayas State University.</p>
                <p className="text-sm text-center font-extralight ">I enjoy making apps for fun.</p>
                <div className="flex gap-5 justify-center items-center pt-5">
                    <button className="bg-transparent border border-brightpink hover:bg-brightpink text-brightpink hover:text-white 
                        font-light px-4 rounded-full w-[109px] h-[35px] text-sm transition-all">
                        learn more
                    </button>
                    <button className="bg-brightpink border border-brightpink hover:bg-transparent text-white hover:text-brightpink 
                        font-light px-4 rounded-full w-[109px] h-[35px] text-sm transition-all">
                        <FontAwesomeIcon icon={faDownload} /> resume
                    </button>
                </div>
            </div>

        </div>
    )
}