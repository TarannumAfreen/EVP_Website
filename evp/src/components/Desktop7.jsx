

import React from 'react';
import b2 from '../assets/images/new/b2.png';
import b4 from '../assets/images/new/b4.png';
import b5 from '../assets/images/new/b5.png';
import b7 from '../assets/images/new/b7.png';
import b6 from '../assets/images/new/b6.png';
import radar from '../assets/images/new/Radar.png';
import skull from '../assets/images/new/skull.png'


const Desktop7 = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center p-[61px_0_0_0] w-[1322px] box-sizing-border">
      <div className="relative flex flex-col items-center w-full max-w-[2811.5px] box-sizing-border">
        <div className="m-[0_56px_23.9px_56px] flex flex-row justify-between items-center w-full max-w-[1509.6px] box-sizing-border">
          {/* Content */}
        </div>

        <div className="m-[0_0_60px_0] inline-block break-words font-['Black_Mango','Roboto_Condensed'] font-bold text-[60px] tracking-[-1px] leading-[1.629] text-[#000000]">
          Our Programs
        </div>

        

<div className="flex justify-center w-full mb-12 ml-20">
        <div className="flex">
          <ul className="font-medium text-xl">
            <li className="mb-4">Pre-Incubation Program</li>
            <li className="mb-4">Incubation Program</li>
            <li className="mb-4">Campus Leadership Program</li>
            <li className="mb-4">Incubation Manager Fellowship</li>
            <li className="mb-4">Internships</li>
            <li className="mb-4">Founders’ Friday</li>
            <li className="mb-4">Founders' Fest</li>
            <li className="mb-4 ">EdTalk</li>
            <li>Builders' Sunday</li>
          </ul>
          <div className="border-l-2 border-green-500 mx-10"></div>
          <div className="max-w-2xl">
            <h2 className="font-bold text-2xl mb-6">Builders' Sunday</h2>
            <p className="font-normal text-lg leading-relaxed">
            Introducing EdVenture Park's Hardware Incubator - India’s Fastest prototyping centre, for inquisitive hardware and technology enthusiasts through thoughtfully organised meet-ups. These gatherings are designed to create and enhance their practical skills in creation.<br />

              <br /><br />
              In line with promoting the idea of inclusive communities, EdVenture Park's Hardware Incubator extends a warm invitation to individuals from diverse educational backgrounds, offering them the chance to refine their hardware expertise.
            </p>
          </div>
        </div>
      </div>
         <div className="container mt-44 ml-96">
      <h1 className="text-6xl font-bold text-center">Innovation meets Instruction</h1>
      <img 
        src={skull} 
        alt="Skeleton holding its head" 
        className="w-96 h-96 mt-6 hover:cursor-pointer"
      />
    </div> 
   


        <div className="m-[0_0_18px_0] flex flex-col w-[fit-content] box-sizing-border">
          <div className="m-[0_0_56px_0] flex flex-col self-start w-[fit-content] box-sizing-border">
            <div className="m-[0_0_11px_0] inline-block break-words font-['Poppins'] font-bold text-[38px] leading-[1.3] text-[#302525] ml-32">
              Here’s some of our Hardware Creations
            </div>
            <div className="bg-[#169D53] self-start w-[80px] h-[0px]"></div>
            
          </div>

          <div className="flex flex-row justify-center items-center ml-40 mb-6 w-full box-border ">
            <div className="rounded-[32px] m-2 transition-shadow duration-500 hover:shadow-lg">
              <img src={b2} alt="" className="w-[500px] h-[400px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out " />
            </div>
            <div className="rounded-[62px] m-2">
              <img src={b4} alt="" className="w-[500px] h-[400px]  object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center ml-40 mb-6 w-full box-border">
            <div className="rounded-[12px] m-2">
              <img src={b5} alt="" className="w-[440px] h-[380px] object-cover  duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              <div className="rounded-[12px] mt-4">
                <img src={b6} alt="" className="w-[440px] h-[380px] object-cover  duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              </div>
            </div>
            <div className="rounded-[12px] m-2">
              <img src={b7} alt="" className="w-[500px] h-[400px] object-cover  duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              <div className="rounded-[12px] mt-4">
                <img src={radar} alt="" className="w-[500px] h-[400px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
              </div> 
            </div>
          </div>
     
        </div>
        <h1 className='text-lg ml-36 '>By providing complimentary access to an interactive and invigorating environment, coupied with 
        well-structured modules and components, our aim is to cultivate a hands-on approach to learning. This approach serves to instil practical knowledge and engagement.</h1>
   

        <div className="bg-[#169D53] relative flex flex-col items-center p-[206px_0_119px_0] w-[1622px] box-sizing-border ml-20 mt-32">
          <h1 className='text-4xl font-bold'>Become an official member of our quirky, fun-loving team</h1>
          <div className="m-[0_0_32px_0] inline-block break-words font-['Poppins'] font-normal text-[30px] tracking-[-1px] leading-[1.955] text-[#000000]">
            Join our community
          </div>
          {/* <img className="rounded-[5px] w-[330px] h-[40px]" src="../assets/vectors/rectangle_42_x2.svg" /> */}
          <button className="bg-black text-white px-8 py-3 rounded-md text-lg">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Desktop7;

