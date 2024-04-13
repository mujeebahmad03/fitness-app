import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function MainButton({ color, bg, cN, arrowColor, hover, text, goTo }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      href={goTo}
      className={`text-[15px]  ${color} ${bg} ${cN} text-center p-[16px] font-[600] uppercase hero-cta relative ml-2 flex justify-center gap-[1px] ${hover} `}
    >
      {text} &nbsp;
      <FaArrowRight className={`text-[#FF0336] text-3xl ${arrowColor}`} />
    </Link>
  );
}

MainButton.propTypes = {
  color: PropTypes.string.isRequired,
  bg: PropTypes.string,
  cN: PropTypes.string,
  arrowColor: PropTypes.string,
  hover: PropTypes.string,
  text: PropTypes.string,
  goTo: PropTypes.string,
};

export default MainButton;
