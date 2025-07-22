
export default function About(){

    return(
        <div className="flex mt-[10vh] w-[90vw] m-auto">
            <div className="">
                <img src="/assets/about.svg" className="h-[50vh]"/>
            </div>
            <div>
                <p className="text-red-500 text-xl">| About iTech |</p>
                <p className=" text-7xl font-bold tracking-tighter w-[30rem] my-[1rem]">Experts in Tech Evolution.</p>
                <p className="text-2xl font-thin">As an IT Solution and Services Company, we have a value in fulfilling our clients’ satisfaction.</p>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <div className="">
                            <p className="text-red-500 text-4xl tracking-tighter font-medium w-[15rem] mt-[3rem]">Innovation and Adaptability</p>
                            <p className="text-xl w-[22rem]">Driving continuous innovation to deliver cutting-edge, tailored solutions that evolve with technology and you needs.</p>
                        </div>
                        <div className="">
                            <p className="text-red-500 text-4xl tracking-tighter font-medium w-[18rem] mt-[3rem]">Customer-Centric Excellence</p>
                            <p className="text-xl w-[22rem]">Driving continuous innovation to deliver cutting-edge, tailored solutions that evolve with technology and you needs.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mt-[3rem]">
                            <p className="text-2xl w-[22rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}