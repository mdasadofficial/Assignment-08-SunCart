
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Contact Info</h2>
          <p>Email: mdasadofficial1@gmail.com</p>
          <p>Phone: +880 1787987687</p>
          <p>Location: Gopalganj, Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Follow Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Legal</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;