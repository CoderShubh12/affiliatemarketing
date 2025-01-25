// src/app/contact/page.js
import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-xl text-gray-600 mb-8">
        We would love to hear from you! Please fill out the form below.
      </p>

      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
