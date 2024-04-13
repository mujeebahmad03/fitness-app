import { useEffect, useState } from "react";
import {
  FaBars,
  FaChartBar,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaPlus,
  FaUser,
  FaXTwitter,
  FaXmark,
} from "react-icons/fa6";

import {
  logo,
  logo_footer,
  sidebar1,
  sidebar2,
  sidebar3,
  sidebar4,
  sidebar5,
  sidebar6,
} from "@/assets";
import NavList from "./NavList";
import { Link } from "react-router-dom";

function Navbar() {
  const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };

  const stopSpin = () => {
    setSpin(false);
  };

  // sticky navbar - bg black
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // logo
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // sidebar
  const sideBar = () => {
    setSideBar(!sidebar);
  };

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center justify-between py-8 px-12  fixed top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-black" : ""
        }`}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo_img"
            onClick={goTop}
            className="w-full h-auto"
          />
        </Link>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                hamburger ? "left-0" : "-left-[100%]"
              }`}
            >
              <FaXmark
                onClick={hamburgerMenu}
                className="text-[#ff0336] text-[3.3rem] cursor-pointer self-end"
              />

              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/schedule/monday"
                  >
                    Schedule
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/gallery/page/1"
                  >
                    Gallery
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-[2rem] font-medium hover:text-[#ff0336] ease-in duration-200"
                    to="/classes"
                  >
                    Classes
                  </Link>
                </li>
              </ul>
            </div>

            {/* sidebar */}

            <div>
              <div
                className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
                  sidebar ? "left-0" : "-left-[100%]"
                }`}
              >
                {/* logo & X */}
                <div className="flex justify-between items-center">
                  <img src={logo_footer} alt="logo_img" className="w-[13rem]" />
                  <FaXmark
                    onClick={sideBar}
                    className="text-[#ff0336] text-[3.3rem] cursor-pointer"
                  />
                </div>
                {/* about us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">About Us</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1]">
                    Find out who we are and what makes us unique. We are a
                    community-driven gym committed to providing personalized
                    fitness experiences for all levels of fitness enthusiasts in
                    a welcoming and supportive environment.
                  </p>
                </div>
                {/* gallery */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Gallery</h3>
                  <div className="grid grid-cols-3 grid-rows-2 gap-4">
                    <img
                      src={sidebar1}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={sidebar2}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={sidebar3}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={sidebar4}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={sidebar5}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                    <img
                      src={sidebar6}
                      alt="sidebar_gallery"
                      className="rounded-xl cursor-pointer "
                    />
                  </div>
                </div>
                {/* contact */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Contact Info</h3>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <FaLocationDot className="text-[#ff0336]" />
                    &nbsp; 59 Street, House Newyork City
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <FaPhone className="text-[#ff0336]" />
                    &nbsp; +123-678800090
                  </p>
                  <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                    <FaEnvelope className="text-[#ff0336]" />
                    &nbsp; gymate@gymail.com
                  </p>
                </div>
                {/* follow us */}
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-bold">Follow Us</h3>
                  <div className="flex gap-5">
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                      <FaFacebookF className="text-[2.2rem] text-white" />
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[12px] px-[12px] cursor-pointer">
                      <FaXTwitter className="text-[2.2rem] text-white" />
                    </span>
                    <span className="bg-[#ff0336] rounded-full py-[10px] px-[13px] cursor-pointer">
                      <FaInstagram className="text-[2.2rem] text-white" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* hamburger */}
            <FaBars
              onClick={hamburgerMenu}
              className="xl:hidden text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            />
            {/* account */}
            <Link onClick={goTop} to="/signup" title="signup_button">
              <FaUser className="text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200" />
            </Link>

            {/* sidebar */}
            <FaChartBar
              onClick={sideBar}
              className="text-white text-4xl cursor-pointer hover:text-[#FF0336] ease-in duration-200"
            />
          </div>
          {/* spin box */}
          <div className="border-[rgb(255,255,255,0.3)] border-solid border-2  p-2 rounded-md min620:hidden">
            <Link
              onClick={goTop}
              to={"/contact"}
              onMouseEnter={joinSpin}
              onMouseLeave={stopSpin}
              className="flex items-center "
            >
              <FaPlus
                className={`bg-[#FF0336] text-white text-5xl py-3 px-3 rounded-md ${
                  spin ? "nav-btn-hover" : ""
                }`}
              />
              <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
                join class now
              </h3>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
