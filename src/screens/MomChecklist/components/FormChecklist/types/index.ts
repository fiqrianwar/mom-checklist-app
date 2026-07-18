import { Checklist } from '@/store';

export type PropsFormChecklist = { routeName: string };

export interface ChecklistFormRef {
  open: (checklist?: Checklist) => void;
  close: () => void;
}
