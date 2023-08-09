import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
// import Link from "next/link";
// import Image from "next/image";

const Navebar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [scrollNavbar, setScrollNavbar] = useState(false);

  const navLinks = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Courses", "/courses"],
    ["Blog", "/blog"],
    ["Team", "/team"],
    ["Contact", "/contact"],
  ];

  const scrollView = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 0 ? setScrollNavbar(true) : setScrollNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollView);
  }, []);

  return (
    <>
      <nav
        className={
          scrollNavbar
            ? "bg-white w-full fixed z-20 top-0 left-0 border-b border-gray-200 drop-shadow-xl transition-all ease-in-out"
            : ""
        }
      >
        <div className="flex flex-wrap items-center justify-around p-2">
          <a href="/" className="flex items-center">
            <img src={Logo} width={70} height={70} alt="business Logo" />
            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Grasp Gross
            </span> */}
          </a>

          <div className="hidden md:flex items-center justify-between w-auto">
            <ul className="flex p-0 mt-0">
              {navLinks.map((item, index) => {
                return (
                  <a
                    href={item[1]}
                    key={index}
                    className="block py-2 px-4 font-semibold rounded-lg hover:bg-primaryColor"
                  >
                    <li>{item[0]}</li>
                  </a>
                );
              })}
            </ul>
          </div>

          <div className="flex">
            <button
              className={`hidden md:block bg-purple-400 px-5 py-2 rounded-md hover:bg-purple-600 hover:text-gray-300 hover:font-semibold ease-in-out duration-500`}
            >
              Login
            </button>
            <button
              onClick={() => {
                setToggleNavbar(!toggleNavbar);
              }}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            >
              <FaBars />
            </button>
          </div>

          <div
            className={`${
              toggleNavbar ? "" : "hidden"
            } absolute top-12 left-0 right-0 md:hidden mx-2`}
          >
            <ul className="flex flex-col font-medium mt-4 bg-gray-100 rounded-lg">
              {navLinks.map((item, index) => {
                return (
                  <a
                    href={item[1]}
                    onClick={() => {
                      setToggleNavbar(!toggleNavbar);
                    }}
                    key={index}
                    className="block py-2 pl-3 pr-4 font-semibold hover:bg-primaryColor"
                  >
                    <li>{item[0]}</li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navebar;
