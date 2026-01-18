"use clients"

import Image from "next/image";

export default function DesignAndBuild(){
    return(
        <section className="py-10 px-4 md:py-20 md:px-16 flex flex-col gap-5">
                <h1 className="font-poppins font-semibold text-[32px] md:text-[56px] leading-10 md:leading-16">Sustainable Design<br/> and Build Practices</h1>
                <p className="font-roboto font-normal text-lg md:text-2xl text-gray-600 leading-7">We are the followers of sustainable practices and environmental responsibilities that are a natural progression of good practices in today’s global economy. We are committed to be ‘sustainable’ in business, environmental impact,workplace design,running costs and resource utilization.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    <div className="flex flex-col gap-4 bg-[#F6F6F6] p-5">
                        <Image src="/assets/icons/plant.svg"
                            width={35}
                            height={35}
                            alt="plant"
                        />
                        <h1 className="font-roboto font-medium text-xl">Environmental</h1>
                        <p className="font-roboto font-normal text-xl text-gray-600 mt-1">Minimizing our carbon footprint, mitigating environmental impact, and promoting health and productivity.</p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#F6F6F6] p-5">
                        <Image src="/assets/icons/handshake.svg"
                            width={35}
                            height={35}
                            alt="plant"
                        />
                        <h1 className="font-roboto font-medium text-xl">Social</h1>
                        <p className="font-roboto font-normal text-xl text-gray-600 mt-1">Enhancing employee and client perception of the brand, productivity, and retention.</p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#F6F6F6] p-5">
                        <Image src="/assets/icons/house.svg"
                            width={35}
                            height={35}
                            alt="plant"
                        />
                        <h1 className="font-roboto font-medium text-xl">Governance</h1>
                        <p className="font-roboto font-normal text-xl text-gray-600 mt-1">Ensuring ethical leadership, transparency, compliance, and accountability in corporate practices.</p>
                    </div>

                </div>
        </section>
    );
}