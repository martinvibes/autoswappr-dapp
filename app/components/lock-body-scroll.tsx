import { useEffect } from "react";

interface LockBodyScrollProps {
  lock: boolean;
}

export default function LockBodyScroll({ lock }: LockBodyScrollProps) {
  useEffect(() => {
    if (lock) {
      const originalOverflow = document.body.style.overflow;
      const originalHeight = document.body.style.height;

      window.scrollTo({ top: 0, behavior: "smooth" });

      const lockScroll = () => {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      };

      const delay = setTimeout(lockScroll, 500);

      return () => {
        clearTimeout(delay);
        document.body.style.overflow = originalOverflow;
        document.body.style.height = originalHeight;
      };
    }
  }, [lock]);

  return null;
}
