import React from 'react';
import img1 from '../../assets/images/t1.jpg';
import img2 from '../../assets/images/t2.jpg';
import img3 from '../../assets/images/t3.jpg';

const OurTeam = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <h2 className="text-center text-3xl font-bold text-pink-500 mb-8">
        Our Team
      </h2>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="text-center">
          <img
            src={img1}
            alt="Serina Osman"
            className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Serina Osman</h3>
          <p className="text-gray-600 mt-2">BSc Hospitality Management</p>
          <p className="text-gray-600">Marketing and Finance Lead</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <img
            src={img2}
            alt="Alex Etuah"
            className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">Alex Etuah</h3>
          <p className="text-gray-600 mt-2">
            BSc Agricultural and Bio-Resource Engineering
          </p>
          <p className="text-gray-600">Operations Lead</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <img
            src={img3}
            alt="Bright Abubakari-Simon"
            className="w-full h-80 sm:h-96 object-cover rounded-lg shadow-lg"
          />
          <h3 className="text-xl font-bold text-gray-800 mt-4">
            Bright Abubakari-Simon
          </h3>
          <p className="text-gray-600 mt-2">
            BSc Electrical and Electronic Engineering
          </p>
          <p className="text-gray-600">Production Lead</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
