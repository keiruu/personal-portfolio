import React from 'react'
import Image from 'next/image'
import takape from '../assets/takape.svg'
import cybergence from '../assets/cybergence.svg'
import easi from '../assets/easi.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Project(props) {
    let tags = props.tags.split(" ")
    return (
        <a href={props.link} rel="noreferrer" target="_blank">
            <div className='group flex flex-col mx-4 lg:m-0 lg:flex-row gap-6 rounded-3xl border-2 border-lightgray transition-all cursor-pointer hover:border-darkgreen px-8 py-12 justify-center max-w-[1000px]'>
                <div className='min-w-[350px] group-hover:scale-[1.05] transform transition-all'><Image src={props.img} width="" height=""/></div>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between'>
                        <p className='text-3xl font-medium text-primary pt-4 group-hover:text-darkgreen transition-all'>{props.title}</p>
                        <button className='bg-lightgreen text-lg px-[1.13rem] text-darkgreen rounded-full transition-all group-hover:text-[#6D785B] group-hover:rotate-[-45deg]'><FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <p className='text-xl text-primary group-hover:text-darkgreen transition-all'>{props.desc}</p>
                    <div className='flex gap-4 flex-wrap'>
                        { tags.map((item, key) =>
                            <p key={key} className="text-gray border-[1px] transition-all border-gray group-hover:text-darkgreen group-hover:border-darkgreen px-4 py-1 rounded-lg">{item}</p>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-12 my-32">
        <div className="flex flex-col gap-12 mb-20">
            <div>
                <h1 className='font-bold text-primary text-3xl lg:text-4xl mx-10 lg:m-0'>Projects I&apos;ve worked on</h1>
            </div>
            <Project img={takape} title="Takape" link="https://takape-vhlum.mongodbstitch.com" desc="a simple local cafe finder within the Panay Island." tags="express.js react tailwind.css node.js mongodb firebase"/>
            <Project img={cybergence} title="Cybergence 2021" link="https://cybergence.vercel.app" desc="an event landing site for our school’s acquiantance party in collaboration with other student devs." tags="next.js react tailwind.css"/>
            <Project img={easi} title="Easi" link="#" desc="a website that allows you to simplify text (web integration for my thesis application)" tags="express.js react tailwind.css node.js firebase"/>
        </div>
    </div>
  )
}
