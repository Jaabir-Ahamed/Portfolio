"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef, MouseEvent } from "react";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  animated?: boolean;
  spotlight?: boolean;
}

export function Card({
  children,
  className,
  hoverable = true,
  animated = true,
  spotlight = true,
  ...props
}: CardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const Component = animated ? motion.div : "div";

  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeOut" },
      }
    : {};

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !spotlight) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Component
      ref={cardRef}
      className={cn(
        // Base styles with glassmorphism
        "relative rounded-2xl overflow-hidden",
        "bg-gradient-to-br from-white/[0.05] to-white/[0.02]",
        "border border-white/10",
        "backdrop-blur-md",
        
        // Shadow and depth
        "shadow-xl shadow-black/20",
        
        // Hover effects
        hoverable && [
          "transition-all duration-300 ease-out",
          "hover:border-white/20",
          "hover:shadow-2xl hover:shadow-black/30",
          "hover:scale-[1.02]",
          "cursor-pointer",
          "group",
        ],
        
        // Custom classes
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...animationProps}
      {...props}
    >
      {/* Mouse-following spotlight effect */}
      {spotlight && hoverable && (
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Subtle glow effect on hover */}
      {hoverable && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
}

