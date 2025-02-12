
"use client"
import { Description } from "@radix-ui/react-dialog"
import {FaHtml5, FaCss3,FaJs, FaReact,FaFigma,FaNodeJs } from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs } from "react-icons/si"
import { Icon } from "@iconify/react" 

// about data
const about = {
  title: "About Me",
  Description: 'I’m a passionate Embedded Systems Engineer with a knack for solving complex problems through innovative hardware and software solutions. With a strong foundation in electronics and programming, I specialize in designing and developing efficient, scalable, and reliable embedded systems. My work bridges the gap between hardware and software, creating seamless user experiences and cutting-edge IoT solutions.',
  info:[
    {
      fieldName: 'Name',
      fieldValue: 'Shuvro Sankar Sen'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+880) 177 931 9010'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Bangladeshi'
    },
    {
      fieldName: 'Email',
      fieldValue: 'shuvrosankarsen44@gmail.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Bangali'
    },
  ]
}
// experience data

const experience = {
  icon:'',
  title: "My experience",
  description: 'With hands-on experience in both academic and professional settings, I’ve worked on a variety of projects ranging from smart home automation to industrial IoT solutions. I’ve collaborated with cross-functional teams to deliver high-quality products, ensuring they meet both technical and user requirements. My experience spans firmware development, hardware prototyping, and system integration.',
  items: [
    {
      company:'Robodoc',
      period:'May 2024 - February 2025',
      designation: 'Jr. Embedded System Engineer',
    },
    {
      company:'LOCUS',
      period:'January 2024 - March 2024',
      designation: 'Technician',
    },
    {
      company:'DR. ANWARUL ABEDIN INSTITUTION INNOVATION',
      period:'March 2023 - June 2023',
      designation: 'R&D intern',
    },
  ]
}
const education = {
  icon:'',
  title: "My education",
  description: 'I hold a Bachelor of Science in Electrical and Electronic Engineering (EEE) from American International University Bangladesh (AIUB), where I graduated with a focus on embedded systems and IoT. My academic journey equipped me with a solid understanding of electronics, signal processing, and system design, laying the foundation for my professional career.',
  items: [
    {
      institution:'American International University Bangladesh',
      degree:'B.Sc. in EEE',
      duration:'2018 - 2024'
    },
    {
      institution: 'Amrita Lal Dey College',
      degree: 'Higher Secondary Certificate (HSC)',
      duration: '2017'
    },
    
    
  ]
}

// skills data

const skills = {
  title: "My skills",
  description: 'I bring a diverse skill set to the table, combining technical expertise with creative problem-solving. From designing low-level firmware to developing full-stack IoT applications, I thrive on turning ideas into functional, real-world systems. My toolkit includes proficiency in C/C++, Python, RTOS, Microcontroller Programming, and PCB Design, along with a deep understanding of IoT protocols and wireless communication.',
  skillList: [
    {
      icon: <Icon icon="file-icons:arduino" />,
      name:"Arduino",
    },
    {
      icon: <span className="icon-[arcticons--zflasher-stm32]"></span>,
      name:"STM32",
    },
    {
      icon: <Icon icon="simple-icons:esphome" />,
      name:"ESP32",
    },
    {
      icon: <Icon icon="simple-icons:dassaultsystemes" />,
      name:"Solidworks",
    },
    {
      icon: <Icon icon="simple-icons:autocad" /> ,
      name:"AutoCAD",
    },
    {
      icon: <Icon icon="simple-icons:kicad" />,
      name:"KiCad",
    },
    {
      icon: <Icon icon="simple-icons:proteus" />,
      name:"Proteus",
    },
    {
      icon: <Icon icon="file-icons:blender" />,
      name:"blender",
    },
    {
      icon: <Icon icon="iconoir:adobe-after-effects-solid" />,
      name:"After Effects",
    },
    {
      icon: <Icon icon="basil:adobe-premiere-solid" />,
      name:"Premiere Pro",
    },
    {
      icon: <FaHtml5/>,
      name:"html 5",
    },
    {
      icon: <FaCss3/>,
      name:"css 3",
    },
    {
      icon: <FaJs/>,
      name:"javascript",
    },
    {
      icon: <FaReact/>,
      name:"react.js",
    },
    {
      icon: <SiNextdotjs/>,
      name:"next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name:"tailwind.css",
    },
    {
      icon: <FaNodeJs/>,
      name:"react.js",
    },
    {
      icon: <FaFigma/>,
      name:"figma",
    },
  ]

}


import {Tabs, TabsContent,TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from "@radix-ui/react-tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return  <motion.div 
  initial={{opacity:0}} 
  animate={{
    opacity:1,
    transition:{
      delay:2.4, duration:0.4, ease:"easeIn"
    }
  }}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>
        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0 ">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index)=>{
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.period}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.designation}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0 ">{education.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index)=>{
                    return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                      <div className="flex items-center gap-3">
                        {/* dot */}
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/60">{item.institution}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill,index)=>{
                  return <li key={index}>
                    <TooltipProvider delayDuration = {100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#2e2e31] rounded-xl flex justify-center items-center group" >
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-black bg-[#dfe2e4] capitalize p-2 rounded">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          {/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.Description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item,index)=>{
                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <span className="text-white/60 " >{item.fieldName}</span>
                  <span className="text-xl" >{item.fieldValue}</span>

                </li>
              })}
            </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
  
}

export default Resume

