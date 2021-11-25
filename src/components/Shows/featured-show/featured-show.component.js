import React from "react";

const FeaturedShow = () => {
  const imgPath = "https://s3.us-east-2.amazonaws.com/zachcasts/blades%26bending_cover.png";

  return (
    <>
      <div className="text-lg font-medium mt-16 mb-4">Featured Show</div>
      <div
        className="relative w-full h-72 rounded-lg bg-cover bg-center bg-no-repeat backdrop-blur-md"
        style={{ backgroundImage: `url(${imgPath})` }}
      >
        <div className="h2 font-semibold absolute bottom-4 left-4">Featured Name</div>
      </div>
    </>
  );
};

export default FeaturedShow;
