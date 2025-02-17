"use client";

// import React from "react";
import { toast } from "sonner";

export default function PromiseToast() {
  return (
    <button
      className="toast-button"
      onClick={() => {
        const myPromise = new Promise<{ name: string }>((resolve) => {
          setTimeout(() => {
            resolve({ name: "My toast" });
          }, 3000);
        });

        toast.promise(myPromise, {
          loading: "Loading...",
          success: (data: { name: string }) => {
            return `${data.name} toast has been added`;
          },
          error: "Error",
        });
      }}
    >
      Render toast
    </button>
  );
}
