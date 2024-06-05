console.clear();

export class Node<T> {
  public value: T;
  public next: Node<T>;
  public previous: Node<T>;

  constructor(value: T) {
    this.value = value;
  }
}

export class DoublyLinkedList<T> {
  private head: Node<T>;
  private tail: Node<T>;
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
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  forEach(callback: (value: T) => void) {
    let currentItem = this.head;
    while (currentItem) {
      callback(currentItem.value);
      currentItem = currentItem.next;
    }
  }
}

const list = new DoublyLinkedList<number>();

for (let i = 0; i <= 5; i++) {
  list.push(i);
}

list.forEach((value) => {
  console.log(value);
});
