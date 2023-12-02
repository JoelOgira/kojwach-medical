import { TbMicroscope } from "react-icons/tb";
import { GiHospital } from "react-icons/gi";
import { BsShieldCheck } from "react-icons/bs";

const Showcase = () => {
    return (
        <section className="w-full showcase">
            <div className="px-5 py-10 mb-10 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
                <div className="flex flex-col space-y-5 py-20 justify-center items-center text-center w-full">
                    <h2 className="font-bold font-poppins text-3xl max-w-md md:text-4xl md:max-w-xl">Welcome to our facility that provides quality care for all</h2>
                    <p className="text-lg">If you have any questions about testing, insurance coverage, duration of services.</p>
                </div>

                <div className="w-full flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-5">
                    <div className="w-full flex flex-col space-y-8 sm:flex-row md:w-2/3 sm:space-y-0 sm:space-x-5">
                        <div className="sm:w-1/2">
                            <div className="flex flex-col space-y-6 bg-[#fff0f0] rounded-md justify-center items-center text-center py-10  px-8 md:px-6">
                                <div className="p-6 rounded-full bg-[#ec4949]">
                                    <TbMicroscope className="text-white text-6xl" />
                                </div>
                                <h3 className="text-3xl max-w-xs font-semibold font-poppins">Specialized Care</h3>
                                <p className="text-center">We have comprehensive specialized clinics for adults and children where patients are attended to by highly specialized consultants.</p>
                            </div>
                        </div>

                        <div className="sm:w-1/2">
                            <div className="flex flex-col space-y-6 bg-[#ec4949] rounded-md justify-center items-center text-center py-10  px-8 md:px-7 text-white">
                                <div className="p-6 rounded-full bg-white">
                                    <GiHospital className="text-[#ec4949] text-6xl" />
                                </div>
                                <h3 className="text-3xl max-w-xs font-semibold font-poppins">Our Hospital</h3>
                                <p className="text-center">We offer quality patient-centered care where the patient is an active participant in their care. This brings about improved patient health outcomes and satisfaction.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3">
                        <div className="flex flex-col space-y-6 bg-[#b12828] rounded-md justify-center items-center text-center py-10  px-8 md:px-6 text-white">
                            <div className="p-6 rounded-full bg-[#ec4949]">
                                <BsShieldCheck className="text-white font-bold font-poppins text-6xl" />
                            </div>
                            <h3 className="text-3xl max-w-xs font-semibold font-poppins">Most Insurances Accepted</h3>
                            <p className="text-center">We accept a number of insurance policies from different vendors. This gives you a piece of mind while visiting our facility for top-notch healthcare.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase;
