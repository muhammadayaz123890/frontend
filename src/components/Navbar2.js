import { useState } from "react";
import clos from "../images/clos.png";
import menu from "../images/menu.png";
import logo from "../images/logo.png";
import flag from "../images/tt.png";
import { Link } from 'react-router-dom';


import React from "react";





export const navLinks = [
  {
    id: "/",
    title: "Home",
  },
  {
    id: "Ask_Susan",
    title: "Ask Susan",
  },
  {
    id: "About_us",
    title: "About",
  },
  {
    id: "Team",
    title: "Team",
  },
  {
    id: "Blog",
    title: "Blog",
  },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky top-0 shadow z-50 w-full px-4 py-2 justify-between items-center navbar">
       <div className="flex flex-row ">
        <div className="w-2/3">
        <Link to="/">
        <img
          // ? close : menu
          src={logo}
          alt="menu"
          className="w-[600px] h-[auto] object-contain"
        />
      </Link></div>
        <div className="grid grid-cols-3 p-20 gap-4 ">

            <h1 className="text-white text-xl text-center col-span-2 ">Select Your Language</h1>
            <img 
        
          src={flag}
          alt="menu"
          className="w-[40px] h-[auto] object-contain"
         
        />
        </div>
      {/* Logo */}
      {/* <h1 className="text-3xl text-white">Logo</h1> */}
      </div>
      {/* Desktop Navigation */}
      <br></br>
       <div className=" flex items-center ">
      <ul className="list-none sm:flex hidden justify-center flex space-8 items-center flex-1 transition-transform transform hover:scale-110">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-20"}`}
            onClick={() => setActive(nav.title)}
          >
            {/* <Link to={`${nav.id}`}>{nav.title}</Link> */}
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
     
      <div className="flex-col item-center ">

       <div className="flex space-x-4">
               <a href='/login' className="text-white">SIGNIN</a>  
               <a href='/signin'className="text-white" >LOGIN</a>  
                </div>      
        </div>
 </div>
      {/* Mobile Navigation */}
      <div className=" sm:hidden flex flex-1 justify-end items-center">
        <img 
        // ? close : menu
          src={toggle ? clos : menu}
          alt="menu"
          className="bg-white w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        {/* Sidebar */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
