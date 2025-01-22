'use client';
import Image from 'next/image';
import emptycart from "@/public/images/empty cart.png";
import logo from '../../public/images/Meubel House_Logos-05.png';
import { useCart } from '@/app/context/CartContext';
import { ChevronRight } from 'lucide-react';
import Footer from '../myComponents/footer';
import Link from 'next/link';

const CartPage = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div>
            <div
                className="bg-cover bg-center bg-fixed pt-20 pb-24"
                style={{
                    backgroundImage: "url('/images/Rectangle 1.png')",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8 md:px-16">
                    <Image src={logo} alt='Logo' width={160} height={160} />
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-black mt-4'>Cart</h1>
                    <p className='flex text-black mt-2'>Shop<ChevronRight /> Cart</p>
                </div>
            </div>

            <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-20">
                        <Image
                            src={emptycart}
                            alt="Empty Cart"
                            className="mb-6 opacity-50"
                            width={160}
                            height={160}
                        />
                        <p className="text-lg font-semibold text-gray-600">Your cart is empty.</p>
                        <Link
                            href="/shop"
                            className="flex items-center justify-center w-fit px-2 sm:w-[215px] h-[48px] border border-black rounded-xl mt-4 
                            hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-8"
                            aria-label="Start Shopping"
                        >
                            Start Shopping
                        </Link>
                        <Footer />
                    </div>
                ) : (
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item._id}
                                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 sm:p-6 hover:shadow-lg transition"
                            >
                                <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-0">
                                    <Image
                                        src={item.productImage}
                                        alt={item.title}
                                        className="rounded-lg"
                                        width={80}
                                        height={80}
                                    />
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                                        <p className="text-gray-500">
                                            ${item.price} x {item.quantity}
                                        </p>
                                        <p className="text-gray-700 font-medium">
                                            Total: ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="px-4 py-2 text-red-500 bg-red-100 rounded-lg hover:bg-red-200 transition w-full sm:w-auto"
                                    onClick={() => removeFromCart(item._id)}
                                    aria-label={`Remove ${item.title} from cart`}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {cart.length > 0 && (
                    <div className="mt-10 bg-white shadow-lg rounded-lg p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Order Summary</h2>
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-lg sm:text-xl">
                            <span className="font-medium text-gray-600">Subtotal:</span>
                            <span className="font-bold text-gray-800">
                                $
                                {cart
                                    .reduce((total, item) => total + item.price * item.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                        <Link href="/checkout">
                            <div
                                className="mt-6 w-full py-3 bg-blue-500 pl-3 text-white rounded-lg hover:bg-blue-600 transition"
                                aria-label="Proceed to Checkout"
                            >
                                Checkout
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
