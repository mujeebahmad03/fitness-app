import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BlogSack({ date, title, description }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "none",
    });
  };

  return (
    <>
      <div className="w-[37rem] min540:w-[100%] shadow-xl flex flex-col px-[3rem] py-[5rem]">
        {/* date */}
        <p className="text-[15px] font-bold text-[#323232] border-[#323232] border-solid rounded-full border-[1px] w-fit px-5 py-2 mb-6">
          {date}
        </p>
        {/* title */}
        <h3 className="text-[22px] font-bold py-5">{title}</h3>
        {/* desc */}
        <p className="text-[15px] text-[#646464] font-medium">{description}</p>
        {/* blog cta */}
        <Link
          to="/blog"
          onClick={goTop}
          className="text-[15px] uppercase font-bold mt-10 w-[16rem] h-[5rem] flex items-center justify-center bg-[#FF0336] text-white text-center p-[14px]"
        >
          Read more &nbsp;
          <FaArrowRight />
        </Link>
      </div>
    </>
  );
}

// Add prop types validation
BlogSack.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
export default BlogSack;
