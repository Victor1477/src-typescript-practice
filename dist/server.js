console.clear();
export class Node {
    value;
    next;
    previous;
    constructor(value) {
        this.value = value;
    }
}
export class DoublyLinkedList {
    head;
    tail;
    length;
    constructor() {
        this.length = 0;
    }
    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    forEach(callback) {
        let currentItem = this.head;
        while (currentItem) {
            callback(currentItem.value);
            currentItem = currentItem.next;
        }
    }
}
const list = new DoublyLinkedList();
for (let i = 0; i <= 5; i++) {
    list.push(i);
}
list.forEach((value) => {
    console.log(value);
});
