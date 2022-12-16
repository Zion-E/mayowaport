import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = ({}: Props) => {
  return (
    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      scale: [1,2,2,3,1],
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius: ["20%", "20%", "50%", "40%", "20%"],
    }}
    transition={{
      duration: 2.5,
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] mt-32 animate-ping" />
        <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-32 animate-ping" />
        <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-32 animate-ping" />
        <div className="rounded-full border border-[#F7ABBA] opacity-20 
        h-[300px] w-[300px] absolute mt-32 animate-pulse " />
        <div className="rounded-full border border-[#333333] h-[400px] w-[400px]
        absolute mt-32 " />
    </motion.div> 
  )
}

export default BackgroundCircles;