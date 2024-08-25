import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
    const[largeCircle, setLargeCircle] = useState({x: 0, y: 0})
    const[smallCircle, setSmallCircle] = useState({x: 0, y: 0})

    useEffect(() => {

        
        const onMouseMove = (e) => {
            setLargeCircle({x: e.pageX, y: e.pageY})
            setSmallCircle({x: e.pageX, y: e.pageY})
        }
        window.addEventListener("mousemove", onMouseMove)

        return () => {
            window.removeEventListener("mousemove", onMouseMove)
        }
    }, []) 


  return (
    <div>
      <motion.div animate = {{x: largeCircle.x, y: largeCircle.y}} className="large-circle"></motion.div>
      <motion.div animate = {{x: smallCircle.x, y: smallCircle.y}} className="small-circle"></motion.div>
    </div>
  )
}

export default Cursor
