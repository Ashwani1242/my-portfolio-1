import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {

    const marqueeElements = [
        'Ashwani Gupta',
        '2024',
        'Lucknow, India',
        '2024',
        'ashwanigupta1242@gmail.com',
    ]

    const time = 30

    return (
        <div className='container mx-auto overflow-x-hidden overflow-y-hidden'>
            <div className="flex my-gradient font-italiana text-md text-nowrap floralwhite">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        duration: time,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="marquee flex flex-shrink-0">
                    {marqueeElements.map((String, index) => {
                        return <div className='md:pr-56 pr-20' key={index}> {String} </div>
                    })}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: '-100%' }}
                    transition={{
                        duration: time,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="marquee flex flex-shrink-0">
                    {marqueeElements.map((String, index) => {
                        return <div className='md:pr-56 pr-20' key={index}> {String} </div>
                    })}
                </motion.div>
            </div>
        </div>
    )
}

export default Marquee
