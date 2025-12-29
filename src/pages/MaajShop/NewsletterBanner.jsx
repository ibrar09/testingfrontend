import React from "react";

const NewsletterBanner = () => (
  <section className="bg-blue-600 text-white py-10 px-6 flex flex-col md:flex-row items-center justify-between rounded-xl max-w-6xl mx-auto my-10 shadow-lg">
    <div>
      <h2 className="text-2xl font-bold">Stay Updated!</h2>
      <p className="text-blue-100">Subscribe for exclusive deals and new arrivals.</p>
    </div>
    <form className="flex gap-3 mt-4 md:mt-0">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-md outline-none text-gray-800"
      />
      <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition">
        Subscribe
      </button>
    </form>
  </section>
);

export default NewsletterBanner;
