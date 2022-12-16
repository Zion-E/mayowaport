import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7abba]/80">
            {projects.map((project, i) => (
                <div className="w-screen flex-shrink-0 snap-center flex-col space-y-5 
                items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}

                    src="https://i.ibb.co/ncVy1c5/Shawarma.jpg" alt="shawarma"
                    className="md:mb-0 flex-shrink-0 w-12 h-12 rounded-full z-0 items-center justify-center
            object-cover md:rounded-lg md:w-24 md:h-28 xl:w-[200px] xl:h-[300px]"
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-4xl">
                        <h4 className=" text-4xl font-semibold text-center">
                           <span className="underline decoration-[#F7ABBA]/50">
                            Case Study {i + 1} of {projects.length}:
                            </span>{" "}
                            Meal's App
                        </h4>

                        <p className="text-lg text-center md:text-left ">
                            Meal's app presented various categories of good and tasty delicacies 
                            embedded with a surprise me button that fetches a random delicacy for the user 
                        </p>
                    </div>
                </div>
            ))}
            
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[300px] 
        -skew-y-12">
        </div>
    </motion.div>
  )
}

export default Projects