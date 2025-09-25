import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative bottom-0 overflow-hidden py-2 sm:py-10 bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          {/* Logo + Copyright */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between sm:items-center md:items-start">
              <div className="mb-4 flex justify-center sm:inline-flex sm:justify-start items-center">
                <Logo width="100px" />
              </div>
              <p className="text-sm sm:text-center text-white" style={{ textAlign: "center" }}>
                &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
                by DevUI.
              </p>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 hidden sm:block md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-sm font-semibold uppercase text-white">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Support */}
          <div className="w-full hidden sm:block p-6 sm:w-1/2 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-sm font-semibold uppercase text-white">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Account
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Help
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Legals */}
          <div className="w-full hidden sm:block p-6 sm:w-1/2 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-6 text-sm font-semibold uppercase text-white">
                Legals
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-base font-medium text-white" to="/">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
