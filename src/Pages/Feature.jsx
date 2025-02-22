import React from "react";
import { Link } from "react-router-dom";

const Feature = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
      {/* Feature Heading Section */}
      <div className="text-center text-white px-6 md:px-12 mb-12">
        <h2 className="text-4xl font-extrabold mb-4">
          Powerful Features of Our Link Shortener
        </h2>
        <p className="text-lg md:text-xl">
          Explore the powerful features that make our link shortener the best in the market!
        </p>
      </div>

      {/* Feature List Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* Feature 1 */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Fast URL Shortening</h3>
          <p className="text-lg">
            Shorten your URLs in just a click! It's quick, efficient, and super easy to use.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Customizable Links</h3>
          <p className="text-lg">
            Want to make your shortened link unique? Customize your links to match your brand or message.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Analytics & Tracking</h3>
          <p className="text-lg">
            Track the performance of your links. Get insights on clicks, locations, devices, and more!
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Link Expiry</h3>
          <p className="text-lg">
            Set expiration dates for your links. Perfect for time-sensitive campaigns or offers.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">QR Code Generation</h3>
          <p className="text-lg">
            Turn your shortened links into scannable QR codes, perfect for offline marketing.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Secure & Private</h3>
          <p className="text-lg">
            We prioritize your privacy and security. Rest assured that your data is in good hands.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link
          to="/"
          className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:from-blue-600 hover:to-green-600 transition duration-300"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default Feature;
