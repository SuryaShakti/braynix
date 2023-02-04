import React from "react";
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
const people = [
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  }
  // More people...
];

const index = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gray-900">
        <div className="mx-auto px-4 text-center sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-white tracking-wide uppercase">
                About Us
              </h2>
              <p className="mt-1 text-4xl font-extrabold   bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Who are we?
              </p>
              <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-50">
                Magna exercitation ullamco est laborum commodo deserunt ullamco
                officia in. Exercitation ut qui ex amet excepteur Lorem ad
                laboris. Minim labore non cupidatat eiusmod laborum duis
                reprehenderit ipsum. Id eiusmod tempor consectetur reprehenderit
                mollit non adipisicing sunt consequat consequat ad.
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

        <div className="bg-gradient-to-r from-teal-500 to-cyan-600">
          <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  Meet our team
                </h2>
                <p className="text-xl text-gray-300">
                  Ornare sagittis, suspendisse in hendrerit quis. Sed dui
                  aliquet lectus sit pretium egestas vel mattis neque.
                </p>
              </div>
              <ul
                role="list"
                className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
              >
                {people.map((person) => (
                  <li
                    key={person.name}
                    className="py-10 px-6 shadow-xl hover:scale-105 transition duration-200 hover:-translate-y-2 bg-white bg-opacity-20 text-center rounded-lg xl:px-10 xl:text-left"
                  >
                    <div className="space-y-6 xl:space-y-10">
                      <img
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={person.imageUrl}
                        alt=""
                      />
                      <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div className="font-medium text-lg leading-6 space-y-1">
                          <h3 className="text-white">{person.name}</h3>
                          <p className="text-sm text-white">{person.role}</p>
                        </div>

                        <ul
                          role="list"
                          className="flex justify-center space-x-5"
                        >
                          <li>
                            <a
                              href={person.twitterUrl}
                              className="text-white hover:text-gray-100"
                            >
                              <span className="sr-only">Twitter</span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-white hover:text-gray-100"
                            >
                              <span className="sr-only">LinkedIn</span>
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
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by developers from over 80 planets
              </h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus repellat laudantium.
              </p>
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
                        100%
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        clients
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-teal-500">
                        200+
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
