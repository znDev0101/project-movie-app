import React from 'react';

const Card = (props) => {
  const { title, release_date, images, vote } = props;

  return (
    <div className="mt-1 sm:p-3 shadow-none  sm:hover:shadow-xl transition duration-300 cursor-pointer rounded-xl">
      {/* Card */}
      <div className="text-start">
        <div className="relative">
          <img src={images} alt="images" className="w-48 rounded-lg" />
          <h5 className={`absolute -top-3 text-slate-100 opacity-90  font-bold py-0 px-2 rounded-md ${vote > 7 ? 'bg-green-500' : vote > 6 ? 'bg-yellow-500' : 'bg-red-500'} `}>{vote}</h5>
        </div>
        <h6 className="mt-2 font-bold duration-300 hover:text-red-400">{title}</h6>
        <h6>{release_date}</h6>
      </div>
    </div>
  );
};

export default Card;
