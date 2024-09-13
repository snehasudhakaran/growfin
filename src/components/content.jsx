import React, { useState, useEffect } from 'react';
import flow from '../assets/flow-chart.svg';
import house from '../assets/house.png';

// Sample data for content sections
const contentData = {
  'Instant Capture': {
    title: 'Instantly Capture All<br> Incoming Payments',
    description:
      "Growfin integrates with your bank accounts to extract every incoming transaction in real-time. It's almost magic.<br>Experience seamless integration!",
    features: [
      {
        icon: house,
        text: 'Integrates with all major banks',
      },
      {
        percentage: '100%',
        text: 'Identification of all transactions',
      },
    ],
  },
  // Additional items
  'Accurate Match': {
    title: 'Accurate Match for<br> Payments',
    description: 'Our system ensures every payment is matched accurately, reducing errors and manual work.Say goodbye to manual processing!',
    features: [
      {
        icon: house,
        text: 'Integrates with all major banks',
      },
      {
        percentage: '100%',
        text: 'Identification of all transactions',
      },
    ],
  },
  'Remittance Extraction': {
    title: 'Remittance Extraction<br> Simplified',
    description: 'Extract remittances with ease and streamline your cash application process. Improve efficiency with our solutions.',
    features: [
      {
        icon: house,
        text: 'Integrates with all major banks',
      },
      {
        percentage: '100%',
        text: 'Identification of all transactions',
      },
    ],
  },
  'Exceptions Handling': {
    title: 'Smart Exceptions<br> Handling',
    description: 'Handle exceptions with smart algorithms that reduce human intervention. Maximize automation, minimize errors.',
    features: [
      {
        icon: house,
        text: 'Integrates with all major banks',
      },
      {
        percentage: '100%',
        text: 'Identification of all transactions',
      },
    ],
  },
  'Touchless Posting': {
    title: 'Touchless Posting',
    description: 'Achieve touchless posting for 90% of payments while still retaining control over exceptions. Control at your fingertips.',
    features: [
      {
        icon: house,
        text: 'Integrates with all major banks',
      },
      {
        percentage: '100%',
        text: 'Identification of all transactions',
      },
    ],
  },
};

const ContentSection = () => {
  const [selectedContent, setSelectedContent] = useState('Instant Capture'); // Default content

  // Load the selected content from localStorage when the component mounts
  useEffect(() => {
    const savedContent = localStorage.getItem('selectedContent');
    if (savedContent) {
      setSelectedContent(savedContent);
    }
  }, []);

  // Function to handle item click
  const handleItemClick = (item) => {
    setSelectedContent(item);
    localStorage.setItem('selectedContent', item); // Save the selected content to localStorage
  };

  const currentContent = contentData[selectedContent];

  return (
    <section className="px-4 text-start transform">
      <div className="container mx-auto pt-20">
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1">
            <h1 className="text-[25px] md:text-[30px] lg:text-[52px] font-bold early-customers-title">
              Transform Your<br /> Cash Application Process
            </h1>
          </div>

          <div className="flex-1 flex justify-start items-end text-[15px] md:text-[24px]">
            <p>
              Achieve touchless posting for 90% of payments while still retaining control over exceptions that need a
              little extra human touch.
            </p>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 gap-y-8 text-center">
          {Object.keys(contentData).map((item, index) => (
            <div
              key={index}
              className={`pb-1 cursor-pointer ${
                selectedContent === item ? 'border-b-4 border-[#1E40AF] text-[#1E40AF] font-bold' : ''
              }`}
              onClick={() => handleItemClick(item)}
            >
              <h1 className="text-[16px] md:text-[20px]">{item}</h1>
            </div>
          ))}
        </div>

        {/* Content Display Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-10 mb-20">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-[20px] md:text-[32px] font-bold mb-10"  dangerouslySetInnerHTML={{ __html: currentContent.title }}/>
            <p
              className="text-[16px] md:text-[20px]"
              dangerouslySetInnerHTML={{ __html: currentContent.description }} // Render description with line breaks
            />

            {/* Features Display */}
            {currentContent.features.length > 0 && (
              <div className="flex gap-4 mt-10">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="p-4">
                    {feature.icon ? (
                      <div className="pb-5 pt-3">
                        <img src={feature.icon} alt={feature.text} className="w-[50px] h-[60px] max-w-[100px] pb-4" />
                        <p>{feature.text}</p>
                      </div>
                    ) : (
                      <div className='border-s-4 ps-6'>
                        <h1 className="pb-3 text-[40px] font-bold text-[#1E40AF]">{feature.percentage}</h1>
                        <p>{feature.text}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="flex-1 flex justify-center items-center text-[15px] md:text-[24px] bg-[#C4B5FD] py-10 transform-con-2">
            <img src={flow} alt="Flow Chart" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
