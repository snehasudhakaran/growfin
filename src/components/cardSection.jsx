import React from 'react';

const CardSection = () => {
  return (
    <section className="px-4">
      <section className="container px-20 mx-auto card py-20 mb-20">
        <h1 className="text-[25px] md:text-[30px] lg:text-[52px] font-bold text-center card-title mb-14">
          Embrace the Future of Cash<br /> Application Today
        </h1>
        <div className="buttons flex flex-col sm:flex-row justify-center gap-4">
          <button className="flex items-center px-8 font-semibold justify-center">
            Schedule a Demo
          </button>
          <button className="flex items-center px-8 font-semibold justify-center">
            Request Access
          </button>
        </div>
      </section>
    </section>
  );
};

export default CardSection;
