import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import contactimage from "../public/image/Contact-Hero.jpg";

const Contact = () => {
  return (
    <div className="bg-darkblue ">
      <Head>
        <title>Billy B Contact Page</title>
      </Head>
      <div className="bg-darkblue shadow-2xl pt-12">
        <div className="w-11/12 ml-auto mr-auto">
          <Image src={contactimage} />
        </div>
        <p className="italic font-light py-8 w-10/12 ml-auto mr-auto text-white leading-7">
          Billy loves to hear from children & educators, and reads every message
          sent to him. Have a question, comment, or drawing you'd like to send
          him? Use the convenient & secure contact form. If you're inquiring
          about booking a virtual or in-person performance, please use the
          <Link href="#">
            <a className="text-lightyellow"> booking form</a>
          </Link>
        </p>
      </div>
      <form className="w-11/12 ml-auto mr-auto mt-12 pb-12">
        <div className="m-8">
          <input
            type="name"
            id="name"
            placeholder="Your Name"
            required
            className="h-12 w-full"
          />
        </div>
        <div className="m-8">
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            className="h-12 w-full"
          />
        </div>
        <div className="m-8">
          <textarea
            id="message"
            cols="30"
            placeholder="Message"
            rows="10"
            className="w-full text-gray-400"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <button className="shadow-2xl  ml-auto py-4 mr-auto mb-8 w-60 px-8 rounded-full uppercase bg-lightblue">
            attach file
          </button>
          <button className="shadow-2xl  ml-auto py-4 mr-auto mb-8 w-60 px-8 rounded-full uppercase bg-lightyellow">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
