import './Footer.css'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
        <div className="container ">
        <footer className="bg-white">
        <div className="flex flex-col footer lg:flex-row">
        <div className='w-[100%] lg:w-[352px] '>
            <img src="assets/images/Logo.png" alt="error" style={{'marginBottom' : '26px'}} />
          <p className="text-desc lg:w-[90%] w-[100%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
            felis vitae sit est quisque.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-header font-normal hover:text-primary">Payment & Tax</a></li>
            <li><a href="#" className="text-header font-normal hover:text-primary">Features</a></li>
            <li><a href="#" className="text-header font-normal hover:text-primary">View Booking</a></li>
            <li><a href="#" className="text-header font-normal hover:text-primary">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-header font-normal hover:text-primary">About us</a></li>
            <li><a href="#" className="text-header font-normal hover:text-primary">News</a></li>
            <li><a href="#" className="text-header font-normal hover:text-primary">Pricing</a></li>
            <li><a href="#" className="text-header font-normal hover:text-primary">New Property</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Our Location</h3>
          <p className="text-header font-normal mb-4">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-primary rounded-full text-white flex justify-center items-center w-[48px] h-[48px] ">
                <FaFacebookF size={'18px'} />
            </a>
            <a href="#" className="bg-primary rounded-full text-white flex justify-center items-center w-[48px] h-[48px] ">
                <FaTwitter  size={'18px'}/>
            </a>
            <a href="#" className="bg-primary rounded-full text-white flex justify-center items-center w-[48px] h-[48px] ">
                <FaLinkedinIn  size={'18px'}/>
            </a>
          </div>
        </div>
        </div>

        <div className="py-6 lastFooter border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <p className="text-header font-normal tracking-wide mb-4 lg:mb-0">Copyright 2024 flora. All Rights Reserved</p>
        <div className="flex space-x-9 mr-5">
          <a href="#" className="text-header transition ease-in duration-300 font-normal hover:text-primary">Terms & Conditions</a>
          <a href="#" className="text-header transition ease-in duration-300 font-normal hover:text-primary">Privacy Policy</a>
        </div>
        </div>
        </footer>
        </div>
    </>
  );
};

export default Footer;