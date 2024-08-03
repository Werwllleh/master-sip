

export const phoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/[^\d+]/g, '');
}

export function getScrollbarWidth() {

  // Creating invisible container
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll'; // forcing scrollbar to appear
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
  document.body.appendChild(outer);

  // Creating inner element and placing it in the container
  const inner = document.createElement('div');
  outer.appendChild(inner);

  // Calculating difference between container's full width and the child width
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  // Removing temporary elements from the DOM
  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

export function getWindowSize() {
  if (typeof window !== "undefined") {
    const {outerWidth, outerHeight} = window;

    return {outerWidth, outerHeight};
  }
}

export const addSuffixToFilename = (filename, suffix) => {
  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex === -1) return filename; // Если нет точки, возвращаем оригинальное имя
  const name = filename.substring(0, dotIndex);
  const extension = filename.substring(dotIndex);
  return `${name}${suffix}${extension}`;
};
