import { Join } from "@/components";
import { scheduleData } from "@/constants";

function Day({ day }) {
  const selectedDay = scheduleData.find((item) => item.day === day);
  return (
    <>
      <div className="mt-[5rem]">
        <div className="flex flex-col gap-3">
          {selectedDay.classes.map((classInfo, index) => (
            <ul
              key={index}
              className="flex justify-between w-full min800:flex-col min800:text-center"
            >
              {/* class name */}
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Class Name
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  {classInfo.className}
                </p>
              </li>
              {/* time */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">Time</p>
                <p className="text-[18px] text-black font-bold mt-3">
                  {classInfo.time}
                </p>
              </li>
              {/* trainer */}
              <li className="p-[25px] bg-[#f2f2f2] w-full text-center">
                <p className="text-[14px] font-medium text-[#a0a0a0]">
                  Trainer
                </p>
                <p className="text-[18px] text-black font-bold mt-3">
                  {classInfo.trainer}
                </p>
              </li>
              <li className="py-[25px] px-[55px] bg-[#f2f2f2] w-full  min800:justify-center items-center flex justify-end">
                <Join />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}

export default Day;
