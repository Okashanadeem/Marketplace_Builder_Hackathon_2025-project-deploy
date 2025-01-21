'use client';

import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';

interface CartButtonProps {
    product: {
        _id: string;
        title: string;
        price: number;
        productImage: string;
    };
}

const CartButton = ({ product }: CartButtonProps) => {
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    const handleAddToCart = async () => {
        if (isAdding) return; // Prevent multiple clicks
        setIsAdding(true);

        try {
            addToCart({
                _id: product._id,
                title: product.title,
                price: product.price,
                productImage: product.productImage,
                quantity: 1,
            });
            // Replace alert with a toast notification
            console.log('Product added successfully');
        } catch (error) {
            console.error('Failed to add product:', error);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <button
            className={`flex items-center justify-center w-full sm:w-[215px] h-[48px] border border-black rounded-xl mt-4 
                transition duration-300 ease-in-out transform ${
                    isAdding
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'hover:bg-black hover:text-white hover:scale-105'
                }`}
            onClick={handleAddToCart}
            disabled={isAdding}
            aria-label={`Add ${product.title} to cart`}
        >
            {isAdding ? 'Adding...' : 'Add To Cart'}
        </button>
    );
};

export default CartButton;
