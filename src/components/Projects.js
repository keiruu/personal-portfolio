import Image from 'next/image'
import takape from '../assets/takape.svg'
import cybergence from '../assets/cybergence.svg'
import easi from '../assets/easi.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Project(props) {
    let tags = props.tags.split(" ")

    return (
        <motion.a href={props.link} rel="noreferrer" target="_blank">
            <motion.div className='group flex flex-col m-0 lg:flex-row gap-6 rounded-3xl border-2 border-lightgray transition-all cursor-pointer hover:border-darkgreen px-8 py-12 justify-center max-w-[1000px]'>
                <div className='min-w-[250px] lg:min-w-[350px] group-hover:scale-[1.05] transform transition-all'><Image src={props.img} width="" height=""/></div>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between'>
                        <p className='text-2xl lg:text-3xl font-medium text-primary pt-4 group-hover:text-darkgreen transition-all'>{props.title}</p>
                        <button className='bg-lightgreen text-lg px-[1rem]  lg:px-[1.13rem] text-darkgreen rounded-full transition-all group-hover:text-[#6D785B] group-hover:rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <p className='text-md lg:text-xl text-primary group-hover:text-darkgreen transition-all'>{props.desc}</p>
                    <div className='flex gap-4 flex-wrap'>
                        { tags.map((item, key) =>
                            <p key={key} className="text-sm lg:text-md text-gray border-[1px] transition-all border-gray group-hover:text-darkgreen group-hover:border-darkgreen px-4 py-1 rounded-lg">{item}</p>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.a>
    );
}

export default function Projects() {
    const transition = { 
        hidden: { y: 20, opacity: 0},
        appear: {
            y: 1, opacity: 1, 
            transition: {
                ease: "circOut",
                duration: 0.8,
            }
        }
    }
    
    const container = {
        hidden: {},
        appear: {
          transition: {
            staggerChildren: 0.5,
          }
        }
    }

    const {inView, ref} = useInView()
    const animationControl = useAnimation()

    useEffect(() => {
        if (inView) {
            animationControl.start("appear")
        }
    }, [animationControl, inView]);

  return (
    <motion.div className="flex flex-col items-center justify-center w-full gap-12 my-32">
        <motion.div variants={container} ref={ref} initial="hidden" animate={animationControl} className="flex flex-col gap-12 mb-20 px-4">
            <motion.div variants={transition}>
                <h1 className='font-bold text-primary text-2xl lg:text-4xl lg:m-0'>Projects I&apos;ve worked on</h1>
            </motion.div>
            <motion.div variants={transition}>
                <Project img={takape} title="Takape" link="https://takape-vhlum.mongodbstitch.com" desc="a simple local cafe finder within the Panay Island." tags="express.js react tailwind.css node.js mongodb firebase"/>
            </motion.div>
            <motion.div variants={transition}>
                <Project img={cybergence} title="Cybergence 2021" link="https://cybergence.vercel.app" desc="an event landing site for our school’s acquiantance party in collaboration with other student devs." tags="next.js react tailwind.css"/>
            </motion.div>
            <motion.div variants={transition}>
                <Project img={easi} title="Easi" link="https://easi.vercel.app" desc="a website that allows you to simplify text (web integration for my thesis application)" tags="express.js react tailwind.css node.js firebase"/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
