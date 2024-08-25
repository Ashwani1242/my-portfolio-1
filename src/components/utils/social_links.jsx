import React from 'react'
import { motion } from 'framer-motion'

const SocialLinks = (props) => {
    return (
        <div>
            <motion.div
                className='flex text-lg py-4'>
                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    variants={props.staggerVariant}
                    className='flex flex-wrap justify-center gap-3 w-full font-semibold'>
                    {links.map((link, index) => {
                        return (
                            <motion.a
                            variants={props.staggerVariant}
                                href={link.url}
                                target='_blank'
                                key={index}
                                className='bg-white/50 border border-white cursor-pointer group relative py-2 px-6 text-nowrap'>
                                <div className='relative w-8 h-8 rounded-md bg-whit inset-0 flex items-center justify-center z-20'>
                                    <img src={link.icon} alt='Icon' className='w-6 h-6' />
                                    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-md group-hover:-translate-y-12 duration-700">
                                        {link.title}
                                    </span>
                                </div>
                                <div className='absolute inset-0 bg-white w-0 group-hover:w-full z-10 duration-500'></div>
                            </motion.a>
                        );
                    })}
                </motion.ul>
            </motion.div>
        </div>
    )
}

export default SocialLinks

const links = [
    {
        url: "https://github.com/Ashwani1242",
        title: "Github",
        icon: "/images/social_icons/github.svg",
    },
    {
        url: "https://leetcode.com/u/ashwanigupta1242/",
        title: "Leetcode",
        icon: "/images/social_icons/leetcode.svg",
    },
    {
        url: "www.linkedin.com/in/ashwani-gupta-802a001b8",
        title: "Linkedin",
        icon: "/images/social_icons/linkedin.svg",
    },
    {
        url: "https://x.com/devBellowStairs",
        title: "X (Twitter)",
        icon: "/images/social_icons/twitter.svg",
    },
    {
        url: "https://www.reddit.com/user/TheDevBellowStairs/",
        title: "Reddit",
        icon: "/images/social_icons/reddit.svg",
    },
    {
        url: "https://www.instagram.com/ashwani_gupta_89/",
        title: "Instagram",
        icon: "/images/social_icons/instagram.svg",
    },
    {
        url: "https://play.google.com/store/apps/dev?id=8102082075523997692&hl=en-IN",
        title: "Playstore",
        icon: "/images/social_icons/playstore.svg",
    },
];