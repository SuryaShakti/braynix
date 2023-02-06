import React from "react";
import {
  ChartPieIcon,
  ChatIcon,
  CloudUploadIcon,
  CogIcon,
  DesktopComputerIcon,
  DeviceMobileIcon,
  GlobeIcon,
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
const people = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // {
  //   name: "Leonard Krasner",
  //   role: "Senior Designer",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  //   twitterUrl: "#",
  //   linkedinUrl: "#",
  // },
  // {
  //   name: "Leonard Krasner",
  //   role: "Senior Designer",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  //   twitterUrl: "#",
  //   linkedinUrl: "#",
  // }
  // More people...
];

const index = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-900">
        <div className="mx-auto px-4 text-center sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* <h2 className="text-base font-semibold text-white tracking-wide uppercase">
                About Us
              </h2> */}
              <p className="mt-1 text-4xl font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Who are we?
              </p>
              <p className="max-w-3xl mt-5 mx-auto text-2xl text-gray-50">
                A team with a difference because we have a dream with a
                difference.
              </p>
              <p className="max-w-3xl italic mt-12 mx-auto text-3xl font-bold text-gray-50">
                "One Team! One Dream!"
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
                            Our Mission
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            To become the world's largest customer centric AI
                            company with products flourishing in myriad of
                            streams by determining the business requirements and
                            developing solutions to cater its needs.
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
                          src="/images/ab1.svg"
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
                          <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-600">
                            <SparklesIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-6">
                          <h2 className="text-3xl text-left font-extrabold tracking-tight text-gray-900">
                            Our Vision
                          </h2>
                          <p className="mt-4 text-left text-lg text-gray-500">
                            Braynix AI envisions a world where AI gives a human
                            touch to industries beyond the boundaries of
                            software and hardware congruency. We look forward to
                            serve the world with technology that enhances the
                            life of users without compromising on data privacy
                            and security thereby promoting the ethical and
                            progressive use of technology.
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
                          src="/images/ab2.svg"
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

        <div className="bg-gradient-to-r from-gray-900 ">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Founder's Note
                </h2>
                {/* <p className="text-xl text-gray-300">
                  Ornare sagittis, suspendisse in hendrerit quis. Sed dui
                  aliquet lectus sit pretium egestas vel mattis neque.
                </p> */}
              </div>
              <ul
                role="list"
                className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
              >
                {people.map((person) => (
                  <li
                    key={person.name}
                    className="  bg-transparent text-center rounded-lg xl:text-left"
                  >
                    <div className="">
                      <img
                        className=" w-[18rem] rounded-full h-[16rem]"
                        src="/images/founder.png"
                        alt=""
                      />
                      <div className="space-y-2 mt-2 text-center xl:flex flex-col w-[18rem] xl:items-center xl:justify-between">
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h3 className="text-2xl text-white whitespace-nowrap">
                            Amitabh Das
                          </h3>
                          <p className="text-sm text-white">Founder & CEO</p>
                        </div>

                        <ul
                          role="list"
                          className="flex justify-center space-x-5 "
                        >
                          <li>
                            <a
                              target="_blank"
                              href={"https://amitabhdas.co.in/"}
                              className="text-white hover:text-gray-100"
                            >
                              <GlobeIcon className="w-5 h-5 text-white hover:text-gray-100" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={
                                "http://www.linkedin.com/in/amitabh-das-2602"
                              }
                              target="_blank"
                              className="text-white hover:text-gray-100"
                            >
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
                <div className="lg:col-span-2 text-left text-lg md:text-2xl text-white">
                  {/* <svg
                    className="h-12 w-12 text-white opacity-25"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg> */}
                  "As the founder of Braynix AI, I am proud to lead a team of
                  talented individuals who are dedicated to using cutting-edge
                  artificial intelligence technologies to solve real-world
                  problems. Our mission is to empower businesses and
                  organizations with the tools they need to improve their
                  operations and achieve their goals. Whether you need to
                  automate processes, gain new insights, or develop custom
                  solutions, Braynix AI is here to help you succeed. I believe
                  that the future is AI, and I am confident that our team will
                  continue to play a major role in shaping that future for the
                  better."{" "}
                  {/* <svg
                  className="h-12 w-12 text-white opacity-25 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg> */}
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by companies from over 8 countries.
              </h2>
              {/* <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus repellat laudantium.
              </p> */}
            </div>
          </div>
          <div className="mt-10 pb-12 bg-white sm:pb-16">
            <div className="relative">
              <div className="absolute inset-0 h-1/2 bg-gray-50" />
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Success Rate
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-teal-500">
                        99%
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        clients
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-teal-500">
                        30+
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Projects Completed
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-teal-500">
                        100+
                      </dd>
                    </div>
                  </dl>
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
