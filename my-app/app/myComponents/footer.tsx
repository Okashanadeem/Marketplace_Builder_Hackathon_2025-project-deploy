import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const helpItems = ['Payment Options', 'Return', 'Privacy Policies'];

  return (
    <footer className="w-full bg-white text-black">
      {/* Footer Main Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Address Section */}
          <section>
            <p className="text-[#9F9F9F] text-sm">
              G223 M.T Khan Road <br />
              SultanAbad Karachi, <br />
              Pakistan
            </p>
          </section>

          {/* Links Section */}
          <section>
            <h1 className="mb-6 text-sm font-bold text-[#9F9F9F]">Links</h1>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index} className="text-sm">
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Help Section */}
          <section>
            <h1 className="mb-6 text-sm font-bold text-[#9F9F9F]">Help</h1>
            <ul className="space-y-4">
              {helpItems.map((item, index) => (
                <li key={index} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Newsletter Section */}
          <section>
            <h1 className="mb-6 text-sm font-bold text-[#9F9F9F]">Newsletter</h1>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="border-b-2 border-black px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mr-2"
                aria-label="Email address"
              />
              <button
                className="border-b-2 border-black text-sm px-4 py-1 hover:bg-black hover:text-white transition duration-300"
                aria-label="Subscribe to newsletter"
              >
                SUBSCRIBE
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-200">
        <div className="py-6 text-center text-sm text-gray-500">
          <p>Made By Okasha Nadeem.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
