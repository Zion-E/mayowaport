import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img 
        initial={{
            x: -200,
            opacity:0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
            src="https://i.ibb.co/wCMZ9wW/HiiDee.jpg" alt='me'
            className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full z-0
            object-cover md:rounded-lg md:w-44 md:h-55 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a {" "}
                <span className="underline decoration-[#F7ABBA]/50">little</span>{" "}
                background
            </h4>
            <p className="text-base">
                I'm Idowu Mayowa, a continuous learner in the world of React and developing in general.
                As a graduate of computer engineering, I embarked on coding and developing as a full time passion
                after working with some organization and saw the need to make life easier for individuals and 
                organization.
                Thank God for the gift of men that helped and still helping me in the journey of realizing 
                this goal, passion and becoming better at it.
            </p>
        </div>
    </motion.div> 
  )
}

export default About