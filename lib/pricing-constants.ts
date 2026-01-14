import { HomeSize } from '@/types/calculator';

export const PRICING_TIERS: Record<HomeSize, Record<'basic' | 'deluxe' | 'luxury', [number, number]>> = {
  small: {
    basic: [295, 395],
    deluxe: [445, 545],
    luxury: [595, 745]
  },
  medium: {
    basic: [395, 495],
    deluxe: [595, 695],
    luxury: [795, 945]
  },
  large: {
    basic: [495, 595],
    deluxe: [745, 845],
    luxury: [995, 1195]
  },
  xl: {
    basic: [645, 745],
    deluxe: [945, 1095],
    luxury: [1295, 1595]
  }
};

export const BASIC_FEATURES = [
  "Exterior Glass Cleaning",
  "That's it — simple & clean."
];

export const DELUXE_FEATURES = [
  "Everything in Basic, plus:",
  "Interior Glass Cleaning",
  "Light Track Cleaning",
  "Light Sill Wipe",
  "Screen Dusting"
];

export const LUXURY_FEATURES = [
  "Everything in Deluxe, plus:",
  "Deep Track Scrubbing",
  "Deep Sill Cleaning",
  "Full Screen Wash"
];
