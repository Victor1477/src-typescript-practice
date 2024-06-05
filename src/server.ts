console.clear();

export class Node<T> {
  public value: T;
  public next: Node<T> | null;
  public previous: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

export class DoublyLinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;

  constructor() {
    this.length = 0;
  }
}
