console.clear();

export class Node<T> {
  value: T;
  next: Node<T>;
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

  foreach(callback: (value: T) => void) {
    let currentLength = 0;
    let currentItem = this.head;
    while (this.length > currentLength) {
      currentLength++;
      callback(currentItem!.value);
      currentItem = currentItem!.next;
    }
  }
}

const list = new SinglyLinkedList<number>();

for (let i = 0; i <= 1000; i++) {
  list.push(i);
}

list.foreach((val) => {
  console.log(val);
});
