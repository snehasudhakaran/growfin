import React from 'react';
import linkedinIcon from '../assets/linkedin.svg';
import xIcon from '../assets/x.svg';
import facebookIcon from '../assets/facebook.svg';
import instaIcon from '../assets/insta.svg';

const Footer = () => {
  return (
    <footer className="bg-black px-4 lg:px-20">
      <div className="container mx-auto bg-black py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {/* Box 1 */}
          <div className="rounded">
            <h1 className="text-[14px] text-[#FFFFFF] py-3">Features</h1>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Strategize</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Collaboration</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Tracking</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Reporting</p>
          </div>
          {/* Box 2 */}
          <div className="rounded">
            <h1 className="text-[14px] text-[#FFFFFF] py-3">What’s in it for you?</h1>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">By Role</p>
            <ul className="list-disc ms-5">
              <li className="text-[#FFFFFF] text-[15px] pb-2 font-medium">CFOs and Directors of Finance</li>
              <li className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Controllers</li>
              <li className="text-[#FFFFFF] text-[15px] pb-2 font-medium">AR Managers</li>
              <li className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Collection Teams</li>
            </ul>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">CSMs, AEs and AMs</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">By Tech Stack</p>
          </div>
          {/* Box 3 */}
          <div className="rounded">
            <h1 className="text-[14px] text-[#FFFFFF] py-3">Resources</h1>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Blog</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Webinars</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">The Casheroes</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">ROI Calculator</p>
          </div>
          {/* Box 4 */}
          <div className="rounded">
            <h1 className="text-[14px] text-[#FFFFFF] py-3">Company</h1>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">About us</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Careers</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Sales Book a demo</p>
          </div>
          {/* Box 5 */}
          <div className="rounded">
            <h1 className="text-[14px] text-[#FFFFFF] py-3">Contact us</h1>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium email-text">hello@growfin.ai</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">3082, Moser Way, Marietta, GA 30060</p>
          </div>
          {/* Box 6 */}
          <div className="rounded">
            <h1 className="text-[14px] text-[#FFFFFF] py-3">Legal</h1>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Terms of use</p>
            <p className="text-[#FFFFFF] text-[15px] pb-2 font-medium">Privacy policy</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-[35px] gap-y-5 justify-start items-center mt-[36px]">
          <div className="flex gap-[15px]">
            <img src={linkedinIcon} width="30" height="30" alt="LinkedIn" />
            <img src={xIcon} width="30" height="30" alt="X" />
            <img src={facebookIcon} width="30" height="30" alt="Facebook" />
            <img src={instaIcon} width="30" height="30" alt="Instagram" />
          </div>
          <div>
            <p className="text-[#FFFFFF] text-[14px]">Copyright © 2023 Growfin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
