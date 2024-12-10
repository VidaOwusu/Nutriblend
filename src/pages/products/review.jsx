import React from 'react';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const ReviewsSection = () => {
  return (
    <section id="hero-two" className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="sub-header text-center mb-12">
          <span className="text-xl text-pink-500 block font-baskerville">
            REVIEWS
          </span>
          <span className="text-2xl text-gray-700 block italic font-baskerville">
            What our customers say
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <FaQuoteLeft className="text-pink-200 absolute -top-2 -left-2 text-3xl" />
              <span className="block text-lg text-gray-800 mb-4 pl-6 pr-6 relative z-10">
                "I'm lactose intolerant, and Nutriblend has been a game-changer
                for me. The products are not only delicious but also super
                gentle on my stomach. I absolutely love them!"
              </span>
              <FaQuoteRight className="text-pink-200 absolute -bottom-2 right-0 text-3xl" />
            </div>
            <div className="flex justify-center mb-4 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <FaQuoteLeft className="text-pink-200 absolute -top-2 -left-2 text-3xl" />
              <span className="block text-lg text-gray-800 mb-4 pl-6 pr-6 relative z-10">
                "Both the powdered milk and the tiger nut milk are naturally
                sweet, which is perfect for managing my diabetes. I don't have
                to worry about added sugars, and they taste amazing."
              </span>
              <FaQuoteRight className="text-pink-200 absolute -bottom-2 right-0 text-3xl" />
            </div>
            <div className="flex justify-center mb-4 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <FaQuoteLeft className="text-pink-200 absolute -top-2 -left-2 text-3xl" />
              <span className="block text-lg text-gray-800 mb-4 pl-6 pr-6 relative z-10">
                "Switching to Nutriblend has helped me shed a few pounds. It's
                light yet satisfying, and I feel healthier overall. Highly
                recommended for anyone looking to maintain a balanced diet."
              </span>
              <FaQuoteRight className="text-pink-200 absolute -bottom-2 right-0 text-3xl" />
            </div>
            <div className="flex justify-center mb-4 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>
          </div>

          {/* Review 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative">
              <FaQuoteLeft className="text-pink-200 absolute -top-2 -left-2 text-3xl" />
              <span className="block text-lg text-gray-800 mb-4 pl-6 pr-6 relative z-10">
                "Nutriblend's products are so nutritious, and my baby loves
                them! The milk is creamy, flavorful, and incredibly yummy—an
                absolute favorite in our household."
              </span>
              <FaQuoteRight className="text-pink-200 absolute -bottom-2 right-0 text-3xl" />
            </div>
            <div className="flex justify-center mb-4 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="mx-1" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
