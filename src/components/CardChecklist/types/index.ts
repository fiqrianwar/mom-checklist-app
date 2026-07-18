export type CardChecklistProps = {
  onPress?: () => void; // outer card press
  onDelete?: () => void;
  onHide?: () => void;
  onEdit?: () => void;
  title?: string;
  progress?: number;
};
