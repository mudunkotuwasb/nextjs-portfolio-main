"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const images = ["/images/hero-image.png", "/images/real-photo.png"]; // Add your avatar and real photo

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true); // Start the flip
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0)); // Switch image halfway through the flip
        setIsFlipping(false); // End the flip after the rotation completes
      }, 500); // Flip duration (500ms corresponds to half of the 1 second animation)
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-pink-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="text-4xl sm:text-5xl lg:text-7xl">
              <TypeAnimation
                sequence={[
                  "Bhagya",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I'm a web and mobile developer who enjoys creating user-friendly designs and practical digital solutions.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 to-pink-500 hover:bg-slate-800 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-900 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="col-span-4 place-self-center mt-4 lg:mt-0"
          animate={{ rotateY: isFlipping ? 180 : 0 }} // Animate the Y rotation
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth rotation over 1 second
        >
          <div className=" bg-[#18181800] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative overflow-hidden">
            <Image
              src={images[currentImage]}
              alt="Rotating image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
