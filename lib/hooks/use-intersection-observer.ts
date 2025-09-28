import { RefObject, useEffect, useState } from 'react';

export function useIntersectionObserver(
  elementRef: RefObject<Element | null>,
  options?: IntersectionObserverInit
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozenEntry = entry && Object.freeze(entry);

  useEffect(() => {
    const node = elementRef?.current;
    const hasIObserver = typeof IntersectionObserver === 'function';

    if (!hasIObserver || !node) return;

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, options]);

  return frozenEntry;
}
