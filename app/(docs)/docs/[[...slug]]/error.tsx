"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ e, reset }: { e: Error; reset: () => void }) {
  useEffect(() => {
    console.error(e);
  }, [e]);

  return (
    <div className="h-full max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <h2 className="text-center text-xl">Something went wrong</h2>
        <h3 className="text-center text-4xl font-black">Oops!</h3>
        <Button
          size="sm"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
