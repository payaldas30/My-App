import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
      id: 1,
      title: "My-music Website",
      description: "A A fully responsive  music website using HTML,CSSand JS.",
      image: "/images/1.png",
      gitUrl: "https://github.com/payaldas30/My-Music-Web",
      previewUrl: "https://payaldas30.github.io/My-Music-Web/",
    },
    {
      id: 2,
      title: "Password-generator",
      description: "A Password-generator using react Js And the datas are fetched from api.",
      image: "/images/2.webp",
      gitUrl: "https://github.com/payaldas30/Password-Converter",
      previewUrl: "https://payaldas30.github.io/Password-Converter/",
    },
    {
      id: 3,
      title: "Currency-Convertor",
      description: "A  Currency-Convertor using React JsAnd the datas are fetched from api.",
      image: "/images/3.jpg",
      gitUrl: "https://github.com/payaldas30/CurrencyConvertor",
      previewUrl: "https://payaldas30.github.io/CurrencyConvertor/",
    },
    {
      id: 4,
      title: "PW-Skills Clone",
      description: "A responsive PW-Skills Clone website using tailwindcss and HTML.",
      image: "/images/4.png",
      gitUrl: "https://github.com/payaldas30/PW-Skills-CLONE",
      previewUrl: "https://payaldas30.github.io/PW-Skills-CLONE/",
    },
    {
      id: 5,
      title: "Form-Submition Demo",
      description: "A responsive Form-Submition Demo using HTML,tailwindcss and jQuery",
      image: "/images/5.webp",
      gitUrl: "https://github.com/payaldas30/Form-submition-",
      previewUrl: "https://payaldas30.github.io/Form-submition-/",
    },
    {
      id: 6,
      title: "My-web gallery",
      description: "A gallery-website containing images of nature using HTML and css only.",
      image: "/images/6.jpeg",
      gitUrl: "https://github.com/payaldas30/webwizzz-task",
      previewUrl: "https://payaldas30.github.io/webwizzz-task/",
    },
  ];
  

const ProjectSection = () => {
  return (
    <section  id='Project'>
    <h2 className='text-center mb-12 md:mb-8 text-4xl sm:text-5xl lg:text-6xl  mt-20 md:mt-12 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-700 font-extrabold '>
      Project
      </h2>
      <div className="flex flex-wrap  text-white justify-center items-center gap-6 py-6">
        {projectsData.map((project)=> 
        <ProjectCard
         key={project.id}
         title={project.title} 
         description={project.description}
         imgUrl={project.image}
        //  tag={project}
         gitUrl={project.gitUrl}
         previewUrl={project.previewUrl}
         />
         )}
    </div>
    </section>
  )
}

export default ProjectSection