import React from 'react';
import { MapPin, Phone, Clock, Mail } from "lucide-react";


export default function ContactPage() {
  return (
    <div className=" my-12 max-w-7xl mx-auto px-4">

      {/* Top */}
      <p className="text-sm text-gray-500 mb-2">
        Home • Contact Us
      </p>

      <h1 className="text-3xl font-semibold mb-3">
        Contact Us
      </h1>

      <p className="text-gray-500 mb-8 max-w-xl text-sm">
        We love hearing from you, our Shop customers.
        Please contact us and we will make sure to get back to you as soon as we possibly can.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

        {/* LEFT FORM */}
        <div className="lg:col-span-2">

          <form className="space-y-6">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm 
                  focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Name"
                  className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm 
                  focus:outline-none focus:border-blue-500"
                />
              </div>

            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Your Phone Number
              </label>
              <input
                type="text"
                placeholder="Your Phone"
                className="w-full mt-2 px-4 h-[42px] border border-gray-300 rounded-sm 
                focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                What is on your mind? <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="6"
                placeholder="Jot us a note and we will get back to you as quickly as possible"
                className="w-full mt-2 px-4 py-5 border border-gray-300 rounded-sm 
                focus:outline-none focus:border-blue-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button className="bg-blue-600 text-white px-8 py-2 rounded-full text-xl hover:bg-blue-700 transition">
              Submit
            </button>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div  className="bg-gray-100 p-6 rounded-md space-y-6 text-sm h-[360px]">

          <div className="flex gap-3">
            <MapPin size={20} />
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-gray-500">
                1234 Street Address City Address, 1234
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Phone size={20} />
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-gray-500">(00)1234 5678</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Clock size={20} />
            <div>
              <p className="font-semibold">We are open:</p>
              <p className="text-gray-500">
                Monday - Thursday: 9:00 AM - 5:30 PM <br />
                Friday: 9:00 AM - 6:00 PM <br />
                Saturday: 11:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <Mail size={20} />
            <div>
              <p className="font-semibold">E-mail:</p>
              <p className="text-blue-600">shop@email.com</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
