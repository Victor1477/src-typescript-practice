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
    pop() {
        if (this.length == 0) {
            return null;
        }
        let previous;
        let last;
        this.foreachNode((node) => {
            if (node.next) {
                previous = node;
            }
            else {
                last = previous.next;
                previous.next = null;
                this.length--;
            }
        });
        return last.value;
    }
    foreach(callback) {
        let currentItem = this.head;
        while (currentItem) {
            callback(currentItem.value);
            currentItem = currentItem.next;
        }
    }
    foreachNode(callback) {
        let currentItem = this.head;
        while (currentItem) {
            callback(currentItem);
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
console.log(list.pop());
console.log(list.pop());
