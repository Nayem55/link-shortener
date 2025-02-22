import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the mailto link with form data
    const mailtoLink = `mailto:realstories.xyz@gmail.com?subject=Link Shortener Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    // Open the default mail client with the constructed mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-8 text-white">
          <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
          <p className="text-lg md:text-xl">
            We'd love to hear from you! Please fill out the form below to get in
            touch.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 h-40 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-lg text-xl font-semibold shadow-md hover:from-blue-600 hover:to-green-600 transition duration-300 ease-in-out"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="animate-spin inline-block w-5 h-5 border-4 border-t-4 border-white rounded-full"></span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
