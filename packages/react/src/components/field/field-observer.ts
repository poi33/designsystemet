export function fieldObserver(fieldElement: HTMLElement | null) {
  if (!fieldElement) return;

  const elements = new Map<Element, string | null>();
  const typeCounter = new Map<string, number>(); // Track count for each data-field type
  const uuid = `:${Date.now().toString(36)}${Math.random().toString(36).slice(2, 5)}`;
  let input: Element | null = null;
  let describedby = '';

  const process = (mutations: Partial<MutationRecord>[]) => {
    const changed: Node[] = [];
    const removed: Node[] = [];

    // Merge MutationRecords
    for (const mutation of mutations) {
      if (mutation.attributeName) changed.push(mutation.target ?? fieldElement);
      changed.push(...(mutation.addedNodes || []));
      removed.push(...(mutation.removedNodes || []));
    }

    // Register elements
    for (const el of changed) {
      if (!isElement(el)) continue;

      if (isLabel(el)) elements.set(el, el.htmlFor);
      else if (el.hasAttribute('data-field')) elements.set(el, el.id);
      else if (isInputLike(el) && !el.hidden) {
        input = el;
        describedby = el.getAttribute('aria-describedby') || '';
      }
    }

    // Reset removed elements
    for (const el of removed) {
      if (!isElement(el)) continue;

      if (input === el) input = null;
      if (elements.has(el)) {
        setAttr(el, isLabel(el) ? 'for' : 'id', elements.get(el));
        elements.delete(el);
      }
    }

    // Connect elements
    const describedbyIds = describedby ? describedby.split(' ') : []; // Keep original aria-describedby
    const inputId = input?.id || uuid;

    // Reset type counters since we reprocess all elements
    typeCounter.clear();

    for (const [el, value] of elements) {
      const descriptionType = el.getAttribute('data-field');
      let id: string;

      if (descriptionType) {
        // Increment type counter for this type
        const count = (typeCounter.get(descriptionType) || 0) + 1;
        typeCounter.set(descriptionType, count);
        id = `${inputId}:${descriptionType}:${count}`;
      } else {
        id = inputId;
      }

      if (!value) setAttr(el, isLabel(el) ? 'for' : 'id', id); // Ensure we have a value
      if (!describedbyIds.includes(el.id)) {
        if (descriptionType === 'validation')
          describedbyIds.unshift(el.id); // Validations to the front
        else if (descriptionType) describedbyIds.push(el.id); // Other descriptions to the back
      }
    }

    setAttr(input, 'id', inputId);
    setAttr(input, 'aria-describedby', describedbyIds.join(' ').trim());
  };

  const observer = createOptimizedMutationObserver(process);
  observer.observe(fieldElement, {
    attributeFilter: ['id', 'for', 'aria-describedby'],
    attributes: true,
    childList: true,
    subtree: true,
  });

  process([{ addedNodes: fieldElement.querySelectorAll('*') }]); // Initial setup
  observer.takeRecords(); // Clear initial setup queue
  return () => observer.disconnect();
}

// Utilities
export const isElement = (node: Node) => node instanceof Element;
export const isLabel = (node: Node) => node instanceof HTMLLabelElement;
export const isInputLike = (node: unknown): node is HTMLInputElement =>
  node instanceof HTMLElement &&
  'validity' in node &&
  !(node instanceof HTMLButtonElement); // Matches input, textarea, select and form accosiated custom elements

const setAttr = (el: Element | null, name: string, value?: string | null) =>
  value ? el?.setAttribute(name, value) : el?.removeAttribute(name);

// Speed up MutationObserver by debouncing, clearing internal queue after changes and only running when page is visible
function createOptimizedMutationObserver(callback: MutationCallback) {
  const queue: MutationRecord[] = [];
  const observer = new MutationObserver((mutations) => {
    if (!queue.length) requestAnimationFrame(process);
    queue.push(...mutations);
  });

  const process = () => {
    callback(queue, observer);
    queue.length = 0; // Reset queue
    observer.takeRecords(); // Clear queue due to DOM changes in callback
  };

  return observer;
}
