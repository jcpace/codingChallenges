// PROMPt: Implement a linked list. A singly-linked list is a data structure that holds a sequence of linked nodes.
// Each node, in turn, contains data and a pointer, which can point to another node.

const Node = data => {
  // data contained in each node
  this.data = data
  // pointer to next node in the list
  this.next = null
}

const LinkedList = () => {
  // number of nodes in the Linked List
  this.length = 0
  // a pointer to the first node at the front of the list
  this.head = null
}
LinkedList.prototype.add = value => {
  let node = new Node(value)
  let currentNode = this.head

  // First-use case, an empty list
  if (!currentNode) {
    this.head = node
    this.length++
  }

  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = node
  this.length++

  return node

}
