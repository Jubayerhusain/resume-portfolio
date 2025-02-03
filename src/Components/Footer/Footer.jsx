import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <footer className="bg-gray-700 text-white py-10" data-aos="fade-up">
      <div className="w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Dr. Muhammad Yunus</h2>
            <p className="text-gray-400">
              Promoting social business and economic empowerment to create a
              world without poverty.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-yellow-500">
                <a href="#" className="hover:underline">
                  About Dr. Yunus
                </a>
              </li>
              <li className="mb-2 hover:text-yellow-500">
                <a href="#" className="hover:underline">
                  Social Business
                </a>
              </li>
              <li className="mb-2 hover:text-yellow-500">
                <a href="#" className="hover:underline">
                  Grameen Bank
                </a>
              </li>
              <li className="mb-2 hover:text-yellow-500">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-600 transition"
                aria-label="Twitter"
              >
                <FaXTwitter></FaXTwitter>
              </a>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-600 transition"
                aria-label="Facebook"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-600 transition"
                aria-label="Instagram"
              >
                <FaInstagramSquare></FaInstagramSquare>
              </a>
              <a
                href="#"
                className="text-yellow-400 hover:text-yellow-600 transition"
                aria-label="YouTube"
              >
                <IoLogoYoutube></IoLogoYoutube>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-yellow-500 text-sm">
            &copy; {new Date().getFullYear()} Dr. Muhammad Yunus. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
