'use client';

import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/Meubel House_Logos-05.png';
import { ChevronRight } from 'lucide-react';
import Footer from '../myComponents/footer';
import ItemsPage from '../myComponents/itemShop';

const Page = () => {
    const paginationItems = [1, 2, 3];

    return (
        <div>
            {/* Hero Section */}
            <div
                className="bg-cover bg-center bg-fixed pt-20 pb-24"
                style={{
                    backgroundImage: "url('/images/Rectangle 1.png')",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full px-4 md:px-8 lg:px-16">
                    <Image src={logo} alt="Logo" priority />
                    <h1 className="text-4xl font-bold mt-4">Shop</h1>
                    <p className="flex items-center text-lg text-gray-700 mt-2">
                        Home <ChevronRight aria-label="Chevron right" /> Shop
                    </p>
                </div>
            </div>

            {/* Items Page */}
            <ItemsPage />

            {/* Pagination */}
            <div className="flex justify-center gap-4 my-10">
                {paginationItems.map((item, index) => (
                    <div
                        key={index}
                        className={`w-[60px] h-[60px] flex justify-center items-center rounded-sm ${
                            item === 1 ? 'bg-[#FBEBB5]' : 'bg-[#FFF9E5]'
                        }`}
                    >
                        <p>{item}</p>
                    </div>
                ))}
                <div className="w-[98px] h-[60px] bg-[#FFF9E5] flex justify-center items-center rounded-sm">
                    <p>Next</p>
                </div>
            </div>

            {/* Info Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 bg-[#FAF4F4] p-8 md:p-16">
                {[
                    {
                        title: 'Free Delivery',
                        description: 'For all orders over $50, consectetur adipiscing elit.',
                    },
                    {
                        title: '90 Days Return',
                        description: 'For all orders over $50, consectetur adipiscing elit.',
                    },
                    {
                        title: 'Secure Payment',
                        description: 'For all orders over $50, consectetur adipiscing elit.',
                    },
                ].map((info, index) => (
                    <div key={index} className="text-center md:text-left">
                        <h1 className="text-xl font-bold">{info.title}</h1>
                        <p className="text-[#9F9F9F] text-sm">{info.description}</p>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Page;
