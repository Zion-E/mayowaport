import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard1({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
    w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }} 
            transition={{ duration: 1.2, }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
        object-center"
        src="https://i.ibb.co/wCMZ9wW/HiiDee.jpg" alt="boss"
        />

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Digital Marketer/Copywriter</h4>
            <p className="font-bold text-2xl mt-2">FairShop - Anter Technologies</p>
            <div className="flex space-x-2 my-2">
                <img 
                className="h-10 w-10 rounded-full"
                src="https://i.ibb.co/5LHqXM3/fairShop.jpg" 
                alt="fairshop" 
                />
                <img 
                className="h-10 w-10 rounded-full"
                src="https://i.ibb.co/5LHqXM3/fairShop.jpg" 
                alt="fairshop" 
                />
                <img 
                className="h-10 w-10 rounded-full"
                src="https://i.ibb.co/5LHqXM3/fairShop.jpg" 
                alt="fairshop" 
                />
            </div>
            <p className="py-5 text-gray-300">
                Started work 7th June, 2021. Ended 1st November, 2021.
            </p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Facebook Marketing</li>
                <li>Instagram Marketing </li>
                <li>Copywriting</li>
                <li>Ad Sponsorship</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard1