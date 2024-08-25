import { motion } from "framer-motion";
import ContactForm from "./utils/contact_form";
import Marquee from "./utils/marquee";
import SocialLinks from "./utils/social_links";

const Contact = (props) => {
    return (
        <section
            id="contact-section"
            onMouseEnter={props.cursorEnter_Contacts}
            onMouseLeave={props.cursorDefault}
            className="min-h-screen justify-around items-center flex flex-col bg-neutral-90 relative max-w-[1920px]">
            <svg className="w-full absolute h-full opacity-50 -z-50" xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' />
                </filter>
                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
            </svg>
            <img src="/images/test.jpg" alt="" className="-z-50 absolute w-full h-full object-cover opacity-80" />
            <div className="floralwhit w-screen md:px-20 px-10 py-8 max-w-[1920px]">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={props.fadeUpVariant}
                    className='font-carattere lg:text-[100px] md:text-[84px] text-[68px] leading-none pb-2'>
                    Contact
                </motion.h1>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={props.fadeLeftVariant}
                    className='lg:text-[50px] md:text-[40px] text-[30px] font-semibold'>
                    Let's get in touch...
                </motion.h1>
            </div>
            <motion.div
                variants={props.fadeUpVariant}
                initial="hidden"
                whileInView="visible">
                <ContactForm cursorHidden={props.cursorHidden} cursorEnter_Contacts={props.cursorEnter_Contacts} />
            </motion.div>

            <div
                onMouseEnter={props.cursorHidden}
                onMouseLeave={props.cursorEnter_Contacts}
                className="flex flex-col mt-auto w-full justify-center items-center bg-black/50 pt-4 pb-2 md:px-20 px-10">
                {/* <div className="flex justify-center items-center w-full mb-4">
                    <div className="h-[1px] w-full bg-neutral-200/80" />
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        variants={props.fadeUpVariant}
                        className='font-carattere floralwhite lg:text-[30px] md:text-[28px] text-[24px] px-4'>
                        Social
                    </motion.h1>
                    <div className="h-[1px] w-full bg-neutral-200/80" />
                </div> */}
                <SocialLinks fadeUpVariant={props.fadeUpVariant} staggerVariant={props.staggerVariant} />
                {/* <div className="flex justify-between items-center w-full pt-4 container">
                    <Marquee />
                </div> */}
            </div>
        </section>
    );
}

export default Contact;
