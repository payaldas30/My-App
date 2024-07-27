"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Herosection = () => {
  return (
    <section id='Home'>
        <div className='grid grid-cols-1 lg:grid-cols-12 '>
            <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl  mt-2 font-extrabold"><span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-700'>Hello!! I&apos;m{" "}</span>
        <br/>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Payal Das ',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'A Web-Developer',
        1000,
        'Student of NIT RKL',
        1000,
        'AI-ML enthusiast',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '0.8em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </h1>
        <p className='text-[#ADB7BE] text-lg lg:text-xl  mb-6 mt-4'>I&apos;m a web designer and experience is to create a website design such as frontend and backend and many more...........<br/>Welcome to the dynamic world where artistry meets technology!</p>
        <div>
          <button className='px-6 py-3 my-1  w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-300  text-white bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500'>Hire me</button>
          <button className='px-6 py-3 my-2 w-full sm:w-fit rounded-full mr-4 bg-transparant hover:bg-white hover:text-black  text-white border  border-white' >Download CV</button>
          {/* npm install react-type-animation--> for animation */}
        </div>
        </div>
        <div className="col-span-5 place-self-center mt-2 ">
            <Image className="rounded-full place-self-center md:my-5 "
            src='/images/Dp.jpg'
            alt='hero-image'
            height={200}
            width={300}
          />

        </div>
        </div>
        
    </section>
  )
}

export default Herosection