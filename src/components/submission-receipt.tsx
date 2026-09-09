"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SubmissionReceiptProps = {
  confirmationSent: boolean;
  children: ReactNode;
  className?: string;
};

export function SubmissionReceipt({
  confirmationSent,
  children,
  className = "",
}: SubmissionReceiptProps) {
  const receiptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const receipt = receiptRef.current;
    if (!receipt) return;

    window.requestAnimationFrame(() => {
      receipt.focus({ preventScroll: true });
      receipt.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "center",
      });
    });
  }, []);

  return (
    <div
      ref={receiptRef}
      role="status"
      tabIndex={-1}
      data-submission-receipt
      data-confirmation-delivery={confirmationSent ? "sent" : "failed"}
      className={`scroll-mt-28 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-blue ${className}`}
    >
      {children}
    </div>
  );
}
