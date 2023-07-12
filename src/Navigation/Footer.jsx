import logo from '../assets/logo.png';

const Footer = () => {
    const thisYear = new Date().getFullYear();

    return (
        <footer className="bg-[#fff0f0] top-full sticky py-10">
            <div className="grid grid-cols-2 gap-10 px-5 py-5 sm:container sm:w-3/4 sm:mx-auto sm:grid-cols-2 md:flex md:flex-row md:justify-between md:px-0">
                <div className='flex text-[0.90rem] flex-col space-y-4 justify-start items-start sm:text-sm'>
                    <img src={logo} alt="site-logo" className='mb-4' width="150px" />
                    <p>Address: Oyugis, KE 40222</p>
                    <p>Phone: <span className='pl-1 text-[#ec4949]'>+2547987654</span> </p>
                    <p>E-mail: <span className='pl-1 text-[#ec4949]'>info@kojwach.medical</span></p>
                </div>                
                    <div>
                        <ul className='flex flex-col space-y-3 justify-start items-start'>
                            <li className='text-xl pb-3 text-[#a8c3e1]'>DEPARTMENTS</li>
                            <li className='hover:text-[#a8c3e1]'>Radiology</li>
                            <li className='hover:text-[#a8c3e1]'>Dental Unit</li>
                            <li className='hover:text-[#a8c3e1]'>Maternity Unit</li>
                            <li className='hover:text-[#a8c3e1]'>Pharmacy</li>
                        </ul>
                    </div>

                
                    <div>
                        <ul className='flex flex-col space-y-3 justify-start items-start'>
                            <li className='text-xl pb-3 text-[#a8c3e1]'>DEPARTMENTS</li>
                            <li className='hover:text-[#a8c3e1]'>Radiology</li>
                            <li className='hover:text-[#a8c3e1]'>Dental Unit</li>
                            <li className='hover:text-[#a8c3e1]'>Maternity Unit</li>
                            <li className='hover:text-[#a8c3e1]'>Pharmacy</li>
                        </ul>
                    </div>

                
                    <div>
                        <ul className='flex flex-col space-y-3 justify-start items-start'>
                            <li className='text-xl pb-3 text-[#a8c3e1]'>DEPARTMENTS</li>
                            <li className='hover:text-[#a8c3e1]'>Radiology</li>
                            <li className='hover:text-[#a8c3e1]'>Dental Unit</li>
                            <li className='hover:text-[#a8c3e1]'>Maternity Unit</li>
                            <li className='hover:text-[#a8c3e1]'>Pharmacy</li>
                        </ul>
                    </div>
                </div>

            <hr className='border border-black' />

            <p className='text-center pt-5'>Copyright &copy; {thisYear} Kojwach Medical Center </p>

        </footer>
    )
}

export default Footer;