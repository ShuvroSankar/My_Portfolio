"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"

import {BsArrowUpRight, BsGithub} from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"

import Link from "next/link"
import Image from "next/image"

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
      image: "assets/work/Analog Signals Measurement with the NUCLEO Board.png",
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
      image: "assets/work/Analog Signals Measurement with the NUCLEO Board.png",
      live:"",
      github:"",

  },
  {
      num: "03",
      title: ` Motion Detection and DC Motor Control using Relays and  Interrupts`,
      description:  ` In this project, a PIR sensor, a motor, four buttons, and two LEDs are connected to the smart home 
                   system in order to implement the behavior. The PIR sensor is used to detect 
                   intruders. In that event, the alarm is activated. The motor is used to move a gate, which is activated by 
                   means of two buttons on the Gate control panel labeled “Open” and “Close”. 
                   The LEDs (green and red) are used to indicate if the gate is opening or closing.` ,
      image: "assets/work/Analog Signals Measurement with the NUCLEO Board.png",
      live:"",
      github:"",


  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])
  return <motion.section 
  initial={{opacity:0}} 
  animate={{opacity:1}} 
  className = "min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 ">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
      <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
        <div className="">
          {/* outline none */}
          <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
            </div>
            {/* Project Catagory */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.catagory} project</h2>
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
          
        </div>
      </div>
      <div className="w-full">slider</div>
      </div>
    </div>
  </motion.section>
}

export default Work

