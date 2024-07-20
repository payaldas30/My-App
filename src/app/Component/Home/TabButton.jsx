
import React from 'react'



const TabButton = ({active,selectTab,children}) => {
    const buttonClass=active ?
     "text-white  border-b-4 border-purple-700"
     :"text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-700";
  return (
    <button onClick={selectTab} >
    <p className={`my-3 text-xl md:text-3xl font-bold hover:text-white ${buttonClass}`}>
        {children}
    </p>  
    </button>
  )
}

export default TabButton