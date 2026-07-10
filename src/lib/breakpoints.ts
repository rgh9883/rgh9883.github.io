import { useEffect, useState } from "react";

// OS mode's fixed-px window positions/sizes and drag-to-move chrome don't
// work on touch/narrow viewports, so it collapses to Traditional mode below
// this width — matches Tailwind's `md` breakpoint.
const MOBILE_QUERY = "(max-width: 767px)";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
