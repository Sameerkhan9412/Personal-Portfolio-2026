// components/sections/Leadership.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Calendar, ExternalLink } from "lucide-react";
import { leadership } from "@/lib/data";
import Image from "next/image";

export default function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px]" />
      </div>

      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 relative"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-pink mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <Users className="w-4 h-4" />
            Leadership
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-text-primary">Leadership </span>
            <span className="gradient-text">Roles</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Contributing to the community and helping others grow
          </p>
        </motion.div>

        {/* Leadership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadership.map((role, index) => {
            // const Icon = role.icon
            return (
              <motion.div
                key={role.id}
                className="group relative p-8 rounded-3xl glass overflow-hidden card-hover"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center">
                    {/* <Icon className="w-7 h-7 text-white" /> */}
                    <Image
                      src={role.icon}
                      width={100}
                      height={100}
                      className="w-full aspect-square"
                      alt="skills logo"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-display font-bold text-text-primary mb-2 group-hover:gradient-text transition-all duration-300">
                    {role.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {role.organization}
                  </p>
                  <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {role.period}
                  </div>

                  <ul className="space-y-2">
                    {role.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
