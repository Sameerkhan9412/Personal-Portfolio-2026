// hooks/useScrollAnimation.ts
"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, useScroll, useTransform } from "framer-motion";

// Basic scroll animation hook
interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

interface UseScrollAnimationReturn {
  ref: (node?: Element | null) => void;
  controls: ReturnType<typeof useAnimation>;
  inView: boolean;
}

export function useScrollAnimation(
  options: UseScrollAnimationOptions = {},
): UseScrollAnimationReturn {
  const { threshold = 0.1, triggerOnce = true, rootMargin = "-50px" } = options;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
}

// Parallax scroll hook
interface UseParallaxOptions {
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { offset = 50, direction = "up" } = options;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let range: [number, number];

  switch (direction) {
    case "down":
    case "right":
      range = [-offset, offset];
      break;
    case "up":
    case "left":
    default:
      range = [offset, -offset];
  }

  const transform = useTransform(scrollYProgress, [0, 1], range);

  return { ref, transform, scrollYProgress };
}

// Scroll progress hook
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const previousScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? currentScroll / totalHeight : 0;

      setScrollProgress(Math.min(Math.max(progress, 0), 1));
      setScrollDirection(
        currentScroll > previousScroll.current ? "down" : "up",
      );
      previousScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollProgress, scrollDirection };
}

// Section visibility hook
export function useSectionVisibility(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: "-20% 0px -20% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}

// Reveal on scroll hook
interface UseRevealOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
}

export function useReveal(options: UseRevealOptions = {}) {
  const { threshold = 0.1, delay = 0, once = true } = options;
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsRevealed(true);
            }, delay);

            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsRevealed(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, delay, once]);

  return { ref, isRevealed };
}

// Scroll snap hook
export function useScrollSnap(sectionRefs: React.RefObject<HTMLElement>[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);

  const scrollToSection = useCallback(
    (index: number) => {
      const section = sectionRefs[index]?.current;
      if (section && !isScrolling.current) {
        isScrolling.current = true;
        section.scrollIntoView({ behavior: "smooth" });
        setCurrentIndex(index);
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    },
    [sectionRefs],
  );

  const scrollNext = useCallback(() => {
    if (currentIndex < sectionRefs.length - 1) {
      scrollToSection(currentIndex + 1);
    }
  }, [currentIndex, sectionRefs.length, scrollToSection]);

  const scrollPrev = useCallback(() => {
    if (currentIndex > 0) {
      scrollToSection(currentIndex - 1);
    }
  }, [currentIndex, scrollToSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        scrollNext();
      } else {
        scrollPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, [scrollNext, scrollPrev]);

  return { currentIndex, scrollToSection, scrollNext, scrollPrev };
}

// Scroll velocity hook
export function useScrollVelocity() {
  const [velocity, setVelocity] = useState(0);
  const lastScrollTop = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const currentScrollTop = window.scrollY;
      const timeDelta = now - lastTime.current;

      if (timeDelta > 0) {
        const scrollDelta = currentScrollTop - lastScrollTop.current;
        const currentVelocity = scrollDelta / timeDelta;
        setVelocity(currentVelocity);
      }

      lastScrollTop.current = currentScrollTop;
      lastTime.current = now;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return velocity;
}

// Default export
export default useScrollAnimation;
