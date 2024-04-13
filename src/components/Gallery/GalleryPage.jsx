import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GalleryPage({ currentPage, images, totalPages }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-7 md1000:grid-cols-2 min540:grid-cols-1">
        {images.map((image, index) => (
          <div key={index}>
            <img
              alt="gallery_img"
              className="w-full h-auto"
              src={image.img}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Pagination links */}
      <div className="flex justify-center gap-3 mt-32">
        {[...Array(totalPages)].map((_, i) => (
          <Link
            key={i + 1}
            to={`/gallery/page/${i + 1}`}
            onClick={() => window.scrollTo(0, 0)}
            className={`inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md ${
              currentPage === i + 1
                ? "bg-[#ff0336] text-white"
                : "bg-white text-black"
            }`}
          >
            {i + 1}
          </Link>
        ))}
      </div>
    </>
  );
}

GalleryPage.propTypes = {
  currentPage: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
};
export default GalleryPage;
