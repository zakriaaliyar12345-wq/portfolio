import React from 'react'
import { motion } from "motion/react"
import { FaDribbble, FaEnvelope, FaGithub, FaGithubAlt, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
const Contact = () => {
  return (
    <motion.div
      id='contact'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      className='py-20 bg-dark-200'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          Get in <span className='text-purple'> Touch</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'> Have a project in mind or want to collaborate ? Let's Talk.</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto '>
          {/* Contact Form*/}
          <div>
            <form className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-gray-300 mb-2'>
                  Your Name
                </label>
                <input
                  className='w-full bg-dark-300 border border-dark-400
                  rounded-lg px-4 py-3 outline-none '
                  type="text" />
              </div>
              <div>
                <label htmlFor="email" className='block text-gray-300 mb-2'>
                  Email Address
                </label>
                <input
                  className='w-full bg-dark-300 border border-dark-400
                  rounded-lg px-4 py-3 outline-none '
                  type="email" />
              </div>
              <div>
                <label htmlFor="message" className='block text-gray-300 mb-2'>
                  Your Message
                </label>
                <textarea
                  className='w-full h-40 bg-dark-300 border border-dark-400
                  rounded-lg px-4 py-3 outline-none '
                  type="text" />
              </div>
              <button type='submit' className='w-full px-6 py-3 rounded-lg bg-purple font-medium hover:bg-purple-700 transition duration-300'>
                Send
              </button>

            </form>
          </div>
          {/*Contact Information */}
          <div className='space-y-8 '>
            <div className='flex items-start '>
              <div className='text-purple text-2xl mr-4'>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                <p className='text-gray-400 '>Kabul, District 13 </p>
              </div>
            </div>
            <div className='flex items-start '>
              <div className='text-purple text-2xl mr-4'>
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                <p className='text-gray-400 '>zakriashirzad987@gmail.com </p>
              </div>
            </div>

            <div className='flex items-start '>
              <div className='text-purple text-2xl mr-4'>
                <FaPhone/>
              </div>
              <div>
                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                <p className='text-gray-400 '>0782923485</p>
              </div>
            </div>
            <div className='pt-4'>
                <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                <div className='flex space-x-4'>
                  <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-500'><FaGithub/></a>

                <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-orange-400 hover:text-white transition duration-500'><FaLinkedin /></a>

                <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-500'><FaTwitter /></a>

                <a href="#" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-500'><FaDribbble /></a>


                </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  )
}

export default Contact