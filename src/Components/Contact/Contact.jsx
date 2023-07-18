import { FaPhoneAlt } from "react-icons/fa";
import map from '../../assets/Map.jpg';

const Contact = () => {
    return (
        <div className="w-full px-5 py-6 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
            <div className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-5 w-full md:flex-row md:space-y-0">
                    <div className="w-full grid content-center text-center justify-center md:w-1/2 md:justify-start md:items-start">
                        <h2 className="pb-5 text-3xl font-semibold">Contact Information</h2>

                        <p className="max-w-md pb-5">You can contact us at any time for information about our facility and you will be serviced by the professional operators. You are also welcome to visit our location at Ringa Kojwach</p>

                        <button className="p-3 mx-auto flex px-6 text-[#ec4949] border-2 border-[#ec4949] rounded-full baseline hover:bg-[#ec4949] hover:text-white md:mx-auto">
                            <FaPhoneAlt className="mt-1" /> <span className="mx-3">Call Us: +2547987654</span>
                        </button>
                    </div>

                    <div className=" w-full md:w-1/2">
                        <img src={map} alt="Google maps" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;