import React from 'react';

// Import your image assets
import growfinLogo from '../assets/growfin.png';
import growfinTextLogo from '../assets/Growfin.svg';

const HeaderComponent = () => {
  return (
    <header>
      {/* Navbar */}
      <nav className="bg-white shadow-md px-10 pt-8 pb-4 navbar">
        <div className="container mx-auto flex justify-between items-end">
          {/* Navbar Title */}
          <div className="text-2xl font-bold text-gray-800">
            <div className="flex justify-end">
              <img src={growfinLogo} alt="Growfin Logo" width="40px" height="30px" />
            </div>
            <div>
              <img src={growfinTextLogo} alt="Growfin Text Logo" width="98px" height="21px" />
            </div>
          </div>

          {/* Navbar Buttons */}
          <div className="hidden md:flex space-x-4 buttons">
            <button className="flex items-center px-6 font-semibold justify-center">
              Schedule a Demo
            </button>
            <button className="flex items-center px-6 font-semibold justify-center">
              Request Access
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
