import { motion } from "framer-motion";

export default function Pointer() {
  // Define three points where the pointer will move
  const points = [
    { x: 60, y: 20 },
    { x: 75, y: 30 },
    { x: 50, y: 50 },
    
  ];


  return (
    <motion.div
      // Animate the x and y properties with keyframes including a return to the starting point
      animate={{
        x: [points[0].x, points[1].x, points[2].x, points[0].x],
        y: [points[0].y, points[1].y, points[2].y, points[0].y],
      }}
      // Set the transition properties: duration, repeat forever, and a smooth easing curve
      transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      // Ensure the pointer is positioned relative to its container
      style={{ position: "absolute" }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-mouse-pointer text-white"
        >
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          <path d="M13 13l6 6" />
        </svg>
        <div>
          <div
            className="relative bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white px-3 py-1 text-sm font-medium whitespace-nowrap"
            style={{
              transform: "translate(25px, 6px)", // 3px margin between cursor and custom cursor
              borderTopRightRadius: "9999px",
              borderBottomRightRadius: "9999px",
              borderBottomLeftRadius: "9999px",
              borderTopLeftRadius: "0px",
            }}
          >
            Guest 2
          </div>
        </div>
      </div>
    </motion.div>
  );
}
