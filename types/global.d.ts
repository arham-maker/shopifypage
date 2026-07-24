export {};

declare global {
  interface Window {
    setButtonURL?: (event?: { preventDefault?: () => void }) => void;
    zE?: (...args: unknown[]) => void;
    Swiper?: new (
      element: string | HTMLElement,
      options?: Record<string, unknown>,
    ) => { destroy: () => void };
  }
}
