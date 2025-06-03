"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CallToAction() {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Determine the scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update the animation based on the scroll direction
  useEffect(() => {
    if (scrollDirection === "down") {
      controls.start({
        x: "-100%",
        transition: {
          duration: 25
          , // Slower when scrolling left
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.start({
        x: "0%",
        transition: {
          duration: 60, // Match the same speed when reversed
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [scrollDirection, controls]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div 
          animate={controls}
          className="flex flex-nowrap gap-16 pr-16 text-7xl md:text-8xl font-medium"
        >
          {/* First set of items */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-amber-400">&#10022;</span>
              <span className="whitespace-nowrap">Contact Me</span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`duplicate-${i}`} className="flex items-center gap-16">
              <span className="text-amber-400">&#10022;</span>
              <span className="whitespace-nowrap">Contact Me</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}