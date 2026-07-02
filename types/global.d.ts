export {};

declare global {
  interface Window {
    setButtonURL?: () => void;
    Swiper?: new (
      element: string | HTMLElement,
      options?: Record<string, unknown>,
    ) => { destroy: () => void };
  }
}
