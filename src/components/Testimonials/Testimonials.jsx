
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import TestimonialBoxes from "./TestimonialBoxes";
import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  new_test,
  title,
} from "@/assets";

function Testimonials() {
  return (
    <>
      {/* testimonials div */}
      <section className="my-[10rem] mx-auto">
        <div className="container page-padding">
          {/* title */}
          <div className="text-center relative items-center w-full flex flex-col">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              alt="title_img"
              src={title}
              className="w-[21rem] absolute -top-[6px] "
            />
          </div>

          {/* testimonials wrapper */}
          <div className="border-[#efefef] mt-[17rem] md1000:mt-[9rem] bg-white border-solid border-[9px] p-[30px] min540:h-[48rem] min375:h-[60rem]">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              {/* img */}
              <img
                alt="girl_img"
                src={new_test}
                className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px] md1000:hidden"
              />

              {/* all text-boxes */}
              <div className="flex">
                {/* text box */}
                <TestimonialBoxes />
              </div>

              {/* buttons */}
              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px]">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <FaArrowLeft />
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-white text-black text-2xl hover:bg-[#FF0336] hover:text-white"
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* brand logos */}
        <div
          className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap
        "
        >
          <img
            src={logo1}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={logo2}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={logo3}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={logo4}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={logo5}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
        </div>
      </section>
    </>
  );
}

export default Testimonials;
