"use client";
import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import SectionWrapper from "../wrapper/SectionWrapper";
import SuccessModal from "./SuccessModal";
import ButtonAnimation from "@/Anim/ButtonAnimation";
import { TextRevealAnimation } from "@/Anim/TextRevealAnimation";

const initContactObj = {
  email: "",
  subject: "",
  message: "",
};

const initialModalObj = {
  header: "",
  msg: "",
  trigger: false,
};

const Contact = () => {
  const [contactObj, setContactObj] = useState(initContactObj);
  const [modalObj, setModalObj] = useState(initialModalObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactObj({ ...contactObj, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contactObj);
    setModalObj({
      header: "Success",
      msg: "Your message has been sent successfully.",
      trigger: true,
    });
  };

  return (
    <>
      {modalObj.trigger && (
        <SuccessModal
          modalObj={modalObj}
          clickFunction={() => setModalObj(initialModalObj)}
        />
      )}
      <SectionWrapper id="contact">
        <div className="">
          <h2 className="mb-8 font-bold text-4xl underline">
            <TextRevealAnimation text={"Contact Me"} />
          </h2>
          <div className="flex flex-wrap sm:flex-nowrap items-start gap-8">
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  value={contactObj.email}
                  onChange={handleChange}
                  placeholder="Your Email Address..."
                  className="border-2 border-gray-500 dark:border-white/80 dark:bg-slate-100 p-2 rounded-lg outline-none"
                />
                <input
                  type="subject"
                  name="subject"
                  value={contactObj.subject}
                  onChange={handleChange}
                  placeholder="Subject of contact..."
                  className="border-2 border-gray-500 dark:border-white/80 dark:bg-slate-100 p-2 rounded-lg outline-none"
                />
                <textarea
                  value={contactObj.message}
                  name="message"
                  rows={5}
                  onChange={handleChange}
                  placeholder="Enter your message or query..."
                  className="border-2 border-gray-500 dark:border-white/80 dark:bg-slate-100 p-2 rounded-lg outline-none"
                />
                <ButtonAnimation
                  className="bg-blue-600 hover:bg-blue-900 px-4 py-2 rounded-lg w-max text-white"
                  type="submit"
                >
                  Submit
                </ButtonAnimation>
              </form>
            </div>

            <div className="flex-1 space-y-4 p-4 text-xl">
              <div className="text-center">
                <Phone size={80} className="mx-auto" />
                <h2 className="">PHONE</h2>
                <p>+918953682187</p>
              </div>
              <div className="text-center">
                <Mail size={80} className="mx-auto" />
                <h2 className="">EMAIL</h2>
                <p>niteshkr8953@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
