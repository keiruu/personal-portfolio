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
            <motion.div className='absolute bottom-[28rem] left-[-10rem] lg:bottom-[-10rem] lg:left-[-20rem]' variants={circles}>
                <span className='h-[70vh] w-[150vw] lg:h-[170vh] lg:w-[80vw] rounded-full bg-lightpink inline-block p-2'></span>
            </motion.div>
            <motion.div className='absolute right-[-8rem] bottom-[10rem] lg:bottom-[1rem] lg:right-[-20rem]' variants={circles}>
                <span className='h-[60vh] w-[125vw] lg:h-[130vh] lg:w-[70vw] rounded-full bg-lightyellow inline-block p-2'></span>
            </motion.div>
            <motion.div className='absolute right-[8rem] bottom-[8rem] lg:bottom-[-30rem] lg:right-[20rem]' variants={circles}>
                <span className='h-[50vh] w-[110vw] lg:h-[120vh] lg:w-[50vw] rounded-full bg-lightred inline-block p-2'></span>
            </motion.div>
            <motion.div className='absolute bottom-[-5rem] lg:bottom-[-25rem] lg:right-[-5rem]' variants={circles}>
                <span className='h-[60vh] w-[125vw] lg:h-[80vh] lg:w-[40vw] rounded-full bg-lightgreen inline-block p-2'></span>
            </motion.div>
        </motion.div>
    )
}
