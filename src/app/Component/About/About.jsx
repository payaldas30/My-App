import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className='text-white' id='About'>
        <h2 className='text-center mb-6 text-4xl sm:text-5xl lg:text-6xl  mt-20 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-700 font-extrabold '>About  <span className='text-white'>Me</span></h2>
        <div className='flex flex-col  md:grid md:grid-cols-2 gap-4 items-center bg-[#8647ad] px-4 xl:gap-8 sm:py-16 xl:px-16'>
         <Image className='mb-4 pt-4'
            src='/images/Dp.jpg'
            alt='hero-image'
            height={200}
            width={300}
          />  
            <p className='text-lg py-2 '>My name is <span className='text-[#be185d] font-semibold'>Payal Das</span> . Originally from a biology background,but get an interest in coding and software development. Currently,I am pursuing a B.Tech degree in<span className='text-[#be185d] font-semibold'> Electronics and Instrumentation</span> from NIT Rourkela .I am passionate about web development, as it allows me to blend creativity with technical skills.I am excited to explore the ever-evolving world of web technologies.I believe a well-designed website should look visually appealing and provide a smooth, enjoyable interaction for visitors.I am also interested in AI and machine learning.....</p>
        </div>
        </section>
  )
}

export default About