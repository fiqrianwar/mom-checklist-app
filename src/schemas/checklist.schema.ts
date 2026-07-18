import { z } from 'zod';

const checklistItemSchema = z.object({
  id: z.string(),

  title: z.string().trim().min(1, 'Checklist item is required'),
});

export const checklistSchema = z.object({
  title: z.string().trim().min(1, 'Checklist name is required'),

  checklistItems: z.array(checklistItemSchema).min(1),
});

export type ChecklistForm = z.infer<typeof checklistSchema>;
