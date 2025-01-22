'use client';
import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';

const CheckoutPage = () => {
    const { cart } = useCart();
    const router = useRouter();

    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Process the checkout (e.g., payment gateway, order API call)
        // Here you can replace with real logic
        setTimeout(() => {
            alert('Order placed successfully!');
            router.push('/order-confirmation'); // Redirect to confirmation page
        }, 2000);
    };

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="p-6 sm:p-12 bg-gray-50 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Checkout</h1>

            {cart.length === 0 ? (
                <p className="text-lg text-gray-600 mt-6">Your cart is empty. Please add items to proceed.</p>
            ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter your shipping address"
                                className="mt-2 p-3 w-full border rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                            <select
                                value={paymentMethod}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="mt-2 p-3 w-full border rounded-lg"
                                required
                            >
                                <option value="">Select Payment Method</option>
                                <option value="creditCard">Credit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-6 bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
                        <div className="space-y-4 mt-4 text-lg">
                            {cart.map((item) => (
                                <div key={item._id} className="flex justify-between">
                                    <span>{item.title} x {item.quantity}</span>
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 text-lg font-semibold text-gray-800">
                            <span>Total</span>
                            <span>${totalAmount.toFixed(2)}</span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isProcessing}
                        className="mt-8 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        {isProcessing ? 'Processing...' : 'Place Order'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default CheckoutPage;
