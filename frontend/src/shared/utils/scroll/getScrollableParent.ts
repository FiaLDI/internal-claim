export function getScrollableParent(
  target: EventTarget | null
): HTMLElement | null {
  let el = target as HTMLElement | null;
  while (el) {
    if (el instanceof HTMLElement && el.hasAttribute("data-scrollable")) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}
