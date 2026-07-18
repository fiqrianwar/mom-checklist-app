export type ChecklistItem = {
  id: string;
  title: string;
  editing: boolean;
};

export type Props = {
  item: ChecklistItem;
  onEdit(id: string): void;
  onSave(id: string, value: string): void;
};
