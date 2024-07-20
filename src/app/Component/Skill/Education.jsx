import React from 'react';

const educationData = [
  {
    key: 1,
    title: 'B.Tech in Electronics and Instrumentation Engineering',
    location: 'National Institute of Technology, Rourkela',
    description: 'Pursuing a Bachelor of Technology in Electronics and Instrumentation Engineering.'
  },
  {
    key: 2,
    title: 'Intermediate Education',
    location: 'Royal College of Science and Technology',
    description: 'Completed intermediate education with a focus on Physics, Chemistry, Mathematics, and Biology (PCMB), achieving 95%.'
  },
  {
    key: 3,
    title: 'Matriculation',
    location: 'Saraswati Shishu Vidya Mandir',
    description: 'Completed matriculation under the state board, achieving 92%.'
  }
];

const Education = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 py-6">
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute top-0 bottom-0 md:left-1/2 -left-6 md:transform md:-translate-x-1 w-1 bg-white">
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
          {educationData.map((item, index) => (
            <React.Fragment key={item.key}>
              {/* Empty Space */}
              <div className="md:col-span-4"></div>

              {/* Timeline Marker */}
              <div className="relative md:col-span-1 flex justify-center md:items-center">
                <div className="absolute  top-5  md:left-1/2 -left-6 md:transform md:-translate-x-1 "></div>
              </div>

              {/* Timeline Content (Right Side) */}
              <div className="md:col-span-4 w-full">
                <div className="w-full h-full bg-indigo-400 rounded-md p-4">
                  <h1 className="text-white text-xl font-medium py-2">{item.title}</h1>
                  <h2 className="text-white text-lg">{item.location}</h2>
                  <p className="text-gray-100 sm:text-sm text-xs">{item.description}</p>
                </div>
              </div>

              

              {/* Empty Space */}
              <div className="md:col-span-4"></div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
