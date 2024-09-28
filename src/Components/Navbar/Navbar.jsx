import { useState } from 'react';
import './Navbar.css'
import { MdClose, MdMenu } from "react-icons/md"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "", text: "Home" },
    { href: "", text: "About" },
    { href: "", text: "Service" },
    { href: "", text: "New Property" },
    { href: "", text: "Contact" },
  ];

  return (
    <>
      <div className={`${isMenuOpen ? 'bg-white' : "bg-secondary"}`}>
      <nav className="container flex items-center justify-between h-[90px] py-2.5">
        <div className="flex items-center">
          <img src="assets/images/Logo.png" alt="Flora logo" className="w-[68px] h-[56px]" />
        </div>
        <div className={`lg:flex lg:items-center lg:space-x-8 ${isMenuOpen ? 'flex flex-col absolute top-[90px] left-0 right-0 bg-white py-4' : 'hidden'}`}>
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className={`font-medium transition ease-in duration-300 hover:text-primary py-2 ${isMenuOpen ? index === 0 ? 'pl-7 hover:text-black rounded bg-navActive mb-5 w-full' : 'pl-7 border-y-2 border-black mb-5 w-full hover:border-0 hover:text-black hover:rounded hover:bg-navActive' : ''}`}
            >
              {item.text}
            </a>
          ))}
          {isMenuOpen && (
            <button className={`bg-primary  ${isMenuOpen ? 'w-[175px] h-[38px]' : 'w-[135px] h-[38px]'}  rounded-md text-white hover:bg-blue-800 mx-auto mt-4`}>
              Login
            </button>
          )}
        </div>
        <button className={`bg-primary w-[135px] h-[38px] rounded-md text-white hover:bg-blue-800 hidden lg:block`}>
          Login
        </button>
        <button className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose size={'28px'} className="text-primary" /> : <MdMenu size={'28px'} className="text-primary" />}
        </button>
      </nav>
    </div>
    </>
  )
}

export default Navbar