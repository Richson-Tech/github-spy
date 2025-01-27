'use client';
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Animated Heading */}
      <motion.h1
        className="text-center text-3xl mt-20 lg:text-6xl lg:mt-56 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Before the Code Speaks, Let{" "}
        <span className="text-[#3ba8f0]">GitHubSpy</span> Spill the Tea.
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="mt-4 text-xl lg:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Built for Developers, Loved by Clients.
      </motion.p>

      {/* Animated Button */}
      <Link href="/login">
        <motion.button
          className="relative overflow-hidden p-2 border-2 border-white rounded-xl mt-4 cursor-pointer text-white lg:text-2xl group"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#3ba8f0] to-[#1c85e8] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            Dive in <span className="group-hover:animate-bling">👀</span>
          </span>
        </motion.button>
      </Link>

      {/* Information Section */}
      <section className="mt-12 lg:mt-24 text-center max-w-3xl" data-aos="fade-up">
        <motion.h2
          className="text-2xl lg:text-4xl text-[#3ba8f0] font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="text-white">So,</span> What’s GitHubSpy All About?
        </motion.h2>

        <motion.p
          className="mt-4 text-lg lg:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Imagine having a super-smart detective that can dig up all the juicy
          details about GitHub developers. That’s GitHubSpy! Whether you’re a
          coder ready to show off your epic commits or a client searching for
          your next tech superstar, we’ve got you covered.
        </motion.p>

        <motion.p
          className="mt-4 text-lg lg:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Developers can flaunt their skills, achievements, and projects like
          never before. Clients? You get a front-row seat to the profiles that
          matter most to you. Let’s change how the tech world connects—one
          profile at a time.
        </motion.p>
      </section>
    </div>
  );
}
