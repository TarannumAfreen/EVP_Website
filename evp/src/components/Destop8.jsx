

import React from 'react';
import img1 from '../assets/images/desktop8/1.png';
import img2 from '../assets/images/desktop8/2.png';
import img3 from '../assets/images/desktop8/3.png';
import img4 from '../assets/images/desktop8/4.png';
import img5 from '../assets/images/desktop8/5.png';
import img6 from '../assets/images/desktop8/6.png';
import yes from '../assets/images/desktop8/yes.png';
import simrah from '../assets/images/desktop8/simrah.png';
import networking from '../assets/images/desktop8/networking.png';
import business from '../assets/images/desktop8/business.png';
import crowdpitching from '../assets/images/desktop8/crowdpitching.png';

const Desktop8 = () => {
  return (
    <div className="bg-[#FFFFFF] flex p-[61px_3px_0_0] w-full max-w-full box-sizing-border overflow-x-hidden">

      <div className="absolute left-[182px] top-[823px] flex w-[292px] h-[656px] box-sizing-border">
        <div className="rounded-[10px] bg-[#169D53] w-[1000px] h-[756px]"></div>
      </div>

      <div className="relative flex flex-col items-center w-full h-[fit-content] box-sizing-border">
        <div className="m-[0_53.4px_23.9px_59px] flex flex-row justify-between w-full box-sizing-border">
          <div className="bg-[url('../assets/images/evp_new_logo_2.png')] w-[251px] h-[126.1px]"></div>
          <div className="m-[28px_0_43.1px_0] flex flex-row w-[310.5px] h-[fit-content] box-sizing-border">

          </div>
        </div>

        {/* Our Programs Section */}
        <div className="text-center my-12">
          <h1 className="font-bold text-5xl text-black">Our Programs</h1>
        </div>

        {/* Programs List and Description */}
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
              <li className="mb-4">EdTalk</li>
              <li>Builders' Sunday</li>
            </ul>
            <div className="border-l-2 border-green-500 mx-10"></div>
            <div className="max-w-2xl">
              <h2 className="font-bold text-2xl mb-6">Founders’ Friday</h2>
              <p className="font-normal text-lg leading-relaxed">
                Founders' Friday is EdVenture Park's flagship event held on the
                first Friday of every month. It serves as a "No-Agenda Networking
                Event" bringing together Founders, Entrepreneurs, Investors, and
                other key members of the startup ecosystem. The event is a tribute
                to founders, celebrating their endeavors, challenges, and
                aspirations. Founders' Friday focuses on networking, emphasizing
                the importance of connections in the startup world.
                <br />
              </p>
            </div>
          </div>
        </div>
      


<div className="m-[0_146px_79.5px_146px] flex flex-row justify-between self-end w-[fit-content] box-sizing-border">
   <div className="m-[0_46px_0_0] flex flex-col items-end w-[830px] h-[756px] box-sizing-border">
     <div className="relative m-[0_0_35px_0] p-[0] w-[fit-content] h-[529px] flex-grow box-sizing-border">
       <span className="relative block font-serif  text-[100px] leading-[0.96] text-[#FFFFFF] mb-4 mt-4 ">
         FOUNDERS’ FRIDAY
       </span>
       <div
        className="bg-cover bg-no-repeat w-full h-full object-cover"
        style={{ backgroundImage: `url(${simrah})` }}
      >
        <div className="rounded-[10px] bg-[#E0E0E0] absolute top-[0] right-[0] flex p-[6.1px_13px_0_14px] w-[426px] h-[184px] box-sizing-border">
          <div className="flex w-[399px] h-[177.9px] box-sizing-border">
            <div
              className="bg-cover bg-no-repeat w-full h-full"
              style={{ backgroundImage: `url(${networking})` }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="border-[1px_solid_#000000] absolute right-[12px] bottom-[0px] w-[400px] h-[326px]"
        style={{ backgroundImage: `url(${business})` }}
      ></div>
    </div>
     <div className="rounded-[10px] relative flex w-[426px] h-[192px] box-sizing-border">
       <div
         className="rounded-[10px] w-full h-full"
         style={{ backgroundImage: `url(${crowdpitching})` }}
       ></div>
     </div>
   </div>
   <div className="rounded-[10px] bg-[#169D53] relative w-[392px] h-[756px]">
     <div
       className="w-full h-full"
       style={{ backgroundImage: `url(${yes})` }}
     ></div>
   </div>
 </div>


      
        
        <div className="m-[0_148px_48px_148px] inline-block self-start text-justify break-words font-['Poppins'] font-normal text-[25px] leading-[1.56] text-[#000000]">
          The event includes Crowd Pitching, where founders present their
          concepts in a minute to the audience, gaining valuable insights and
          validation for their ideas. This segment serves as a platform for
          founders to enhance their presentation skills and boost
          self-confidence. The "Best Pitch of the Day" award is given to the
          founder with the most applause.
          <br />
          <br />
          Another highlight is "Business Showers," a festive celebration of
          startup launches. EdVenture Park becomes a launch collaborator,
          providing support from strategic planning to product demonstrations.
          This commitment is rooted in understanding the challenges founders
          face, making EdVenture Park a steadfast well-wisher throughout their
          entrepreneurial journey.
        </div>

        {/* EdTalk Snapshots Section */}
        <div className="ml-48 mr-48 bg-gray-900 text-white py-10 px-5 w-[95%]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 max-w-full">
             Founders' Friday x Business Showers 
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              <img className="rounded-lg object-cover w-full h-auto" src={img1} alt="EdTalk Image 1" />
              <img className="rounded-lg object-cover w-full h-auto" src={img2} alt="EdTalk Image 2" />
              <img className="rounded-lg object-cover w-full h-auto" src={img3} alt="EdTalk Image 3" />
              <img className="rounded-lg object-cover w-full h-auto" src={img4} alt="EdTalk Image 4" />
              <img className="rounded-lg object-cover w-full h-auto" src={img5} alt="EdTalk Image 5" />
              <img className="rounded-lg object-cover w-full h-auto" src={img6} alt="EdTalk Image 6" />
            </div>
          </div>
        </div>

        {/* Green Color Box at the End */}
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

export default Desktop8;
