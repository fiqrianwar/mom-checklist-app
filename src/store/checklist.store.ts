import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { persistStorage } from './persist';
import { ChecklistStore } from './store.type';

export const useChecklistStore = create<ChecklistStore>()(
  persist(
    (set) => ({
      items: [],

      add: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),

      update: (id, payload) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  ...payload,
                }
              : item,
          ),
        })),

      remove: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      toggle: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  completed: !item.completed,
                }
              : item,
          ),
        })),

      toggleChecklistItem: (checklistId, itemId) =>
        set((state) => ({
          items: state.items.map((checklist) =>
            checklist.id === checklistId
              ? {
                  ...checklist,
                  checklistItems: checklist.checklistItems.map((item) =>
                    item.id === itemId
                      ? {
                          ...item,
                          completed: !item.completed,
                        }
                      : item,
                  ),
                }
              : checklist,
          ),
        })),
    }),
    {
      name: 'checklist-storage',
      storage: persistStorage,
    },
  ),
);
