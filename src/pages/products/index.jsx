import React from 'react';
import OurTeam from './team';
import ReviewsSection from './review';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpeg';
import img4 from '../../assets/images/bg.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';

const Products = () => {
  return (
    <>
      {/* Section: Our Products */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-300">
        <div className="text-center mb-8 flex flex-col items-center">
          <span className="text-pink-500 text-3xl font-baskerville">
            Our Products
          </span>
          <h3 className="text-pink-500 text-2xl italic font-baskerville mt-2">
            Non-dairy milk alternatives
          </h3>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="text-center">
            <img
              src={img1}
              alt="Products"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
            <p className="text-lg text-gray-700 mt-4 font-bold">Products</p>
          </div>
          {/* Product 2 */}
          <div className="text-center">
            <img
              src={img2}
              alt="Powdered Milk"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
            <p className="text-lg text-gray-700 mt-4 font-bold">
              Powdered Milk
            </p>
          </div>
          {/* Product 3 */}
          <div className="text-center">
            <img
              src={img3}
              alt="Liquid Milk"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
            <p className="text-lg text-gray-700 mt-4 font-bold">Liquid Milk</p>
          </div>
          {/* Product 4 */}
          <div className="text-center">
            <img
              src={img4}
              alt="Tiger Nuts"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
            <p className="text-lg text-gray-700 mt-4 font-bold">Tiger Nuts</p>
          </div>
          {/* Product 5 */}
          <div className="text-center">
            <img
              src={img5}
              alt="Powdered Tiger Nut"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
            <p className="text-lg text-gray-700 mt-4 font-bold">
              Powdered Tiger Nut
            </p>
          </div>
          {/* Product 6 */}
          <div className="text-center">
            <img
              src={img6}
              alt="Cashew Nut"
              className="w-full h-[390px] object-cover rounded-lg shadow-md"
            />
            <p className="text-lg text-gray-700 mt-4 font-bold">Cashew Nut</p>
          </div>
        </div>
      </section>

      <OurTeam />

      <ReviewsSection />
    </>
  );
};

export default Products;
