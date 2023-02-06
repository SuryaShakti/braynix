import { Fragment, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartPieIcon,
  ChatIcon,
  CloudUploadIcon,
  CogIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  InboxIcon,
  LockClosedIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PresentationChartBarIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  SparklesIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactSection from "../src/components/ContactSection";
import ReactTypingEffect from "react-typing-effect";

const features = [
  {
    name: "AI and data Analytics",
    description:
      "Unlock the potential of your data with our advanced analytics services, delivering actionable insights.",
    icon: ChartPieIcon,
  },
  {
    name: "Conversational Chatbots",
    description:
      "Transform your business with our AI-powered chatbot services. Streamline operations, enhance customer experiences and drive growth.",
    icon: ChatIcon,
  },
  {
    name: "UI/UX and Graphic Design",
    description:
      "Elevate your brand with our professional UI/UX and graphic design services. Create stunning visuals and user-friendly experiences for a memorable impact.",
    icon: DesktopComputerIcon,
  },
  {
    name: "Web development",
    description:
      "Bring your vision to life with our expert web development services. Create a stunning, functional website that showcases your brand and drives success.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Mobile & App Development",
    description:
      "Build powerful, user-friendly apps for any platform with our full-service mobile & app development. Enhance your business today.",
    icon: DeviceMobileIcon,
  },
  {
    name: "AI/ML Development",
    description:
      "Unleash the power of AI/ML for your business. Get ahead with cutting-edge computer vision and NLP solutions for enhanced results.",
    icon: PresentationChartBarIcon,
  },
];

export default function Example() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8  lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className=" max-w-md px-4 sm:max-w-2xl sm:px-6  lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:my-24 z-20">
                    <div>
                      <a
                        href="#"
                        className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                          We're hiring
                        </span>
                        <span className="ml-4 text-sm">
                          Visit our careers page
                        </span>
                        <ChevronRightIcon
                          className="ml-2 w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <div className="h-24">
                      <ReactTypingEffect
                        speed={150}
                        eraseSpeed={100}
                        typingDelay={600}
                        eraseDelay={600}
                        text={[
                          "Leveraging Tech",
                          "Driving innovation",
                          "Transforming Lives",
                        ]}
                        cursorRenderer={(cursor) => (
                          <h1 className="text-white block mt-4 text-6xl w-1">
                            {cursor}
                          </h1>
                        )}
                        displayTextRenderer={(text, i) => {
                          return (
                            <h1 className="mt-4 block text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl pb-3 bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                              {text.split("").map((char, i) => {
                                const key = `${i}`;
                                return <span key={key}>{char}</span>;
                              })}
                            </h1>
                          );
                        }}
                      />
                    </div>
                    {/* <p className="text-base w-9/12 text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui Lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat.
                    </p> */}
                    <div className="hidden md:block h-24"></div>
                  </div>
                </div>
                <div className="mt-12 pb-10 lg:pb-0 sm:-mb-48 lg:m-0 lg:relative ">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    className="w-10/12 mx-auto lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-full"
                    src="/images/Group.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 335"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150 z-0  lg:-mt-[220px]"
          >
            <path
              d="M 0,600 C 0,600 0,300 0,300 C 120.80000000000001,310.1333333333333 241.60000000000002,320.2666666666667 419,311 C 596.4,301.7333333333333 830.4000000000001,273.06666666666666 1010,268 C 1189.6,262.93333333333334 1314.8,281.4666666666667 1440,300 C 1440,300 1440,600 1440,600 Z"
              stroke="none"
              stroke-width="0"
              fill="#111827"
              fill-opacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 300)"
            ></path>
          </svg>

          {/* Feature section with grid */}
          <div className="relative bg-white py-16 ">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                Our services
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                One Stop Solution
              </p>
              {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Choose from a wide gamut of services that are custom tailored to
                each client's need.
              </p> */}
              <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.name} className=" pt-6">
                      <div className="flow-root shadow-xl h-[235px] group transition duration-75 hover:duration-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-600 hover:scale-105 hover:-translate-y-2 bg-white rounded-lg px-6 pb-8">
                        <div className="-mt-6">
                          <div>
                            <span className="inline-flex group-hover:animate-bounce duration-1000 items-center justify-center p-3 group-hover:from-white group-hover:to-white group-hover:shadow-2xl group-hover:border group-hover:border-gray-200 transition group-hover:duration-200  bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                              <feature.icon
                                className="h-6 w-6 group-hover:text-teal-500 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <h3 className="mt-8 text-lg font-medium text-gray-900 group-hover:text-gray-50 tracking-tight">
                            {feature.name}
                          </h3>
                          <p className="mt-5 text-base group-hover:text-white text-gray-500">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Our Products section */}
          <div className="relative bg-white py-16">
            <div
              id={"products"}
              className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
            >
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                Our Products
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                We are a team providing some of the best products
              </p>
              {/* <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Choose from a wide gamut of services that are custom tailored to
                each client's need.
              </p> */}
              <div className="mt-12">
                <div className="relative pb-10  overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-48"
                  />
                  <div className="relative">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                        <div>
                          <div className=" w-full">
                            <span className="h-12 w-12 mx-auto rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                              <InboxIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="mt-6">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                              Healthcare and Solutions
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                              Built in collaboration with medical professionals,
                              and trained on real-world datasets. Intelligent
                              AI-based diagnosis that examines each scan for
                              multiple complications at once.
                            </p>
                            <div className="mt-6">
                              <a
                                href="#"
                                className="inline-flex bg-gradient-to-r from-teal-500 to-cyan-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                              >
                                Coming Soon!
                              </a>
                            </div>
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
                            src="/images/p1.svg"
                            alt="Inbox user interface"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-24">
                    <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                      <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                        <div>
                          <div>
                            <span className="h-12 mx-auto w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                              <SparklesIcon
                                className="h-6 w-6 text-white"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="mt-6">
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                              Legal Solution
                            </h2>
                            <p className="mt-4 text-lg text-gray-500">
                              An exhaustive, all-in-one solution, built to
                              digitalize the legal sector. Intuitive workflow
                              for both lawyers and clients that simplifies
                              operational procedures.
                            </p>
                            <div className="mt-6">
                              <a
                                href="#"
                                className="inline-flex bg-gradient-to-r from-teal-500 to-cyan-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                              >
                                Coming Soon!
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                        <div
                          data-aos="fade-right"
                          className="pr-4  sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
                        >
                          <img
                            className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="/images/p2.svg"
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

          {/* Testimonial section */}
          <div className="md:mb-32">
            <h2 className="text-base text-center font-semibold tracking-wider text-cyan-600 uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-center text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              What does our customers say about us
            </p>
            {/* <p className="mt-5 max-w-prose text-center mx-auto text-xl text-gray-500">
              Choose from a wide gamut of services that are custom tailored to
              each client's need.
            </p> */}
          </div>
          <div className="pt-10 lg:pt-0 mt-20 pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                {/* <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                /> */}
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg
                        className="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="mt-6 text-2xl font-medium text-white">
                        Partnering with BraynixAI to develop our tech platform
                        revolutionised our event management operations. Their
                        mastery of cutting-edge tech and dedication to
                        delivering outstanding results resulted in a seamless,
                        efficient platform with increased profitability. We
                        wholeheartedly endorse BraynixAI for businesses seeking
                        innovative tech solutions.
                      </p>
                    </div>
                    <footer className="mt-6">
                      <p className="text-base font-medium text-white">
                        Judith Black
                      </p>
                      <p className="text-base font-medium text-cyan-100">
                        CEO at FESTA
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-32">
            <h2 className="text-base text-center font-semibold tracking-wider text-cyan-600 uppercase">
              Contact us
            </h2>
            <p className="mt-2 text-center text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              We will love to here from you.
            </p>
            {/* <p className="mt-5 max-w-prose text-center mx-auto text-xl text-gray-500">
              Choose from a wide gamut of services that are custom tailored to
              each client's need.
            </p> */}
          </div>
          <ContactSection />

          {/* CTA Section */}
          <div className="relative bg-gray-900">
            <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100"
                alt=""
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"
              />
            </div>
            <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
              <div className="md:ml-auto md:w-1/2 md:pl-10">
                {/* <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                  Award winning support
                </h2> */}
                <p className="mt-2 whitespace-nowrap text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Get in touch and we will help you.
                </p>
                <p className="mt-3 text-lg text-gray-300">
                  At BraynixAI, we prioritize our customers' needs and
                  goals. Our process begins with understanding your
                  requirements, followed by consultation to ensure the right
                  solution is tailored for you. Our team of experts then builds
                  and deploys the solution efficiently, while providing ongoing
                  support.
                </p>
                {/* <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                    >
                      Visit the help center
                      <ExternalLinkIcon
                        className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
