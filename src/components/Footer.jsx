import React, { useState } from 'react';

const FAQFooter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll in a course by clicking the 'Enroll Now' button on the course page and completing the payment process."
    },
    {
      question: "What courses do you offer?",
      answer: "You get lifetime access to all purchased courses on our platform."
    },
    {
      question: "How long do I have access to a course after purchasing?",
      answer: "You get lifetime access to all purchased courses on our platform."
    },
    {
      question: "Do I get a certificate after completion?",
      answer: "You get lifetime access to all purchased courses on our platform."
    },
    {
      question: "Can I access the courses on mobile?",
      answer: "You get lifetime access to all purchased courses on our platform."
    },
    {
      question: "How long do I have access to a course after purchasing?",
      answer: "You get lifetime access to all purchased courses on our platform."
    },
    {
      question: "How long do I have access to a course after purchasing?",
      answer: "You get lifetime access to all purchased courses on our platform."
    },
    {
      question: "Do I need any prior experience to join a course?",
      answer: "Most of our courses are designed for beginners, unless specified otherwise in the course requirements."
    }
  ];

  return (
    <div className="w-full bg-gray-100">
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <h1 className='text-3xl font-bold mb-12 text-center text-blue-500'>Quick Answers</h1>
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
              </button>
              
              {activeIndex === index && (
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">S$Zone Technologies</h3>
            <p className="text-gray-300">
              Discover a world of knowledge and opportunities with our online education platform pursue a new career.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blogs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <address className="not-italic text-gray-300">
              <p>GMS Road Dehradun,</p>
              <p>Uttarakhand, India</p>
              <p className="mt-2">+91 897 989 1703</p>
            </address>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Social Media</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-300 hover:text-white"
                    aria-label={social}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FAQFooter;