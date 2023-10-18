"use client";

import Image from "next/image";
import React, {useState} from "react";
import {BiMoon, BiSun} from "react-icons/bi"
import {CgProfile, CgSearch, CgLogOut} from "react-icons/cg";
import {TbMessage} from "react-icons/tb"



export default function home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode =  () => {
    setDarkMode(!darkMode)
  }

  const lightModeClass = 'bg-white text-black';
  const darkModeClass = 'bg-black text-white';
 
  return (
  <div className={`min-h-screen flex flex-col  bg-gray-100 ${darkMode ? darkModeClass : lightModeClass}`}>

    <div className="flex flex-col  py-6 items-center w-full h-[330px]  relative">
      <div className="">
        <Image
          src="/logo.png"
          alt="Logo"
          className="mx-auto"
          height={300}
          width={600}
        />
      </div>
    
      <div className="flex  py-20">
        <h1 className="text-5xl font-semibold text-gray-800 ">
          Welcome to Social
        </h1>
      </div>

      <div className="absolute top-12 right-12 ">
        <button onClick={toggleDarkMode}
        className=""
        >
          {darkMode? <BiSun size="40px"/> : <BiMoon size="40px"/> }
        </button>
      </div>
    </div>

    <div className="flex flex-row py-6 items-center justify-center w-full h-[330px]  relative">
      <div className={`absolute left-20 ${darkMode ? "hover:bg-white/10 rounded-3xl outline-offset-1  hover:border-blue-700 border border-transparent" : "hover:bg-gray-200 hover:border-blue-600 border border-transparent rounded-3xl"}`}>
        <button>
          <CgProfile size="100px"/>
          <h1 className="py-2 px-6 ">Profile</h1>
        </button>
      </div>

      <div className={` ${darkMode ? "hover:bg-white/10 rounded-3xl outline-offset-1  hover:border-blue-700 border border-transparent" : "hover:bg-gray-200 hover:border-blue-600 border border-transparent rounded-3xl"}`}>
        <button>
          <CgSearch size="100px"/>
          <h1 className="py-2 px-6 ">Search</h1>
        </button>
      </div>

      <div className={`absolute right-20 ${darkMode ? "hover:bg-white/10 rounded-3xl outline-offset-1  hover:border-blue-700 border border-transparent" : "hover:bg-gray-200 hover:border-blue-600 border border-transparent rounded-3xl"}`}>
        <button>
          <CgLogOut size="100px"/>
          <h1 className="py-2 px-6 ">Logout</h1>
        </button>
      </div>
    </div>

    <div className="flex flex-row py-6 items-center justify-center w-full h-[330px]   relative">
      <div className={` ${darkMode ? "hover:bg-white/10 rounded-3xl outline-offset-1  hover:border-blue-700 border border-transparent" : "hover:bg-gray-200 hover:border-blue-600 border border-transparent rounded-3xl"}`}>
        <button>
          <TbMessage size="100px"/>
          <h1 className="py-2 px-6 ">Message</h1>
        </button>
      </div>
    </div>

  </div>
  )
};

