//push
//unshift
//shift
//pop
//insert
//remove

//head & tail
//null-terminated List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }
}
const ll = new LinkedList(4);
console.table(ll)
