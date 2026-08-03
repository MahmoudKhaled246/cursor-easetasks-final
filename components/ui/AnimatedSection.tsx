"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  id,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: fadeUpVariants.hidden,
        visible: {
          ...fadeUpVariants.visible,
          transition: {
            ...(fadeUpVariants.visible as { transition: object }).transition,
            delay,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: fadeUpVariants.hidden,
        visible: {
          ...fadeUpVariants.visible,
          transition: {
            ...(fadeUpVariants.visible as { transition: object }).transition,
            delay,
          },
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
