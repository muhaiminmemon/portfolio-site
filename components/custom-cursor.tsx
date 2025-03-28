"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      if (!hoveredElement) return

      const isClickable =
        hoveredElement.tagName === "BUTTON" ||
        hoveredElement.tagName === "A" ||
        hoveredElement.closest("button") !== null ||
        hoveredElement.closest("a") !== null ||
        window.getComputedStyle(hoveredElement).cursor === "pointer"

      setIsPointer(isClickable)
    }

    const handleMouseDown = () => setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateCursorType)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateCursorType)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [position])

  // Don't render custom cursor on touch devices
  if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-white dark:border-black z-[99999] pointer-events-none"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isActive ? 0.8 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white dark:bg-black z-[99999] pointer-events-none"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 3 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.2,
        }}
      />
      <style jsx global>{`
        html, body {
          cursor: none !important;
        }
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

