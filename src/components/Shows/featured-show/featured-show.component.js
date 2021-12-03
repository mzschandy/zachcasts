import React from "react";

const FeaturedShow = () => {
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/blades%26bending_cover.png";

  return (
    <>
      <div className="md:text-lg font-medium mt-24 md:mt-16 md:mb-4 hidden md:block">Featured Show</div>
      <div
        className="relative w-full md:h-72 h-44 rounded-xl  md:rounded-lg bg-cover bg-center bg-no-repeat backdrop-blur-md"
        style={{ backgroundImage: `url(${imgPath})` }}
      >
        <div className="h2 font-semibold absolute bottom-4 left-4 text-white">Featured Name</div>
      </div>
    </>
  );
};

export default FeaturedShow;
