import Image from "next/image";
import "./ProjectCardSample.css"
import Navbar from "./Navbar";

export default function SplashHero(){
    return(
        <section className="absolute left-0 top-0 w-full h-[100vh] bg-black">
            <Navbar transparent={true}/>
             <Image
                src="/assets/splash.png"
                alt="Splash background"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute w-full h-[105vh] flex flex-col justify-center items-center">
                <p className="font-avenir font-light uppercase text-brand-cream text-xl tracking-widest">inspiring tomorrow</p>
                <h1 className="font-poppins font-medium text-[100px] text-white"><span className="underline">SPACES</span> FOR EXCELLENCE</h1>
                <p className="font-poppins font-normal text-[32px]">Future-ready spaces for thriving businesses</p>
                <div className="arrow-overlay-splash">
                  <img src="/assets/icons/up_arrow.svg" className="w-10" alt="Project Image" />
                </div>
            </div>
        </section>
    )
}