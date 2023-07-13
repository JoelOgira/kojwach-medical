import { TbMicroscope } from "react-icons/tb";
import { BsHeartPulse } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";

const Showcase = () => {
    return (
        <div className="w-full px-5 py-10 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
            <div className="flex flex-col space-y-5 py-20 justify-center items-center text-center w-full">
                <h2 className="font-bold text-3xl max-w-md md:text-4xl md:max-w-xl">Urgent Care & Occupational Medicine Clinic</h2>
                <p className="text-lg">If you have any questions about testing, insurance coverage, duration of services.</p>
            </div>

            <div className="w-full flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-5">
                <div className="w-full flex flex-col space-y-8 sm:flex-row md:w-2/3 sm:space-y-0 sm:space-x-5">
                    <div className="sm:w-1/2">
                        <div className="flex flex-col space-y-6 bg-[#fff0f0] rounded-md justify-center items-center text-center py-10  px-14  md:px-6">
                            <div className="p-6 rounded-full bg-[#ec4949]">
                                <TbMicroscope className="text-white font-bold text-6xl" />
                            </div>
                            <h3 className="text-3xl max-w-xs font-semibold">X-Ray & Laboratory Services</h3>
                            <p className="text-center">Lab and x-ray services available on-site for quick diagnostics.</p>
                        </div>
                    </div>

                    <div className="sm:w-1/2">
                        <div className="flex flex-col space-y-6 bg-[#ec4949] rounded-md justify-center items-center text-center py-10  px-14  md:px-7 text-white">
                            <div className="p-6 rounded-full bg-white">
                                <BsHeartPulse className="text-[#ec4949] text-6xl" />
                            </div>
                            <h3 className="text-3xl max-w-xs font-semibold">Walk-in Urgent Care For You</h3>
                            <p className="text-center">Lab and x-ray services available on-site for quick diagnostics.</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/3">
                    <div className="flex flex-col space-y-6 bg-[#b12828] rounded-md justify-center items-center text-center py-10  px-14  md:px-6 text-white">
                        <div className="p-6 rounded-full bg-[#ec4949]">
                            <BsShieldCheck className="text-white font-bold text-6xl" />
                        </div>
                        <h3 className="text-3xl max-w-xs font-semibold">Most Insurances Accepted</h3>
                        <p className="text-center">Lab and x-ray services available on-site for quick diagnostics.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;