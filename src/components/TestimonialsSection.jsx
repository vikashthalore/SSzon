import React, { useState } from 'react';
import testimonialImage from '../assets/testimonialImage.svg'; // Make sure the image path is correct

const TestimonialsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Blog Link */}
        <div className="text-right mb-12">
          <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
            
          </a>
        </div>

        {/* Testimonials Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">Testimonials</h2>
        <h3 className="text-xl text-center text-gray-500 mb-16">What Our Students Say About Us</h3>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-lg shadow-sm">
              {/* Star Rating */}
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6">
                "Studying online saved me a lot of money, and I didn't have to commute.
                The quality of the courses was fantastic, and I could learn at my own pace."
              </p>

              {/* Student Info */}
              <div className="flex items-center">
                <img
                  src={testimonialImage}
                  alt="Student"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold">Sakshi Chaudhari</div>
                  <div className="text-gray-500 text-sm">UI/UX Designer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        </div>
      </section>
  );
};

export default TestimonialsSection;
