console.clear();
export class Node {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
export class SinglyLinkedList {
    length;
    head;
    tail;
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value) {
        const item = new Node(value);
        if (this.length === 0) {
            this.head = item;
            this.tail = item;
        }
        else {
            this.tail.next = item;
            this.tail = item;
        }
        this.length++;
    }
    foreach(callback) {
        let currentLength = 0;
        let currentItem = this.head;
        while (this.length > currentLength) {
            currentLength++;
            callback(currentItem.value);
            currentItem = currentItem.next;
        }
    }
}
const list = new SinglyLinkedList();
for (let i = 0; i <= 1000; i++) {
    list.push(i);
}
list.foreach((val) => {
    console.log(val);
});
