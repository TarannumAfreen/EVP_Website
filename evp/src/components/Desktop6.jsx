

import React from 'react';
import b2 from '../assets/images/desktop6/b2.png';
import b4 from '../assets/images/desktop6/b4.png';
import b5 from '../assets/images/desktop6/b5.png';
import b7 from '../assets/images/desktop6/b7.png';
import b6 from '../assets/images/desktop6/b6.png';
import radar from '../assets/images/desktop6/Radar.png';
import skull from '../assets/images/desktop6/skull.png'

const Desktop6 = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center p-4 md:p-[61px_0_0_0] w-full md:w-[1322px] box-sizing-border">
      <div className="relative flex flex-col items-center w-full max-w-full md:max-w-[2811.5px] box-sizing-border">
        <div className="m-[0_16px_16px_16px] md:m-[0_56px_23.9px_56px] flex flex-col md:flex-row justify-between items-center w-full max-w-full md:max-w-[1509.6px] box-sizing-border">
          {/* Content */}
        </div>

        <div className="m-[0_0_20px_0] md:m-[0_0_60px_0] inline-block break-words font-['Black_Mango','Roboto_Condensed'] font-bold text-3xl md:text-[60px] tracking-[-1px] leading-[1.629] text-[#000000]">
          Our Programs
        </div>

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
            <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-6 font-['Black Mango']">Builders' Sunday</h2>
            <p className="font-normal text-base sm:text-lg leading-relaxed font-poppins">
                Introducing EdVenture Park's Hardware Incubator - India’s Fastest prototyping centre, for inquisitive hardware and technology enthusiasts through thoughtfully organised meet-ups. These gatherings are designed to create and enhance their practical skills in creation.<br />
                <br /><br />
                In line with promoting the idea of inclusive communities, EdVenture Park's Hardware Incubator extends a warm invitation to individuals from diverse educational backgrounds, offering them the chance to refine their hardware expertise.
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-20 md:mt-36 ml-0 md:ml-96">
          <h1 className="text-3xl md:text-6xl font-bold text-center font-['League_Gothic']">Innovation meets Instruction</h1>
          <img 
            src={skull} 
            alt="Skeleton holding its head" 
            className="w-60 md:w-96 h-60 md:h-96 mt-6 hover:cursor-pointer"
          />
        </div> 

        <div className="m-[0_0_18px_0] flex flex-col w-full md:w-[fit-content] box-sizing-border">
          <div className="m-[0_0_36px_0] md:m-[0_0_56px_0] flex flex-col self-start w-full md:w-[fit-content] box-sizing-border">
            <div className="m-[0_0_11px_0] inline-block break-words font-['Poppins'] font-bold text-2xl md:text-[38px] leading-[1.3] text-[#302525] ml-0 md:ml-32">
              Here’s some of our Hardware Creations
            </div>
            <div className="bg-[#169D53] self-start w-[50px] md:w-[80px] h-[2px] md:h-[0px]"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center ml-0 md:ml-40 mb-4 md:mb-6 w-full box-border">
            <div className="rounded-[16px] md:rounded-[32px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={b2} alt="" className="w-full md:w-[600px] h-[500px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
            <div className="rounded-[32px] md:rounded-[62px] m-2">
              <img src={b4} alt="" className="w-full md:w-[600px] h-[400px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center ml-0 md:ml-40 mb-4 md:mb-6 w-full box-border">
            <div className="rounded-[12px] m-2">
              <img src={b5} alt="" className="w-full md:w-[540px] h-[400px] md:h-[480px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              <div className="rounded-[12px] mt-4">
                <img src={b6} alt="" className="w-full md:w-[540px] h-[400px] md:h-[480px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              </div>
            </div>
            <div className="rounded-[12px] m-2">
              <img src={b7} alt="" className="w-full md:w-[600px] h-[300px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              <div className="rounded-[12px] mt-4">
                <img src={radar} alt="" className="w-full md:w-[600px] h-[400px] md:h-[500px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              </div> 
            </div>
          </div>
        </div>

        <h1 className="text-sm md:text-lg ml-8 md:ml-36 mt-6 md:mt-12 font-poppins">By providing complimentary access to an interactive and invigorating environment, coupled with well-structured modules and components, our aim is to cultivate a hands-on approach to learning. This approach serves to instill practical knowledge and engagement.</h1>

        <div className="bg-[#169D53] relative flex flex-col items-center p-12 md:p-[206px_0_119px_0] w-full md:w-[1622px] box-sizing-border ml-0 md:ml-20 mt-12 md:mt-32">
          <h1 className="text-2xl md:text-4xl font-bold text-center font-poppins">Become an official member of our quirky, fun-loving team</h1>
          <div className="m-[0_0_20px_0] md:m-[0_0_32px_0] inline-block break-words font-['Poppins'] font-normal text-lg md:text-[30px] tracking-[-1px] leading-[1.955] text-[#000000] font-poppins">
            Join our community
          </div>
          <button className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-md text-sm md:text-lg font-poppins">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Desktop6;


