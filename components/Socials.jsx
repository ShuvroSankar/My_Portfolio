
import { icons } from "lucide-react"
import Link from "next/link"
import {FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaLinkedinIn} from "react-icons/fa"

const socials = [
    {icons: <FaGithub/>, path: "https://github.com/ShuvroSankar"},
    {icons: <FaLinkedinIn/>, path: "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"},
    {icons: <FaYoutube/>, path: "https://www.youtube.com/@shuvrosankar9091"},
    {icons: <FaTwitter/>, path: "https://x.com/SankarShuvro"},


]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>{item.icons}</Link>
            )
        })}
    </div>
  )
}

export default Socials
