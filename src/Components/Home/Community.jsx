
const Community = () => {
    return (
        <section className="community-bg w-full">
            <div className="px-5 py-4 md:px-0 md:container md:mx-auto md:py-18 md:pt-24 md:w-5/6 lg:w-3/4">
                <div className="flex flex-col space-y-10 md:flex-row lg:space-y-0 lg:space-x-10">
                    <div className="flex flex-col space-y-5 md:w-2/3">
                        <h3 className="text-secondary font-bold font-poppins text-xl">To the Community</h3>
                        <h2 className="font-bold font-poppins text-2xl md:text-5xl md:max-w-4xl">Focusing On General Community Development & Health</h2>
                        <p className=" font-semibold font-poppins text-lg md:max-w-3xl">
                            Kojwach Medical Center provides access to comprehensive and integrated quality health care to improve individual and community health in Homa Bay and other Nyanza Counties.
                        </p>
                        <p className="md:max-w-3xl">
                            Additionally, Kojwach Medical Center has programs focused on community development through the KMC’s Community Social Responsibility such as renovation of schools, safe clean supply development and sustainable conservation agriculture. These activities are provided to mainly improve the wellness and wellbeing of the communities it serves.
                        </p>
                    </div>

                    <div className="w-full flex flex-col space-y-5 md:justify-end md:items-baseline md:w-1/3">
                        <div className="w-full px-6 py-7 flex justify-start items-center space-x-7">
                            <div className="staff-stat p-8 text-2xl font-semibold font-poppins">20+</div>
                            <div className="flex flex-col space-y-2">
                                <p className="font-semibold font-poppins text-xl">Qualified Personnel</p>
                                <p>Trained experts present in our clinic.</p>
                            </div>
                        </div>

                        <div className="w-full rounded-md bg-white px-6 py-7 flex justify-start items-center space-x-7">
                            <div className="services-stat p-8 text-2xl font-semibold font-poppins">10+</div>
                            <div className="flex flex-col space-y-2">
                                <p className="font-semibold font-poppins text-xl">Medical Services</p>
                                <p>Total medical services provided by KMC</p>
                            </div>
                        </div>

                        <div className="w-full px-6 py-7 flex justify-start items-center space-x-7">
                            <div className="bed-stat p-10 text-2xl font-semibold font-poppins">40</div>
                            <div className="flex flex-col space-y-2">
                                <p className="font-semibold font-poppins text-xl">Bed Capacity</p>
                                <p>Total bed capacity in our hospital</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;