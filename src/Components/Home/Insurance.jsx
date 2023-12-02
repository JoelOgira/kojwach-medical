import AAR from "../../assets/AAR_2a99ed29b8.png";
import Amref from "../../assets/AMREF_1_808abe053b.svg";
import APA from "../../assets/APA_1_5e9705d21c.svg";
import Britam from "../../assets/britam_e7c1a8c59e.svg";
import Cigna from "../../assets/Cigna_1_a880a61280.svg";
import Coop from "../../assets/Co_operative_Insurance_1_ef4d07502f.svg";
import General from "../../assets/GENERAL_INSURANCE_1_3d82f3347f.svg";
import Jubilee from "../../assets/jubilee_6f6c57e639.svg";
import Madison from "../../assets/madison_9ab8b4a6f1.svg";
import Minet from "../../assets/MINET_1_26cb2346b2.svg";
import NHIF from "../../assets/nhif_7af9802293.svg";
import UAP from "../../assets/UAP_1_887f320ecc.svg";

const Insurance = () => {
    return (
        <section className="w-full px-5 py-6 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
            <div className="flex flex-col space-y-10 md:flex-row md:space-x-14 md:space-y-0">
                <div className="flex flex-col space-y-5 justify-center items-center text-center w-full md:justify-start md:items-start md:text-left md:w-1/3">
                    <h2 className="text-[#ec4949]">INSURANCE</h2>
                    <h3 className="font-bold font-poppins text-3xl max-w-md md:text-4xl md:max-w-xl">Here are Our Insurance Partners</h3>
                    <p className="text-lg font-poppins">If you have any questions about testing, insurance coverage, duration of services.</p>
                    <p className="text-lg font-poppins">Please call us at <span className="text-[#ec4949]">+254798765432</span> and we’ll help you out.</p>
                </div>

                <div className="grid grid-cols-2 gap-5 items-center sm:grid-cols-3 md:grid-cols-4 md:w-2/3">
                    <div className="flex justify-center items-center">
                        <img src={AAR} alt="AAR Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Amref} alt="Amref Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={APA} alt="APA Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Britam} alt="Britam Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Cigna} alt="Cigna Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Coop} alt="Coop Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={General} alt="General Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Jubilee} alt="Jubilee Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Madison} alt="Madison Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={Minet} alt="Minet Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={NHIF} alt="NHIF Insurance Logo" width="150px" />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={UAP} alt="UAP Insurance Logo" width="150px" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Insurance;