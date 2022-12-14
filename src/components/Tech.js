import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faSquareJs, faReact, faAngular, faNodeJs, faPython, faGitAlt, faGithub, faFigma} from '@fortawesome/free-brands-svg-icons'
import nextjs from '../assets/nextjs-icon.svg'
import tailwind from '../assets/tailwind.svg'
import typescript from '../assets/typescript.svg'
import firebase from '../assets/firebase.svg'
import vercel from '../assets/vercel.svg'
import flutter from '../assets/flutter.svg'
import mysql from '../assets/mysql.svg'
import heroku from '../assets/heroku.svg'
import Image from 'next/image'
export default function Tech() {
    const transition = { 
        hidden: { y: 20, opacity: 0},
        appear: {
            y: 1, opacity: 1, 
            transition: {
                ease: "circOut",
                duration: 0.3,
            }
        }
    }
    
    const container = {
        hidden: {},
        appear: {
          transition: {
            staggerChildren: 0.2,
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

    return(
        <motion.div variants={container} ref={ref} initial="hidden" animate={animationControl} className="bg-lightgray text-primary font-rubik flex flex-col items-center justify-center py-24 my-32">
            <motion.h1 variants={transition} className="font-bold text-2xl lg:text-4xl pb-10"> &lt;technologies/&gt;</motion.h1>
            <motion.div variants={container} ref={ref} initial="hidden" animate={animationControl} className="grid grid-cols-3 lg:grid-cols-6 text-5xl lg:text-5xl px-2 lg:p-0 gap-x-16 lg:gap-x-20 gap-y-8 lg:gap-y-10 text-center">
                <motion.div variants={transition}><FontAwesomeIcon icon={faHtml5} /></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faCss3Alt} /></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faSquareJs} /></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faReact} /></motion.div>
                <motion.div variants={transition}><Image src={nextjs} fill alt='Next.js'/></motion.div>
                <motion.div variants={transition}><Image src={tailwind} fill alt='Tailwind.css'/></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faAngular} /></motion.div>
                <motion.div variants={transition}><Image src={typescript} fill alt='Typescript'/></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faNodeJs} /></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faPython} /></motion.div>
                <motion.div variants={transition}><Image src={heroku} fill alt='Heroku'/></motion.div>
                <motion.div variants={transition}><Image src={vercel} fill alt='Vercel'/></motion.div>
                <motion.div variants={transition}><Image src={mysql} fill alt='MySQL'/></motion.div>
                <motion.div variants={transition}><Image src={flutter} fill alt='Flutter'/></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faGitAlt} /></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faGithub} /></motion.div>
                <motion.div variants={transition}><FontAwesomeIcon icon={faFigma} /></motion.div>
                <motion.div variants={transition}><Image src={firebase} fill alt='Firebase'/></motion.div>
            </motion.div>
        </motion.div>
    )
}