import Image from "next/image";
import bupLogo from "public/img/buplogo.png";

const ContactForm = () => {
  return (
    <section id="contact" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-black">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leadi lg:text-5xl">Contact Us</h2>
          <div className="dark:text-black">
            <p>
              Bangladesh University of Professionals <br />
              Mirpur Cantonment <br />
              Dhaka-1216, Bangladesh <br />
              <br />
              <span className="font-bold">Email:</span> info.icict4sd@bup.edu.bd
            </p>
          </div>
        </div>
        <Image src={bupLogo} alt="Bup Logo" className="p-6 h-[6rem] mx-auto md:mx-0 w-fit md:h-[10rem] md:w-[35%]" />
      </div>
      <form className="space-y-6">
        <div>
          <label className="text-sm">Full name</label>
          <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-200" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input id="email" type="email" className="w-full p-3 rounded bg-gray-200" />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea id="message" className="w-full p-3 rounded bg-gray-200"></textarea>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-black text-white">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
