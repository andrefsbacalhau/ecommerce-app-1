import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contacts = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col px-5">
          <div>
            {/* -----Title/Tag----- */}
            <h1 className="font-display font-bold text-white tracking-wide p-2 ml-3 text-4xl md:text-3xl lg:text-5xl">
              Contact us anytime!
            </h1>
          </div>
          <div className="grid place-items-center">
            {/* ------Email Form------- */}
            <form action="submit" className="form">
              <label htmlFor="nameFrom" className="contact-label">
                Your name:
              </label>
              <input
                type="text"
                name="name_from"
                id="nameFrom"
                className="input-field"
              />
              <label htmlFor="emailFrom" className="contact-label">
                Email:
              </label>
              <input
                type="text"
                name="email_from"
                id="emailFrom"
                className="input-field"
              />
              <label htmlFor="subjectFrom" className="contact-label">
                Subject:
              </label>
              <input
                type="text"
                name="subject_from"
                id="subjectFrom"
                className="input-field"
              />

              <label htmlFor="messageFrom" className="contact-label">
                Your Message:
              </label>
              <textarea
                name="message"
                id="message"
                className="border border-black resize-none h-[60%] p-3 rounded-xl font-display tracking-wide"
              />
              <div className="flex justify-between items-center mt-4">
                <button className="w-20 p-1 flex items-center justify-center border border-black rounded-full cursor-pointer">
                  <FaPaperPlane />
                </button>
                <p className="font-display text-base">
                  By submitting you're agreeing with our{" "}
                  <span className="underline cursor-pointer">
                    Terms of Service
                  </span>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
