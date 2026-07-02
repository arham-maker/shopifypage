export {};

declare global {
  interface Window {
    setButtonURL?: () => void;
    zE?: (...args: unknown[]) => void;
    Swiper?: new (
      element: string | HTMLElement,
      options?: Record<string, unknown>,
    ) => { destroy: () => void };
  }
}
