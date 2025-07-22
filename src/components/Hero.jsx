import React from 'react';
import heroImage from '../assets/hero.png';
import User1 from '../assets/User1.png';
import User2 from '../assets/User2.png';
import User3 from '../assets/User3.png';


const Hero = () => {
  return (
    <section className="w-full mt-20 px-6 md:px-20 py-16 bg-[#F5F7FB]">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Your Dreams <br /> with Our Courses
          </h1>
          <p className="mb-6 text-gray-600">
            Start learning the skills you need to succeed in today's digital world.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Explore Courses
          </button>
        </div>

        {/* Right Image with Circle BG and User Info */}
        <div className="relative mt-12 md:mt-0 w-full md:w-1/2 flex justify-center items-center">
          {/* Background Circle */}
          <div className="absolute bg-blue-100 rounded-full w-[350px] h-[350px] md:w-[400px] md:h-[400px] z-0" />

          {/* Hero Image */}
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-[320px] md:max-w-[400px] z-10 object-contain"
          />

          {/* Experience Box */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg flex flex-col gap-2 z-20 w-64">
            <div className="text-sm text-gray-600 font-semibold">🚀 75K+ Students</div>
            <div className="flex items-center">
              <img src={User1} className="h-8 w-8 rounded-full border -ml-0" />
              <img src={User2} className="h-8 w-8 rounded-full border -ml-2" />
              <img src={User3} className="h-8 w-8 rounded-full border -ml-2" />
              <span className="ml-3 text-sm text-gray-600">Rated 4.8/5 (12.5k+)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
