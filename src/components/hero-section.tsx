"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Contact2Icon, FileTextIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
       {/* Secao de Informacoes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Luis Felipe ",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={80}
              repeat={Infinity}
            />
          </h1>
          {/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p> */}
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-green-700  text-white mt-3"
            >
              <Contact2Icon className="inline-block mr-2" size={20} />
              Fale Comigo
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full   text-white mt-3"
            >
              <span className="block bg-[#121212]  rounded-full px-5 py-2">
              <FileTextIcon className="inline-block mr-2" size={20} />
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

         {/* Secao de Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-x-2 border-y-8 border-green-600 border-spacing-2">
          <motion.div
              animate={{
                rotate: [0, 10, -10, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src="/hero-1.png"
                alt="hero image"
                width={1000}
                height={1000}
              />
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}
