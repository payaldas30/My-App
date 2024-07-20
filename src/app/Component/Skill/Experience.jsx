import React from 'react'
import Image from 'next/image'
const Experience = () => {
    const techs = [
      {
        id: 1,
        src:"/images/HTML.png",
        title: "HTML",
        
      },
      {
        id: 2,
        src: "/images/CSS.png",
        title: "CSS",
    
      },
      {
        id: 3,
        src: "/images/TAILWIND.png",
        title: "Tailwind",
       },
      {
        id: 4,
        src: "/images/JS.png",
        title: "JavaScript",
        
      },
      {
        id: 5,
        src: "/images/REACT.png",
        title: "React",
         
      },
      {
        id: 6,
        src:"/images/NEXTJS.jpeg",
        title: "Next JS",
      },
      {
        id: 7,
        src: "/images/JQUERY.png",
        title: "jquery",
      },
    //   {
    //     id: 8,
    //     src: github,
    //     title: "GitHub",
    //   },
      {
        id: 8,
        src:"/images/C.png",
        title: "C", 
      },
      {
        id: 9,
        src:"/images/CPP.png",
        title: "C++",
         
      },
    ];
  
    return (
      <div className="w-full h-full">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title}) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 bg-gradient-to-br from-purple-500 to-pink-700 py-2 rounded-lg shadow-white`}
              >
             <Image className="w-20 mx-auto"
            src={src}
            alt='html'
            height={200}
            width={300}
          />  
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Experience;
  
