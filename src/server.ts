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

  foreach(callback: (value: T) => void) {
    let currentItem = this.head;
    while (currentItem) {
      callback(currentItem.value);
      currentItem = currentItem.next;
    }
  }
}

const list = new SinglyLinkedList<number>();

for (let i = 0; i <= 10; i++) {
  list.push(i);
}

list.foreach((val) => {
  console.log(val);
});

console.log(list.shift());
console.log(list.shift());
