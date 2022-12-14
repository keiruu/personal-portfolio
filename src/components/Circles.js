import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import email from '../assets/email.svg'
import twitter from '../assets/twitter.svg'
import { motion } from "framer-motion"
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Circles = forwardRef((props, ref) => {
    return (
        <motion.div>
            {/* invisible ref */}
            <span className='absolute z-1 h-16 w-16 top-0' ref={ref}>
            </span>
            <a href='https://www.linkedin.com/in/abbyunat/' rel='noreferrer' target='_blank'>
                <motion.div className='' animate={{ y: [0, 15, 0]}} transition={{repeat:Infinity, ease: 'easeInOut', duration: 5, delay: 1}}>
                    <div className='absolute right-[5rem] lg:right-[28rem] z-1'>
                        <div className='group relative'>
                            <span className='absolute z-1 h-16 w-16 cursor-pointer rounded-full bg-lightpeach inline-block p-1 transform group-hover:scale-[1.6] transition-all'>
                                <motion.div animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                    <Image src={linkedin} alt='linkedin' width={70} height={70}/>
                                </motion.div>
                            </span>
                            <span className='absolute cursor-pointer z-10 h-16 w-16 cursor-pointer rounded-full bg-lightpeach inline-block p-2 text-darkpeach flex items-center justify-center text-2xl'>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </span>
                        </div>
                    </div>
                </motion.div>
            </a>

            <a href='mailto:abigailkaye.unating@gmail.com'>
                <motion.div className='' animate={{ y: [3, 18, 3]}} transition={{repeat:Infinity, ease: 'easeInOut', duration: 5}}>
                    <div className='absolute top-[6rem] left-[1rem] lg:left-[15rem] z-1'>
                        <div className='group relative'>
                            <span className='absolute z-1 h-16 w-16 cursor-pointer rounded-full bg-lightyellow inline-block p-1 transform group-hover:scale-[1.6] transition-all'>
                                <motion.div animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                    <Image src={email} alt='email' width={70} height={70}/>
                                </motion.div>
                            </span>
                            <span className='absolute cursor-pointer z-10 h-16 w-16 cursor-pointer rounded-full bg-lightyellow inline-block p-2 text-darkyellow flex items-center justify-center text-2xl'>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </span>
                        </div>
                    </div>
                </motion.div>
            </a>
            
            <a href='https://github.com/keiruu' rel='noreferrer' target='_blank'>
                <motion.div className='' animate={{ y: [5, 20, 5]}} transition={{repeat:Infinity, ease: 'easeInOut', duration: 5, delay:1.5}}>
                    <div className='absolute top-[28rem] left-[18rem] md:left-[10rem] lg:left-[25rem] z-1'>
                        <div className='group relative'>
                            <span className='absolute z-1 h-16 w-16 cursor-pointer rounded-full bg-lightred inline-block p-1 transform group-hover:scale-[1.6] transition-all'>
                                <motion.div animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                    <Image src={github} alt='github' width={70} height={70}/>
                                </motion.div>
                            </span>
                            <span className='absolute cursor-pointer z-10 h-16 w-16 cursor-pointer rounded-full bg-lightred inline-block p-2 text-darkred flex items-center justify-center text-2xl'>
                                <FontAwesomeIcon icon={faGithub} />
                            </span>
                        </div>
                    </div>
                </motion.div>
            </a>

            <a href='https://twitter.com/akusikei' rel='noreferrer' target='_blank'>
                <motion.div className='' animate={{ y: [5, 20, 5]}} transition={{repeat:Infinity, ease: 'easeInOut', duration: 5, delay:2}}>
                    <div className='absolute top-[32rem] md:right-[14rem] lg:top-[25rem] right-[21rem] lg:right-[19rem] z-1'>
                        <div className='group relative'>
                            <span className='absolute z-1 h-16 w-16 cursor-pointer rounded-full bg-lightgreen inline-block p-1 transform group-hover:scale-[1.6] transition-all'>
                                <motion.div animate={{rotate: [0, 360, 0]}} transition={{ repeat: Infinity, ease: "easeInOut", duration: 20}}>
                                    <Image src={twitter} alt='twitter' width={70} height={70}/>
                                </motion.div>
                            </span>
                            <span className='absolute cursor-pointer z-10 h-16 w-16 cursor-pointer rounded-full bg-lightgreen inline-block p-2 text-darkgreen flex items-center justify-center text-2xl'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                        </div>
                    </div>
                </motion.div>
            </a>
        </motion.div>
    )
  })
  
  
export default Circles;