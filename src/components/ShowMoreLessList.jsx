import PropTypes from "prop-types";
import { useState } from "react";
import { ClassesBox } from ".";

const ShowMoreLessList = ({ data, initialItems }) => {
  const [visibleItems, setVisibleItems] = useState(initialItems);
  const [showLess, setShowLess] = useState(false);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + initialItems);
    if (visibleItems + initialItems >= data.length) {
      setShowLess(true);
    }
  };

  const handleShowLess = () => {
    setVisibleItems(initialItems);
    setShowLess(false);
  };

  return (
    <>
      <div className="container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1 grid-cols-3 grid-rows-2 text-left grid">
        {data.slice(0, visibleItems).map((item, index) => (
          <ClassesBox
            key={index}
            bgImg={item.bgImg}
            title={item.title}
            trainer={item.trainer}
            date={item.date}
          />
        ))}
      </div>

      {data.length > initialItems && !showLess && (
        <button
          className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
          onClick={handleShowMore}
        >
          show more
        </button>
      )}
      {showLess && (
        <button
          className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
          onClick={handleShowLess}
        >
          show less
        </button>
      )}
    </>
  );
};

ShowMoreLessList.propTypes = {
  data: PropTypes.array.isRequired,
  initialItems: PropTypes.number.isRequired,
};
export default ShowMoreLessList;
