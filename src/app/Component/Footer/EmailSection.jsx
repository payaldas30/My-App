"use client";
import React, { useRef ,useState } from 'react';
import emailjs from '@emailjs/browser';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



library.add(faGithub, faLinkedin, faInstagram);




const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hy8valo', 'template_6k2f9xf', form.current, {
        publicKey: '0Da8Q8XSwB3CNSQIs',
      })
      .then(
        () => {
          console.log('MSG Sent!');
          setEmailSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  
  return (
    <section id='Contact'>
    <h1 className='text-center pt-0 text-4xl sm:text-5xl lg:text-6xl mt-0 md:mt-10 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-700 font-extrabold'>contact <span className='text-white'>me</span></h1> 
    <div className='grid  md:grid-cols-2 my-6 md:my-12 py-24 gap-4'> 
        <div >
            <h5 className=' font-bold  my-2 text-[#a855f7] md:text-3xl text-2xl'>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md md:text-xl text-lg py-2'>
                {" "}
                I&apos;m currently looking for new oppertunities,my index is always open,
                whether you have a question or give somefeedback ,I&apos;ll try my best
                to get back to you! 
            </p>
            <div className='socials flex flex-row gap-2 text-2xl md:text-3xl text-[#a855f7] pb-10'>
            <a href="https://github.com/payaldas30" target="_blank" rel="noopener noreferrer">
               <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a href="https://www.linkedin.com/in/payal-das-8557b128a/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a href="https://www.instagram.com/payal__.d/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            </div>
        </div>
       
        <div className='bg-[#8647ad] rounded-lg p-7'>
         {emailSubmitted ? (
          <div className='relative '>
          <p className="text-white text-xl text-center mt-5">
            Email sent successfully  !!<span className='text-[#be185d] font-bold'>THANK YOU</span> for reach out!
          </p>
          <button
              type="submit" onClick={()=>{setEmailSubmitted(false)}}
              className="bg-gradient-to-t from-pink-700 to-purple-500 w-full hover:bg-[#9CA2A9] hover:text-black text-white font-medium mt-10 md:mt-24 py-2 rounded-lg"
            >
              Return To Back
            </button>
          </div>
        ) : (
           <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="Full Name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="User_name"
                type="Name"
                id="Name"
                required
                className="bg-white border border-[#33353F] text-black placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                placeholder="Type your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="User_email"
                type="email"
                id="email"
                required
                className="bg-white border border-[#33353F] text-black placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                placeholder="abcd@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="User_subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-[#33353F] text-black placeholder-[#9CA2A9]  text-sm rounded-lg block w-full p-2.5"
                placeholder="Say somthing ...."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="User_message"
                id="message"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-black  text-sm rounded-lg block w-full p-2.5"
                placeholder="Let&apos;s talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-t from-pink-700 to-purple-500  hover:bg-[#9CA2A9] hover:text-black text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              SUBMIT HERE
            </button>
          
          </form> 
        
          )}  
      </div>
    
    </div>
    </section>
  )
}

export default EmailSection