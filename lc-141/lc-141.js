const hasCycle = (head) => {
  const set = new Set();
  while (head !== null) {
    if (set.has(head)) return true;
    else set.add(head);
    head = head.next;
  }
  return false;
};
