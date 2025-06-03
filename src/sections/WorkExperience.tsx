"use client";

import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WorkExperience {
  company: string;
  position: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const workExperience = [
  {
    company: "Dimension Data",
    position: "Project Management Intern",
    location: "Dimension Data Solutions East Africa Ltd, Kenya",
    period: "Jun 2023 – Aug 2023",
    responsibilities: [
      "Assisted in the migration of a Rwandese company's hardware systems to a new infrastructure, ensuring a smooth transition with minimal disruptions.",
      "Gained hands-on experience in project coordination, stakeholder communication, and troubleshooting technical challenges.",
    ],
  },
  {
    company: "Little",
    position: "Tech Team Intern",
    location: "Craft Silicon Ltd, Kenya",
    period: "Jun 2020 – Aug 2020",
    responsibilities: [
      "Created a payment checkout system U.I. for Little that allows customers to make payments anywhere and on multiple platforms and methods with any currency.",
      "Created a merchant portal system U.I. for Little that accepts payments from multiple devices that works in tandem with the Payment Checkout System.",
    ],
  },
  {
    company: "Fenix International",
    position: "Student Consultancy",
    location: "Kampala, Uganda (Remote)",
    period: "May 2020 – Apr 2020",
    responsibilities: [
      "Evaluated and reconstructed the business operating process of Fenix International's PAYGo Service of their flagship product Fenix Power.",
      "Identified the gaps present in the process and provided appropriate recommendations to lower the loan default rate from 50% to 15% to decrease the rate of accumulation of bad debt.",
    ],
  },
  {
    company: "Schmidt Futures Rise Program",
    position: "Student Consultancy",
    location: "NYC, USA (Remote)",
    period: "Jan 2020 – Feb 2020",
    responsibilities: [
      "Created a marketing strategy that would build a robust strategic partner-ecosystem of brands for Schmidt Futures to accomplish their marketing goal of reaching 10,000 exceptionally talented 15 to 17-year-olds across Africa by December 2020.",
      "Formulated pitches specific to 4 selected brands by focusing on emphasizing the alignment of Schmidt Future's Rise Program mission, vision, and goals to ensure a successful partnership is developed.",
      "Determined the most effective methods and platforms needed to maximize the number of potential applicants reached.",
    ],
  },
  {
    company: "Talenteum",
    position: "Student Consultancy",
    location: "Pamplemousses, Mauritius",
    period: "Oct 2019 – Dec 2019",
    responsibilities: [
      "Formulated a detailed expansion strategy for Talenteum Africa talent outsourcing company for other companies or organizations.",
      "Developed a framework to assess a list of prioritized countries against a list of metrics and selected one country to expand to.",
    ],
  },
];

interface WorkExperienceCardProps {
  work: WorkExperience;
  index: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

function WorkExperienceCard({ work, index, selectedIndex, onSelect }: WorkExperienceCardProps) {
  // Initialize mouse position at the center (50%, 50%)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 50, y: 50 })}
    >
      {/* Glow overlay that follows the mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #f59e0b, transparent 80%)`,
        }}
      ></motion.div>

      {/* Actual card */}
      <div className="relative bg-neutral-950 rounded-2xl border border-white/10 p-6">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => onSelect(index)}
        >
          <div>
            <h3 className="font-medium text-lg">{work.company}</h3>
            <p className="text-amber-400">{work.position}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={twMerge(
              "feather feather-plus text-amber-400 flex-shrink-0 transition duration-300",
              selectedIndex === index && "rotate-45"
            )}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
        <AnimatePresence>
          {selectedIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div>
                <p className="text-white/70">{work.location}</p>
                <p className="text-white/70">{work.period}</p>
                <div className="mt-2">
                  <p className="mt-1 text-white/50">
                    {work.responsibilities.join(" ")}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function WorkExperienceAccordion() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="py-48">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="inline-flex py-2 px-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full font-semibold">
            🚀 Professional Journey  
          </div>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6 max-w-xl mx-auto">
          Work Experience
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-2xl mx-auto">
          {workExperience.map((work, index) => (
            <WorkExperienceCard
              key={work.company}
              work={work}
              index={index}
              selectedIndex={selectedIndex}
              onSelect={(index) =>
                setSelectedIndex(selectedIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
