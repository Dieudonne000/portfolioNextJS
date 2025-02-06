"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const sendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (formRef.current) {
        await emailjs.sendForm(
          "service_c3k2yj5",  // Replace with your EmailJS Service ID
          "template_kstad49", // Replace with your EmailJS Template ID
          formRef.current,
          "eI3JsvHRUSroB4P7P" // Replace with your EmailJS Public Key
        );
      }

      setStatus("success");
      formRef.current?.reset();

    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    // Reset status back to idle after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="sm:p-20 p-5 rounded-3xl max-w-6xl w-full mx-4">
        <h2 className="text-center text-3xl font-bold mt-8 mb-9 text-[#01566F] dark:text-white">Contact Me</h2>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row gap-48">
            <div className="text-center lg:text-left">
              <div className="animate-bounce mockup-code min-w-[20rem] text-left hover:animate-none bg-[#031a37]">
                <pre data-prefix="#"><code>contact me</code></pre>
                <pre data-prefix=">" className="text-warning"><code>initializing...</code></pre>
                <pre data-prefix=">" className="text-info"><code>enter_fullnames_&_email.</code></pre>
                <pre data-prefix=">" className="text-[#ffa007]"><code>type_message</code></pre>
                <pre data-prefix=">" className="text-success"><code>hit_send!</code></pre>
              </div>
            </div>
            <div className="card bg-white text-[#01566F] dark:text-white dark:bg-[#031a20] w-full max-w-sm shrink-0 shadow-2xl">
              <form ref={formRef} onSubmit={sendEmail} className="card-body">
                <div className="text-[#183037] dark:text-white">
                  <h2 className='text-2xl font-bold mb-5'>I&apos;m always open</h2>
                  <p className='text-sm mb-4'>Feel free to reach out—drop a message, and I&apos;ll get back to you as soon as possible!</p>
                </div>
                <div className="form-control">
                  <input type="text" name="user_name" placeholder="Fullnames*" className="input input-bordered bg-[#bedce6] dark:bg-[#031e27] focus:outline-[#01566F]" required />
                </div>
                <div className="form-control">
                  <input type="email" name="user_email" placeholder="Email*" className="input input-bordered bg-[#bedce6] dark:bg-[#031e27] focus:outline-[#01566F]" required />
                </div>
                <div className="form-control">
                  <textarea name="message" placeholder="Message*" className="input input-bordered bg-[#bedce6] dark:bg-[#031e27] max-h-[10rem] min-h-[4rem] focus:outline-[#01566F]" required />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-[#01566F] font-bold text-white border-none hover:bg-[#1b809e]">
                    {status === "loading" ? <span className="loading loading-spinner"></span> : null}
                    {status === "success" ? <><FaCheckCircle /><span className="font-semibold">Done</span></> : null}
                    {status === "error" ? <><RxCrossCircled /><span className="font-semibold">Please tryagain!</span></> : null}
                    {status === "idle" ? "Send" : ""}
                  </button>
                </div>
              </form>
              {/* {status === "success" && (
                <div className="alert alert-success mt-4">
                  <span>Message sent successfully!</span>
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-error mt-4">
                  <span>Failed to send message. Please try again.</span>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


// #260337