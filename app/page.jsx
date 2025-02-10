import DownloadButton from "@/components/DownloadButton"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Embedded System Eng<span className="text-accent">.</span></span>
            <h1 className="h1">Hello I'm <br /> <span className="text-xl text-accent">Shuvro Sankar Sen</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Embedded Systems Engineer specializing in firmware development, IoT integration, and industrial automation, with expertise in C/C++, Python, RTOS, STM32, and ESP32. Passionate about building smart, efficient, and connected devices.</p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton />
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home