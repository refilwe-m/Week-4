class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

node = { value: 4, next: {} };
class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }
  //push
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  //unshift
  //pop
  //shift
  //remove(value)
  //insert(index,value)
}

const ll = new LinkedList(4);
ll.push(3); //{value:3,next:null}
console.table(ll);
let linkedlist = { value: 4, next: { value: 3, next: null } };
