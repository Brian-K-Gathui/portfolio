"use client"

import { useState, useEffect } from "react"

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      if (!isVisible) {
        setIsVisible(true)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Check if elements under cursor should show a pointer
    const handleElementCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const computedStyle = window.getComputedStyle(target)
      setIsPointer(computedStyle.cursor === "pointer")
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousemove", handleElementCheck)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousemove", handleElementCheck)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {/* Custom cursor with specific border radius on all corners except top-left */}
      <div
        className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white px-3 py-1 text-sm font-medium whitespace-nowrap"
        style={{
          transform: "translate(18px, 18px)", // 3px margin between cursor and custom cursor
          borderTopRightRadius: "9999px", // full radius on top-right
          borderBottomRightRadius: "9999px", // full radius on bottom-right
          borderBottomLeftRadius: "9999px", // full radius on bottom-left
          borderTopLeftRadius: "0px", // no radius on top-left
        }}
      >
        Guest 1
      </div>
    </div>
  )
}

