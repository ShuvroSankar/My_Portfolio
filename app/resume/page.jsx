
"use client"
import { Description } from "@radix-ui/react-dialog"
import {FaHtml5, FaCss3,FaJs, FaReact,FaFigma,FaNodeJs } from "react-icons/fa"

import {SiTailwindcss,SiNextdotjs } from "react-icons/si"

// about data
const about = {
  title: "About Me",
  Description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex, fuga labore dicta reprehenderit fugit maiores nostrum aliquid delectus.',
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
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  items: [
    {
      company: '',
      position: '',
      duration: ''
    },
    {
      company: '',
      position: '',
      duration: ''
    },
    {
      company: '',
      position: '',
      duration: ''
    },
  ]
}
const education = {
  icon:'',
  title: "My education",
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  items: [
    {
      institution: '',
      degree: '',
      duration: ''
    },
    {
      institution: '',
      degree: '',
      duration: ''
    },
    {
      institution: '',
      degree: '',
      duration: ''
    },
    
  ]
}

// skills data

const skills = {
  title: "My skills",
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  skillList: [
    {
      icon: "",
      name:"",
    },
    {
      icon: "",
      name:"",
    },
    {
      icon: "",
      name:"",
    },{
      icon: "",
      name:"",
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
      <Tabs>
        <TabsList>
          <TabsTrigger>Experience</TabsTrigger>
          <TabsTrigger>Education</TabsTrigger>
          <TabsTrigger>Skills</TabsTrigger>
          <TabsTrigger>About me</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  </motion.div>
  
}

export default Resume

