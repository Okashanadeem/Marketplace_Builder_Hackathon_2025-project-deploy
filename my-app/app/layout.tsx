import "./globals.css";
import { CartProvider } from './context/CartContext';
import Navbar from "./myComponents/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <CartProvider>
                    <Navbar/>
                    {children}
                    </CartProvider>
            </body>
        </html>
    );
}
