import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ open, onClose, title, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 py-8">
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div className={cn('relative z-10 w-full max-w-2xl rounded-3xl bg-[#0f2539] p-6 shadow-2xl')}>
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70 transition hover:border-tealGlow hover:text-tealGlow"
          >
            Close
          </button>
        </div>
        <div className="mt-4 max-h-[60vh] space-y-4 overflow-y-auto text-slate-200">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
