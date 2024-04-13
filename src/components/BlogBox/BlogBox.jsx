import { MainButton } from "@/components";
import { FaLayerGroup } from "react-icons/fa6";
import PropTypes from "prop-types";

function BlogBox({ img, title }) {
  return (
    <>
      <div>
        <img src={img} alt="blog_img" />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <FaLayerGroup className="text-[#ff0336] text-[16px]" />
          &nbsp; By <b>Admin</b> | March 11, 2022 | Yoga
        </p>
        <h2 className="text-[3rem] font-bold mb-6">{title}</h2>
        <p className="font-medium text-[16px] text-[#646464] mb-24">
          Authoritatively disseminate multimedia based total linkage through
          market-driven methodology.Continually transform integrated results
          vis-a-vis multidisciplinary manufacture Appropriately foster full
          researched innovation rather than backend supply. when an unknown
          printer took a galley.
        </p>
        <MainButton
          color={`!text-white`}
          bg={`bg-[#ff0336]`}
          text="purchase now"
          arrowColor={`!text-white`}
          cN="pricing-cta blog-cta"
        />
      </div>
    </>
  );
}

BlogBox.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogBox;
