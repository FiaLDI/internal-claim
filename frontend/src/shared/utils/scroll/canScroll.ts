export function canScroll(el: HTMLElement, delta: number) {
  const { scrollTop, scrollHeight, clientHeight } = el;

  if (scrollHeight <= clientHeight) return false;

  if (delta > 0) {
    return scrollTop + clientHeight < scrollHeight - 1;
  }

  if (delta < 0) {
    return scrollTop > 0;
  }

  return false;
}
