import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Contact2Icon, FileTextIcon } from "lucide-react";
import GradualSpacing from "./magicui/gradual-spacing";

export function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Secao de Informacoes */}
        <div className="col-span-8 place-self-center text-center justify-self-start">
          <div className="container flex flex-col">
            <GradualSpacing
              className="text-2xl lg:text-4xl font-bold md:leading-[5rem]  text-black"
              text="Luis Felipe"
            />
            <GradualSpacing
              className="text-2xl lg:text-4xl font-bold text-black"
              text="Front-end e Mobile Developer "
            />
          </div>

          <div className="mx-4">
            <Link
              href="/#contact"
              className="p-4 inline-block py-2 w-full sm:w-fit rounded-full mx-2 bg-green-700  text-white mt-3"
            >
              <Contact2Icon className="inline-block mr-2" size={20} />
              Fale Comigo
            </Link>

            <Link
              href="/Cv/Demo-CV.pdf"
              download={"My-CV"}
              target="_blank"
              className="p-4 inline-block py-2 w-full sm:w-fit rounded-full mx-2 text-white mt-3"
            >
              <span className="block bg-[#121212]  rounded-full px-5 py-2">
                <FileTextIcon className="inline-block mr-2" size={20} />
                Download CV
              </span>
            </Link>
          </div>
        </div>

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
                src="/images/hero-1.png"
                alt="hero image"
                width={1000}
                height={1000}
                quality={100}
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
