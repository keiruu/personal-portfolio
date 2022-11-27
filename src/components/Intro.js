import React from 'react'
import { motion } from 'framer-motion'

export default function Intro({setLoading}) {
    const circle = { 
        hidden: { 
            scale: 0,
            opacity: 0,
            transition: {
                when: "afterChildren",
                ease: "linear",
                type: "spring", 
                bounce: 0.25,
                stiffness: 50
            },
        }, 
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
                ease: "linear",
                type: "spring", 
                bounce: 0.25,
                stiffness: 50
            },
        },
        out: {
            scale: 0,
            opacity: 0,
            transition: {
                when: "afterChildren",
                staggerChildren: 0.3,
                ease: "linear",
                type: "spring", 
                bounce: 0.25,
                stiffness: 50
            },
        }
    }
    const circles = { hidden: { scale: 0, opacity: 0 }, show: {scale: 1, opacity: 1}, out: {scale: 0, opacity: 0} }

    return (
        <motion.div onAnimationComplete={() => setLoading(false)} className='z-20 overflow-hidden absolute w-full h-[100vh]' initial="hidden" animate="show" exit="out" variants={circle}>
            <motion.div className='absolute bottom-[20rem] left-[-20rem] lg:bottom-[-5rem] md:left-[-20rem]' variants={circles}>
                <span className='h-[1200px] w-[1200px] rounded-full bg-lightpink inline-block p-2'></span>
            </motion.div>
            <motion.div className='absolute right-[-18rem] bottom-[10rem] md:bottom-[1rem] md:right-[-8rem]' variants={circles}>
                <span className='h-[620px] w-[620px] md:h-[900px] md:w-[900px] rounded-full bg-lightyellow inline-block p-2'></span>
            </motion.div>
            <motion.div className='absolute right-[8rem] bottom-[0] md:bottom-[-20rem] md:left-[14rem]' variants={circles}>
                <span className='h-[600px] w-[600px] md:h-[700px] md:w-[700px] rounded-full bg-lightred inline-block p-2'></span>
            </motion.div>
            <motion.div className='absolute bottom-[-15rem] right-[-13rem] md:right-[-1rem] md:bottom-[-25rem] md:right-[-5rem]' variants={circles}>
                <span className='h-[600px] w-[600px] md:h-[700px] md:w-[700px] rounded-full bg-lightgreen inline-block p-2'></span>
            </motion.div>
        </motion.div>
    )
}
