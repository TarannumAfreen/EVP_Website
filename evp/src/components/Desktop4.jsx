


import React from 'react';

import i1 from '../assets/images/desktop4/i1.png';
import i2 from '../assets/images/desktop4/i2.png';
import i3 from '../assets/images/desktop4/i3.png';
import i4 from '../assets/images/desktop4/i4.png';
import i5 from '../assets/images/desktop4/i5.png';
import i6 from '../assets/images/desktop4/i6.png';
import preincubation from '../assets/images/desktop4/pre-incubation.png';

const Desktop4 = () => {
  return (
    <div className="bg-[#FFFFFF] p-[61px_0_0_0] w-full overflow-x-hidden">
      <div className="relative flex flex-col items-center w-full max-w-[2811.5px] overflow-x-hidden">
        <div className="m-[0_16px_23.9px_16px] md:m-[0_56px_23.9px_56px] flex flex-col md:flex-row justify-between items-center w-full max-w-[1509.6px]">
          {/* Add content for header */}
        </div>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8">Our Programs</h1>

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
            <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-6 font-['Black Mango']">Incubation Program</h2>
            <p className="font-normal text-base sm:text-lg leading-relaxed font-poppins">
                Incubation Program is a 32-week-long intensive and tailor-made program for Early stage startups focusing on achieving PMF.
                <br /><br />
                After the Pre-Incubation Program, selected companies move onto the Incubation Program, which primarily focuses on figuring out the product market fit of the start-up. After figuring out the PMF, it's about scaling up the company and getting investors from diverse industries onboard.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-5 inline-block break-words font-['League_Gothic'] font-bold text-[30px] md:text-[45.2px] leading-[0.906] text-[#000000]">
          BUILDING FUNDAMENTALLY RIGHT COMPANIES
        </div>
        <div className="mt-2 ml-4 md:ml-32 mr-4 md:mr-44 mb-12 md:mb-24 font-poppins inline-block self-start break-words text-[16px] md:text-[25px] leading-[1.582] text-[#000000]">
          We build fundamentally right companies, and it's important that we create solutions that will benefit people.
          <div className="mt-6 md:mt-10">
            <h1><span className="font-bold font-poppins">Audience:</span> Early & Growth Stage Startups</h1>
          </div>
          <div>
            <h1><span className="font-bold font-poppins">Expected Outcomes:</span> Substantial Growth, Scaling up, Market Share & Investment Ready</h1>
          </div>
        </div>

        <div className="m-[0_16px_16px_16px] md:m-[0_255px_55px_255px] flex flex-col md:flex-row self-start w-full max-w-[1111px]">
          <div className="bg-[#9D1660] relative m-[0_0_16px_0] md:m-[0_85px_0_0] flex px-16 md:px-24 py-4 md:py-6 w-full md:w-[513px] font-poppins">
            <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF] font-poppins">
              Problem focused 1:1<br />
            </span>
          </div>
          <div className="bg-[#9D9616] relative flex px-16 md:px-24 py-4 md:py-6 w-full md:w-[513px] font-poppins">
            <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF] font-poppins">
              Phased Learnings<br />
            </span>
          </div>
        </div>
        <div className="m-[0_16px_32px_16px] md:m-[0_255px_128px_255px] flex flex-col md:flex-row self-start w-full max-w-[1111px] font-poppins">
          <div className="bg-[#169D53] relative m-[0_0_16px_0] md:m-[0_85px_0_0] flex px-16 md:px-24 py-4 md:py-6 w-full md:w-[513px] font-poppins">
            <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF] font-poppins">
              Self-paced options
            </span>
          </div>
          <div className="bg-[#9D5316] relative flex px-16 md:px-24 py-4 md:py-6 w-full md:w-[513px] font-poppins">
            <span className="break-words font-medium text-lg md:text-[30px] tracking-[-1px] leading-[1.4] text-[#FFFFFF] font-poppins">
              Scrum Meetings<br />
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col md:flex-row justify-center items-center mb-6 w-full">
            <div className="rounded-[12px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={i1} alt="" className="w-[370px] md:w-[570px] h-[280px] md:h-[400px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[12px] m-2">
              <img src={i2} alt="" className="w-[370px] md:w-[570px] h-[280px] md:h-[400px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mb-6 w-full">
            <div className="rounded-[12px] m-2">
              <img src={i3} alt="" className="w-[320px] md:w-[540px] h-[290px] md:h-[480px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              <div className="rounded-[12px] mt-4">
                <img src={i4} alt="" className="w-[320px] md:w-[540px] h-[290px] md:h-[480px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              </div>
            </div>
            <div className="rounded-[12px] m-2">
              <img src={i5} alt="" className="w-[400px] md:w-[600px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              <div className="rounded-[12px] mt-4">
                <img src={i6} alt="" className="w-[400px] md:w-[600px] h-[350px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              </div>
            </div>
          </div>
      
        <h2 className="text-black text-6xl font-semibold lg:mr-[1100px] md:mr-0 ">Tracks</h2>

        <p className="lg:mr-64 md:mr-0 my-9 font-poppins w-2/3 lg:text-xl md:text-lg sm:text-base font-normal justify-left ">
Comparising a set of strategic tracks, this program provides startups with the tools and support they need to thrive in the competitive business landscape.
        
        </p>
          
       
  


   
    <div className="rounded-[12px] m-2">
            <img src={preincubation} alt="" className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Desktop4;


