'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { showLoader } from '@/components/loaderControl'; // Import the showLoader function
import React from 'react';

const Contact = () => {
  const formRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    showLoader(true); // Show loader before sending the email

    emailjs
      .sendForm(
        'axoraweb', // Service ID
        'template_k4lyjoo', // Template ID
        formRef.current!,
        'c3fSdSFVK9V2Nl6DK' // Public Key
      )
      .then(
        () => {

          showLoader(false); // Hide loader on success
          formRef.current.reset();
        },
        (error) => {
          showLoader(false); // Hide loader on error
          console.error('FAILED...', error);

        }
      );
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="user_name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:bg-[#2C303B] dark:text-body-color-dark"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="user_email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:bg-[#2C303B] dark:text-body-color-dark"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Enter your message"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:bg-[#2C303B] dark:text-body-color-dark"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>


              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
