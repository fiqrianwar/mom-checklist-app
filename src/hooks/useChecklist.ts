import { useChecklistStore } from '@/store';

export const useChecklist = () => {
  const items = useChecklistStore((state) => state.items);
  const add = useChecklistStore((state) => state.add);
  const remove = useChecklistStore((state) => state.remove);
  const toggle = useChecklistStore((state) => state.toggle);
  return {
    items,
    add,
    remove,
    toggle,
  };
};
