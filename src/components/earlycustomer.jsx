import React,{useState} from 'react';

// Import image assets
import portraitBusiness from '../assets/Portrait_Business.png';
import dollarIcon from '../assets/dollar.svg';
import clockIcon from '../assets/clock.svg';
import settingIcon from '../assets/setting.svg';
import peopleIcon from '../assets/people.svg';
import mindtickleLogo from '../assets/mindtickle.png';
import locusLogo from '../assets/logo-Locus.png';
import darwinboxLogo from '../assets/logo-darwinbox.png';
import commaIcon from '../assets/comma.png';



const EarlyCustomersComponent = () => {
    
    const quotes = [
        {
          text: `"Growfin’s Cash Application has helped us streamline the entire cash application process with less manual intervention & timely posting of payments. We were able to achieve one of our key objectives within months of going live."`,
          author: "Rohit Namboodiri",
          position: "AR Manager, Locus",
        },
        {
          text: `"Growfin provided us with an easy way to automate our financial workflows, which resulted in a significant increase in efficiency and reduced errors."`,
          author: "Jane Doe",
          position: "Finance Manager, TechCorp",
        },
        {
          text: `"The accuracy and speed of Growfin’s application have tremendously improved our cash application process and have been a game changer for our team."`,
          author: "John Smith",
          position: "Head of Finance, Business Inc.",
        },
      ];

      // State to keep track of the current quote index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next quote
  const nextQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  // Function to go to the previous quote
  const prevQuote = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  };
  return (
    <section className="early-customers px-6 py-10 lg:py-20">
      <div className="container mx-auto pb-5 pb-10">
        <h1 className="text-[25px] md:text-[30px] lg:text-[52px] font-bold text-center early-customers-title">
          What our Early Customers
          <br /> have Already Achieved
        </h1>
      </div>
      
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* First Container: Image */}
        <div className="flex-1">
          <img src={portraitBusiness} alt="Example Image" className="w-full h-auto object-cover rounded-lg" />
        </div>

        {/* Second Container: Nested Containers */}
        <div className="flex-1 flex flex-col gap-10 justify-center items-center">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4 gap-y-2 items-center md:items-end border-b-2">
            <div className="py-4 rounded-lg">
              <img src={dollarIcon} width="52px" height="52px" alt="Dollar Icon" />
            </div>
            <div className="w-[150px] py-2 rounded-lg text-center">
              <h2 className="text-[40px] font-bold">90%</h2>
            </div>
            <div className="py-4 rounded-lg md:w-[300px]">
              <p>Increase in same-day invoice posting</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 gap-y-2 items-center md:items-end border-b-2">
            <div className="py-4 rounded-lg">
              <img src={clockIcon} width="52px" height="52px" alt="Clock Icon" />
            </div>
            <div className="w-[150px] py-2 rounded-lg text-center">
              <h2 className="text-[40px] font-bold">70%</h2>
            </div>
            <div className="py-4 rounded-lg md:w-[300px]">
              <p>Increase in same-day invoice posting</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row gap-4 gap-y-2 items-center md:items-end border-b-2">
            <div className="py-4 rounded-lg">
              <img src={settingIcon} width="52px" height="52px" alt="Setting Icon" />
            </div>
            <div className="w-[150px] py-2 rounded-lg text-center">
              <h2 className="text-[40px] font-bold">75%</h2>
            </div>
            <div className="py-4 rounded-lg md:w-[300px]">
              <p>Increase in automation for manual Cash Application</p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col md:flex-row gap-4 gap-y-2 items-center md:items-end border-b-2">
            <div className="py-4 rounded-lg">
              <img src={peopleIcon} width="52px" height="52px" alt="People Icon" />
            </div>
            <div className="w-[150px] py-2 rounded-lg text-center">
              <h2 className="text-[40px] font-bold">100%</h2>
            </div>
            <div className="py-4 rounded-lg md:w-[300px]">
              <p>Increase in same-day invoice posting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <section className="container px-20 py-20 mx-auto">
        <div className="flex flex-col sm:flex-row gap-x-40 justify-center items-center gap-y-20">
          <div className="justify-center">
            <img src={mindtickleLogo} alt="Mindtickle Logo" className="h-[26px] rounded-lg" />
          </div>
          <div className="justify-center">
            <img src={locusLogo} alt="Locus Logo" className="h-[30px] rounded-lg" />
          </div>
          <div className="justify-center">
            <img src={darwinboxLogo} alt="Darwinbox Logo" className="h-[34px] rounded-lg" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container px-20 mx-auto quotes">
      <div className="text-center mb-8">
        <div className="flex justify-center items-center mb-8">
          <img src={commaIcon} alt="Comma Icon" />
        </div>

        {/* Displaying the current quote */}
        <p className="font-semibold text-[15px] md:text-[24px] mb-8">
          {quotes[currentIndex].text}
        </p>
        <p className="font-semibold">
          – {quotes[currentIndex].author}, <span className="font-normal text-[14px] md:text-[18px]">{quotes[currentIndex].position}</span>
        </p>
      </div>

      {/* Carousel navigation buttons */}
      <div className="prev-buttons flex justify-center gap-3">
        <button
          onClick={prevQuote}
          className={`carousel-dot w-3 h-3 rounded-xl ${currentIndex === 0 ? 'active' : ''}`}
        ></button>
        <button
          onClick={nextQuote}
          className={`carousel-dot w-3 h-3 rounded-xl ${currentIndex === 1 ? 'active' : ''}`}
        ></button>
        {/* Add more buttons if you have more quotes */}
      </div>
    </section>
    </section>
  );
};

export default EarlyCustomersComponent;
