import React from 'react';
import featuredCompany from '../assets/allin.svg';

const PartnerLogos = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <img
          src={featuredCompany}
          alt="Featured Companies"
          className="w-full max-w-4xl object-contain"
        />
      </div>
    </section>
  );
};

export default PartnerLogos;
