"use client";

import { motion } from "framer-motion";

const defaultVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div" | "article";
};

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionArticle = motion.article;

/**
 * Lightweight entrance animation for sections — reduces cognitive load,
 * meets report "micro-interactions" without distraction.
 */
export function AnimatedSection({
  children,
  className,
  delay = 0,
  as: Component = "section",
}: AnimatedSectionProps) {
  const Comp = Component === "article" ? MotionArticle : Component === "section" ? MotionSection : MotionDiv;
  return (
    <Comp
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={defaultVariants}
      transition={{ duration: 0.35, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

type AnimatedCardProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

/** Staggered card hover lift for care-path and feature cards. */
export function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={className}
    >
      {children}
    </motion.article>
  );
}
