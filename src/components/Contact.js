import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { motion } from "framer-motion"
import Image from 'next/image';
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import email from '../assets/email.svg'
import twitter from '../assets/twitter.svg'

export default function Contact() {
  return (
    <div className='flex w-full justify-center items-center my-40'>
        <div className='flex flex-col lg:flex-row items-center gap-20'>
            <div className='flex gap-4 block lg:hidden'>
                <div className='flex gap-8'>
                    <a href='https://www.linkedin.com/in/abbyunat/' rel='noreferrer' target='_blank'>
                        <span className='h-20 w-20 rounded-full bg-lightpeach inline-block p-2 text-darkpeach flex items-center justify-center text-3xl'>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                <Image src={linkedin} alt='linkedin' width={70} height={70}/>
                            </motion.div>
                        </span>
                    </a>
                    <span className='h-20 w-20 rounded-full bg-lightgray inline-block p-2 text-darkpeach flex items-center justify-center text-3xl'></span>
                    <a href='https://github.com/keiruu' rel='noreferrer' target='_blank'>
                        <span className='h-20 w-20 rounded-full bg-lightred inline-block p-2 text-darkred flex items-center justify-center text-3xl'>
                            <FontAwesomeIcon icon={faGithub} />
                            <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                <Image src={github} alt='github' width={70} height={70}/>
                            </motion.div>
                        </span>
                    </a>
                </div>
            </div>

            <div className='pr-0 lg:pr-36 flex flex-col gap-4'>
                <h1 className='text-2xl lg:text-4xl font-bold'>Contact Me</h1>
                <a href="mailto:abigailkaye.unating@gmail.com" className='hover:text-darkgreen'>
                    <h2 className='text-xl lg:text-3xl underline cursor-pointer'>abigailkaye.unating@gmail.com</h2>
                </a>
            </div>

            <div className='flex gap-4 block lg:hidden'>
                <div className='flex gap-8'>
                    <a href='https://twitter.com/akusikei' rel='noreferrer' target='_blank'>
                        <span className='h-20 w-20 rounded-full bg-lightgreen inline-block p-2 text-darkgreen flex items-center justify-center text-3xl'>
                            <FontAwesomeIcon icon={faTwitter} />
                            <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                <Image src={twitter} alt='twitter' width={70} height={70}/>
                            </motion.div>
                        </span>
                    </a>
                    <span className='h-20 w-20 rounded-full bg-lightpink inline-block p-2 text-darkpeach flex items-center justify-center text-3xl'></span>
                    <a href='mailto:abigailkaye.unating@gmail.com' rel='noreferrer' target='_blank'>
                        <span className='h-20 w-20 rounded-full bg-lightyellow inline-block p-2 text-darkyellow flex items-center justify-center text-3xl'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                <Image src={email} alt='email' width={70} height={70}/>
                            </motion.div>
                        </span>
                    </a>
                </div>
            </div>
            <div className='flex gap-4 hidden lg:flex'>
                <div className='flex flex-col gap-2 mt-10'>
                    <span className='h-24 w-24 rounded-full bg-lightpeach inline-block p-2 text-darkpeach flex items-center justify-center text-3xl'>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                            <Image src={linkedin} alt='linkedin' width={80} height={80}/>
                        </motion.div>
                    </span>
                    <span className='h-24 w-24 rounded-full bg-lightgray inline-block p-2 text-darkpeach flex items-center justify-center text-3xl'></span>
                    <span className='h-24 w-24 rounded-full bg-lightred inline-block p-2 text-darkred flex items-center justify-center text-3xl'>
                        <FontAwesomeIcon icon={faGithub} />
                        <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                            <Image src={github} alt='github' width={80} height={80}/>
                        </motion.div>
                    </span>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='h-24 w-24 rounded-full bg-lightgreen inline-block p-2 text-darkgreen flex items-center justify-center text-3xl'>
                        <FontAwesomeIcon icon={faTwitter} />
                        <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                            <Image src={twitter} alt='twitter' width={80} height={80}/>
                        </motion.div>
                    </span>
                    <span className='h-24 w-24 rounded-full bg-lightpink inline-block p-2 text-darkpeach flex items-center justify-center text-3xl'></span>
                    <span className='h-24 w-24 rounded-full bg-lightyellow inline-block p-2 text-darkyellow flex items-center justify-center text-3xl'>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <motion.div className='absolute' animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                            <Image src={email} alt='email' width={80} height={80}/>
                        </motion.div>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
