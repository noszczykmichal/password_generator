import { signal } from "@preact/signals-react";

export const arrayFiller = (rangeStart, rangeEnd) => {
  let resultArray = [];

  for (let i = rangeStart; i <= rangeEnd; i++) {
    resultArray.push(i);
  }

  return resultArray;
};

export const isBackdropOpen = signal(false);
export const backdropCloseHandler = () => (isBackdropOpen.value = false);
export const backdropOpenHandler = () => (isBackdropOpen.value = true);
