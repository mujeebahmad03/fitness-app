import { cardList } from "./CardList";

function AboutCards() {
  return (
    <>
      {cardList.map((card) => (
        <div
          key={card.title}
          className={`cursor-pointer bg-white  py-6 px-10 mt-12 rounded-tl-[35px] rounded-br-[35px] shadow-2xl min-h-[340px] w-full card-item-div md1000:min-h-[260px]`}
        >
          <div className="overlay rounded-tl-[35px] rounded-br-[35px]" />
          <div className="relative flex flex-col justify-center text-center items-center z-10">
            <img src={card.img} alt="box_img" className=" w-[75px] mb-4" />
            <p className=" text-[24px] font-bold uppercase mb-7">
              {card.title}
            </p>
            <p className="text-[15px] font-medium leading-2 w-full">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default AboutCards;
