
import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from 'react';
import ProjectCard from "./utils/project_card";
import { cards } from "./utils/cards";

const Projects = (props) => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["54%", "-45%"]);

    return (
        <section
            id="projects-section"
            onMouseEnter={props.cursorEnter_Projects}
            onMouseLeave={props.cursorDefault}
            className=' flex p-1 justify-center bg-floralwhite items-center cursor-default'>
            <section ref={targetRef} className="relative h-[1000vh] sm:h-[600vh] bg-transparent">
                <div className="sticky top-0 h-screen bg-neutral-950 flex flex-col justify-around items-center grid-background">
                    {/* <img src="/images/background.jpg" alt="" className="-z-50 absolute object-cover w-full h-full overflow-auto group-hover:opacity-20 opacity-10 duration-500 group" /> */}
                    <svg className="w-full absolute opacity h-full opacity-20 -z-50" xmlns='http://www.w3.org/2000/svg'>
                        <filter id='noiseFilter'>
                            <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
                        </filter>

                        <rect width='100%' height='100%' filter='url(#noiseFilter)' />
                    </svg>

                    <div className="floralwhite w-screen md:px-20 px-8 py-4">
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={props.fadeUpVariant}
                            className='font-carattere lg:text-[100px] md:text-[84px] text-[68px] leading-none pb-2'>
                            Projects
                        </motion.h1>
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={props.fadeLeftVariant}
                            className='lg:text-[50px] md:text-[40px] text-[26px] font-semibold'>
                            Some things I've made so far...
                        </motion.h1>
                    </div>
                    <motion.div
                        onMouseEnter={props.cursorHidden}
                        onMouseLeave={props.cursorEnter_Projects}
                        style={{ x }}
                        className="flex gap-4 items-center" >
                        {cards.map((card) => {
                            return <ProjectCard card={card} key={card.id} />;
                        })}
                        <a href="https://github.com/Ashwani1242" target="_blank" className="bg-neutral-500/20 h-fit flex font-semibold text-white py-4 px-6 ring-1 ring-neutral-300 cursor-pointer transition-all duration-500 group relative">
                            <div className="flex flex-col z-20 group-hover:text-black  duration-500">
                                <span className="text-nowrap">More Projects</span>
                                <span className="text-nowrap">on Github</span>
                            </div>
                            <div className="flex justify-center items-center pl-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 z-20 group-hover:text-black  duration-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                            <div className='absolute inset-0 bg-floralwhite w-0 group-hover:w-full z-10 duration-500' />
                        </a>
                    </motion.div>
                </div>
            </section>

        </section>
    )
}

export default Projects