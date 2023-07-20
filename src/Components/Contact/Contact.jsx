import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { VscLocation } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { IoMdClock } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

import map from '../../assets/map.png';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="w-full">
            <div className="contact-bg">
                <div className="bg-white bg-opacity-70">
                    <div className="px-5 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                        <div className="flex space-x-5 mb-3">
                            <div className="bg-[#b12828] h-10 w-2"></div>
                            <h1 className="text-[#b12828] font-bold text-4xl">Contact Us</h1>
                        </div>
                        <p className="text-secondary"><Link to="/" className="underline">Home</Link> - Contact Us</p>
                    </div>
                </div>
            </div>

            <div className="md:container md:mx-auto md:w-5/6 lg:w-3/4 pb-10">
                <div className="flex flex-col space-y-5">
                    <div className="flex flex-col w-full md:flex-row md:space-y-0 md:space-x-20">
                        <div className="w-full grid content-center text-start justify-start px-5 md:px-0 md:w-1/3 md:justify-start md:items-start md:text-left">
                            <h2 className="pb-8 text-tertiary text-2xl pt-8 font-semibold underline">Contact Us</h2>

                            <div className="w-full flex flex-row space-x-5 border-b pb-8 text-left">
                                <VscLocation className="text-4xl text-tertiary" />
                                <div>
                                    <h4 className="font-semibold pb-3 text-2xl text-tertiary">Address</h4>
                                    <p className="max-w-sm text-sm">P.O Box 384-4020 Homabay</p>
                                    <p className="max-w-sm text-sm">Off Kisii-Kisumu Highway, Ringa Kojwach</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-row space-x-5 border-b py-8 text-left">
                                <LiaPhoneVolumeSolid className="text-3xl mt-1 text-tertiary" />
                                <div>
                                    <h4 className="font-semibold pb-3 text-2xl text-tertiary">Call Us</h4>
                                    <p className="max-w-sm text-sm">Tel: +2547987654</p>
                                    <p className="max-w-sm text-sm">Alt: +2547123456</p>
                                    <p className="max-w-sm text-sm">WhatsApp: +2547987654</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-row space-x-5 border-b py-8 text-left">
                                <TfiEmail className="text-3xl text-tertiary" />
                                <div>
                                    <h4 className="font-semibold pb-3 text-2xl text-tertiary">Email Address</h4>
                                    <p className="max-w-sm text-sm">info@kojwachmedical.com</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-row space-x-5 border-b py-8 text-left">
                                <IoMdClock className="text-4xl text-tertiary" />
                                <div>
                                    <h4 className="font-semibold pb-3 text-2xl text-tertiary">Visiting Hours</h4>
                                    <p className="max-w-sm text-sm">7:00 am - 9:00 am</p>
                                    <p className="max-w-sm text-sm">1:00 pm - 2:00 pm</p>
                                    <p className="max-w-sm text-sm">4:00 pm - 6:00 pm</p>
                                </div>
                            </div>

                            <div className="w-full flex flex-row text-tertiary text-xl items-center space-x-10 py-8">
                                <Link>
                                    <BsFacebook />
                                </Link>
                                <Link>
                                    <AiFillTwitterCircle />
                                </Link>
                                <Link>
                                    <BsYoutube />
                                </Link>
                                <Link>
                                    <AiFillInstagram />
                                </Link>
                            </div>

                        </div>

                        <div className="w-full shadow-md md:w-2/3 md:my-0">
                            <div className="px-5">
                                <h2 className="text-tertiary pt-6 pb-3">GET IN TOUCH</h2>
                                <p className="text-tertiary font-bold text-3xl">Visit Us</p>
                            </div>
                            <img src={map} alt="Google maps" className="mt-4 h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;