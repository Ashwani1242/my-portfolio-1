import { motion } from 'framer-motion';
import React, { useState } from 'react';

const About = (props) => {

    const summary = `I’m Ashwani Gupta, a Software Developer with expertise in Front-End and Back-end web technologies with MERN, cross platform app development with Flutter and C# in context of Game Development with Unity. This is a portfolio to showcase my technical capabilities and design skills.`

    const [items] = useState([
        'Mongo DB',
        'Express JS',
        'React JS',
        'Node JS',
        'Tailwind CSS',
        'Framer Motion',
        'HTML',
        'CSS',
        'Javascript',
        'Flutter',
        'Dart',
        // 'Firebase',
        'Unity',
        'C Sharp',
        'Unreal Engine',
        // 'Flutter Flame',
        'Figma',
        'Blender',
        'Python',
        'C++',
        'Golang',
        // 'Git',
        // 'Github',
    ]);

    return (
        <section
            onMouseEnter={props.cursorEnter_About}
            onMouseLeave={props.cursorDefault}
            id='about-section'
            className='about-background floralwhite md:p-28 p-10 cursor-default'>
            <div>
                <div>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={props.fadeUpVariant}
                        className='font-carattere text-cente lg:text-[100px] md:text-[84px] sm:text-[68px] text-[52px] leading-none pb-10'>
                        Hello!
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        variants={props.fadeDownVariant}
                        className='font-italiana text-justify md:text-2xl sm:text-xl'>
                        {summary}
                        <br />
                        <br />
                        Welcome to my portfolio - hope you like it! ;)
                        <br />
                        <br />
                    </motion.p>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={props.fadeLeftVariant}
                        transition={{
                            duration: 0.3,
                            delay: 0.6
                        }}
                        className='text-right lg:text-[50px] md:text-[40px] sm:text-[30px] text-[20px] font-carattere'>
                        - Ashwani Gupta
                    </motion.h1>
                </div>
                <div>
                    <div
                        className='border-y border-neutral-500 py-16 sm:px-12 px-2'>
                        <motion.h1
                            initial="hidden"
                            whileInView="visible"
                            variants={props.fadeRightVariant}
                            className='font-carattere lg:text-[68px] text-[52px] leading-none text-wrap py-12'>
                            Skills ~
                        </motion.h1>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={props.staggerVariant}
                            className='flex flex-wrap justify-center gap-3'>
                            {items.map((item, index) => (
                                <motion.a
                                    href={`https://www.google.com/search?q=${item}`}
                                    target="_blank"
                                    key={index}
                                    onMouseEnter={props.cursorHidden}
                                    onMouseLeave={props.cursorEnter_About}
                                    variants={props.staggerVariant}
                                    className='border-white border px-4 py-2 cursor-pointer md:text-lg text-sm font-semibold items-center justify-center flex group relative'>
                                    <img src={`/images/skill_icons/${item}.svg`} alt="Icon" className="w-6 h-6 mr-3 z-20" />
                                    <p className='z-20 group-hover:text-black duration-500'>{item}</p>
                                    <div className='absolute inset-0 bg-floralwhite w-0 group-hover:w-full z-10 duration-500'></div>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>
                    <div className='border-bk border-neutral-500 lg:flex lg:flex-row pt-10 justify-between'>
                        <div className='py-12 sm:px-12 px-6'>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                variants={props.fadeRightVariant}
                                className='font-carattere lg:text-[68px] text-[52px] leading-none text-wrap pb-10'>
                                Education ~
                            </motion.h1>
                            <motion.ol
                                initial="hidden"
                                whileInView="visible"
                                variants={props.fadeRightVariant}
                                className='gap-4 list-disc text-[24px]'>
                                <motion.li
                                    variants={props.fadeRightVariant}>
                                    <p className='font-semibold text-lg'>B.Tech - Information Technology</p>
                                    <p className='font-semibold text-3xl'>SR Institute Of Management And Technology</p>
                                    <p className='text-lg'>2020 - Present</p>
                                </motion.li>
                                <motion.li
                                    variants={props.fadeRightVariant}>
                                    <p className='font-semibold text-lg'>Intermediate</p>
                                    <p className='font-semibold text-3xl'>Pioneer Montessori Inter College</p>
                                    <p className='text-lg'>2020</p>
                                </motion.li>
                                <motion.li
                                    variants={props.fadeRightVariant}>
                                    <p className='font-semibold text-lg'>High School</p>
                                    <p className='font-semibold text-3xl'>Pioneer Montessori Inter College</p>
                                    <p className='text-lg'>2018</p>
                                </motion.li>
                            </motion.ol>
                        </div>
                        <div className='w-full h-[1px] bg-neutral-500 lg:hidden block' />
                        <div className='py-12 sm:px-12 px-6'>
                            <motion.h1
                                initial="hidden"
                                whileInView="visible"
                                variants={props.fadeLeftVariant}
                                className='font-carattere lg:text-[68px] text-[52px] leading-none text-wrap pb-10'>
                                Certifications ~
                            </motion.h1>
                            <motion.ol
                                initial="hidden"
                                whileInView="visible"
                                variants={props.fadeLeftVariant}
                                className='list-disc text-[24px]'>
                                <motion.li
                                    variants={props.fadeLeftVariant}>
                                    <p className='font-semibold text-lg'>YBI Foundation</p>
                                    <p className='font-semibold text-3xl'>Python Programming with Data Structures and Algorithms</p>
                                    <p className='text-lg'>ID - 14364000007314356</p>
                                </motion.li>
                                <motion.li
                                    variants={props.fadeLeftVariant}>
                                    <p className='font-semibold text-lg'>Udemy</p>
                                    <p className='font-semibold text-3xl'>Unity Game Development</p>
                                    <p className='text-lg'>ID - UC-ef981dc0-84ef-4312-86bb-c0d60aa79342</p>
                                </motion.li>
                                <motion.li
                                    variants={props.fadeLeftVariant}>
                                    <p className='font-semibold text-lg'>GUVI Geek Networks, IITM Research Park</p>
                                    <p className='font-semibold text-3xl'>Python</p>
                                    <p className='text-lg'>ID - 46jM99L67R26r6D116</p>
                                </motion.li>
                                <motion.li
                                    variants={props.fadeLeftVariant}>
                                    <p className='font-semibold text-lg'>GUVI Geek Networks, IITM Research Park</p>
                                    <p className='font-semibold text-3xl'>Game Development Using PyGame</p>
                                    <p className='text-lg'>ID - e9169z1f8l6Ovn63j2</p>
                                </motion.li>
                            </motion.ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
