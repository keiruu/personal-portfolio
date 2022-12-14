import Image from 'next/image'
import takape from '../assets/takape.svg'
import cybergence from '../assets/cybergence.svg'
import easi from '../assets/easi.svg'
import kaabyan from '../assets/kaabyan.svg'
import bellyful from '../assets/bellyful.svg'
import others from '../assets/others.svg'
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
                        {tags.map((item, key) =>
                            <p key={key} className="text-sm lg:text-md text-gray border-[1px] transition-all border-gray group-hover:text-darkgreen group-hover:border-darkgreen px-4 py-1 rounded-lg">{item}</p>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.a>
    );
}

function DesignProject(props) {

    return (
        <motion.a href={props.link} rel="noreferrer" target="_blank">
            <motion.div className='group m-0 flex-row gap-6 rounded-3xl border-2 border-lightgray transition-all cursor-pointer hover:border-darkgreen px-8 py-12 justify-center max-w-[1000px] lg:max-w-[300px] min-h-[405px]'>
                <div className='min-w-[80px] lg:min-w-[150px] group-hover:scale-[1.05] transform transition-all rounded-full'><Image src={props.img} width="" height=""/></div>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between mt-4'>
                        <p className='text-lg lg:text-xl font-medium text-primary pt-4 group-hover:text-darkgreen transition-all'>{props.title}</p>
                        <button className='bg-lightgreen text-lg px-[0.9rem] lg:px-[0.9rem] text-darkgreen rounded-full transition-all group-hover:text-[#6D785B] group-hover:rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
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
            <motion.div variants={container} ref={ref} initial="hidden" animate={animationControl} className="flex flex-col gap-12 mb-20 px-4">
                <motion.div variants={transition}>
                    <h1 className='font-bold text-primary text-2xl lg:text-4xl lg:m-0'>Projects I&apos;ve worked on</h1>
                    <h2 className='font-semibold text-primary text-xl lg:text-3xl pt-16'>Web Projects</h2>
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
        <motion.div className="flex flex-col items-center justify-center w-full gap-12 pt-14">
            <motion.div className="flex flex-col gap-12 mb-20 px-4">
                <h1 className='font-semibold text-primary text-xl lg:text-3xl lg:my-4'>Design Projects</h1>
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