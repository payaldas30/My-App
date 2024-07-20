"use client";
import React, { useTransition, useState } from 'react';
import TabButton from '../Home/TabButton';
import Experience from './Experience';
import Education from './Education';
import Certificate from './Certificate';

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills", // Ensure the id matches the initial tab state
    thing: (
      <Experience/>
    ),
  },
  {
    title: "Education",
    id: "Education",
    thing: (
      <Education/>
    ),
  },
  {
    title: "Certificate",
    id: "Certificate",
    thing: (
      <Certificate/>
    ),
  },
];

const Skills = () => {
  const [tab, setTab] = useState("Skills"); // Initial tab state matches one of the ids
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section id='Skills'>
      <div className='flex flex-row mt-8 max-w-full md:gap-20 gap-10 justify-center'>
      <TabButton
        selectTab={() => handleTabChange('Skills')}
        active={tab === 'Skills'}>
        Skills
      </TabButton>
      <TabButton
        selectTab={() => handleTabChange('Education')}
        active={tab === 'Education'}>
        Education
      </TabButton>
      <TabButton
        selectTab={() => handleTabChange('Certificate')}
        active={tab === 'Certificate'}>
        Certificate
      </TabButton>
     </div>
      <div className='mt-8'>
        {selectedTab ? selectedTab.thing : <p>Tab not found</p>}
      </div>
    </section>
  );
}

export default Skills;
