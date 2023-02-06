import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import React from "react";

const index = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-900">
        <div className="mx-auto px-4 text-center sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* <h2 className="text-base font-semibold text-white tracking-wide uppercase">
                Our services
              </h2> */}
              <p className="mt-1 text-4xl font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
                What do we provide?
              </p>
              <p className="max-w-3xl mt-5 mx-auto text-2xl text-gray-50">
                We provide a gamut of services for start-ups and enterprises to
                scale their dreams or transform ideas into reality.
              </p>
            </div>
          </div>
        </div>
        <div className="relative bg-white ">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="">
              <div className="relative pt-16 pb-32 overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-48"
                />
                <div className="relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-3 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div className=" w-full">
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <InboxIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            Data Analytics
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            We provide analytical solutions with an optimum
                            combination of artificial intelligence along with
                            human acumen. With our prime design methodology,
                            research expertise, data engineering and automation,
                            we are supporting businesses to unlock the door to
                            greater opportunities and to expand and distinguish
                            themselves over rapid competition. By bringing
                            context and data together, we empower firms to turn
                            their raw market data into actionable information
                            for significant business insights.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                      <div
                        data-aos="fade-left"
                        className="pl-4  sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-full lg:absolute lg:left-0 lg:h- lg:w-full "
                          src="/images/s1.svg"
                          alt="Inbox user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div>
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <SparklesIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            AI & ML development
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            Our AI/ML development team specializes in advanced
                            deep learning techniques for computer vision,
                            natural language processing, and more. We use
                            cutting-edge algorithms to build sophisticated
                            models that can recognize patterns, classify data,
                            and generate predictions with unparalleled accuracy.
                            Whether you're looking to enhance your image
                            recognition systems, streamline your text-based data
                            processing, or develop custom solutions, our deep
                            learning expertise can help you achieve your goals.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                      <div
                        data-aos="fade-right"
                        className=" lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto"
                          src="/images/s2.svg"
                          alt="Customer profile user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-20 relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-3 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div className=" w-full">
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <InboxIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            Web development
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            We offer end-to-end web development solutions to
                            help businesses achieve their online goals. Our team
                            of experts utilizes cutting-edge technologies and a
                            user-centered design approach to build custom
                            websites that are both aesthetically pleasing and
                            highly functional. From simple brochure websites to
                            complex e-commerce platforms and functional web
                            apps, we have the skills and experience to deliver a
                            solution that meets your unique needs and exceeds
                            your expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                      <div
                        data-aos="fade-left"
                        className="pl-4  sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-full lg:absolute lg:left-0 lg:h- lg:w-full "
                          src="/images/s3.svg"
                          alt="Inbox user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-60">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div>
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <SparklesIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            Mobile and app development
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            Our mobile and app development services empower
                            businesses to reach their customers through seamless
                            and user-friendly mobile experiences. Our team of
                            experts leverages the latest technologies and design
                            principles to build high-performance native and
                            cross-platform mobile apps for iOS and Android
                            devices. Whether you need to develop a custom app
                            from scratch, upgrade an existing app, or maintain
                            and support your app, we have the skills and
                            experience to deliver the solutions you need to
                            achieve your goals.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                      <div
                        data-aos="fade-right"
                        className=" lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto"
                          src="/images/s4.svg"
                          alt="Customer profile user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-3 lg:max-w-none lg:mx-0 lg:px-0">
                      <div>
                        <div className=" w-full">
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <InboxIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            UI UX and graphic design
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            Our graphic design services bring your brand to life
                            through visually stunning and impactful designs. Our
                            team of talented designers creates unique and
                            memorable visual assets, such as logos, brochures,
                            business cards, and more, that effectively
                            communicate your brand message and values. We use a
                            combination of creativity and strategy to craft
                            designs that not only look great, but also achieve
                            specific business objectives. Let us help you make a
                            lasting impression with visually stunning graphic
                            designs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                      <div
                        data-aos="fade-left"
                        className="pl-4  sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-full lg:absolute lg:left-0 lg:h- lg:w-7/12 "
                          src="/images/s6.svg"
                          alt="Inbox user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-40">
                  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                    <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                      <div>
                        <div>
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <SparklesIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            Coversational Chatbots
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            Our chatbot development services help businesses
                            automate customer interactions and improve
                            engagement. We leverage RASA and NLU to build custom
                            chatbots that are capable of handling a wide range
                            of customer inquiries and tasks. Whether you need a
                            chatbot for customer service, sales, or marketing,
                            we have the expertise and technology to deliver a
                            solution that meets your unique needs and provides
                            an exceptional customer experience.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                      <div
                        data-aos="fade-right"
                        className=" lg:px-0 lg:m-0 lg:relative lg:h-full"
                      >
                        <img
                          className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto"
                          src="/images/s5.svg"
                          alt="Customer profile user interface"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
