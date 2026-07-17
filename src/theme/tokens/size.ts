export const size = {
  'size-0': 0,
  'size-1': 4,
  'size-2': 8,
  'size-3': 12,
  'size-4': 16,
  'size-5': 20,
  'size-6': 24,
  'size-7': 28,
  'size-8': 32,
  'size-9': 36,
  'size-10': 40,
  'size-11': 44,
  'size-12': 48,
  'size-14': 56,
  'size-16': 64,
  'size-20': 80,
  'size-24': 96,
  'size-32': 128,
} as const;

export type SizeToken = keyof typeof size;
