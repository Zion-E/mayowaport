import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
    const projects = [1];
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

            //         src="https://i.ibb.co/ncVy1c5/Shawarma.jpg" alt="shawarma"
            //         className="md:mb-0 flex-shrink-0 w-6 h-5 rounded-full z-0 items-center justify-center
            // object-cover md:rounded-lg md:w-10 md:h-12 xl:w-[80px] xl:h-[80px]"
                    />

                    <div className="space-y-10 px-0 md:px-10 max-w-4xl">
                        <h4 className=" text-4xl font-semibold text-center">
                           <span className="underline decoration-[#F7ABBA]/50">
                            List of projects that have been worked on.
                            </span>{" "}
                           
                        </h4>
                       
                        <h4 className=" text-2xl font-semibold text-center">
                            Meals App - {" "}
                            <Link href='https://mayowa-meals-app--idowuakinsanmi.repl.co/'>
                                https://mayowa-meals-app--idowuakinsanmi.repl.co/
                            </Link>
                        </h4>
                        <h4 className=" text-2xl font-semibold text-center">
                        <p>
                            Trading App - {" "}
                        </p>
                            <Link href='https://trading-app.idowuakinsanmi.repl.co/'>
                            https://trading-app.idowuakinsanmi.repl.co/
                            </Link>
                        </h4>
                        <h4 className=" text-2xl font-semibold text-center">
                        <p>
                            Protest webpage - {" "}
                        </p>
                            <Link href='https://incredible-toffee-c31647.netlify.app/'>
                            https://incredible-toffee-c31647.netlify.app/
                            </Link>
                        </h4>
                        <h4 className=" text-2xl font-semibold text-center">
                        <p>
                            Team Allocation App - {" "}
                        </p>
                            <Link href='https://teammemberallocation.idowuakinsanmi.repl.co/'>
                            https://teammemberallocation.idowuakinsanmi.repl.co/
                            </Link>
                        </h4>
                        
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