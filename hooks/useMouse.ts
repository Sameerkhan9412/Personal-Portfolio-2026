// hooks/useMouse.ts
"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface MouseState extends MousePosition {
  elementX: number;
  elementY: number;
  elementPositionX: number;
  elementPositionY: number;
  isInside: boolean;
  isMoving: boolean;
  velocity: {
    x: number;
    y: number;
  };
}

interface UseMouseOptions {
  /**
   * Reset to initial position when mouse leaves
   */
  resetOnLeave?: boolean;
  /**
   * Element to track mouse position relative to
   */
  element?: React.RefObject<HTMLElement>;
  /**
   * Track velocity
   */
  trackVelocity?: boolean;
  /**
   * Throttle mouse movement updates (in ms)
   */
  throttle?: number;
}

// Simple useMouse hook - returns global mouse position
export function useMouse(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
}

// Advanced useMouse hook with more features
export function useMouseAdvanced(options: UseMouseOptions = {}): MouseState {
  const {
    resetOnLeave = false,
    element,
    trackVelocity = false,
    throttle = 0,
  } = options;

  const [state, setState] = useState<MouseState>({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
    elementPositionX: 0,
    elementPositionY: 0,
    isInside: false,
    isMoving: false,
    velocity: { x: 0, y: 0 },
  });

  const previousPosition = useRef<MousePosition>({ x: 0, y: 0 });
  const previousTime = useRef<number>(Date.now());
  const movingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastUpdate = useRef<number>(0);

  const updateState = useCallback(
    (e: globalThis.MouseEvent) => {
      const now = Date.now();

      // Throttle updates if specified
      if (throttle > 0 && now - lastUpdate.current < throttle) {
        return;
      }
      lastUpdate.current = now;

      let elementX = 0;
      let elementY = 0;
      let elementPositionX = 0;
      let elementPositionY = 0;
      let isInside = false;

      if (element?.current) {
        const rect = element.current.getBoundingClientRect();
        elementX = e.clientX - rect.left;
        elementY = e.clientY - rect.top;
        elementPositionX = rect.left;
        elementPositionY = rect.top;
        isInside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
      }

      // Calculate velocity if tracking
      let velocity = { x: 0, y: 0 };
      if (trackVelocity) {
        const timeDelta = now - previousTime.current;
        if (timeDelta > 0) {
          velocity = {
            x: (e.clientX - previousPosition.current.x) / timeDelta,
            y: (e.clientY - previousPosition.current.y) / timeDelta,
          };
        }
        previousPosition.current = { x: e.clientX, y: e.clientY };
        previousTime.current = now;
      }

      // Clear previous moving timeout
      if (movingTimeout.current) {
        clearTimeout(movingTimeout.current);
      }

      setState({
        x: e.clientX,
        y: e.clientY,
        elementX,
        elementY,
        elementPositionX,
        elementPositionY,
        isInside,
        isMoving: true,
        velocity,
      });

      // Set isMoving to false after 100ms of no movement
      movingTimeout.current = setTimeout(() => {
        setState((prev) => ({ ...prev, isMoving: false }));
      }, 100);
    },
    [element, trackVelocity, throttle],
  );

  const handleMouseLeave = useCallback(() => {
    if (resetOnLeave) {
      setState({
        x: 0,
        y: 0,
        elementX: 0,
        elementY: 0,
        elementPositionX: 0,
        elementPositionY: 0,
        isInside: false,
        isMoving: false,
        velocity: { x: 0, y: 0 },
      });
    } else {
      setState((prev) => ({ ...prev, isInside: false, isMoving: false }));
    }
  }, [resetOnLeave]);

  useEffect(() => {
    const targetElement = element?.current || window;

    targetElement.addEventListener("mousemove", updateState as EventListener);
    targetElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      targetElement.removeEventListener(
        "mousemove",
        updateState as EventListener,
      );
      targetElement.removeEventListener("mouseleave", handleMouseLeave);
      if (movingTimeout.current) {
        clearTimeout(movingTimeout.current);
      }
    };
  }, [updateState, handleMouseLeave, element]);

  return state;
}

// Hook for relative mouse position (useful for hover effects)
export function useMouseRelative(elementRef: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPosition({ x, y });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setPosition({ x: 0.5, y: 0.5 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [elementRef]);

  return { ...position, isHovering };
}

// Hook for smooth mouse following (with lerping)
export function useMouseSmooth(smoothing: number = 0.1): MousePosition {
  const [smoothPosition, setSmoothPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const targetPosition = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * smoothing,
        y: prev.y + (targetPosition.current.y - prev.y) * smoothing,
      }));
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updateMousePosition);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [smoothing]);

  return smoothPosition;
}

// Hook for magnetic effect (pulls element towards mouse)
export function useMagnetic(
  elementRef: React.RefObject<HTMLElement>,
  strength: number = 0.3,
  maxDistance: number = 100,
) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < maxDistance) {
        setIsActive(true);
        const factor = 1 - distance / maxDistance;
        setOffset({
          x: distanceX * strength * factor,
          y: distanceY * strength * factor,
        });
      } else {
        setIsActive(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      setOffset({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [elementRef, strength, maxDistance]);

  return { offset, isActive };
}

// Default export
export default useMouse;
