

import React from 'react';
import e1 from '../assets/images/desktop5/e1.png';
import e2 from '../assets/images/desktop5/e2.png';
import e3 from '../assets/images/desktop5/e3.png';
import e4 from '../assets/images/desktop5/e4.png';
import e5 from '../assets/images/desktop5/e5.png';
import e6 from '../assets/images/desktop5/e6.png';

const Desktop5 = () => {
  return (
    <div className="bg-white flex flex-col items-center p-0 w-full box-border overflow-x-hidden">
      {/* Header Section */}
      <div className="w-full flex justify-end items-start p-6">
        {/* Add header content here */}
      </div>

      {/* Our Programs Section */}
      <div className="text-center my-8 md:my-12">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-black">Our Programs</h1>
      </div>

      {/* Programs List and Description */}
      <div className="flex flex-col md:flex-row justify-center w-full mb-8 md:mb-12 ml-4 md:ml-20">
        <div className="flex flex-col md:flex-row">
          <div className="font-medium text-lg sm:text-xl mb-6 md:mb-0 font-['Black Mango']">
            <div className="mb-4">Pre-Incubation Program</div>
            <div className="mb-4">Incubation Program</div>
            <div className="mb-4">Campus Leadership Program</div>
            <div className="mb-4">Incubation Manager Fellowship</div>
            <div className="mb-4">Internships</div>
            <div className="mb-4">Founders’ Friday</div>
            <div className="mb-4">Founders' Fest</div>
            <div className="mb-4">EdTalk</div>
            <div>Builders' Sunday</div>
          </div>
          <div className="border-l-2 border-green-500 mx-6 md:mx-10"></div>
          <div className="max-w-full md:max-w-2xl">
            <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-6 font-['Black Mango']">EdTalk</h2>
            <p className="font-normal text-base sm:text-lg leading-relaxed font-poppins">
              EdTalk stands as an exclusive program made for Campus Leads, who serve as the 'CEO of EdVenture Park' at their respective campuses. This program, EdTalk, is built upon the foundation of the 3E’s - Experience, Engagement, and Expression.
              <br /><br />
              These elements collectively contribute to the growth of self-assurance among our Campus Leads, a trait nurtured organically through their regular interactions and discussions.
            </p>
          </div>
        </div>
      </div>

      {/* Snapshots Section */}
      <div className="ml-4 md:ml-48 mt-10 md:mt-20 mr-4 md:mr-48 bg-gray-900 text-white py-8 md:py-10 px-4 md:px-5 w-[95%] overflow-x-hidden">
        <div className="max-w-4xl sm:max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8">Here’s some of our <span className="text-green-500">EdTalk</span> Snapshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            <img className="rounded-lg object-cover w-full h-auto" src={e1} alt="EdTalk Image 1" />
            <img className="rounded-lg object-cover w-full h-auto" src={e2} alt="EdTalk Image 2" />
            <img className="rounded-lg object-cover w-full h-auto" src={e3} alt="EdTalk Image 3" />
            <img className="rounded-lg object-cover w-full h-auto" src={e4} alt="EdTalk Image 4" />
            <img className="rounded-lg object-cover w-full h-auto" src={e5} alt="EdTalk Image 5" />
            <img className="rounded-lg object-cover w-full h-auto" src={e6} alt="EdTalk Image 6" />
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-10 text-black text-lg sm:text-xl md:text-[22px] font-serif leading-[1.5] md:leading-[1.393] capitalize mx-4 md:mx-16 mb-12 md:mb-24 font-poppins">
        <p>
          During these sessions, the Moderator and Panellists share their
          viewpoints, offering valuable insights that enrich the audience's
          understanding and provide key takeaways. This process not only
          imparts valuable principles but also enriches the ecosystem with its
          ambitious outcomes.
        </p>
        <p className="mt-6 font-poppins">
          The core objective of EdTalk is to provide continuous support to
          Campus Leads as they confront significant challenges, while also
          equipping them with the skill-based tools necessary for their growth.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-500 flex flex-col items-center py-16 md:py-24 w-full">
        <p className="text-center text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-6 md:mb-8 font-poppins">Want to be a part of these exclusive discussions?</p>
        <p className="font-normal text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8 font-poppins">Join as a Campus Lead!</p>
        <button className="bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-lg font-poppins">Join Now</button>
      </div>
    </div>
  );
};

export default Desktop5;

