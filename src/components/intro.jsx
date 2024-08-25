import React from 'react';
import IntroBG from "./utils/intro_bg";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import { ACCESS_KEY } from '../config';

const Intro = (props) => {
    return (
        <section
            id='intro-section'
            className='flex flex-col justify-center items-center h-screen max-h-[1080px] cursor-default'>
            <IntroBG />
            <motion.div
                variants={props.fadeUpVariant}
                initial="pageStart"
                animate="animate"
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: 0.1,
                }}
                onMouseEnter={props.cursorEnter_Main}
                onMouseLeave={props.cursorDefault}
                className='flex flex-col justify-center items-center absolute'>
                <div
                    className='flex justify-end bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600'>
                    <p
                        className='font-italiana lg:text-[200px] md:text-[150px] sm:text-[100px] text-[100px] leading-none'>
                        portfolio
                    </p>
                    <p
                        className='lg:text-[40px] md:text-[30px] sm:text-[20px] text-[14px] absolute text-black'>
                        2024
                    </p>
                </div>
                <p
                    className='lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] text-black font-carattere'>
                    {/* Software Developer */}
                </p>
            </motion.div>
            <motion.div
                variants={props.fadeRightVariant}
                initial="pageStart"
                animate="animate"
                transition={{
                    duration: .4,
                    ease: "easeOut",
                    delay: 0.3,
                }}
                className='flex justify-between items-end md:px-28 px-10 pb-8 leading-none md:text-3xl sm:text-2xl w-full h-full max-h-[1080px]'>
                <div
                    onMouseEnter={props.cursorEnter_Headings}
                    onMouseLeave={props.cursorDefault}
                    className='flex flex-col'>
                    <p
                        className=''>Ashwani Gupta
                    </p>
                    <p
                        className='underline decoration-neutral-500 underline-offset-4'>
                        ashwanigupta1242@gmail.com
                    </p>
                </div>
            </motion.div>
            <motion.div
                variants={props.fadeUpVariant}
                initial="pageStart"
                animate="animate"
                transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                }}
                onMouseEnter={props.cursorHidden}
                onMouseLeave={props.cursorDefault}
                whileHover={{
                    scale: 1.1
                }}>
                <Link to='about-section' smooth={true} duration={1000}
                    className='border-2 group border-black rounded-full w-[30px] h-[60px] flex justify-center items-end transition-all duration-300 mb-20 cursor-pointer'>
                    <div className='h-[24px] w-[24px] bg-black rounded-full animate-bounce group-hover:animate-ping' />
                </Link>
            </motion.div>
        </section>
    )
}

export default Intro