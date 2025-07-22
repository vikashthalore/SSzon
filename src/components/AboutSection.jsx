import React from 'react';
import overLapImg from '../assets/overlapimg.jpg'
import img1 from '../assets/online-classroom.png';  // Image at top
import img2 from '../assets/teamwork.png';          // Image at bottom


const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h4 className="text-blue-600 font-semibold uppercase text-sm mb-2">About Us</h4>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Start Learning With Skills Hunt Now.
          </h2>
          <p className="text-gray-500 mb-6">
            Tap into your full potential with online courses guided by industry experts. 
            Master high-demand skills on your schedule and take control of your career journey today.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">💻</span>
              <p>Start learning from our experts.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">📘</span>
              <p>Enhance your skills with us now.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">🎓</span>
              <p>Do the professional level Courses.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-xl">📄</span>
              <p>Get our verified Certificate.</p>
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Browse Courses →
          </button>
        </div>

        {/* Right Images */}
        <div className="relative w-full max-w-md mx-auto left-35 mt-1 mb-40">
         
         {/* overlap img */}
           <img
           src={overLapImg}
           alt="flash"
            className='w-[60%] rounded-xl shadow-lg relative z-0 mb-[-75%] left-10 ' />         
         
          {/* Background (Online Classroom) Image */}

          <img
            src={img1}
            alt="Online class"
            className="w-[60%] rounded-xl shadow-lg relative z-0"
          />

          {/* Foreground (Teamwork) Image - Positioned over previous */}
          <img
            src={img2}
            alt="Teamwork"
            className="w-[60%] rounded-xl shadow-xl absolute -bottom-40 -left-40 z-10 border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

