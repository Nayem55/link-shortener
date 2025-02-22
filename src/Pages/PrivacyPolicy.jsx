import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-white">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold mb-4">Privacy Policy</h2>
          <p className="text-lg md:text-xl">
            Your privacy is important to us. This policy outlines the information we collect and how it is used.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h3>
          <p className="text-gray-700 mb-6">
            This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h3>
          <p className="text-gray-700 mb-6">
            We collect the following information when you use our website:
            <ul className="list-disc list-inside text-gray-700">
              <li>Personal information (e.g., name, email address, phone number)</li>
              <li>Technical data (e.g., IP address, browser type, cookies)</li>
              <li>Usage data (e.g., pages visited, time spent on the website)</li>
            </ul>
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h3>
          <p className="text-gray-700 mb-6">
            We use your information for the following purposes:
            <ul className="list-disc list-inside text-gray-700">
              <li>To provide and improve our services</li>
              <li>To communicate with you regarding updates, offers, and services</li>
              <li>To monitor and analyze usage to enhance user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing Your Information</h3>
          <p className="text-gray-700 mb-6">
            We do not share, sell, or rent your personal information to third parties except in the following circumstances:
            <ul className="list-disc list-inside text-gray-700">
              <li>With trusted service providers who assist us in operating our website and services</li>
              <li>If required by law or to protect our rights, property, or safety</li>
            </ul>
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h3>
          <p className="text-gray-700 mb-6">
            We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no data transmission method over the internet is completely secure.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h3>
          <p className="text-gray-700 mb-6">
            You have the right to access, update, or delete your personal information at any time. If you would like to exercise any of these rights, please contact us at <strong>contact@yourwebsite.com</strong>.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">7. Cookies</h3>
          <p className="text-gray-700 mb-6">
            Our website uses cookies to enhance your browsing experience. You can disable cookies through your browser settings, but this may affect the functionality of the website.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">8. Changes to This Policy</h3>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be updated at the bottom of the policy.
          </p>

          <p className="text-gray-700 mb-6">
            Last updated: February 22, 2025
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact Us</h3>
          <p className="text-gray-700 mb-6">
            If you have any questions or concerns about this Privacy Policy, please contact us at <strong>contact@yourwebsite.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
