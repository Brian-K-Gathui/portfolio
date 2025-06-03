"use client";

import Button from "@/components/Button";
import Image from "next/image";
import designExampleImage from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import { motion } from "framer-motion";
import Pointer from "@/components/firstPointer";
import Pointer2 from "@/components/secondPointer";
import Pointer3 from "@/components/thirdPointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        {/* Image - 1 */}
        <div className="absolute -left-80 top-12 transform scale-[0.6] lg:scale-100">
          <Image 
            src={designExampleImage}
            alt="Design Example 1" 
          />
        </div>

        {/* Image - 2 */}
        <div className="absolute -right-80 -top-32 transform scale-[0.6] lg:scale-100">
          <Image 
            src={designExample2Image} 
            alt="Design Example 2" 
          />
        </div>

        {/* Pointer - 1 */}
        <div className="absolute left-32 top-56 md:hidden lg:block">
          <Pointer />
        </div>

        {/* Pointer - 2 */}
        <div className="absolute right-96 -bottom-20 md:hidden lg:block">
          <Pointer2 />
        </div>

        {/* Duplicate Pointer - 2 */}
        <div className="absolute right-96 -bottom-20 md:hidden lg:block">
          <Pointer2 />
        </div>

        {/* Pointer - 3 */}
        <div className="absolute right-64 top-20 md:hidden lg:block">
          <Pointer3 />
        </div>

        {/* Small Banner */}
        <div className="flex justify-center items-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full font-semibold">
            ✨ Always Building, Always Learning
          </div>
        </div>

        {/* Hero Header */}
        <h1 className="text-7xl md:text-8xl font-medium text-center mt-14">
          Hello There, <br /> I’m Brian{" "}
          <motion.span
            className="inline-block"
            animate={{ rotate: [0, -1, 1, -1, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            👋🏾
          </motion.span>
        </h1>

        {/* Hero Text */}
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          — I'm a recent Computer Science graduate passionate about building robust software and protecting the digital world. With experience in consulting and development, and aspirations in cybersecurity, I’m driven to solve real-world problems with secure, scalable tech.
        </p>

        {/* Hero Form */}
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent px-4 flex-1 min-w-0 truncate border border-transparent rounded-full mr-2"
          />
          <Button type="submit" variant="primary" className="whitespace-nowrap" size="sm">
            Reach Out
          </Button>
        </form>
      </div>
    </section>
  );
}
