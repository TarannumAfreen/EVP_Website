

// import React from 'react';
// import rocket from '../assets/images/desktop3/rocket.png';
// import preincubation from '../assets/images/desktop3/pre-incubation.png';
// import img from '../assets/images/desktop3/e2.png';
// import capsule from '../assets/images/desktop3/CapsuleSupport.png';
// import workshop from '../assets/images/desktop3/Workshop.png';
// import investor from '../assets/images/desktop3/InvestorConnect.png';

// const Desktop3 = () => {
//   return (
//     <div className="bg-[#FFFFFF] flex flex-col items-center p-[58.3px_0_0_0] w-full box-sizing-border overflow-hidden">
//       <div className="relative flex flex-col items-center w-full max-w-[1550px] box-sizing-border">
//         <div className=" flex flex-row justify-between w-full box-sizing-border">
//           {/* You can add content here if needed */}
//         </div>
//         <div className="m-[0_72px_58.9px_0] inline-block break-words font-['Black_Mango','Roboto_Condensed'] font-bold text-[57.3px] tracking-[-1px] leading-[1.629] text-[#000000]">
//           Our Programs
//         </div>
//         <div className="flex flex-col md:flex-row justify-center w-full mb-8 md:mb-12 ml-4 md:ml-20">
//           <div className="flex flex-col md:flex-row">
//             <div className="font-medium text-lg sm:text-xl mb-6 md:mb-0 font-['Black Mango']">
//               <div className="mb-4">Pre-Incubation Program</div>
//               <div className="mb-4">Incubation Program</div>
//               <div className="mb-4">Campus Leadership Program</div>
//               <div className="mb-4">Incubation Manager Fellowship</div>
//               <div className="mb-4">Internships</div>
//               <div className="mb-4">Founders’ Friday</div>
//               <div className="mb-4">Founders' Fest</div>
//               <div className="mb-4">EdTalk</div>
//               <div>Builders' Sunday</div>
//             </div>
//             <div className="border-l-2 border-green-500 mx-6 md:mx-10"></div>
//             <div className="max-w-full md:max-w-2xl">
//               <h2 className="font-bold text-xl sm:text-2xl mb-4 md:mb-6 font-['Black Mango']">Builders' Sunday</h2>
//               <p className="font-normal text-base sm:text-lg leading-relaxed font-poppins">
//                 The Pre-incubation Program is a 16-week long structured and intensive program, where we work with student entrepreneurs, taking them
//                 through the fundamental tracks of building a company, organizing exclusive sessions/workshops, and giving them all the support & guidance they need for them 
//                 to take their idea to the next level. Students can experiment with their ideas and have an opportunity to start their 
//                 own companies while still in college.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="rounded-[4.8px] border-[1px_solid_#169D53] bg-[#169D53] relative mb-20 flex px-6 py-3 w-[192.1px] box-sizing-border">
//           <span className="break-words font-poppins font-bold text-[23.4px] text-[#FFFFFF]">
//             APPLY NOW
//           </span>
//         </div>
//         <div className="inline-block break-words font-['League_Gothic'] font-bold text-[40px] md:text-[45.2px] text-[#000000] uppercase">
//          India's First Student Focused Incubation Program
//         </div>
//         {/* <div className="relative w-full max-w-[1000.5px] box-sizing-border overflow-hidden">
         
//         </div> */}
//         <img src={rocket} alt="Rocket" className="w-[900px]" />
//         <div className="m-[0_58.3px_0_58.3px] inline-block self-start text-justify break-words font-poppins text-[20.7px] leading-[1.478] capitalize text-[#000000] mt-8">
//           <h1 className="font-poppins font-bold">
//             We take immense pride to be India&#39;s First and Favourite Student Startup Incubator introducing India&#39;s first Pre-Incubation Program, tailored to suit the needs of the STUDENTS!
//           </h1>
//           <br />
//           <div className="mt-6 md:mt-10">
//             <h1 className="font-poppins">
//               <span className="font-bold font-poppins">Audience:</span> Idea Stage Startups
//             </h1>
//           </div>
//           <div>
//             <h1 className="font-poppins">
//               <span className="font-bold font-poppins">Expected Outcomes:</span> Achieving Technical PoC / Launch!
//             </h1>
//           </div>
//           <div>
//             <h1 className="font-poppins">
//               <span className="font-bold font-poppins">Investor Pitches:</span> Startups Are Trained To Be Investment-Ready From Day 1
//             </h1>
//           </div>
//         </div>
//         <div className="flex justify-between items-center h-auto mt-4 ml-9 mr-9 py-16 ">
//           <div className="flex flex-col items-center justify-center p-8 h-screen shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-200">
//             <img src={img} alt="1:1 Mentoring" className="w-80 h-80 rounded-full"/>
//             <h2 className="text-2xl font-bold mt-4">1:1 Mentoring</h2>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 h-screen shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-100">
//             <img src={capsule} alt="Capsule based Support" className="w-80 h-80 rounded-full"/>
//             <h2 className="text-2xl font-bold mt-4">Capsule based Support</h2>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 h-screen shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-200">
//             <img src={workshop} alt="Exclusive Workshops" className="w-80 h-80 rounded-full"/>
//             <h2 className="text-2xl font-bold mt-4">Exclusive Workshops</h2>
//           </div>
//           <div className="flex flex-col items-center justify-center p-8 h-screen shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-100">
//             <img src={investor} alt="Investor Connects" className="w-80 h-80 rounded-full"/>
//             <h2 className="text-2xl font-bold mt-4">Investor Connects</h2>
//           </div>
//         </div>
//         <div className="m-[0_59.9px_157.5px_59.9px] inline-block self-start break-words font-['Black_Mango','Roboto_Condensed'] font-bold text-[57.3px] tracking-[-1px] leading-[1.629] text-[#000000]">
//           Tracks
//           <p className="lg:mr-64 md:mr-0 my-9 font-poppins w-2/3 lg:text-xl md:text-lg sm:text-base font-normal text-left">
//             The Pre-Incubation Program comprises a series of interconnected tracks, each contributing to the development of a robust foundation for the entrepreneurial journey.
//           </p>
//         </div>
//         <div className="m-[0_73px_130.9px_0] w-full max-w-[679px]">
//           <img src={preincubation} alt="Pre-Incubation Program"/>
//         </div>
//         <div className="bg-[#169D53] relative flex flex-col items-center p-[174px_0_173.8px_0] w-full box-sizing-border">
//           <div className="m-[0_0_44px_0] inline-block break-words font-['Poppins'] font-medium text-[47.8px] leading-[0.894] text-[#000000]">
//             Check Out Our Company Portfolio
//           </div>
//           <img className="rounded-[4.8px] m-[0_60.1px_0_0] w-[315.3px] h-[57.3px]" src="../assets/vectors/rectangle_45_x2.svg" alt="Company Portfolio"/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Desktop3

import React from 'react';
import rocket from '../assets/images/desktop3/rocket.png';
import preincubation from '../assets/images/desktop3/pre-incubation.png';
import img from '../assets/images/desktop3/e2.png';
import capsule from '../assets/images/desktop3/CapsuleSupport.png';
import workshop from '../assets/images/desktop3/Workshop.png';
import investor from '../assets/images/desktop3/InvestorConnect.png';

const Desktop3 = () => {
  return (
    <div className="bg-[#FFFFFF] flex flex-col items-center p-[58.3px_0_0_0] w-full box-sizing-border overflow-hidden">
      <div className="relative flex flex-col items-center w-full max-w-[1550px] box-sizing-border">
        <div className="flex flex-row justify-between w-full box-sizing-border">
          {/* You can add content here if needed */}
        </div>
        <div className="m-[0_72px_58.9px_0] inline-block break-words font-['Black_Mango','Roboto_Condensed'] font-bold text-[57.3px] tracking-[-1px] leading-[1.629] text-[#000000]">
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
                The Pre-incubation Program is a 16-week long structured and intensive program, where we work with student entrepreneurs, taking them
                through the fundamental tracks of building a company, organizing exclusive sessions/workshops, and giving them all the support & guidance they need for them 
                to take their idea to the next level. Students can experiment with their ideas and have an opportunity to start their 
                own companies while still in college.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[4.8px] border-[1px_solid_#169D53] bg-[#169D53] relative mb-20 flex px-6 py-3 w-[192.1px] box-sizing-border">
          <span className="break-words font-poppins font-bold text-[23.4px] text-[#FFFFFF]">
            APPLY NOW
          </span>
        </div>
        <div className="inline-block break-words font-['League_Gothic'] font-bold text-[40px] md:text-[45.2px] text-[#000000] uppercase">
         India's First Student Focused Incubation Program
        </div>
        <img src={rocket} alt="Rocket" className="w-[300px] sm:w-[600px] md:w-[900px]" />
        <div className="m-[0_58.3px_0_58.3px] inline-block self-start text-justify break-words font-poppins text-[16px] sm:text-[20.7px] leading-[1.478] capitalize text-[#000000] mt-8">
          <h1 className="font-poppins font-bold">
            We take immense pride to be India&#39;s First and Favourite Student Startup Incubator introducing India&#39;s first Pre-Incubation Program, tailored to suit the needs of the STUDENTS!
          </h1>
          <br />
          <div className="mt-6 md:mt-10">
            <h1 className="font-poppins">
              <span className="font-bold font-poppins">Audience:</span> Idea Stage Startups
            </h1>
          </div>
          <div>
            <h1 className="font-poppins">
              <span className="font-bold font-poppins">Expected Outcomes:</span> Achieving Technical PoC / Launch!
            </h1>
          </div>
          <div>
            <h1 className="font-poppins">
              <span className="font-bold font-poppins">Investor Pitches:</span> Startups Are Trained To Be Investment-Ready From Day 1
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center h-auto mt-4 ml-9 mr-9 py-16 ">
          <div className="flex flex-col items-center justify-center p-8 shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-200">
            <img src={img} alt="1:1 Mentoring" className="w-40 h-40 md:w-80 md:h-80 rounded-full"/>
            <h2 className="text-xl md:text-2xl font-bold mt-4">1:1 Mentoring</h2>
          </div>
          <div className="flex flex-col items-center justify-center p-8 shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-100">
            <img src={capsule} alt="Capsule based Support" className="w-40 h-40 md:w-80 md:h-80 rounded-full"/>
            <h2 className="text-xl md:text-2xl font-bold mt-4">Capsule based Support</h2>
          </div>
          <div className="flex flex-col items-center justify-center p-8 shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-200">
            <img src={workshop} alt="Exclusive Workshops" className="w-40 h-40 md:w-80 md:h-80 rounded-full"/>
            <h2 className="text-xl md:text-2xl font-bold mt-4">Exclusive Workshops</h2>
          </div>
          <div className="flex flex-col items-center justify-center p-8 shadow-lg bg-gradient-to-b from-green-500 via-green-400 to-green-100">
            <img src={investor} alt="Investor Connects" className="w-40 h-40 md:w-80 md:h-80 rounded-full"/>
            <h2 className="text-xl md:text-2xl font-bold mt-4">Investor Connects</h2>
          </div>
        </div>
        <h2 className="text-black text-6xl font-semibold lg:mr-[1100px] md:mr-0 ">Tracks</h2>

        <p className="lg:mr-64 md:mr-0 my-9 font-poppins w-2/3 lg:text-xl md:text-lg sm:text-base font-normal justify-left ">
Comparising a set of strategic tracks, this program provides startups with the tools and support they need to thrive in the competitive business landscape.
        
        </p>
          
       
  


   
    <div className="rounded-[12px] m-2">
            <img src={preincubation} alt="" className="w-[300px] md:w-[500px] h-[450px] md:h-[700px] object-cover duration-900 hover:shadow-lg hover:cursor-pointer rounded-lg transition-transform duration-500 ease-in-out" />
          </div>

       
        <div className="bg-[#169D53] relative flex flex-col items-center p-[100px_0_100px_0] w-full box-sizing-border">
          <div className="m-[0_0_44px_0] inline-block break-words font-Poppins font-medium text-[25px] sm:text-[35px] md:text-[40.8px] leading-[0.894] text-[#000000]">
            Check Out Our Company Portfolio
          </div>
          <button className="bg-white text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-lg font-poppins"></button>
          </div>
      </div>
    </div>
  )
}

export default Desktop3;



