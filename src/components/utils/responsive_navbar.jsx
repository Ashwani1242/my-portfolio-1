import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '../navbar';

const ResponsiveNavbar = (props) => {

    const [active, setActive] = useState(false);

    return (
        <motion.div
            variants={props.fadeLeftVariant}
            onMouseEnter={props.cursorHidden}
            onMouseLeave={props.cursorDefault}
            initial="initial"
            animate="animate"
            transition={{
                duration: .4,
                ease: "easeOut",
                delay: 0.6,
            }} >
            <div className='fixed flex flex-col items-end top-0 right-0 pr-2 pt-2 z-50 md:hidden'>
                <motion.button
                    onClick={() => setActive((pv) => !pv)}
                    animate={active ? "open" : "closed"}
                    className='h-12 w-12 relative transition-colors bg-black border-b-'>
                    <motion.span
                        style={{
                            left: "50%",
                            top: "35%",
                            x: "-50%",
                            y: "-50%"
                        }}
                        variants={{
                            open: {
                                rotate: "45deg",
                                top: "50%"
                            },
                            closed: {
                                rotate: "0deg"
                            }
                        }}
                        className='absolute h-[2px] w-6 bg-white' />
                    <motion.span
                        style={{
                            left: "50%",
                            top: "50%",
                            x: "-50%",
                            y: "-50%"
                        }}
                        variants={{
                            open: {
                                rotate: "-45deg",
                                top: "50%"
                            },
                            closed: {
                                rotate: "0deg"
                            }
                        }}
                        className='absolute h-[2px] w-6 bg-white' />
                    <motion.span
                        style={{
                            left: "calc(50% + 6px)",
                            top: "65%",
                            x: "-50%",
                            y: "-50%"
                        }}
                        variants={{
                            open: {
                                rotate: "45deg",
                                top: "50%",
                                left: "50%"
                            },
                            closed: {
                                rotate: "0deg"
                            }
                        }}
                        className='absolute h-[2px] w-3 bg-white' />
                </motion.button>

                <AnimatePresence>
                    {active && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="mt-2" >
                            <Navbar />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div className='fixed top-0 right-0 pr-2 pt-2 z-50 md:block hidden'>
                <Navbar />
            </div>
        </motion.div>
    )
}

export default ResponsiveNavbar
