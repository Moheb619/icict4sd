"use client";
import Image from "next/image";
import bupLogo from "public/img/buplogo.png";
import { SyntheticEvent, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  // Form field value
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Error Message
  const [fullnameerror, setFullNameError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [messageerror, setMessageError] = useState("");

  // Input ref
  const fullnameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    setFullName(fullnameInputRef.current?.value ? fullnameInputRef.current.value : "");
    setFullName(emailInputRef.current?.value ? emailInputRef.current.value : "");
    setFullName(messageInputRef.current?.value ? messageInputRef.current.value : "");

    const formData = {
      fullname,
      email,
      message,
    };
    // Validate the form
    if (fullname === "" || email === "" || message === "") {
      if (fullname === "") {
        setFullNameError("Full name must be filled");
      }
      if (email === "") {
        setEmailError("Email must be filled");
      }
      if (message === "") {
        setMessageError("Message must be filled");
      }
      return;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setEmailError("Email must be in a valid format.");
      return;
    }
    try {
      const response = await axios.post("/api/contacts", formData, { headers: { "Content-Type": "application/json" } });
      setFullName("");
      setEmail("");
      setMessage("");
      fullnameInputRef.current!.value = "";
      emailInputRef.current!.value = "";
      messageInputRef.current!.value = "";

      toast.info(response.data.message);
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };
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
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="text-sm">Full name</label>
          <input
            id="full_name"
            type="text"
            placeholder=""
            ref={fullnameInputRef}
            className="w-full p-3 rounded bg-gray-200"
            onChange={(e) => {
              setFullName(e.target.value);
              if (fullname !== "") {
                setFullNameError("");
              }
            }}
          />
          <p className="text-red-600 text-sm">{fullnameerror}</p>
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-200"
            ref={emailInputRef}
            onChange={(e) => {
              setEmail(e.target.value);
              if (email !== "" && email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                setEmailError("");
              }
            }}
          />
          <p className="text-red-600 text-sm">{emailerror}</p>
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea
            id="message"
            className="w-full p-3 rounded bg-gray-200"
            ref={messageInputRef}
            onChange={(e) => {
              setMessage(e.target.value);
              if (message !== "") {
                setMessageError("");
              }
            }}
          ></textarea>
          <p className="text-red-600 text-sm">{messageerror}</p>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-black text-white">
          Send Message
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </section>
  );
};

export default ContactForm;
