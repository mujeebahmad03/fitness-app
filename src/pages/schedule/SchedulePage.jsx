import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { daysOfTheWeek } from "@/utils";

function SchedulePage() {
  const [currentDay, setCurrentDay] = useState("Monday");

  return (
    <>
      <section className="">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Schedule by Day
          </h1>
        </div>

        {/* day filter */}
        <div className="container page-padding py-[10rem]">
          <div className="flex flex-wrap justify-center gap-4">
            {daysOfTheWeek.map((day) => {
              const dayToLower = day.toLowerCase();
              return (
                <Link
                  key={day}
                  onClick={() => setCurrentDay(day)}
                  to={`/schedule/${dayToLower}`}
                  className={`text-[15px] font-bold border-solid border border-[#d7d7d7] py-[9px] px-[32px] rounded-[23px] ease-in duration-200 hover:shadow-2xl ${
                    currentDay === day
                      ? "bg-[#ff0336] text-white"
                      : "hover:bg-[#ff0336] hover:text-white"
                  }`}
                >
                  {day}
                </Link>
              );
            })}
          </div>
          {/* schedule */}
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default SchedulePage;
