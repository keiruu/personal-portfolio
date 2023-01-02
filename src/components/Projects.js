import Image from 'next/image'
import takape from '../assets/takape.svg'
import cybergence from '../assets/cybergence.svg'
import easi from '../assets/easi.svg'
import kaabyan from '../assets/kaabyan.svg'
import bellyful from '../assets/bellyful.svg'
import others from '../assets/others.svg'
import more from '../assets/more.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

function Project(props) {
    let tags = props.tags.split(" ")

    return (
        <motion.a href={props.link} rel="noreferrer" target="_blank">
            <motion.a href={props.link} rel="noreferrer" target="_blank" className='group'>
                <motion.div className='w-full border border-[1px] border-lightgray group-hover:border-darkgreen transition-all flex flex-col items-center max-w-[500px] p-6 gap-4'>
                    <motion.div className='my-4'><Image src={props.img} width="" height=""/></motion.div>
                    <motion.div className='flex flex-col gap-4'>
                        <motion.div className='flex gap-3 items-center relative'>
                            <motion.p className='text-xl group-hover:text-darkgreen transition-all -left-8 group-hover:left-0 absolute'><div className='opacity-0 group-hover:opacity-100 transition delay-75'><FontAwesomeIcon icon={faArrowRight} /></div></motion.p>
                            <motion.p className='font-semibold text-xl lg:text-3xl group-hover:text-darkgreen transition-all absolute left-0 group-hover:left-8 text-primary '>{props.title}</motion.p>
                        </motion.div>
                        <motion.p className='group-hover:text-darkgreen transition-all text-primary lg:text-md text-sm'>{props.desc}</motion.p>
                        <motion.div className='flex gap-2 flex-wrap'>
                            {tags.map((item, key) =>
                                <motion.p key={key} className="text-xs lg:text-md text-gray border-[1px] transition-all border-gray group-hover:text-darkgreen group-hover:border-darkgreen px-4 py-1 rounded-lg">{item}</motion.p>
                            )}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.a>
        </motion.a>
    );
}

function DesignProject(props) {

    return (
        <motion.a href={props.link} rel="noreferrer" target="_blank">
            <motion.div className='group m-0 flex-row gap-6 border-[1px] border-lightgray transition-all cursor-pointer hover:border-darkgreen px-8 py-12 justify-center max-w-[1000px] lg:max-w-[300px] min-h-[405px]'>
                <div className='min-w-[80px] lg:min-w-[150px] group-hover:scale-[1.05] transform transition-all rounded-full'><Image src={props.img} width="" height=""/></div>
                <div className='flex flex-col gap-6'>
                    <motion.div className='flex gap-3 items-center relative mt-8'>
                        <motion.p className='text-lg group-hover:text-darkgreen transition-all -left-8 group-hover:left-0 absolute'><div className='opacity-0 group-hover:opacity-100 transition delay-75'><FontAwesomeIcon icon={faArrowRight} /></div></motion.p>
                        <motion.p className='font-semibold text-xl group-hover:text-darkgreen transition-all absolute left-0 group-hover:left-8 text-primary '>{props.title}</motion.p>
                    </motion.div>
                    <p className='text-md lg:text-lg text-primary group-hover:text-darkgreen transition-all'>{props.desc}</p>
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
    <motion.div className='px-2'>
        <motion.div className="flex flex-col items-center justify-center w-full gap-12 pt-32">
            <motion.div variants={container} ref={ref} initial="hidden" animate={animationControl} className="flex flex-col lg:flex-row gap-12 mb-20 px-4">
                <div>
                    <motion.div variants={transition}>
                        <h1 className='font-bold text-primary text-2xl lg:text-4xl lg:m-0'>Projects I&apos;ve worked on</h1>
                        <div className='hidden lg:flex relative z-0 scale-[0.8] lg:scale-[1.0] lg:mb-4 m-0'>
                            <motion.svg width="420" height="36" viewBox="0 0 316 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path  d="M5 21.8834C53.6667 17.2168 165 7.48344 221 5.88344C277 4.28344 304.333 5.21678 311 5.88344" stroke="#919B81" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                            </motion.svg>
                        </div>
                        <h2 className='font-semibold text-primary text-xl lg:text-3xl pt-16 mb-8'>Web Projects</h2>
                    </motion.div>
                    <motion.div variants={transition} className='mb-0 lg:mb-8'>
                        <Project img={takape} title="Takape" link="https://takape-vhlum.mongodbstitch.com" desc="a simple local cafe finder within the Panay Island." tags="express.js react tailwind.css node.js mongodb firebase"/>
                    </motion.div>
                    <motion.a href='#' rel="noreferrer" target="_blank" className='group pointer-events-none'>
                        <motion.div className='hidden lg:flex w-full border border-[1px] border-lightgray group-hover:border-darkgreen transition-all flex flex-col items-center max-w-[500px] p-6 gap-4'>
                            <motion.div className='my-4'><Image src={more} width="" height=""/></motion.div>
                            <motion.div className='w-full flex flex-col gap-4'>
                                <motion.div className='flex gap-3 items-center relative'>
                                    <motion.p className='text-xl group-hover:text-darkgreen transition-all -left-8 group-hover:left-0 absolute'><div className='opacity-0 group-hover:opacity-100 transition delay-75'><FontAwesomeIcon icon={faArrowRight} /></div></motion.p>
                                    <motion.p className=' font-semibold text-xl lg:text-3xl group-hover:text-darkgreen transition-all absolute left-0 group-hover:left-8 text-primary '>Coming Soon</motion.p>
                                </motion.div>
                                <motion.p className='group-hover:text-darkgreen transition-all text-primary lg:text-md text-sm'>more coming soon</motion.p>
                        
                            </motion.div>
                        </motion.div>
                    </motion.a>
                </div>
                <div className='flex flex-col gap-8'>
                    <motion.div variants={transition}>
                        <Project img={cybergence} title="Cybergence 2021" link="https://cybergence.vercel.app" desc="an event landing site for our school’s acquiantance party in collaboration with other student devs." tags="next.js react tailwind.css"/>
                    </motion.div>
                    <motion.div variants={transition}>
                        <Project img={easi} title="Easi" link="https://easi.vercel.app" desc="a website that allows you to simplify text (web integration for my thesis application)" tags="express.js react tailwind.css node.js firebase"/>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
        <motion.div className="flex flex-col items-center justify-center w-full gap-12 pt-14">
            <motion.div className="flex flex-col gap-12 mb-20 px-4">
                <motion.h1 className='font-semibold text-primary text-xl lg:text-3xl lg:my-4'>Design Projects</motion.h1>
                <motion.div className='flex flex-col lg:flex-row gap-10 justify-between'>
                    <DesignProject img={kaabyan} title="Kaabyan" desc="a social media mobile application for a school" link="https://www.figma.com/proto/Iv1BAiMK1Nmu5iDQetfwOW/KAABYAN-HCI?node-id=225%3A3489&scaling=scale-down&page-id=225%3A3186&starting-point-node-id=225%3A3489"/>
                    <DesignProject img={bellyful} title="Bellyful" desc="a desktop inventory app for a restobar" link="https://www.figma.com/file/Y6ZtYWSdt6GFY59dTf5PrZ/Proposed-System-UI?node-id=0%3A1&t=vPxLF2zpXDjQAFyf-1"/>
                    <DesignProject img={others} title="Others" desc="a compilation of designs created during my undergraduate studies" link="https://www.figma.com/file/ukTmdJjSP6pU9F4VeiiT4m/Human-Computer-Interaction-Challenges?node-id=110%3A126&t=3upGl8OhRfvkDc4M-1"/>
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}