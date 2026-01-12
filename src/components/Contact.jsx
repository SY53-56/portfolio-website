import {
  GithubIcon,
  Linkedin,
  MailIcon,
  PhoneCallIcon,
  TwitchIcon,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { contactAnimation } from "../animations/contactAnimation";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });
const contactRef= useRef()
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function formHandle(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          msg: form.msg,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully ✅");
        setForm({ name: "", email: "", msg: "" });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send ❌");
      })
      .finally(() => setLoading(false));
  }

  useEffect(()=>{
  let removeAnimation = contactAnimation(contactRef)
  return ()=>removeAnimation()
  },[])

  return (
    <div ref={contactRef} className="mt-32 text-white">
      <h1 className="h1 text-5xl text-center font-bold text-gray-300">Let's talk 😊</h1>

      <div className="flex w-full justify-center items-start lg:items-center gap-20 mt-20 flex-wrap">
        {/* LEFT */}
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-start lg:items-center ">
            <PhoneCallIcon /> +91 7909080171
          </p>
          <p className="flex gap-2 items-center">
            <MailIcon /> yadavsahul220@gmail.com
          </p>

          <div className="flex gap-4 mt-3">
            <Linkedin className="cursor-pointer" />
            <GithubIcon className="cursor-pointer" />
            <TwitchIcon className="cursor-pointer" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col">
          <p className="text-[16px] max-w-96 px-4">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life — I'm here to help.
          </p>

          <form
            onSubmit={formHandle}
            className="flex flex-col gap-2 px-4 mt-5"
          >
            <label className="text-[18px]">Full name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="px-2 py-2 rounded-md bg-gray-200 text-black"
            />

            <label className="text-[18px] mt-3">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="px-2 py-2 rounded-md bg-gray-200 text-black"
            />

            <label className="text-[18px] mt-3">Message</label>
            <textarea
              name="msg"
              value={form.msg}
              onChange={handleChange}
              placeholder="Send your message"
              rows={3}
              required
              className="px-2 py-2 rounded-md bg-gray-200 text-black"
            />

            <Button
              type="submit"
              name={loading ? "Sending..." : "Submit"}
              disabled={loading}
              className="bg-[#2200493d] border border-[#72a1de81] mt-4
                shadow-[0_0_5px_#72a1de81]
                hover:shadow-[0_0_15px_#72a1de81]
                px-4 py-2 rounded-md text-white transition-all duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
