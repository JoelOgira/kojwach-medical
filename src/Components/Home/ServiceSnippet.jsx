import { FaTooth } from 'react-icons/fa';
import { PiBedThin } from 'react-icons/pi';
import { PiClockCounterClockwise } from 'react-icons/pi';
import { LiaCapsulesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const ServiceSnippet = () => {
    return (
        <section className="w-full showcase">
            <div className="px-5 space-y-12 py-10 md:px-0 md:container md:mx-auto md:w-5/6 lg:w-3/4">

                <div className='flex justify-center items-center'>
                    <h2 className="font-bold text-3xl max-w-md md:text-4xl md:max-w-xl capitalize text-center">Explore our main services</h2>
                </div>

                <div className="grid grid-cols-2 justify-center items-center md:grid-cols-4 text-secondary">
                    <div className="flex flex-col h-full justify-center items-center space-y-4 border border-r-0 border-b-0 py-5 border-secondary hover:bg-secondary hover:text-white md:border-b">
                        <FaTooth className="text-6xl" />
                        <p>Dentistry</p>
                    </div>

                    <div className="flex flex-col h-full justify-center items-center space-y-4 border border-b-0 py-5 border-secondary hover:bg-secondary hover:text-white md:border-r-0 md:border-b">
                        <LiaCapsulesSolid className="text-6xl" />
                        <p>Pharmacy</p>
                    </div>
                    
                    <div className="flex flex-col h-full justify-center items-center space-y-4 border border-r-0 py-5 text-center border-secondary hover:bg-secondary hover:text-white">
                        <PiClockCounterClockwise className="text-6xl" />
                        <p>Around the clock service</p>
                    </div>

                    <div className="flex flex-col h-full justify-center items-center space-y-4 border py-5 border-secondary hover:bg-secondary hover:text-white">
                        <PiBedThin className="text-6xl" />
                        <p>Antenatal care</p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <Link to="/services" className='text-sm font-light bg-tertiary hover:bg-secondary text-white py-3 px-6 rounded-full'>
                        More Services
                    </Link>
                </div>


            </div>
        </section>
    )
}

export default ServiceSnippet;