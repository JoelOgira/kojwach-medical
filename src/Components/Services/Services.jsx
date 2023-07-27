import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full">
      <div className="services-bg">
        <div className="bg-white bg-opacity-70">
          <div className="px-5 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
            <div className="flex space-x-5 mb-3">
              <div className="bg-[#b12828] h-10 w-2"></div>
              <h1 className="text-[#b12828] font-bold text-4xl">Services</h1>
            </div>
            <p className="text-secondary"><Link to="/" className="underline">Home</Link> - Services</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-8 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">TRIAGE</h3>
            <p className="text-justify">Taking clinical observations e.g. blood pressure, temperature and weight monitoring, Administration of all start medication i.e., drugs and injections, Taking history for the patients being admitted in the wards, and Performing minor procedures e.g. cleaning and dressing.</p>
          </div>

          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">CONSULTATION</h3>
            <p className="text-justify">Taking patient’s history, Physical examination, Requesting medical investigations, Outpatient management of patients/prescription of drugs, and Admission of patients in the wards.</p>
          </div>

          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">LABORATORY</h3>
            <p className="text-justify">Biochemistry services e.g. UEC, LFT, Serology services e.g. Hepatitis B test, HIV test, Parasitology services e.g. stool analysis, and Immunology services e.g. PCT test</p>
          </div>

          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">PHARMACY</h3>
            <p className="text-justify">Dispensing of drugs, Prescription of drugs and monitoring, Drug selection, and Counseling of patients</p>
          </div>

          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">MATERNITY /POST NATAL /LABOUR ROOM</h3>
            <p className="text-justify">Monitoring progress of labour from first stage to second stage, and Delivery services</p>
          </div>

          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">MCH ROOM</h3>
            <p className="text-justify">Family Planning, Antenatal clinics, and Immunizations</p>
          </div>

          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">RADIOGRAPHY</h3>
            <p className="text-justify">X-ray services, Ultrasound services, ECHO Cardiology, and ECG</p>
          </div>

          <div className="border shadow-md flex flex-col space-y-3 p-4">
            <h3 className="text-secondary text-center underline font-semibold text-xl">COMING SOON</h3>
            <p className="text-justify">THEATRE SERVICES</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services;