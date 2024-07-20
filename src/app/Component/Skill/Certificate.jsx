import React from 'react'
import Image from 'next/image'

const Certificate = () => {
  return (
    <section className='text-white'>
    
    <div className='grid  md:grid-cols-2 gap-4 items-center  px-4 xl:gap-8 sm:py-16 xl:px-16'>
       
        <div>
        <h2 className=' mb-6 text-3xl sm:text-4xl lg:text-5xl  text-transparent  bg-clip-text bg-gradient-to-tr from-purple-500 to-pink-700 font-extrabold '>Achievements</h2>
            <li className='text-white font-bold  list-none'>
                <ul className='mb-3'>Technical-member of <span className='text-[#a855f7]'>Webwiz</span>-Official Web Development Club of NIT R</ul>
                <ul className='mb-3'>Secured 3rd position in <span className='text-[#a855f7]'>interNIt YOGA</span> competition</ul>
                <ul className='mb-3'>Organizer of <span className='text-[#a855f7]'>HACKODISHA </span> 4.0-Hackathon</ul>
                <ul className='mb-3'>Coordinator of <span className='text-[#a855f7]'>INTERNATIONAL YOGA</span> DAY</ul>
            </li>
        
        <h2 className=' mb-6 text-3xl sm:text-4xl lg:text-5xl   text-transparent  bg-clip-text bg-gradient-to-tr from-purple-500 to-pink-700 font-extrabold '>soft-skills</h2>
            <li className='text-white font-bold  list-none'>
                <ul className='mb-1'>Time-management</ul>
                <ul className='mb-1'>Communication</ul>
                <ul className='mb-1'>Leadership</ul>
                <ul className='mb-1'>Teamwork</ul>
                <ul className='mb-1'>Adaptability</ul>
                <ul className='mb-1'>Problem-solving</ul>
            </li>
        </div>
        <div>
       <Image className='mb-4 pt-4 md:ml-16'
            src='/images/Achievement.jpg'
            alt='hero-image'
            height={200}
            width={450}
          />  

       </div>
        
    </div>
    </section>
  )
}

export default Certificate