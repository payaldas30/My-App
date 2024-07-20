import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLink } from '@fortawesome/free-solid-svg-icons';


const ProjectCard = ({imgUrl,title,description, gitUrl, previewUrl}) => {
  return (
    <div className="group relative w-72 h-96 md:w-80 md:h-100 ">
        <div 
        className='h-52 md:h-72'
        style={{background:`url(${imgUrl})`
             ,backgroundSize:"100% 100%"}}>

        <div className='overlay  items-center justify-center absolute top-0 left-0 w-full md:h-[75%] h-[55%] rounded-sm hidden bg-[#181818] bg-opacity-0 group-hover:flex group-hover:bg-opacity-80  transition-all duration-500'>

          <Link href={gitUrl} className='h-14 w-14 relative  content-center  border-[#ADB7BE] hover:border-white'>
          <FontAwesomeIcon icon={faGlobe} className="h-6 w-6   text-[#ADB7BE] m-2 cursor-pointer hover:text-white"/>
          </Link>
          <Link href={previewUrl} className='h-14 w-14 relative  content-center border-[#ADB7BE] hover:border-white'>
          <FontAwesomeIcon icon={faLink}className="h-6 w-6  text-[#ADB7BE] m-2 cursor-pointer hover:text-white"/>
          </Link>
        </div>
        </div>
        <div className='text-white rounded-b-xl mt-2 bg-[#8647ad] px-4'>
          <h5 className='text-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#ADB7BE] '>{description}</p>
        </div>
       
    </div>
  )
}

export default ProjectCard