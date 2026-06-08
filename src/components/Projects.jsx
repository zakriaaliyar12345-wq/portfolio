import React from 'react'
import { motion } from "motion/react"
import { projects } from '../assets/assets'
import { img } from 'framer-motion/client'
import ProjectCards from './ProjectCards'
import { FaArrowRight } from 'react-icons/fa'
const Projects = () => {
  return (
    <motion.div
    id='projects'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: false,amount:0.2 }}
    className='py-20 bg-dark-200'
    >
      <div className='container mx-0 px-6'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-purple'>Projects</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my recent work</p>
        {/* project cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
      {projects.map((project, index) => (
        <ProjectCards key={index} {...project}/>
      ))}
        </div>
        <div className='text-center mt-12'>
        <a href="#" className='inline-flex items-center px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300 '>
          <span>View More Projects </span>
          <FaArrowRight className='ml-3'/>
        </a>
        </div>
      </div>
      

    </motion.div>
  )
}

export default Projects