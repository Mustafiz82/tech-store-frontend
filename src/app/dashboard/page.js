"use client";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-2">
          Home <span className="mx-1">•</span> My Dashboard
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">My Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* LEFT SIDEBAR */}
          <div className="  rounded-lg  md:col-span-2 space-y-4">

            <div className="bg-[#F5F7FF] p-10 ">
              <h2 className="font-bold border-l-4 border-blue-500 pl-2 mb-2">
                Account Dashboard
              </h2>

              <ul className="space-y-2  text-gray-600">
                <li className="hover:text-blue-500 cursor-pointer">Account Information</li>
                <li className="hover:text-blue-500 cursor-pointer">Address Book</li>
                <li className="hover:text-blue-500 cursor-pointer">My Orders</li>
                <hr />
                <li>My Downloadable Products</li>
                <li>Stored Payment Methods</li>
                <li>Billing Agreements</li>
                <li>My Wish List</li>
                <hr />
                <li>My Product Reviews</li>
                <li>Newsletter Subscriptions</li>
              </ul>
            </div>

            {/* Compare */}
            <div className=" p-5 bg-[#F5F7FF] text-center rounded">
              <h3 className="font-bold  mb-2">Compare Products</h3>
              <p className=" mt-3 text-gray-500">
                You have no items to compare.
              </p>
            </div>

            {/* Wishlist */}
            <div className=" bg-[#F5F7FF] text-center p-5 rounded">
              <h3 className="font-bold  mb-2">My Wish List</h3>
              <p className=" mt-3 text-gray-500">
                You have no items in your wish list.
              </p>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 space-y-6">

            {/* Account Info */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="font-bold text-lg border-b pb-2 mb-4">
                Account Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6 ">

                {/* Contact Info */}
                <div>
                  <h3 className="font-medium mb-2">Contact Information</h3>
                  <p>Alex Driver</p>
                  <p className="text-gray-500">example@gmail.com</p>

                  <div className="mt-3 space-x-3 text-blue-500">
                    <Link href="#">Edit</Link>
                    <Link href="#">Change Password</Link>
                  </div>
                </div>

                {/* Newsletter */}
                <div>
                  <h3 className="font-medium mb-2">Newsletters</h3>
                  <p className="text-gray-500">
                    You do not subscribe to our newsletter.
                  </p>

                  <Link href="#" className="text-blue-500 mt-3 inline-block">
                    Edit
                  </Link>
                </div>

              </div>
            </div>

            {/* Address Book */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
                <h2 className="font-bold text-lg">Address Book</h2>
                <Link href="#" className="text-blue-500 ">
                  Manage Addresses
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6 ">

                {/* Billing */}
                <div>
                  <h3 className="font-medium mb-2">Default Billing Address</h3>
                  <p className="text-gray-500">
                    You have not set a default billing address.
                  </p>

                  <Link href="#" className="text-blue-500 mt-2 inline-block">
                    Edit Address
                  </Link>
                </div>

                {/* Shipping */}
                <div>
                  <h3 className="font-medium mb-2">Default Shipping Address</h3>
                  <p className="text-gray-500">
                    You have not set a default shipping address.
                  </p>

                  <Link href="#" className="text-blue-500 mt-2 inline-block">
                    Edit Address
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}