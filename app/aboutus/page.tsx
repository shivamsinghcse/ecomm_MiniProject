"use client";

import React from "react";
import {  ChevronUp, ChevronDown} from "lucide-react";
import { Navbar } from "../components/navbar";
import Image from "next/image";
import krishna from "../../images/Krishna.jpg"
import shivam from "../../images/shivam.jpg"

const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const locations = [
  {
    title: "Bengaluru office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "100, Electronic City Phase-1, Bengaluru, Karnataka 560100 IN",
  },
  {
    title: "Head office",
    timings: "Mon-Sat 9am to 5pm.",
    address: "12th Main Rd, Indiranagar, Bengaluru, Karnataka 560008 IN",
  },
  {
    title: "Karnataka office",
    timings: "Mon-Sat 9am to 5pm.",
    address:
      "42, Residency Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560025 IN",
  },
];

const users = [
  {
    name: "Krishna Seth",
    image:krishna,
    position: "Co-Founder",
  },
  {
    name: "Shivam Singh",
    image: shivam,
    position: "Co-Founder",
  },
  
];

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">
              About the company
            </p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            PosterSavvy is your premier online destination for poster shopping.
            Explore an extensive collection of art, movie, music, and literary
            posters. Customize your choices with various options, and shop with
            confidence for quality and affordability. Enhance your space with
            PosterSavvy&apos;s creative offerings.
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        {/* locations */}
        {/* <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div> */}
        <hr className="mt-20" />
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                Join Us &rarr;
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
            our mantra is straightforward: assemble a squad of versatile, fervent individuals, and cultivate an environment that unleashes your full potential to craft exceptional code.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <Image
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
                {user.name}
              </p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h1 className="text-4xl text-center font-extrabold my-10">Testimonials</h1>
        <div className="flex flex-wrap gap-5">
          <div className="mx-auto max-w-xl rounded-md bg-black p-1">
            <div className="flex flex-col rounded-md bg-white h-full">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “As a music lover, I appreciate the variety of music
                      posters at PosterSavvy. My space is now a tribute to my
                      favorite bands”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Shubham Singh
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Trusted Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-xl rounded-md bg-black p-1">
            <div className="flex flex-col rounded-md bg-white h-full">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “PosterSavvy&apos;s customization options are a game-changer. I was able to design the perfect poster for my office.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Aditya Jha
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Trusted Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

          <div className="mx-auto max-w-xl rounded-md bg-black p-1">
            <div className="flex flex-col rounded-md bg-white h-full">
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="mb-4 flex space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <div className="flex-1 pt-2">
                  <blockquote>
                    <p className="text-lg text-gray-800">
                      “I&apos;m a dedicated anime enthusiast, and PosterSavvy is my ultimate source for anime posters. The quality is exceptional, and their selection is truly impressive.”
                    </p>
                  </blockquote>
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      alt=""
                    />
                    <div className="ml-3 min-w-0">
                      <p className="truncate text-base font-semibold text-gray-800">
                        Bhopendra Singh Gautam
                      </p>
                      <p className="truncate text-base text-gray-500">
                        Trusted Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, assumenda
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <h2 className="text-xl font-semibold text-black">How do I get started?</h2>
              <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam adipisci
                iusto aperiam? Sint asperiores sequi nobis inventore ratione deleniti?
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#" title="" className="black font-semibold hover:underline">
            Contact us
          </a>
        </p>
      </div>
    </section>
      </div>
    </div>
  );
}
