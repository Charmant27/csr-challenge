import React from "react";
import { AiOutlineForward } from "react-icons/ai";
import { FaInstagram, FaFacebookF, FaTwitter, FaStar } from "react-icons/fa";

const Doctors = () => {
  return (
    <div className="mt-10 mb-10 flex items-center gap-x-6 gap-y-6">
      <div className="bg-white h-96 w-[50rem] px-6 py-4 shadow-lg rounded">
        <div className="flex items-center justify-between">
          <h1 className="capitalize font-bold">top rated doctors</h1>
          <div className="flex items-center gap-x-2 text-green-600">
            <button className="capitalize font-semibold cursor-pointer">view more</button>
            <AiOutlineForward />
          </div>
        </div>

        <div className="mt-5 flex items-center gap-x-10">
          <div>
            <div className="w-56 pl-3">
              <img
                src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1672010627/csr-challenge/istockphoto-1331257339-170667a_vxzoh2.jpg"
                alt="doctor"
                className="w-40 rounded"
              />
              <div className="flex items-center mb-3 bg-green-500 w-12 border border-transparent rounded-lg ml-12 pl-1 mt-[-1rem] relative text-white">
                <FaStar />
                <h2>4.2</h2>
              </div>
              <h1 className="capitalize font-extrabold pb-1">
                dr.alejandro jr.
              </h1>
              <h2 className="pl-10 font-semibold capitalize text-green-600 pb-2">
                dentist
              </h2>
              <p className="capitalize text-slate-600">
                795 folsom ave, suite 600 san fransicso, cadge 94107
              </p>
            </div>
            {/* social media icons */}
            <div className="flex items-center gap-x-4 ml-3 pt-4">
              <a
                href="https://www.instagram.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <div className="w-56 pl-3">
              <img
                src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1672010628/csr-challenge/istockphoto-1299077582-170667a_xr0jin.jpg"
                alt="doctor"
                className="w-40 rounded"
              />
              <div className="flex items-center mb-3 bg-green-500 w-12 border border-transparent rounded-lg ml-12 pl-1 mt-[-1rem] relative text-white">
                <FaStar />
                <h2>4.2</h2>
              </div>
              <h1 className="capitalize font-extrabold pb-1">dr.samantha</h1>
              <h2 className="pl-8 font-semibold capitalize text-green-600 pb-2">
                physical therapy
              </h2>
              <p className="capitalize text-slate-600">
                795 folsom ave, suite 600 san fransicso, cadge 94107
              </p>
            </div>
            {/* social media icons */}
            <div className="flex items-center gap-x-4 ml-3 pt-4">
              <a
                href="https://www.instagram.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <div className="w-56 pl-3">
              <img
                src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1672010631/csr-challenge/usman-yousaf-7m88QnNHXaE-unsplash_wl5qb1.jpg"
                alt="doctor"
                className="w-40 rounded"
              />
              <div className="flex items-center mb-3 bg-green-500 w-12 border border-transparent rounded-lg ml-12 pl-1 mt-[-1rem] relative text-white">
                <FaStar />
                <h2>4.2</h2>
              </div>
              <h1 className="capitalize font-extrabold pb-1">dr.aliandro m.</h1>
              <h2 className="pl-10 font-semibold capitalize text-green-600 pb-2">
                nursing
              </h2>
              <p className="capitalize text-slate-600">
                795 folsom ave, suite 600 san fransicso, cadge 94107
              </p>
            </div>
            {/* social media icons */}
            <div className="flex items-center gap-x-4 ml-3 pt-4">
              <a
                href="https://www.instagram.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-green-600 font-extrabold text-base border px-2 py-2 rounded-[50%] bg-gray-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* patient section */}
      <div className="bg-white h-96 w-96 px-6 py-4 shadow-lg rounded">
        <div className="flex items-center justify-between">
          <h1 className="capitalize font-bold">recent patients</h1>
          <div className="flex items-center gap-x-2 text-green-600">
            <button className="capitalize font-semibold cursor-pointer">view more</button>
            <AiOutlineForward />
          </div>
        </div>
        {/* patients */}
        <div className="flex items-center pt-2 pb-2">
          <img
            src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1672010627/csr-challenge/istockphoto-1007763808-170667a_mz9blb.jpg"
            alt="patient"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex items-center justify-between pl-2">
            <div>
              <h1 className="capitalize font-bold">aziz bakree</h1>
              <p className="text-slate-400">24 years</p>
            </div>
            <div className="ml-28">
              <p className="text-yellow-500 text-base capitalize font-semibold">
                pending
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center pt-2 pb-2">
          <img
            src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1672010628/csr-challenge/istockphoto-1361106599-170667a_c5kr3r.jpg"
            alt="patient"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex items-center justify-between pl-2">
            <div>
              <h1 className="capitalize font-bold">chloe obrin</h1>
              <p className="text-slate-400">24 years</p>
            </div>
            <div className="ml-20">
              <p className="text-blue-500 text-base capitalize font-semibold">
                on recovery
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center pt-2 pb-2">
          <img
            src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1672010631/csr-challenge/christopher-campbell-rDEOVtE7vOs-unsplash_hisadn.jpg"
            alt="patient"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex items-center justify-between pl-2">
            <div>
              <h1 className="capitalize font-bold">liz keen</h1>
              <p className="text-slate-400">34 years</p>
            </div>
            <div className="ml-32">
              <p className="text-red-500 text-base capitalize font-semibold">
                rejected
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex items-center pt-2 pb-2">
          <img
            src="https://res.cloudinary.com/dy0yctvyp/image/upload/v1672010627/csr-challenge/istockphoto-1198252585-170667a_vyplh7.jpg"
            alt="patient"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex items-center justify-between pl-2">
            <div>
              <h1 className="capitalize font-bold">kim fin</h1>
              <p className="text-slate-400">27 years</p>
            </div>
            <div className="ml-32">
              <p className="text-green-600 text-base capitalize font-semibold">
                recovered
              </p>
            </div>
          </div>
        </div>
        <hr className="pb-5" />
      </div>
    </div>
  );
};

export default Doctors;
