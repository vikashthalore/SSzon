import React from 'react';
import { FaRegHeart, FaStar } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi2';

const CourseCard = ({ image }) => {
  return (
    <div className="bg-white rounded-xl shadow border hover:shadow-lg transition-all duration-300 w-full max-w-[370px] relative">
      {/* Top Labels */}
      <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full z-10">
        12 weeks
      </div>
      <div className="absolute top-3 right-3 text-gray-500 text-lg z-10 cursor-pointer hover:text-red-500">
        <FaRegHeart />
      </div>

      <img src={image} alt="Course" className="rounded-t-xl w-full h-[200px] object-cover" />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Full Stack Web Development</h3>
        <p className="text-gray-500 text-sm mt-1 mb-3">
          Become a proficient full-stack developer with this course covering HTML, CSS, JavaScript, React...
        </p>

        <div className="flex items-center text-sm text-gray-600 gap-2 mb-2">
          <HiOutlineBookOpen className="text-lg" />
          <span>20 Lessons</span>
          <div className="flex items-center ml-auto text-yellow-500">
            <FaStar className="text-sm mr-1" />
            4.8
          </div>
        </div>

        <div className="flex items-center justify-between mt-2">
          <div className="text-green-600 font-bold">₹4,999</div>
          <div className="line-through text-gray-400 text-sm">₹11,999</div>
          <button className="ml-auto px-4 py-1 bg-blue-600 text-white text-sm rounded-md">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
