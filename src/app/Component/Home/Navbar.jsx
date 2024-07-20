"use client";
import Link from 'next/link'
import React,{useState} from 'react'
import NavLink from './NavLink'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';



import MenuOver from './MenuOver';
const navLinks =[
  {
    title:"Home",
    path:"#Home",
  },
  {
    title:"About",
    path:"#About",
  },
  {
    title:"Skills",
    path:"#Skills",
  },
  {
    title:"Project",
    path:"#Project",
  },
  {
    title:"Contact",
    path:"#Contact",
  },
]

const Navbar = () => {
  const [navbarOpen,setnavbarOpen] =useState(false);
  return (

    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#13163F] bg-opacity-90'>
      <div className='flex flex-wrap items-center justify-between mx-auto px-4'>
        <Link href={""} className='text-3xl md:text-5xl text-white font-semibold'>
        <Image className="place-self-center md:my-5 bg-transparent"
            src='/images/Logo.png'
            alt='hero-image'
            height={50}
            width={90}
          />
        </Link>
        <div className='mobile-menu block md:hidden '>
          { !navbarOpen?(
              <button onClick={()=>setnavbarOpen(true)} 
              className='flex items-center px-3 mx-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <FontAwesomeIcon icon={faBars} className='h-5 w-5'/>
              </button>
            ):(
              <button onClick={()=>setnavbarOpen(false)} 
              className='flex items-center px-3 mx-2 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                <FontAwesomeIcon icon={faTimes} className='h-5 w-5'/>
              </button>
            )
          }

        </div>
        <div className="menu hidden md:block md:w-auto " id='navbar'>
          <ul className='flex md:gap-24'>
            {
              navLinks.map((Link,index)=>(
                <li key={index}>
                  <NavLink href={Link.path} title={Link.title}/>
                </li>
              ))

            }
          </ul>
        </div>
        </div>
        {navbarOpen ?<MenuOver links={navLinks}/>:null}

        </nav>
  )
}

export default Navbar