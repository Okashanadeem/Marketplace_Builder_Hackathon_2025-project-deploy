'use client';

import React, { useEffect, useState } from "react";
import { useCart } from '@/app/context/CartContext'; // Ensure CartContext is available
import Link from "next/link";
import Footer from "../myComponents/footer";

// Make sure to import CartItem type
import { CartItem } from "@/app/context/CartContext";

const OrderConfirmationPage = () => {
    const { cart } = useCart();
    const [orderSummary, setOrderSummary] = useState<CartItem[]>([]);

    useEffect(() => {
        setOrderSummary(cart);
    }, [cart]);

    // Calculate the total price
    const calculateTotal = (cartItems: CartItem[]) => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="p-6 sm:p-12 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Order Confirmed</h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-4">Thank you for your order! Your order has been successfully placed.</p>
            
            <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-medium text-gray-800">Order Summary:</p>
                <div className="mt-4 space-y-4">
                    {/* Render each product in the cart */}
                    {orderSummary.map((item: CartItem) => (
                        <div key={item._id} className="flex justify-between">
                            <span className="text-gray-700">{item.title}</span>
                            <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="flex justify-between mt-4">
                        <span className="font-semibold text-gray-800">Total</span>
                        <span className="font-semibold text-gray-800">${calculateTotal(orderSummary).toFixed(2)}</span>
                    </div>
                </div>
                
                <p className="mt-6 text-sm text-gray-500">Your order will be shipped to the provided address shortly. A confirmation email will be sent to you.</p>
            </div>

            <div className="mt-8">
                <Link href="/" passHref>
                    <button className="w-full sm:w-[215px] h-[48px] px-2 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                        Back to Home Page
                    </button>
                </Link>
                <p className="mt-4 text-sm text-center mb-4 text-gray-500">Or visit us on <Link href="https://www.instagram.com/kasha_8282/" className="text-blue-600 hover:underline">Instagram</Link></p>
            </div>
            <Footer />
        </div>
    );
};

export default OrderConfirmationPage;
