import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center pt-10">
      {/* About Section */}
      <div className="max-w-5xl mx-auto text-white text-center px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
          About Us
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Welcome to 1Click Link Shortener, your go-to platform for shortening and managing links effortlessly. 
          We aim to provide the most reliable and user-friendly URL shortening service.
        </p>
        
        {/* Mission Section */}
        <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg">
            Our mission is simple: to make link sharing fast, secure, and efficient. 
            Whether you're an individual looking to share a single link or a business 
            needing to track multiple URLs, we've got you covered.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Fast & Easy</h4>
            <p className="text-lg">
              Shorten any URL in seconds with just a click. No sign-up or hassle involved.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Secure & Reliable</h4>
            <p className="text-lg">
              Your links are safe with us. We ensure your data is encrypted and secure.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg">
            <h4 className="text-xl font-semibold mb-4">Track Your Links</h4>
            <p className="text-lg">
              Keep track of your shortened URLs and see how they perform with analytics.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-6 px-8 mt-10 w-full">
        <h3 className="text-2xl font-semibold text-center mb-4">Contact Us</h3>
        <p className="text-lg text-center mb-4">
          If you have any questions or need support, feel free to reach out to us.
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:support@1clk.xyz"
            className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-2 px-6 rounded-lg text-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
