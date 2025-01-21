'use client'
import React from 'react';
import Navbar from '../myComponents/Navbar';
import Image from 'next/image';
import logo from '../../public/images/Meubel House_Logos-05.png';
import { ChevronRight, Fullscreen, Grip, SlidersHorizontal } from 'lucide-react';
import Footer from '../myComponents/footer';
import ItemsPage from '../myComponents/itemShop';

const Page = () => {
    return (
        <div>
            <Navbar />
            <div
                className="bg-cover bg-center bg-fixed pt-20 pb-24 "
                style={{
                    backgroundImage: "url('/images/Rectangle 1.png')",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
                    <Image src={logo} alt='Logo' />
                    <h1 className='text-4xl'>Shop</h1>
                    <p className='flex'>Home <ChevronRight /> Shop</p>
                </div>
            </div>

            <ItemsPage />

            <div className='flex justify-center gap-4 mb-10'>
                <div className='w-[60px] h-[60px] bg-[#FBEBB5] flex justify-center items-center rounded-sm'><p>1</p></div>
                <div className='w-[60px] h-[60px] bg-[#FFF9E5]  flex justify-center items-center rounded-sm'><p>2</p></div>
                <div className='w-[60px] h-[60px] bg-[#FFF9E5] flex justify-center items-center rounded-sm'><p>3</p></div>
                <div className='w-[98px] h-[60px] bg-[#FFF9E5] flex justify-center items-center rounded-sm'><p>Next</p></div>
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
