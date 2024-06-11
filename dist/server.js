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
    pop() {
        if (!this.head)
            return undefined;
        const currentTail = this.tail;
        if (this.length > 1) {
            this.tail = currentTail.previous;
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
    unshift(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.length++;
    }
    shift() {
        if (!this.head)
            return undefined;
        const currentHead = this.head;
        if (this.length > 1) {
            this.head = currentHead.next;
            this.head.previous = null;
            currentHead.next = null;
        }
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentHead.value;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index < this.length / 2) {
            let currentItem = this.head;
            for (let i = 1; i <= index; i++) {
                currentItem = currentItem.next;
            }
            return currentItem.value;
        }
        else {
            let currentItem = this.tail;
            for (let i = this.length - 2; i >= index; i--) {
                currentItem = currentItem.previous;
            }
            return currentItem.value;
        }
    }
    set(index, value) {
        if (index < 0 || index >= this.length)
            return undefined;
        let counter, currentItem;
        if (index < this.length / 2) {
            counter = 0;
            currentItem = this.head;
            while (counter !== index) {
                currentItem = currentItem.next;
                counter++;
            }
        }
        else {
            counter = this.length - 1;
            currentItem = this.tail;
            while (counter !== index) {
                currentItem = currentItem.previous;
                counter--;
            }
        }
        currentItem.value = value;
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
    list.unshift(i);
}
list.set(5, 10);
console.log("-------------------------------------");
list.forEach((value) => {
    console.log(value);
});
