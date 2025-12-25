"use client";

import { motion } from "framer-motion";
import { Home, FolderKanban, Mail, Briefcase, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderKanban,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    name: "Leadership",
    href: "#leadership",
    icon: Users,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export function Dock() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1)); // Remove # from href
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (with some offset)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1); // Remove # from href
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom easing for smooth animation
        delay: 0.3,
      }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className={cn(
          // Glassmorphism effect
          "backdrop-blur-xl bg-black/50",
          // Border and shape
          "border border-white/10 rounded-full",
          // Shadow
          "shadow-2xl shadow-black/50",
          // Padding and layout
          "px-6 py-3",
          "flex items-center gap-2"
        )}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.slice(1);

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "relative",
                "flex items-center justify-center",
                "w-12 h-12 rounded-xl",
                "transition-all duration-300",
                "group",
                // Active state
                isActive
                  ? "bg-white/10 scale-110"
                  : "bg-white/5 hover:bg-white/10",
                // Hover effects
                "hover:scale-110",
                "active:scale-95"
              )}
              aria-label={item.name}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-xl bg-white/10"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}

              {/* Icon */}
              <Icon
                className={cn(
                  "relative z-10",
                  "w-5 h-5",
                  "transition-colors duration-300",
                  isActive ? "text-zinc-100" : "text-zinc-400 group-hover:text-zinc-100"
                )}
              />

              {/* Tooltip on hover */}
              <div
                className={cn(
                  "absolute bottom-full mb-2",
                  "px-2 py-1",
                  "bg-black/80 backdrop-blur-sm",
                  "border border-white/10 rounded-md",
                  "text-xs text-zinc-100",
                  "opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-200",
                  "pointer-events-none",
                  "whitespace-nowrap"
                )}
              >
                {item.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
              </div>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}

