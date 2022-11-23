import Image from 'next/image'
import React from 'react'
import me from '../assets/me.svg'

export default function About() {
  return (
      <div className='flex justify-center w-full my-40'>
        <div className='flex flex-col gap-8'>
            <h1 className='text-4xl font-bold'>About Me</h1>
            <div className='flex gap-10'>
                <div className=''>
                    <Image src={me} alt="A picture of Abigail Kaye Unating"/>
                </div>
                <div className='flex flex-col gap-4 py-2'>
                    <h2 className='text-3xl font-medium'>Abigail Kaye R. Unating</h2>
                    <p className='flex flex-wrap max-w-[600px]'> I&#39;m currently a senior at West Visayas State University pursuing a Bachelor&#39;s Degree in Information Technology major in Software Technologies.
                        <br/><br/>I enjoy creating things and curiosity dragged me to learn about creating websites. I am a curious individual willing to learn anything that piques my interest. At the moment I am interested in Full Stack Web Development however I also enjoy designing user interfaces, simple graphic designing, drawing, and mobile app development among other things.
                        <br/><br/>I&#39;ve also been playing games a lot recently (Valorant & Overwatch 2, and no I am not good) so hit me up if you want to play.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
