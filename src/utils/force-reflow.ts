export const forceReflow = (element: HTMLElement | null) => {
  return element ? element.offsetWidth : 0;
};
