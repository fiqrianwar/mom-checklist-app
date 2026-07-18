// store/persist.ts

import { createJSONStorage } from 'zustand/middleware';
import { storage } from '@/storage/async-storage';

export const persistStorage = createJSONStorage(() => storage);
