import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import logo from '../../public/images/Meubel House_Logos-05.png';
import Footer from '../myComponents/footer';

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center bg-fixed pt-20 pb-24 mb-10"
        style={{
          backgroundImage: "url('/images/Rectangle 1.png')",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
          <Image src={logo} alt="Logo" />
          <h1 className="text-4xl">My Account</h1>
          <p className="flex items-center text-sm">
            Home <ChevronRight /> My Account
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 m-8 lg:gap-24 lg:px-16">
        {/* Log In Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold mb-5">Log In</h1>
          <div>
            <p className="mb-4 font-semibold text-sm">Username or email address</p>
            <input
              type="text"
              className="border w-full md:w-[345px] h-[50px] rounded p-2"
            />
          </div>
          <div>
            <p className="mb-2 font-semibold text-sm">Password</p>
            <input
              type="password" // Changed type to password for security
              className="border w-full md:w-[345px] h-[50px] rounded p-2"
            />
          </div>
          <div className="flex gap-5">
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          <div className="flex gap-5">
            <button className="flex items-center justify-center w-full sm:w-[215px] h-[48px] border border-black rounded-xl mt-4 hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
              Log In
            </button>
            <p className="m-7 text-sm">Lost Your Password?</p>
          </div>
        </div>

        {/* Register Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">Register</h1>
          <div>
            <p className="mb-2">Email Address</p>
            <input
              type="text"
              className="border w-full md:w-[345px] h-[50px] rounded p-2"
            />
          </div>
          <div>
            <p className="mb-2 text-sm">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-sm mb-2">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our{' '}
              <span className="font-bold">privacy policy.</span>
            </p>
          </div>
          <div className="flex gap-5">
            <button className="flex items-center justify-center w-full sm:w-[215px] h-[48px] border border-black rounded-xl mt-4 hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-[#FAF4F4] p-8 md:p-16">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">Free Delivery</h1>
          <p className="text-[#9F9F9F] text-sm">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">90 Days Return</h1>
          <p className="text-[#9F9F9F] text-sm">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold">Secure Payment</h1>
          <p className="text-[#9F9F9F] text-sm">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
