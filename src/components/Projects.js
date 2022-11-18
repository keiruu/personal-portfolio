import React from 'react'
import Image from 'next/image'
import takape from '../assets/takape.svg'
import cybergence from '../assets/cybergence.svg'
import easi from '../assets/easi.svg'

function Project(props) {

    let tags = props.tags.split(" ")

    return (
        <div className='flex gap-6 rounded-3xl border-2 border-lightgray px-8 py-12 justify-center max-w-[1000px]'>
            <div className='min-w-[350px]'><Image src={props.img} width="" height=""/></div>
            <div className='flex flex-col gap-6'>
                <p className='text-4xl font-medium text-primary pt-4'>{props.title}</p>
                <p className='text-xl text-primary'>{props.desc}</p>
                <div className='flex gap-4 object-contain'>
                    { tags.map((item, key) =>
                        <p key={key} className="text-darkgreen border-[1px] border-darkgreen px-4 py-1 rounded-lg">{item}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
  return (
    <div className="flex flex-col w-full items-center gap-12 mb-20">
        <h1>Projects I&apos;ve worked on</h1>
        <Project img={takape} title="Takape" desc="a simple local cafe finder within the Panay Island." tags="express.js react tailwind.css node.js mongodb firebase"/>
        <Project img={cybergence} title="Cybergence 2021" desc="an event landing site for our school’s acquiantance party in collaboration with other student devs." tags="next.js react tailwind.css"/>
        <Project img={easi} title="Easi" desc="a website that allows you to simplify text (web integration for my thesis application)" tags="express.js react tailwind.css node.js firebase"/>
    </div>
  )
}
