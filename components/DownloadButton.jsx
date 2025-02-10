"use client"

import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const DownloadButton = () => {
  const onButtonClick = () => {
    fetch("/assets/CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement("a")
        alink.href = fileURL
        alink.download = "CV.pdf"
        alink.click()
      })
    })
  }

  return (
    <Button 
      variant="outline" 
      size="lg" 
      className="uppercase flex items-center gap-2"
      onClick={onButtonClick}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  )
}

export default DownloadButton