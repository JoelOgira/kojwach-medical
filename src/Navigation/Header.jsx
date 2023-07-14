import { useState } from "react";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [ isOpen, setIsOpen ] = useState(true);
    const [ isHidden, setIsHidden ] = useState(true);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleHidden = () => {
        setIsHidden(!isHidden);
    }

    return (
        <header className="w-full top-0 shadow-xl px-5 py-10 md:px-0">
            <div className="flex items-center space-x-6 justify-between md:container md:w-5/6 md:mx-auto lg:w-3/4">
                <Link to="/" className="pt-2">
                    <img src={logo} alt="Site Icon" width="100px" />
                </Link>
                <div className="hidden md:flex space-x-10 font-bold">
                    <Link to="/" className="hover:text-[#ec4949]">Home</Link>
                    <Link to="/departments" className="hover:text-[#ec4949]">Departments</Link>
                    <Link to="/services" className="hover:text-[#ec4949]">Services</Link>
                    <Link to="/about" className="hover:text-[#ec4949]">About Us</Link>
                    <Link to="/contact" className="hover:text-[#ec4949]">Contact</Link>
                </div>

                <button className="hidden p-3 px-6 text-[#ec4949] border-2 border-[#ec4949] rounded-md baseline hover:bg-[#ec4949] hover:text-white md:flex md:space-x-2">
                    <FaPhoneAlt className="mt-1" /> <span className="mx-2">Call Us: +2547987654</span>
                </button>

                <button
                    onClick={() => { handleOpen(); handleHidden() }}
                    className={`hamburger ${isOpen ? null : 'open'} block md:hidden focus:outline-none hover:text-[#ec4949]`}
                >
                    <div>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </div>
                </button>

            </div>

            <div className="md:hidden">
                <div id="menu" className={`flex-col ${isHidden ? 'hidden' : 'flex'} items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <Link to="/">Home</Link>
                    <Link to="/departments">Departments</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;