"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) setVisible(true);
    else {
      // delay unmount for fade-out
      const timeout = setTimeout(() => setVisible(false), 200);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!mounted || (!visible && !isOpen)) return null;

  return createPortal(
    <div
      onClick={(e) => e.stopPropagation()}
      className={`fixed inset-0 z-50 flex justify-center transition-all duration-200 
      ${isOpen ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"}`}
    >
      <div
        className={`bg-transparent rounded-lg p-6 my-20 w-[95vw] sm:w-[80vw] md:w-[550] h-auto shadow-xl transform transition-all duration-200
        ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
