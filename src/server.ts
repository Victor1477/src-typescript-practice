console.clear();

export class Node<T> {
  value: T;
  next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
  }
}

export class SinglyLinkedList<T> {
  private length: number;
  private head: Node<T> | null;
  private tail: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value: T) {
    const item = new Node(value);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail!.next = item;
      this.tail = item;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    let currentItem = this.head;
    let previous = this.head;
    while (currentItem?.next) {
      previous = currentItem;
      currentItem = currentItem.next;
    }
    previous!.next = null;
    this.tail = previous;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentItem!.value;
  }

  shift() {
    if (this.length === 0) return undefined;
    let current = this.head;
    this.head = current!.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current!.value;
  }

  unshift(value: T) {
    const item = new Node<T>(value);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      item.next = this.head;
      this.head = item;
    }
    this.length++;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let iteration = 0;
    let currentItem = this.head;
    while (iteration !== index) {
      currentItem = currentItem!.next;
      iteration++;
    }
    return currentItem!.value;
  }

  set(index: number, value: T) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    let iteration = 0;
    let currentItem = this.head;
    while (iteration !== index) {
      currentItem = currentItem!.next;
      iteration++;
    }
    currentItem!.value = value;
    return true;
  }

  foreach(callback: (value: T) => void) {
    let currentItem = this.head;
    while (currentItem) {
      callback(currentItem.value);
      currentItem = currentItem.next;
    }
  }

  find(callback: (value: T) => boolean) {
    let currentItem = this.head;
    while (currentItem) {
      if (callback(currentItem.value)) {
        return currentItem.value;
      }
      currentItem = currentItem.next;
    }
  }
}

const list = new SinglyLinkedList<number>();

for (let i = 0; i <= 1000; i++) {
  list.unshift(i);
}

list.foreach((val) => {
  console.log(val);
});
