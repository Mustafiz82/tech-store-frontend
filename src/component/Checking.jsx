"use client"
import React, { useState } from "react";

const tabs = [
  { id: "about", label: "About Product" },
  { id: "details", label: "Details" },
  { id: "specs", label: "Specs" },
];

const Checking = () => {
  const [activeTab, setActiveTab] = useState("specs");

  const specs = [
    { label: "CPU", value: "N/A" },
    { label: "Featured", value: "N/A" },
    { label: "I/O Ports", value: "N/A" },
  ];

  const renderContent = () => {
    if (activeTab === "about") {
      return (
      <div className="mt-6 max-w-2xl">
      
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        MSI MPG Trident 3
      </h1>

      {/* Review */}
      <p className="text-blue-500 text-sm mb-4 cursor-pointer">
        Be the first to review this product
      </p>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed mb-6">
        MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM,
        512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse
        3 Years Warranty Gaming Desktop
      </p>

      {/* Color Options */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
        </div>

        <div className="w-6 h-6 rounded-full bg-yellow-100"></div>

        <div className="w-6 h-6 rounded-full bg-gray-200"></div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <p>
          Have a Question?{" "}
          <span className="text-blue-500 cursor-pointer">
            Contact Us
          </span>
        </p>

        <p className="text-gray-400">SKU D55I5AI</p>
      </div>

      {/* More Info */}
      <div className="mt-8">
        <button className="text-sm font-semibold text-gray-700">
          + MORE INFORMATION
        </button>
      </div>
    </div>
      );
    }

    if (activeTab === "details") {
      return (
        <div className="mt-6 max-w-2xl">
      
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        MSI MPG Trident 3
      </h1>

      {/* Review */}
      <p className="text-blue-500 text-sm mb-4 cursor-pointer">
        Be the first to review this product
      </p>

      {/* Manual List */}
      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
        <li>Intel Core i7-10700F</li>
        <li>Intel H410</li>
        <li>WHITE</li>
        <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
        <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
        <li>2 total slots (64GB Max)</li>
        <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
        <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
        <li>3.5 HDD (0/0), 2.5 HDD/SSD (1/0), M.2 (1/0)</li>
        <li>Intel WGI219V ethernet (10/100/1000M)</li>
        <li>AX200 (WiFi 6) + BT5.1</li>
        <li>PSU 330W</li>
        <li>Fan Cooler</li>
      </ul>

      {/* Bottom */}
      <div className="flex justify-between items-center mt-6 text-sm">
        <p>
          Have a Question?{" "}
          <span className="text-blue-500 cursor-pointer">
            Contact Us
          </span>
        </p>

        <p className="text-gray-400">SKU D55I5AI</p>
      </div>

      {/* More Info */}
      <div className="mt-8">
        <button className="text-sm font-semibold text-gray-700">
          + MORE INFORMATION
        </button>
      </div>
    </div>
      );
    }

    if (activeTab === "specs") {
      return (
        <div className="mt-4">
          <p className="text-blue-500 text-sm mb-6 cursor-pointer">
            Be the first to review this product
          </p>

          <div className="border rounded-md overflow-hidden w-full max-w-md">
            {specs.map((item, index) => (
              <div
                key={index}
                className={`flex justify-between px-4 py-3 text-sm ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-gray-500">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      
      {/* 🔥 Tabs (LINK STYLE) */}
      <div className="flex gap-8 border-b text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 transition ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6">
        {/* Breadcrumb */}
        <p className="text-xs text-gray-500 mb-4">
          Home • Laptops • MSI WS Series
        </p>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          MSI MPG Trident 3
        </h1>

        {/* Dynamic Content */}
        {renderContent()}

        {/* Bottom */}
        <div className="flex justify-between mt-6 text-sm">
          <p>
            Have a Question?{" "}
            <span className="text-blue-500 cursor-pointer">
              Contact Us
            </span>
          </p>

          <p className="text-gray-400">SKU D55I5AI</p>
        </div>

        {/* More Info */}
        <div className="mt-8">
          <button className="text-sm font-semibold text-gray-700">
            + MORE INFORMATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checking;





