import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import contactimage from "../public/image/Contact-Hero.jpg";

const BookingForm = () => {
  return (
    <div className="bg-mediumblue ">
      <Head>
        <title>Billy B Booking Form Page</title>
      </Head>
      <div className="bg-darkblue shadow-2xl pt-12">
        <div className="w-11/12 ml-auto mr-auto">
          <Image src={contactimage} />
        </div>
        <div>
          <div className="h-64 shadow-2xl">
            <p className="italic font-light py-8 w-10/12 ml-auto mr-auto text-white leading-7">
              Select your area to contact the designated booking agent using the
              booking form below. Or, give them a call to discuss bringing Billy
              B to your school or event!
            </p>
            <div className="w-11/12 ml-auto mr-auto">
              <div className="bg-darkyellow px-1 pt-8 pb-1">
                <h4 className="uppercase -mt-2">the dc area</h4>
                <div className="bg-lightyellow py-8 mt-4">
                  <p className="mb-4 ml-2">Artivate</p>
                  <p className="ml-2">Phone: 301-588-7525</p>
                  <p className="ml-2">https://www.goartivate.org</p>
                </div>
              </div>

              <div className="mt-4 bg-mediumblue px-1 pt-8 pb-1">
                <h4 className="uppercase -mt-2">connecticut area</h4>
                <div className="bg-darkblue py-8 mt-4">
                  <p className="mb-4 ml-2">Arts for Learning Connecticut</p>
                  <p className="ml-2">Phone: 203-230-8101</p>
                  <p className="ml-2">https://www.aflct.org</p>
                </div>
              </div>

              <div className="mt-4 bg-mediumblue px-1 pt-8 pb-1">
                <h4 className="uppercase -mt-2">massachusets area</h4>
                <div className="bg-darkblue py-8 mt-4">
                  <p className="mb-4 ml-2">Young Audiences of Massachusetts</p>
                  <p className="ml-2">Phone: 617-629-9262</p>
                  <p className="ml-2">https://yamass.org</p>
                </div>
              </div>

              <div className="mt-4 bg-mediumblue px-1 pt-8 pb-1">
                <h4 className="uppercase -mt-2">all other locations</h4>
                <div className="bg-darkblue py-8 mt-4">
                  <p className="mb-4 ml-2">Susan M. Schultz</p>
                  <p className="ml-2">Phone: 317-319-0609</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-96 pt-24">
            <form className="w-11/12 ml-auto mr-auto mt-96 pb-12">
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
                <button className="shadow-2xl  ml-auto py-4 mr-auto mb-8 w-60 px-8 rounded-full uppercase bg-lightyellow">
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
