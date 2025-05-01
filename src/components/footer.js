"use client";
import React from "react";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="md:flex hidden">
        {" "}
        <div className="mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-muted mt-36">
            <div className="sm:col-span-12 lg:col-span-3">
              <div className="mb-2">
                <p></p>

                <div className="mt-6">
                  <ul className="flex mb-4 md:order-1  md:mb-0">
                    <li className="ml-4">
                      <a
                        href="https://www.instagram.com/kaiga.in/?__pwa=1"
                        className="flex justify-center items-center bg-secondary hover:bg-transparent rounded-full shadow transition duration-150 ease-in-out"
                        aria-label="Instagram"
                      >
                        <svg
                        className="w-8 h-8 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Zm5.38-.88a.88.88 0 1 1 0 1.75a.88.88 0 0 1 0-1.75Z" />
                      </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-muted-foreground font-medium mb-2">
                Quick Links
              </h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-muted-foreground transition duration-150 ease-in-out"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-muted-foreground transition duration-150 ease-in-out"
                  >
                    Category
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-muted-foreground transition duration-150 ease-in-out"
                  >
                    Trendy
                  </a>
                </li>

                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-muted-foreground transition duration-150 ease-in-out"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-6 md:col-span-3">
              <h6 className="text-muted-foreground font-medium mb-2">
                Any Queries
              </h6>
              <p className="text-sm text-muted-foreground mb-4">
                We will try to resolve,&nbsp; just enter your email here.
              </p>

              <form>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label
                      className="block text sm sr-only"
                      htmlFor="newsletter"
                    >
                      Email
                    </label>
                    <div className="relative flex items-center max-w-xs">
                      <input
                        id="newsletter"
                        type="email"
                        className="form-input w-full text-foreground px-3 py-2 pr-12 text-sm focus:outline-none bg-secondary rounded-lg"
                        placeholder="Your Email required"
                      />
                      <button
                        type="submit"
                        className="absolute inset-0 left-auto"
                        aria-label="Subscribe"
                      >
                        <span
                          className="absolute inset-0 right-auto w-px -ml-px my-2 bg-foreground"
                          aria-hidden="true"
                        ></span>
                        <svg
                          className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* <p className="mt-2 text-green-400 text-sm">Thanks for subscribing!</p>  */}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex items-center justify-center py-2 -my-4 md:py-8 border-t border-muted">
            <div className="text-sm text-center text-gray-600 mr-4">
              Thanks for visiting this website 😊. Sending love from our team
            </div>
          </div>
        </div>
      </div>

      <footer className="backdrop-blur-sm bg-backgroundOpac fixed bottom-0 z-40 w-full border-t md:hidden">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          Menu Items
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
