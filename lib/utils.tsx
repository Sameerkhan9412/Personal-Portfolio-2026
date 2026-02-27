// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function splitText(text: string) {
  return text.split('').map((char, index) => (
    <span
      key={index}
      style={{ animationDelay: `${index * 0.03}s` }}
      className="inline-block"
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}