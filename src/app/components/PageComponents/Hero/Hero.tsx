import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen relative bg-[url('/img/intro-bg.jpg')]">
      <div className="absolute bg-[#060C22CC] h-full w-full"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image src="/img/conf/Conferece_logo.png" alt="logo" width={200} height={200} className="mb-5 mx-auto max-w-[200px]" />
          <p className="mb-5 text-3xl md:text-5xl text-red-700 font-bold">
            2<sup>ND</sup> INTERNATIONAL CONFERENCE
          </p>
          <p className="mb-5 text-lg md:text-2xl">ON</p>
          <p className="mb-5 text-xl md:text-3xl">INFORMATION AND COMMUNICATION TECHNOLOGY FOR SUSTAINABLE DEVELOPMENT</p>
          <p className="mb-5 text-lg md:text-2xl">14-16 September, 2023, Bangladesh University of Professionals</p>
          <button className="btn btn-primary">
            <Link href={"/#description"}>About The Event</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
