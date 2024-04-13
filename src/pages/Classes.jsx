import { ShowMoreLessList } from "@/components";
import { classData } from "@/constants";

function Classes() {
  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>

        <ShowMoreLessList data={classData} initialItems={6} />
      </section>
    </>
  );
}

export default Classes;
