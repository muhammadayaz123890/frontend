import { useState } from "react";
import clos from "../images/clos.png";
import menu from "../images/menu.png";
import logo from "../images/logo.png";
import flag from "../images/flag.jpg";
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
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sticky top-0 bg-primary shadow z-50 w-full flex px-4 py-2 justify-between items-center navbar">
        <Link to="/">
         <img 
         // ? close : menu
          src={logo}
          alt="menu"
          className="w-[200px] h-[auto] object-contain "
         
        /></Link>
      {/* Logo */}
      {/* <h1 className="text-3xl text-white">Logo</h1> */}
      
      {/* Desktop Navigation */}
       <div className="flex items-center ">
      <ul className="list-none sm:flex hidden justify-center flex space-8 items-center flex-1 transition-transform transform hover:scale-110">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-20"}`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={`${nav.id}`}>{nav.title}</Link>
            {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
          </li>
        ))}
      </ul>
      </div>
      <div className="flex flex-col items-center ">
      <img
    src={flag}
    alt="Flag"
    className=" h-6 mb-2" // Adjust the size as needed
  />
       <div className="flex space-x-4">
               <a href='/authenticate/login' className="text-white">SIGNIN</a>  
               <a href='/authenticate/register'className="text-white" >LOGIN</a>  
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





