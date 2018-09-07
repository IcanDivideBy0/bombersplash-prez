export const lerp = (a, b, alpha) => a * (1 - alpha) + b * alpha;
export const clamp = (min, max, value) => Math.min(Math.max(value, min), max);
export const normalize = (min, max, value) => (value - min) / (max - min);
