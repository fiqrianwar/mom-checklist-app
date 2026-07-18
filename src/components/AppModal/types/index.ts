export type AppModalRef = {
  open: () => void;
  close: () => void;
};

export type AppModalProps = {
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
};
