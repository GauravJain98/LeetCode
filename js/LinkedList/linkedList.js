class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next || null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.size = 1;
    }
    prepend(value) {
        let prevHead = this.head;
        let newHead = new Node(value, prevHead);
        this.head = newHead;
        this.size++;
    }
    append(value) {
        // let newTail = new Node(value)
        // this.tail
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(value);
        this.size++;
    }
    insert(value, index) {
        if (index > this.size - 1) {
            throw new Error(`Overflow - Cannot insert at index ${index}`);
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        let rest = current.next;
        current.next = new Node(value);
        current = current.next;
        current.next = rest;
        this.size++;
    }

    // * * * * * *
    reverse() {
        if (!this.head.next) {
            return;
        }
        let first = this.head;
        let second = this.head.next;
        while (second) {
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }

    delete(index) {}
    print() {
        let current = this.head;
        while (current !== null) {
            process.stdout.write(` |${current.value}| ->`);
            current = current.next;
        }
        console.log('null');

    }
}

let List = new LinkedList(1);
List.prepend(2);
List.prepend(3);
List.prepend(4);

List.append(0);
List.append(-1);
List.append(-2);

List.reverse();
List.insert(999, 5);
List.reverse();

List.print();

// |_| |_| |_| |_| |_| |_| |_| |_|
//  0   1  2   3   4
