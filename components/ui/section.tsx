"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { slideUp } from "@/lib/animations";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animated?: boolean;
}

export function Section({
  children,
  className,
  id,
  animated = true,
}: SectionProps) {
  const Component = animated ? motion.section : "section";

  const animationProps = animated
    ? {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: slideUp,
      }
    : {};

  return (
    <Component
      id={id}
      className={cn("py-20 md:py-32", className)}
      {...animationProps}
    >
      {children}
    </Component>
  );
}

