"use client"

import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Work", href: "#work" },
    { label: "Projects", href: "#projects" },
    { label: "Me", href: "#about-me" },
    { label: "Contact", href: "#contact-me" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-3 lg:py-9 sticky top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/5 rounded-[27px] md:rounded-full p-2 px-4 md:pr-2 bg-neutral-950/60 backdrop-blur">
                        {/* Adding items-center to the grid for vertical alignment */}
                        <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
                            {/* Column 1 - Logo */}
                            <div className="flex items-center">
                                <svg
                                    className="h-10 w-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Layer_1"
                                    viewBox="0 0 242 136"
                                    enableBackground="new 0 0 242 136"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        fill="#0B0B0B"
                                        opacity="1.000000"
                                        stroke="none"
                                        d=" M173.000000,137.000000   C115.333336,137.000000 58.166672,137.000000 1.000008,137.000000   C1.000005,91.666672 1.000005,46.333347 1.000003,1.000014   C81.666656,1.000009 162.333313,1.000009 242.999969,1.000005   C242.999985,46.333317 242.999985,91.666634 243.000000,136.999969   C219.833328,137.000000 196.666672,137.000000 173.000000,137.000000  M76.418518,125.001366   C82.446739,123.980362 88.738594,123.734550 94.453140,121.791168   C110.772987,116.241180 121.251160,100.338326 117.916771,85.196701   C116.498970,78.758408 112.020447,72.994118 108.576561,66.222900   C116.510452,54.796581 116.543228,42.243252 107.598076,31.338919   C99.855507,21.900568 89.485504,18.200634 77.599091,18.163212   C60.787518,18.110281 43.975643,18.145031 27.163912,18.159464   C26.052608,18.160418 24.941431,18.306694 23.702793,18.394396   C23.702793,54.076180 23.702793,89.423302 23.702793,125.001717   C41.164612,125.001717 58.301849,125.001717 76.418518,125.001366  M189.376144,53.880917   C195.351791,43.522503 201.327438,33.164085 207.293060,22.823055   C186.887451,9.731608 158.004807,13.333170 139.834167,31.002756   C121.169319,49.152927 117.340714,78.108574 130.668076,100.325691   C144.269974,123.000465 171.363754,133.278763 196.346268,125.241394   C219.943359,117.649742 237.056229,94.145042 235.092575,71.278877   C216.848465,71.278877 198.534653,71.278877 179.372696,71.278877   C182.926956,65.117073 185.981018,59.822430 189.376144,53.880917  z"
                                    />
                                    <path
                                        fill="#FDFDFD"
                                        opacity="1.000000"
                                        stroke="none"
                                        d=" M75.928802,125.001541   C58.301849,125.001717 41.164612,125.001717 23.702793,125.001717   C23.702793,89.423302 23.702793,54.076180 23.702793,18.394396   C24.941431,18.306694 26.052608,18.160418 27.163912,18.159464   C43.975643,18.145031 60.787518,18.110281 77.599091,18.163212   C89.485504,18.200634 99.855507,21.900568 107.598076,31.338919   C116.543228,42.243252 116.510452,54.796581 108.576561,66.222900   C112.020447,72.994118 116.498970,78.758408 117.916771,85.196701   C121.251160,100.338326 110.772987,116.241180 94.453140,121.791168   C88.738594,123.734550 82.446739,123.980362 75.928802,125.001541  z"
                                    />
                                    <path
                                        fill="#FCFCFC"
                                        opacity="1.000000"
                                        stroke="none"
                                        d=" M189.205612,54.204353   C185.981018,59.822430 182.926956,65.117073 179.372696,71.278877   C198.534653,71.278877 216.848465,71.278877 235.092575,71.278877   C237.056229,94.145042 219.943359,117.649742 196.346268,125.241394   C171.363754,133.278763 144.269974,123.000465 130.668076,100.325691   C117.340714,78.108574 121.169319,49.152927 139.834167,31.002756   C158.004807,13.333170 186.887451,9.731608 207.293060,22.823055   C201.327438,33.164085 195.351791,43.522503 189.205612,54.204353  z"
                                    />
                                </svg>
                            </div>

                            {/* Column 2 - Navigation Links */}
                            <div className="lg:flex justify-center items-center hidden whitespace-nowrap">
                                <nav className="flex gap-4">
                                    {navLinks.map((link) => (
                                        <a href={link.href} key={link.label}>
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>

                            {/* Column 3 - Hamburger Menu / Button */}
                            <div className="flex justify-end gap-4 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-menu md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        className={twMerge(
                                            "origin-left Transition",
                                            isOpen && "rotate-45 -translate-y-1"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="12"
                                        x2="21"
                                        y2="12"
                                        className={twMerge(
                                            "transition",
                                            isOpen && "opacity-0"
                                        )}
                                    />
                                    <line
                                        x1="3"
                                        y1="18"
                                        x2="21"
                                        y2="18"
                                        className={twMerge(
                                            "origin-left transition",
                                            isOpen && "-rotate-45 translate-y-1"
                                        )}
                                    />
                                </svg>
                                <Button variant="primary" className="hidden md:inline-flex items-center">
                                    Download CV
                                </Button>
                            </div>
                        </div>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a href={link.href} key={link.label} className="transition">
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button variant="primary">
                                            Download CV
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </>
    );
}
