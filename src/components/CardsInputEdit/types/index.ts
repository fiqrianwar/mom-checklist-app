import { ChecklistForm } from '@/schemas/checklist.schema';
import { Control } from 'react-hook-form';

export type ChecklistItem = {
  id: string;
  title: string;
  editing: boolean;
};

export type Props = {
  control: Control<ChecklistForm>;
  index: number;
  editing: boolean;
  onEdit(): void;
  onSave(): void;
};
