"use client";

import { useEffect, useRef, type ReactNode } from "react";

type SubmissionReceiptProps = {
  confirmationSent: boolean;
  confirmationAvailable?: boolean;
  children: ReactNode;
  className?: string;
};

export function SubmissionReceipt({
  confirmationSent,
  confirmationAvailable = true,
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
      data-confirmation-delivery={
        confirmationAvailable ? (confirmationSent ? "sent" : "failed") : "not-applicable"
      }
      className={`scroll-mt-28 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyber-blue ${className}`}
    >
      {children}
    </div>
  );
}
