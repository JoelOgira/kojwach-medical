import { Link } from "react-router-dom";
import slider_3 from '../../assets/slider_3.jpg'
import { TbMicroscope } from "react-icons/tb";
import { GiGears } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { FaUsersGear } from "react-icons/fa6";

const About = () => {
    return (
        <div className="w-full">
            <div className="about-bg">
                <div className="bg-white bg-opacity-70">
                    <div className="px-5 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                        <div className="flex space-x-5 mb-3">
                            <div className="bg-[#b12828] h-10 w-2"></div>
                            <h1 className="text-[#b12828] font-bold text-4xl">About Us</h1>
                        </div>
                        <p className="text-secondary"><Link to="/" className="underline">Home</Link> - About Us</p>
                    </div>
                </div>
            </div>

            <div className="px-5 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10 mb-5">
                    <div className="flex flex-col space-y-5 md:w-1/2">
                        <h2 className="text-secondary font-bold text-3xl">About Us</h2>
                        <p>
                            Kojwach Medical Center Limited is a leading Public Hospital (Level 3) with a 30-bed hospital equipped with state-of-the-art medical equipment. We employ cutting edge research, innovation, training, and partnerships to keep abreast with advancements in healthcare management. This enables us to address the current health challenges and ensures that we are responsive to emerging and future health challenges.
                        </p>
                        <p>
                            We offer quality patient-centered care where the patient is an active participant in their care. This brings about improved patient health outcomes and satisfaction and improved job satisfaction among our healthcare providers. Specialized care is one of our flagship services where patients are attended to by highly specialized consultants.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <img src={slider_3} alt="slider" />
                    </div>
                </div>

                <div className="flex flex-col space-y-9 md:flex-row md:justify-between md:space-y-0 my-12 md:my-16 md:space-x-10">
                    <div className="flex flex-col space-y-6">
                        <h2 className="text-secondary font-bold text-3xl md:text-4xl">Vision</h2>
                        <span className="bg-secondary w-16 h-1"></span>
                        <p className="max-w-sm">A premier Hospital renowned for excellence in clinical care, and innovation.</p>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <h2 className="text-secondary font-bold text-3xl md:text-4xl">Mission</h2>
                        <span className="bg-secondary w-16 h-1"></span>
                        <p className="max-w-sm">To enhance the health and well-being of Kenyans and global citizens through provision of patient-centred and evidence-based healthcare.</p>
                    </div>

                    <div className="flex flex-col space-y-6">
                        <h2 className="text-secondary font-bold text-3xl md:text-4xl">Core Values</h2>
                        <span className="bg-secondary w-16 h-1"></span>
                        <ul className="list-disc px-4">
                            <li>Integrity</li>
                            <li>Teamwork</li>
                            <li>Compassion</li>
                            <li>Accountability</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="bg-tertiary text-white ">
                <div className="flex flex-col space-y-20 px-5 py-16 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                    <div className="flex flex-col justify-center items-center text-center space-y-5 text-white">
                        <h2 className="font-bold text-3xl md:text-4xl">Why Chose Us</h2>
                        <p className="max-w-xl">
                            Our excellent team of medics is ready to walk with you towards healing, recovery and good health.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-10 justify-center items-center md:grid-cols-4 md:gap-5">
                        <div className="flex flex-col justify-center items-center space-y-8 border-r">
                            <TbMicroscope className="text-6xl" />
                            <div className="font-semibold text-xl text-center">
                                <p>State-of-the-art</p>
                                <p>Equipment</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-8 md:border-r">
                            <GiGears className="text-6xl" />
                            <div className="font-semibold text-xl text-center">
                                <p>Seamless</p>
                                <p>Systems & Processes</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-8 border-r">
                            <GiClockwork className="text-6xl" />
                            <div className="font-semibold text-xl text-center">
                                <p>24/7</p>
                                <p>Operations</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center space-y-8">
                            <FaUsersGear className="text-6xl" />
                            <div className="font-semibold text-xl text-center">
                                <p>Expert</p>
                                <p>Medical Team</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p>For Quality Patient-Centred Care</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About