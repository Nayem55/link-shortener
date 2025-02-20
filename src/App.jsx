import { useState } from "react";
import axios from "axios";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:5000"; // Change this when deploying

  const handleShorten = async () => {
    if (!longUrl.trim()) return alert("Please enter a valid URL");

    setIsLoading(true); // Start loader

    try {
      const response = await axios.post(`${BASE_URL}/shorten`, { longUrl });
      setShortUrl(response.data.shortUrl);
      setCopied(false);
    } catch (error) {
      console.error("Error shortening URL:", error);
      alert("Failed to shorten URL");
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
  };

  return (
    <div className="min-h-screen flex flex-col-reverse items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      {/* Additional Text Section */}
      <div className="p-6 rounded-lg shadow-md w-full max-w-xl mt-8">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Simplify Your Links Instantly
        </h2>
        <p className="text-white text-lg font-semibold text-center mb-4">
          Turn long, complex URLs into short, shareable links in seconds. Our
          free link shortener is the perfect alternative to Bitly, TinyURL, and
          other paid services.
        </p>
        <p className="text-white text-lg font-semibold text-center mb-4">
          Shorten, share, and track your links with ease.
        </p>
        <p className="text-white text-lg font-semibold text-center">
          Generate short links for websites, social media, emails, SMS, and ads.
          Perfect for Instagram, LinkedIn, Facebook, X, TikTok, and beyond!
        </p>
      </div>

      {/* Main Link Shortener Section */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-6">
          Link Shortener
        </h1>
        <p className="text-center text-lg font-medium text-gray-600 mb-6">
          Shorten your URLs easily and share them with the world!
        </p>

        <input
          type="text"
          className="w-full p-4 text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mb-4"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-lg text-xl font-semibold shadow-md hover:from-blue-600 hover:to-green-600 transition duration-300 ease-in-out cursor-pointer"
          onClick={handleShorten}
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? (
            <span className="animate-spin inline-block w-5 h-5 border-4 border-t-4 border-white rounded-full"></span>
          ) : (
            "Shorten URL"
          )}
        </button>

        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-md text-gray-700">Your short link:</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center items-center space-x-2 mt-2">
              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-indigo-600 underline hover:text-indigo-800 cursor-pointer"
              >
                {shortUrl}
              </a>
              <button
                className="ml-2 bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300 transition cursor-pointer"
                onClick={handleCopy}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
