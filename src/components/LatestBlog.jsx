import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';

const blogs = [
  {
    image: blog1,
    title: 'Introduction to JavaScript for the Beginner',
    desc: 'Learn the fundamentals of JavaScript from scratch and start building interactive web pages...',
    date: '10 Apr, 2025',
  },
  {
    image: blog2,
    title: 'Why online Learning is the Key to Career Growth',
    desc: 'Discover how online learning empowers you to gain new skills, stay competitive, and ...',
    date: '10 Apr, 2025',
  },
  {
    image: blog3,
    title: 'Mastering Python: Beginner to Advanced Tips',
    desc: 'Unlock the power of Python with hands-on tips and techniques from beginner to advanced level...',
    date: '10 Apr, 2025',
  },
];

const LatestBlogs = () => {
  return (
    <section className="bg-white w-full py-16 border-t border-[#c3c3f4] relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* OUR BLOG line at top */}
        <div className="absolute -top-3 left-4 right-4 border border-blue-400 rounded-md pointer-events-none"></div>

        <h4 className="text-blue-600 font-semibold text-sm mb-2 uppercase text-center">OUR BLOG</h4>
        <h2 className="text-3xl font-bold text-center mb-2">Latest Blogs</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
          Stay updated with the latest insights, tips, and trends from our expert blog posts.
        </p>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[...blogs, ...blogs].map((blog, i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
              <img src={blog.image} alt={`Blog ${i + 1}`} className="rounded-lg w-full mb-4" />
              <h3 className="font-semibold text-lg mb-1">{blog.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{blog.desc}</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-blue-500" />
                  {blog.date}
                </span>
                <a href="#" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Explore All Blogs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
