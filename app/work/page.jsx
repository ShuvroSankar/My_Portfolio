"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"

import {BsArrowUpRight, BsGithub} from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

export const projects = [
  {
      num: "01",
      catagory: "Embedded System",
      title: `Analog Signals Measurement with the NUCLEO Board`,
      description:  `This project introduces a way to indicate to the user whether an alarm is caused by gas detection,
                  over temperature detection, or simultaneous gas and over temperature detection. This is based
                  on controlling the blinking rate of the Alarm LED. It will be explained how to utilize time with the
                  NUCLEO board, and the usage of delays is introduced.`,
      stack: [{name:"stm32 Nucleo Board"},{name:"Temperature Sensor"}, {name:"Gas Sensor"}, {name:"LED Light"},],
      image: "/assets/work/Analog Signals Measurement with the NUCLEO Board.png",
      live:"",
      github:"",

  },
  {
      
      num: "02",
      catagory: "Embedded System",
      title: `Matrix Keypad Reading with the NUCLEO Board`,
      description: `In this project, an LCD display is connected to the smart home system. In this 
                 way, it is possible to show in the Alarm control panel information regarding temperature reading, as 
                 well as the state of the gas detector and the activation of the alarm.`,
      image: "/assets/work/Matrix Keypad Reading with the NUCLEO Board.png",
      stack: [{name:"stm32 Nucleo Board"},{name:"Temperature Sensor"}, {name:"Gas Sensor"}, {name:"LED Light"},],
      live:"",
      github:"",

  },
  {
      num: "03",
      catagory: "Embedded System",
      title: ` Motion Detection and DC Motor Control using Relays and  Interrupts`,
      description:  ` In this project, a PIR sensor, a motor, four buttons, and two LEDs are connected to the smart home 
                   system in order to implement the behavior. The PIR sensor is used to detect 
                   intruders. In that event, the alarm is activated. The motor is used to move a gate, which is activated by 
                   means of two buttons on the Gate control panel labeled “Open” and “Close”. 
                   The LEDs (green and red) are used to indicate if the gate is opening or closing.` ,
      image: "/assets/work/Motion Detection and DC Motor Control using Relays and  Interrupts.png",
      stack: [{name:"stm32 Nucleo Board"},{name:"Temperature Sensor"}, {name:"Gas Sensor"}, {name:"LED Light"},],
      live:"",
      github:"",


  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper)=>{
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update project index based on current slide index
    setProject(projects[currentIndex])


  }

  return <motion.section 
  initial={{opacity:0}} 
  animate={{
    opacity:1,
    transition: {delay:2.4, duration:0.4, ease:"easeIn"}

  }} 
  className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 ">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="flex flex-col gap-[2px] h-[50%]">
          {/* outline num */}
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
            </div>
            {/* Project Catagory */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize my-8">{project.catagory} project</h2>
            {/* Project title */}
            <h3 className="text-[22px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title} project</h3>
            {/* project description */}
            <p className="text-white/60"> {project.description} </p>

            {/* stack */}
            <ul className="flex gap-4">
              {project.stack.map((item,index)=>{
                return <li key={index} className="text-xl text-accent">
                  {item.name}
                  {/* remove the last coma */}
                  {index !== project.stack.length -1 && ","}
                  </li>
              })}
            </ul>
          {/* border */}
          <div className="border border-white/20 my-2"></div>
          {/* buttons */}
          <div className="flex items-center gap-4">
            {/* Live project button */}
            <Link  href={project.live}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/20 flex justify-center items-center group">
                  <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="bg-white rounded text-black px-2">Live project</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
            {/* github project button */}
            <Link  href={project.github}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-white/20 flex justify-center items-center group my-2">
                  <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="bg-white rounded text-black px-2">Github repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full xl:w-[50%] h-fit">
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="xl:h-[520px] mb-12"
        onSlideChange={handleSlideChange}
        >
          {projects.map((project,index)=>{
            return <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
              {/* overlay */}
              <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
              {/* Image */}
              <div className="relative w-full h-full  max-w-3xl mx-auto">
                <Image src={project.image} fill className="object-contain" alt={project.title}
    sizes="(max-width: 768px) 100vw, 50vw"/>
              </div>
              </div>
            </SwiperSlide>
          })}
          {/* Slider Button */}
          <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
        </Swiper>
      </div>
      </div>
    </div>
  </motion.section>
}

export default Work

