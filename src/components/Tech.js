import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Tech() {
    const transition = { 
        hidden: { y: 20, opacity: 0},
        appear: {
            y: 1, opacity: 1, 
            transition: {
                ease: "circOut",
                duration: 0.5,
            }
        }
    }
    
    const container = {
        hidden: {},
        appear: {
          transition: {
            staggerChildren: 0.3,
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
            <motion.div variants={container} ref={ref} initial="hidden" animate={animationControl} className="grid grid-cols-2 lg:grid-cols-3 text-md lg:text-2xl px-2 lg:p-0 gap-x-8 lg:gap-x-20 text-center">
                <motion.div variants={transition}>html</motion.div>
                <motion.div variants={transition}>css</motion.div>
                <motion.div variants={transition}>javascript</motion.div>
                <motion.div variants={transition}>react</motion.div>
                <motion.div variants={transition}>next.js</motion.div>
                <motion.div variants={transition}>tailwind.css</motion.div>
                <motion.div variants={transition}>angular.js</motion.div>
                <motion.div variants={transition}>typescript</motion.div>
                <motion.div variants={transition}>node.js</motion.div>
                <motion.div variants={transition}>python</motion.div>
                <motion.div variants={transition}>firebase</motion.div>
                <motion.div variants={transition}>heroku</motion.div>
                <motion.div variants={transition}>vercel</motion.div>
                <motion.div variants={transition}>flutter</motion.div>
                <motion.div variants={transition}>git & github</motion.div>
                <motion.div variants={transition}>figma</motion.div>
                <motion.div variants={transition}>adobe ai & ps</motion.div>
                <motion.div variants={transition}>mysql</motion.div>
            </motion.div>
        </motion.div>
    )
}