import React from 'react';
import About from "./components/about";
import Intro from "./components/intro";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Cursor from './components/utils/cursor';

import { color, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import ResponsiveNavbar from './components/utils/responsive_navbar';

function App() {

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 100, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);


  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    let posY

    const moveCursor = (e) => {
      cursorX.set(window.scrollX + (e.clientX - 50));
      cursorY.set(window.scrollY + (e.clientY - 50));
      posY = e.clientY - 50;
    };

    const moveCursorOnScroll = () => {
      cursorY.set(posY + window.scrollY);
    }

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", moveCursorOnScroll);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", moveCursorOnScroll);
    };
  }, [cursorX, cursorY]);

  const mouseVariants = {
    default: {
      mixBlendMode: "exclusion",
      color: "black",
      backgroundImage: "url('')",
    },
    cursorEnter_Main: {
      scale: 3,
      backgroundColor: "White",
      mixBlendMode: "exclusion",
      color: "white"
    },
    cursorEnter_Headings: {
      scale: 1.7,
      backgroundColor: "White",
      mixBlendMode: "exclusion"
    },
    cursorEnter_About: {
      mixBlendMode: "exclusion",
    },
    cursorEnter_Projects: {
      scale: 1,
      backgroundColor: "floralwhite",
      color: "black",
      border: "2px solid black",
      borderRadius: "100%",
      mixBlendMode: "normal"
    },
    cursorEnter_Contacts: {
      scale: 1,
      backgroundColor: "black",
      color: "floralwhite",
      border: "2px solid floralwhite",
      borderRadius: "100%",
      mixBlendMode: "normal"
    },
    cursorHidden: {
      scale: 0,
      backgroundColor: "black",
      mixBlendMode: "normal"
    }
  }

  const getTextForVariant = (variant) => {
    switch (variant) {
      case 'cursorEnter_Main':
        return '';
      case 'cursorEnter_Headings':
          return '';
      case 'cursorEnter_About':
            return '';
      case 'cursorEnter_Projects':
        return 'Scroll!';
      case 'cursorEnter_Contacts':
        return 'Hello?';
      case 'cursorHidden':
        return 'Hidden';
      default:
        return 'Welcome!';
    }
  };

  const [cursorVariant, setCursorVariant] = useState("default")
  const cursorEnter_Main = () => setCursorVariant("cursorEnter_Main")
  const cursorEnter_About = () => setCursorVariant("cursorEnter_About")
  const cursorEnter_Headings = () => setCursorVariant("cursorEnter_Headings")
  const cursorEnter_Projects = () => setCursorVariant("cursorEnter_Projects")
  const cursorEnter_Contacts = () => setCursorVariant("cursorEnter_Contacts")
  const cursorDefault = () => setCursorVariant("default")
  const cursorHidden = () => setCursorVariant("cursorHidden")

  const staggerVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeLeftVariant = {
    initial: {
      opacity: 0,

      x: 60,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  }

  const fadeRightVariant = {
    pageStart: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -60
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  }

  const fadeUpVariant = {
    pageStart: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    }
  }

  const fadeDownVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4
      }
    }
  }


  return (
    <div className="">
      {/* <div className='text-black -z-50 absolute top-2 left-2'> Why would you zoom out?? 😢</div> */}
      {/* <Cursor /> */}

      <ResponsiveNavbar 
        cursorHidden={cursorHidden}
        cursorDefault={cursorDefault}
        fadeLeftVariant={fadeLeftVariant}
      />

      <Intro
        cursorHidden={cursorHidden}
        cursorEnter_Headings={cursorEnter_Headings}
        cursorEnter_Main={cursorEnter_Main}
        cursorDefault={cursorDefault}
        fadeUpVariant={fadeUpVariant}
        fadeRightVariant={fadeRightVariant}
      />

      <About
        cursorHidden={cursorHidden}
        cursorEnter_About={cursorEnter_About}
        cursorDefault={cursorDefault}
        staggerVariant={staggerVariant}
        fadeUpVariant={fadeUpVariant}
        fadeDownVariant={fadeDownVariant}
        fadeLeftVariant={fadeLeftVariant}
        fadeRightVariant={fadeRightVariant}
      />

      <Projects
        cursorEnter_Projects={cursorEnter_Projects}
        cursorHidden={cursorHidden}
        cursorDefault={cursorDefault}
        fadeUpVariant={fadeUpVariant}
        fadeLeftVariant={fadeLeftVariant}
      />

      <Contact
        cursorEnter_Contacts={cursorEnter_Contacts}
        cursorHidden={cursorHidden}
        cursorDefault={cursorDefault}
        staggerVariant={staggerVariant}
        fadeUpVariant={fadeUpVariant}
        fadeLeftVariant={fadeLeftVariant}
      />


      <motion.div
        className="mask flex justify-center items-center"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        variants={mouseVariants}
        animate={cursorVariant} >
        <p className='text-lg font-bold'> {getTextForVariant(cursorVariant)} </p>
      </motion.div>
    </div>
  );
}

export default App;
