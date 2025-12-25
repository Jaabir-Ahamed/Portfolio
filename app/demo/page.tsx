"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24">
      <Container>
        {/* Hero Section */}
        <Section className="pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-100 tracking-tight">
              Component
              <br />
              <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent tracking-tight">
                Showcase
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl tracking-tight">
              Demonstrating the Linear-style glassmorphic components with
              smooth animations and micro-interactions.
            </p>
          </motion.div>
        </Section>

        {/* Card Variants */}
        <Section>
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight">Card Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 tracking-tight">
                  Hoverable Card
                </h3>
                <p className="text-zinc-400 tracking-tight">
                  Hover to see the scale effect and border glow. The card has a
                  subtle gradient background.
                </p>
              </div>
            </Card>

            <Card className="p-8" hoverable={false}>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 tracking-tight">
                  Static Card
                </h3>
                <p className="text-zinc-400 tracking-tight">
                  This card has hoverable set to false, so it stays still. Perfect
                  for content-focused sections.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 tracking-tight">
                  Custom Gradient
                </h3>
                <p className="text-zinc-400 tracking-tight">
                  Cards accept custom className props. This one has a colored
                  gradient overlay.
                </p>
              </div>
            </Card>
          </div>
        </Section>

        {/* Button Variants */}
        <Section>
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Primary Large
            </Button>
            <Button variant="primary" size="md">
              Primary Medium
            </Button>
            <Button variant="primary" size="sm">
              Primary Small
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="secondary" size="lg">
              Secondary Large
            </Button>
            <Button variant="secondary" size="md">
              Secondary Medium
            </Button>
            <Button variant="secondary" size="sm">
              Secondary Small
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="ghost" size="lg">
              Ghost Large
            </Button>
            <Button variant="ghost" size="md">
              Ghost Medium
            </Button>
            <Button variant="ghost" size="sm">
              Ghost Small
            </Button>
          </div>
        </Section>

        {/* Complex Layout Example */}
        <Section>
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight">Complex Layout</h2>
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">
                  Project Title
                </h3>
                <p className="text-zinc-400 leading-relaxed tracking-tight">
                  This demonstrates a more complex card layout with nested
                  content. The glassmorphism effect works beautifully with
                  structured content, maintaining readability while adding
                  visual depth.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind", "Framer Motion"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 tracking-tight"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
                <div className="flex gap-3">
                  <Button variant="primary" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button variant="secondary" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="aspect-video rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10" />
                <p className="text-sm text-zinc-500 text-center tracking-tight">
                  Placeholder for project screenshot
                </p>
              </div>
            </div>
          </Card>
        </Section>

        {/* Spotlight Effect Demo */}
        <Section>
          <h2 className="text-3xl font-bold text-zinc-100 mb-4 tracking-tight">
            Mouse-Following Spotlight
          </h2>
          <p className="text-zinc-400 mb-8 max-w-2xl tracking-tight">
            Hover over these cards to see the interactive spotlight effect that follows your cursor.
            The subtle radial gradient creates a premium, interactive feel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-12 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-4 flex items-center justify-center">
                ✨
              </div>
              <h4 className="text-xl font-semibold text-zinc-100 mb-2 tracking-tight">
                Default Spotlight
              </h4>
              <p className="text-zinc-400 tracking-tight">
                Move your cursor around this card to see the spotlight follow your mouse.
              </p>
            </Card>

            <Card className="p-12 flex flex-col items-center justify-center text-center min-h-[300px] bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 mb-4 flex items-center justify-center">
                💎
              </div>
              <h4 className="text-xl font-semibold text-zinc-100 mb-2 tracking-tight">
                With Colored Background
              </h4>
              <p className="text-zinc-400 tracking-tight">
                The spotlight effect works beautifully with custom gradient backgrounds.
              </p>
            </Card>

            <Card spotlight={false} className="p-12 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 rounded-full bg-slate-700 mb-4 flex items-center justify-center">
                🚫
              </div>
              <h4 className="text-xl font-semibold text-zinc-100 mb-2 tracking-tight">
                Spotlight Disabled
              </h4>
              <p className="text-zinc-400 tracking-tight">
                This card has <code className="text-cyan-400">spotlight=&#123;false&#125;</code> so it only has the standard hover effect.
              </p>
            </Card>

            <Card className="p-12 flex flex-col items-center justify-center text-center min-h-[300px] bg-gradient-to-br from-orange-500/10 to-red-500/10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-4 flex items-center justify-center">
                🎨
              </div>
              <h4 className="text-xl font-semibold text-zinc-100 mb-2 tracking-tight">
                Custom Styling
              </h4>
              <p className="text-zinc-400 tracking-tight">
                The spotlight adapts to any card size and background color automatically.
              </p>
            </Card>
          </div>
        </Section>

        {/* Animation Examples */}
        <Section className="pb-32">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight">
            Animation Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-zinc-100 mb-2 tracking-tight">
                    Animated Card {i}
                  </h4>
                  <p className="text-zinc-400 tracking-tight">
                    These cards slide in from alternating sides as you scroll.
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}

