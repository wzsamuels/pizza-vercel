import {Icon} from '@iconify/react';
import { useState } from "react";

const menuItemClass = `my-4 text-3xl`;
const contactClass = `my-4 text-2xl`;

export default function NavBar() {

  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <div className="z-10 bg-white text-red-900 fixed top-0 left-0 flex flex-row lg:flex-col items-center justify-between lg:justify-start h-32 lg:h-full w-full lg:w-60 overflow-y-auto">
        <h1 className="text-red-900 text-5xl mx-8 lg:mx-0 lg:text-6xl font-['Great_Vibes','cursive'] lg:mt-36 lg:mb-16">Luigi's</h1>
        <Icon onClick={() => setNavOpen(!navOpen)} className="block lg:hidden mx-8" height={32} icon="ic:baseline-menu" />
        <div className="w-full text-center flex flex-col justify-center items-center hidden lg:block ">
          <hr className="mx-auto border border-b-red-900 w-5/6 lg:mb-16"/>
          <p className={menuItemClass}>Menu</p>
          <p className={menuItemClass}>Contact</p>
          <p className={`${menuItemClass} lg:mb-16`}>About</p>
          <hr className="mx-auto border border-b-red-900 w-5/6 lg:mb-16"/>
          <p className={contactClass}>Death Valley National Park, Death Valley, California</p>
        </div>
      </div>
      <div className={`w-full z-50 fixed bg-white animate-drop-down ${navOpen ? 'block' : 'hidden'}`}>
        <p className={menuItemClass}>Menu</p>
        <p className={menuItemClass}>Contact</p>
        <p className={`${menuItemClass} lg:mb-16`}>About</p>
        <Icon onClick={() => setNavOpen(!navOpen)} className="block lg:hidden mx-8" height={32} icon="ic:baseline-menu" />
      </div>
    </>
  )
}