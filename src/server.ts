console.clear();

export class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public previous: Node<T> | null;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  public length: number;

  constructor() {
    this.length = 0;
  }

  push(value: T) {
    const node = new Node<T>(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail!.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return undefined;
    const currentTail = this.tail!;
    if (this.length > 1) {
      this.tail = currentTail.previous!;
      this.tail.next = null;
    }
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    currentTail.previous = null;
    return currentTail.value;
  }

  unshift(value: T) {
    const node = new Node<T>(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head!.previous = node;
      this.head = node;
    }
    this.length++;
  }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    if (this.length > 1) {
      this.head = currentHead.next;
      this.head!.previous = null;
      currentHead.next = null;
    }
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead.value;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    if (index < this.length / 2) {
      let currentItem = this.head;
      for (let i = 1; i <= index; i++) {
        currentItem = currentItem!.next;
      }
      return currentItem!.value;
    } else {
      let currentItem = this.tail;
      for (let i = this.length - 2; i >= index; i--) {
        currentItem = currentItem!.previous;
      }
      return currentItem!.value;
    }
  }

  forEach(callback: (value: T) => void) {
    let currentItem = this.head;
    while (currentItem) {
      callback(currentItem.value);
      currentItem = currentItem.next!;
    }
  }
}

const list = new DoublyLinkedList<number>();

for (let i = 0; i <= 5; i++) {
  list.unshift(i);
}

console.log(list.get(5));

console.log("-------------------------------------");
list.forEach((value) => {
  console.log(value);
});
