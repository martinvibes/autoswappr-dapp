import { useEffect } from "react";

interface LockBodyScrollProps {
  lock: boolean;
}

export default function LockBodyScroll({ lock }: LockBodyScrollProps) {
  useEffect(() => {
    if (lock) {
      const originalOverflow = document.body.style.overflow;
      const originalheight = document.body.style.height;

      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.height = originalheight;
      };
    }
  }, [lock]);

  return null;
}
