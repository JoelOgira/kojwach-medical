import { useState } from "react";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";

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
        <header className="w-full top-0 px-5 py-5 bg-[#fff0f0] md:px-0">
            <div className="flex items-center space-x-6 justify-between md:container md:w-5/6 md:mx-auto lg:w-3/4">
                <div className="pt-2">
                    <img src={logo} alt="Site Icon" width="100px" />
                </div>
                <div className="hidden md:flex space-x-5 font-bold">
                    <a href="/#" className="hover:text-[#ec4949]">Home</a>
                    <a href="/#" className="hover:text-[#ec4949]">Departments</a>
                    <a href="/#" className="hover:text-[#ec4949]">Services</a>
                    <a href="/#" className="hover:text-[#ec4949]">Services</a>
                    <a href="/#" className="hover:text-[#ec4949]">Contact</a>
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
                <div id="menu" className={`absolute flex-col ${isHidden ? 'hidden' : 'flex'} items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}>
                    <a href="/#">Home</a>
                    <a href="/#">Departments</a>
                    <a href="/#">Services</a>
                    <a href="/#">Services</a>
                    <a href="/#">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header;