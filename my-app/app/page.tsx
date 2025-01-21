import Image from "next/image";
import sofa from "../public/images/sofa top home.png";
import AsgardSofa from "../public/images/Asgaard sofa 1.png";
import boximg1 from "../public/images/Rectangle 13.png";
import boximg2 from "../public/images/Rectangle 14.png";
import boximg3 from "../public/images/Rectangle 15.png";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Footer from "./myComponents/footer";
import Head from "next/head";
import ItemsPage from "./myComponents/itemsHome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rocket Single Seater - Furniture Store</title>
        <meta name="description" content="Shop the best Rocket single seater sofas for your home." />
        <meta property="og:title" content="Rocket Single Seater" />
        <meta property="og:description" content="Find the perfect Rocket single seater sofa for your living room." />
        <meta property="og:image" content={sofa.src} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="h-[125vh] w-auto bg-[#FBEBB5]">
        {/* Homepage */}
        <div className="flex flex-col md:flex-row justify-center items-center text-black h-full">
          {/* Text Section */}
          <div className="text-center md:text-left md:ml-32 px-4 md:px-0">
            <h1 className="text-3xl md:text-5xl font-semibold">Rocket single seater</h1>
            <p className="text-lg md:text-2xl mt-4 md:mt-10">
              <Link href="/shop" className="flex items-center justify-center w-full sm:w-[215px] h-[48px] border border-black mt-4 hover:bg-black hover:text-[#FBEBB5] transition duration-300 ease-in-out transform hover:scale-105 bg-[#FBEBB5] text-black rounded-full ">
                Shop Now
              </Link>
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-sm md:max-w-none mt-40 md:h-[750px] md:w-[853px]">
            <Image
              src={sofa}
              alt="Rocket single seater sofa"
              className="w-full h-auto"
              priority // For faster loading of critical images
            />
          </div>
        </div>

        {/* Featured Products */}
        <div className="md:h-[777px] bg-white">
          <div className="flex flex-col justify-center mb-10 mt-10">
            <h3 className="text-2xl font-semibold text-center">Top Picks For You</h3>
            <p className="text-[#9F9F9F] text-center">Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
          </div>
          <ItemsPage />
        </div>

        {/* New Arrivals */}
        <div className="bg-[#FFF9E5] h-auto md:h-[639px] flex flex-col md:flex-row justify-center items-center px-4 md:px-0">
          <div className="flex justify-center md:mr-10">
            <Image
              src={AsgardSofa}
              alt="Asgaard Sofa"
              className="w-full max-w-[983px]"
              loading="lazy" // Lazy load
            />
          </div>

          <div className="w-auto md:w-[331px] flex flex-col items-center md:items-start justify-center ">
            <p className="text-2xl text-center md:text-left">New Arrivals</p>
            <h3 className="text-4xl font-extrabold text-center md:text-left">Asgaard Sofa</h3>
            <button className="border border-black rounded mt-5 mb-7 w-48 h-11 bg-black text-white">
              <Link href="/shop" className="text-lg font-medium hover:text-[#FBEBB5]">Order Now</Link>
            </button>
          </div>
        </div>

        {/* Blog Section */}
        <div className="px-6 md:px-12 lg:px-16 py-16 bg-gray-50">
          <div className="flex flex-col justify-center mb-10 text-center">
            <h3 className="text-4xl font-extrabold text-gray-800 mb-4">Our Blogs</h3>
            <p className="text-lg text-[#9F9F9F]">Find a bright idea to suit your taste with our great selection</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Card 1 */}
            <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src={boximg1} alt="Blog 1" className="w-full h-56 object-cover mb-4" loading="lazy" />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 mb-2 text-center">Going all-in with millennial design</p>
                <p className="mb-4 text-xl text-[#4c4837] cursor-pointer text-center transition duration-200"><Link href={"https://giaic-milestone-03-blog-site-by-okasha-nadeem.vercel.app/"}>Read More</Link></p>
                <div className="flex gap-4 justify-center pt-1 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    5 min
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    12<sup>th</sup> Oct 2022
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src={boximg2} alt="Blog 2" className="w-full h-56 object-cover mb-4" loading="lazy" />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 mb-2 text-center">Going all-in with millennial design</p>
                <p className="mb-4 text-xl text-[#4c4837]  cursor-pointer text-center transition duration-200"><Link href={"https://giaic-milestone-03-blog-site-by-okasha-nadeem.vercel.app/"}>Read More</Link></p>
                <div className="flex gap-4 justify-center pt-1 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    5 min
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    12<sup>th</sup> Oct 2022
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image src={boximg3} alt="Blog 3" className="w-full h-56 object-cover mb-4" loading="lazy" />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 mb-2 text-center">Going all-in with millennial design</p>
                <p className="mb-4 text-xl cursor-pointer text-center transition duration-200 text-[#4c4837]"><Link href={"https://giaic-milestone-03-blog-site-by-okasha-nadeem.vercel.app/"}>Read More</Link></p>
                <div className="flex gap-4 justify-center pt-1 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    5 min
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    12<sup>th</sup> Oct 2022
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* instagram follow  */}
          <div className="bg-cover bg-center bg-fixed bg-[url('/images/Rectangle%2017.png')]  mt-12 pt-20 pb-24">
            <div className="flex flex-col items-center justify-center text-white text-center p-5">
              <h1 className="text-4xl font-extrabold text-black">Our Instagram</h1>
              <p className="mt-2 text-black">Follow our store on Instagram</p>
              <Link target="https://www.instagram.com/kasha_8282/" href={"https://www.instagram.com/kasha_8282/"}>
                <button className="flex items-center justify-center w-[215px] sm:w-[215px] h-[48px] border border-black mt-4 
                            hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105 bg-white text-black rounded-full shadow-lg">Follow Us</button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
