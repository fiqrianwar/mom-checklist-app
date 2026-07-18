// schemas/checklist.schema.ts

import { z } from 'zod';

export const checklistSchema = z.object({
  title: z.string().trim().min(1, 'Checklist name is required').max(100),
  completed: z.boolean().optional(),
});

export type ChecklistForm = z.infer<typeof checklistSchema>;
