"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    num: '01',
    title: 'Embedded and IoT System',
    description: 'I design and implement embedded systems and IoT solutions for smart devices and connected ecosystems. From microcontroller programming to cloud integration, I create efficient, scalable systems that enable seamless communication between devices and platforms.',
    href: ''
  },
  {
    num: '02',
    title: 'Product Design',
    description: 'I blend engineering principles with user-centered design to create innovative, functional, and visually appealing products. My focus is on solving real-world problems through thoughtful design and usability.',
    href: ''
  },
  {
    num: '03',
    title: '3D Design and Animation',
    description: 'I use 3D design tools to bring ideas to life, creating precise models and animations for prototyping and visualization. This skill enhances my ability to prototype and test embedded systems effectively.',
    href: ''
  },
  {
    num: '04',
    title: 'Web Development',
    description: 'I build responsive web applications that complement embedded systems, enabling seamless user interaction with IoT devices. My work ensures data from embedded systems is accessible through intuitive web interfaces.',
    href: ''
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl " />
                </Link>
              </div>
              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-gray-300">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services