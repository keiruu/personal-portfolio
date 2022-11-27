import Image from 'next/image'
import React, {useEffect} from 'react'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import me from '../assets/me.svg'
import { forwardRef } from "react";


// eslint-disable-next-line react/display-name
const About = forwardRef((props, ref) => {
    return (
        <div className='flex justify-center w-full py-40 px-4 lg:p-0 ' ref={ref}>
        <div className='flex flex-col gap-8'>
            <h1 className='text-2xl lg:text-4xl font-bold'>About Me</h1>
            <div className='flex gap-10 flex-col lg:flex-row'>
                <div className=''>
                    <Image src={me} alt="A picture of Abigail Kaye Unating"/>
                </div>
                <div className='flex flex-col gap-4 py-2'>
                    <h2 className='text-xl lg:text-3xl font-medium'>Abigail Kaye R. Unating</h2>
                    <p className='text-sm lg:text-md flex flex-wrap max-w-[600px]'> I&#39;m currently a senior at West Visayas State University pursuing a Bachelor&#39;s Degree in Information Technology major in Software Technologies.
                        <br/><br/>I enjoy creating things and curiosity dragged me to learn about creating websites. I am a curious individual willing to learn anything that piques my interest. At the moment I am interested in Full Stack Web Development however I also enjoy designing user interfaces, simple graphic designing, drawing, and mobile app development among other things.
                        <br/><br/>I&#39;ve also been playing games a lot recently (Valorant & Overwatch 2, and no I am not good) so hit me up if you want to play.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
  })
  
  
export default About;