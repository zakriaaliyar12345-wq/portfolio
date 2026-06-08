import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'
const Experience = () => {
  return (
    <motion.div
    id='experience'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
    viewport={{ once: false,amount:0.2 }}
    >
      <div className='container mx-0 px-6'>
        {/*Heading */}
        <h2 className='text-3xl font-bold text-center mb-4'>Work
          <span className='text-purple'> Experience</span>
        </h2>
          <p className='text-center text-gray-400 max-w-2xl mx-auto mb-16'> My professional journey so far</p>
          <div className='max-w-3xl mx-auto'>
              <div className='space-y-12'>
                {
                  workData.map((work,index)=>(
                    <div key={index} className=" relative pl-12
                    before:content-[''] before:absolute before:left-0 before:top-0 before:bg-purple before:rounded-full 
                    before:w-[2px] before:h-full cursor-pointer 
                    hover:translate-y-2 transition-all duration-300 
                    ">
                      {/*Time Line*/}
                      <div className='absolute left-[-0.5rem] top-0
                      w-6 h-6 rounded-full bg-purple
                      '>

                      </div>
                      {/*Box*/}
                      <div className='bg-dark-300 rounded-2xl p-6'>
                        <div className='flex justify-between items-start mb-2'>
                        <h3 className='text-xl font-semibold '>{work.role}</h3>
                        <span className='px-3 py-1 bg-purple/20 text-purple rounded-full text-xs md:text-sm '>{work.duration}</span>
                        </div>
                        <p className='text-gray-400 mb-2'>{work.company}</p>
                        <p className='text-gray-300 mb-2'>{work.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
          </div>
      </div>

    </motion.div>
  )
}

export default Experience