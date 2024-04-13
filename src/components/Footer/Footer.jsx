import { logo_footer } from "@/assets";

import {
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8">
              <img src={logo_footer} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] min540:justify-center">
                <FaFacebookF
                  // style={{ transition: "all 0.3s" }}
                  className="bg-[#efefef] p-4 rounded-full text-[4rem] px-[14px] hover:bg-[#ff0366] hover:text-white transition-all duration-300 cursor-pointer"
                />
                <FaXTwitter
                  // style={{ transition: "all 0.3s" }}
                  className="bg-[#efefef] p-4 rounded-full text-[4rem] hover:bg-[#ff0366] hover:text-white transition-all duration-300 cursor-pointer"
                />
                <FaPinterestP
                  // style={{ transition: "all 0.3s" }}
                  className="bg-[#efefef] p-4 rounded-full text-[4rem] px-[14px] hover:bg-[#ff0366] hover:text-white transition-all duration-300 cursor-pointer"
                />
                <FaYoutube
                  // style={{ transition: "all 0.3s" }}
                  className="bg-[#efefef] p-4 rounded-full text-[4rem] hover:bg-[#ff0366] hover:text-white transition-all duration-300 cursor-pointer"
                />
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Gymate <br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  RadiusTheme
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Our Classes</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Fitness Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Aerobics Classes
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Power Yoga
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Learn Machines
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
