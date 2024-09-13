import React, { useState } from 'react';
import setIcon from '../assets/set.svg';
import checkIcon from '../assets/check.svg';
import eyeIcon from '../assets/eye.svg';
import smileyIcon from '../assets/smiley.svg';

const ExperienceSection = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Automate Cash Application', icon: setIcon, description: 'Auto-match payments and extract remittances from even unstructured data, and achieve straight-through posting.' },
    { id: 2, title: 'Achieve Exceptional Accuracy', icon: checkIcon, description: 'Ensure precise payment matching, even with partial or overpayments, to reduce posting errors and compliance nightmares.' },
    { id: 3, title: 'Deliver Real-time Visibility', icon: eyeIcon, description: 'Gain real-time visibility into cash flow and AR aging to optimize collection strategies and improve forecasting accuracy.' },
    { id: 4, title: 'Enhance Customer Experience', icon: smileyIcon, description: 'Avoid disputes, incorrect follow-ups and improve customer satisfaction with real-time, touchless cash applications.' },
  ]);

  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(index, 0, movedItem);
    setItems(updatedItems);
    setDraggedIndex(null);
  };

  return (
    <section className="px-4 text-start experience">
      <div className="container mx-auto py-20">
        {/* Parent Container with Flexbox */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          {/* First Container */}
          <div className="flex-1">
            <h1 className="text-[25px] md:text-[30px] lg:text-[52px] font-bold early-customers-title">
              Experience <br /> Cash Application Perfection
            </h1>
          </div>

          {/* Second Container */}
          <div className="flex-1 flex justify-start items-end text-[15px] md:text-[24px]">
            <p>
              Achieve touchless cash application to enable faster and accurate financial reporting
              for your business and a better experience for your customers.
            </p>
          </div>
        </div>

        {/* Grid of Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 gap-y-8">
          {items.map((item, index) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className="rounded bg-white p-[30px]"
            >
              <img src={item.icon} className="mb-[10px]" width="70" height="70" alt={item.title} />
              <h1 className="text-[14px] py-3 font-bold text-[20px] md:text-[22px] mb-[20px]">
                {item.title}
              </h1>
              <p className="text-[15px] md:text-[18px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="buttons flex flex-col sm:flex-row justify-center mt-10 gap-4">
          <button className="flex items-center px-8 font-semibold justify-center">
            Schedule a Demo
          </button>
          <button className="flex items-center px-8 font-semibold justify-center">
            Request Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
