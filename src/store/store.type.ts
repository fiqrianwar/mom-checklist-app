export type ChecklistType = 'new-moms' | 'lil-ones';

export type ChecklistItem = {
  id: string;
  title: string;
  completed: boolean;
};

export type Checklist = {
  id: string;
  title: string;
  completed: boolean;
  checklistItems: ChecklistItem[];
  type?: ChecklistType;
};

export type UpdateChecklistPayload = Omit<Checklist, 'id'>;

export type ChecklistStore = {
  items: Checklist[];
  add(item: Checklist): void;
  update(id: string, payload: UpdateChecklistPayload): void;
  remove(id: string): void;
  toggle(id: string): void;
  toggleChecklistItem(checklistId: string, itemId: string): void;
};
