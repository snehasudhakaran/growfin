import React from 'react';

// Import your image assets
import bannerImage from '../assets/banner-section.svg';

const BannerComponent = () => {
  return (
    <section className="banner-container px-6">
      <div className="container mx-auto py-4 lg:py-20">
        {/* Flex container for both sections */}
        <div className="flex flex-col lg:flex-row gap-8 gap-y-0">
          {/* First Section */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-[25px] md:text-[40px] lg:text-[60px] font-bold mb-4 lg:mb-6 banner-title">
              Real-Time <br />
              Cash Application Software
            </h1>
            <p className="text-[15px] md:text-[20px] mb-10 lg:mb-20 banner-text">
              Radically minimize manual intervention and achieve same-day closure with Growfin’s ML-powered Cash
              Application that delivers accurate, touchless posting.
            </p>
            <div className="buttons flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="flex items-center px-8 font-semibold justify-center">
                Schedule a Demo
              </button>
              <button className="flex items-center px-8 font-semibold justify-center">
                Request Access
              </button>
            </div>
          </div>

          {/* Second Section */}
          <div className="flex-1 flex justify-center items-center">
            {/* Adjust image sizes and positioning as needed */}
            <img src={bannerImage} alt="Banner Section" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
