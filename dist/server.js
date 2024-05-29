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
        return true;
    }
    pop() {
        if (this.length === 0)
            return undefined;
        let currentItem = this.head;
        let previous = this.head;
        while (currentItem?.next) {
            previous = currentItem;
            currentItem = currentItem.next;
        }
        previous.next = null;
        this.tail = previous;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return currentItem.value;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current.value;
    }
    unshift(value) {
        const item = new Node(value);
        if (this.length === 0) {
            this.head = item;
            this.tail = item;
        }
        else {
            item.next = this.head;
            this.head = item;
        }
        this.length++;
        return true;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let iteration = 0;
        let currentItem = this.head;
        while (iteration !== index) {
            currentItem = currentItem.next;
            iteration++;
        }
        return currentItem.value;
    }
    set(index, value) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        let iteration = 0;
        let currentItem = this.head;
        while (iteration !== index) {
            currentItem = currentItem.next;
            iteration++;
        }
        currentItem.value = value;
        return true;
    }
    insert(index, value) {
        if (index < 0 || index > this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.unshift(value);
        }
        if (index === this.length) {
            return this.push(value);
        }
        let iteration = 0;
        let currentItem = this.head;
        while (iteration !== index - 1) {
            currentItem = currentItem.next;
            iteration++;
        }
        const node = new Node(value);
        node.next = currentItem.next;
        currentItem.next = node;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        else if (index === 0) {
            return this.shift();
        }
        else if (index === this.length - 1) {
            return this.pop();
        }
        let iteration = 0;
        let currentItem = this.head;
        while (iteration !== index - 1) {
            currentItem = currentItem.next;
            iteration++;
        }
        let removedItem = currentItem.next;
        currentItem.next = removedItem.next;
        this.length--;
        return removedItem.value;
    }
    forEach(callback) {
        let currentItem = this.head;
        while (currentItem) {
            callback(currentItem.value);
            currentItem = currentItem.next;
        }
    }
    find(callback) {
        let currentItem = this.head;
        while (currentItem) {
            if (callback(currentItem.value)) {
                return currentItem.value;
            }
            currentItem = currentItem.next;
        }
    }
}
const list = new SinglyLinkedList();
for (let i = 0; i <= 5; i++) {
    list.unshift(i);
}
list.forEach((val) => {
    console.log(val);
});
console.log("\n");
