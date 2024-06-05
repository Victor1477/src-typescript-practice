console.clear();
export class Node {
    value;
    next;
    previous;
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}
export class DoublyLinkedList {
    head;
    tail;
    length;
    constructor() {
        this.length = 0;
    }
}
