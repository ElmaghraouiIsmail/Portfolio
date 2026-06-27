import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_83jlbck",
        "template_04gy8zr",
        form.current,
        "BpsAU93HbGGkvzKNV"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="bg-black text-white py-20" id="Contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">

          {/* Left Side */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>

            <p className="text-gray-300 leading-7 mb-8">
              Let's work together! I am available for freelance,
              internships and full-time opportunities.
              Feel free to contact me.
            </p>

            <div className="flex items-center mb-6">
              <FaEnvelope className="text-green-400 text-xl mr-4" />
              <a
                href="mailto:elmaghraoui@gmail.com"
                className="hover:text-green-400"
              >
                elmaghraoui@gmail.com
              </a>
            </div>

            <div className="flex items-center mb-6">
              <FaPhone className="text-green-400 text-xl mr-4" />
              <span>+212 682951422</span>
            </div>

            <div className="flex items-center">
              <FaMapMarkedAlt className="text-green-400 text-xl mr-4" />
              <span>Beni Mellal, Morocco</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail}>

              <div className="mb-5">
                <label className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Enter your message"
                  className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-green-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;