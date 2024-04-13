import { Link } from "react-router-dom";

const Join = () => {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to="/contact"
      className="text-white text-[15px] font-medium bg-[#555] py-[10px] px-[20px] rounded-[30px] hover:bg-[#ff0336] ease-in duration-200"
    >
      Join Now
    </Link>
  );
};

export default Join;
