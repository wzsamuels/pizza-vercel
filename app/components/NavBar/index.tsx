import type { AnimationEvent} from "react";
import { useState} from "react";
import {Link} from "@remix-run/react";
import "~/styles/global.css"

const menuItemClass = `my-4 text-xl md:text-2xl lg:text-3xl`;
const contactClass = `my-4 text-2xl`;

export default function NavBar() {

  const [navOpen, setNavOpen] = useState(false)
  const [navClosing, setNavClosing] = useState(false)

  const toggleDrawer = () => {
    if (navOpen) {
      setNavClosing(true)
    } else {
      setNavOpen(true)
    }
  }

  const handleAnimation = (e: AnimationEvent<HTMLDivElement>) => {
    if(e.animationName === 'raise') {
      setNavClosing(false)
      setNavOpen(false)
    }
  }

  return (
    <>
      <nav
        className="z-40 px-2 lg:px-8 bg-white text-red-900 fixed top-0 left-0 flex flex-row lg:flex-col items-center justify-between lg:justify-start h-20 lg:h-full w-full lg:w-60 overflow-y-auto font-['Cormorant_SC']"
      >
        <h1 className="text-red-900 text-3xl md:text-4xl lg:text-5xl mx-8 lg:mx-0 lg:text-6xl font-['Great_Vibes','cursive'] lg:mt-36 lg:mb-16"><Link to="/">The Golden Nugget</Link></h1>
        <div
          className={`lg:hidden menu-icon ${navOpen && !navClosing ? 'change' : ''}`}
          onClick={() => toggleDrawer()}
        >
          <div className={`lg:hidden bar1`} ></div>
          <div className={`lg:hidden bar2 ${navOpen ? 'change' : ''}`}></div>
          <div className={`lg:hidden bar3 ${navOpen ? 'change' : ''}`}></div>
        </div>
        <div className="w-full text-center flex flex-col justify-center items-center hidden lg:block ">
          <hr className="mx-auto border border-b-red-900 w-5/6 lg:mb-16"/>
          <p className={menuItemClass}><Link to="/">Home</Link></p>
          <p className={menuItemClass}><Link to="/menu">Menu</Link></p>
          <p className={menuItemClass}><Link to="/contact">Contact</Link></p>
          <p className={`${menuItemClass} lg:mb-16`}><Link to="/about">About</Link></p>
          <hr className="mx-auto border border-b-red-900 w-5/6 lg:mb-16"/>
          <p className={contactClass}>Death Valley National Park, Death Valley, California</p>
        </div>
      </nav>
      <div
        onClick={() => toggleDrawer()}
        className={`fixed z-20 m-0 left-0 top-0 w-screen h-screen overflow-auto ${navClosing ? 'bg-transparent' : 'bg-[rgba(0,0,0,0.4)]'} ${navOpen ? 'block' : 'hidden'} font-['Cormorant_SC']`}>
        <div
          onAnimationEnd={e => handleAnimation(e)}
          className={`w-full h-20 z-50 left-o top-20 fixed bg-white items-center justify-between flex flex-wrap px-4
                    ${navClosing ? 'animate-raise-up' : 'animate-drop-down'}
                    ${navOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex w-full justify-between flex-wrap">
            <p className={menuItemClass}><Link to="/">Home</Link></p>
            <p className={menuItemClass}><Link to="/menu">Menu</Link></p>
            <p className={menuItemClass}><Link to="/contact">Contact</Link></p>
            <p className={`${menuItemClass}`}><Link to="/about">About</Link></p>
          </div>

        </div>
      </div>
    </>
  )
}