import React from "react";
import ContactSection from '../../src/components/ContactSection'

const index = () => {
  return (
    <div>
      <div className="w-full bg-gray-900">
        <div className="mx-auto px-4 text-center sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* <h2 className="text-base font-semibold text-white tracking-wide uppercase">
                Contact Us
              </h2> */}
              <p className="mt-1 text-4xl font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
                We will love to here from you.
              </p>
              {/* <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-50">
                Choose from a wide gamut of services that are custom tailored to
                each client's need.
              </p> */}
            </div>
          </div>
        </div>
        <ContactSection />
      </div>
    </div>
  );
};

export default index;
