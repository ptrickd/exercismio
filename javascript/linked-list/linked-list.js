//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  push(value) {

    if (!this.head && !this.tail) {

      let node = new Node(null, null, value)
      this.head = node
      this.tail = node

    } else {

      let node = new Node(this.head, null, value)
      this.head.next = node
      this.head = node

    }
  }

  pop() {
    let value = this.head.value

    if (this.head === this.tail) {

      this.head = null
      this.tail = null

    } else {

      this.head = this.head.prev

    }

    return value
  }

  shift() {
    let value = this.tail.value

    if (this.head === this.tail) {

      this.head = null
      this.tail = null

    } else {

      this.tail = this.tail.next

    }

    return value
  }

  unshift(value) {
    if (!this.head && !this.tail) {

      let node = new Node(null, null, value)
      this.head = node
      this.tail = node

    } else {

      let node = new Node(null, this.tail, value)
      this.tail.prev = node
      this.tail = node

    }
  }

  delete(value) {
    let currentNode = this.tail
    let valueReturned = value
    let prevNode, nextNode

    while (currentNode !== null) {

      if (currentNode.value === value) {

        if (!currentNode.prev && !currentNode.next) {

          this.tail = null
          this.head = null

        } else if (!currentNode.prev) {

          this.tail = currentNode.next
          currentNode.next.prev = null

        }
        else if (!currentNode.next) {

          this.head = currentNode.prev
          currentNode.prev.next = null

        }
        else {

          prevNode = currentNode.prev
          nextNode = currentNode.next
          currentNode.prev.next = nextNode
          currentNode.next.prev = prevNode

        }
        break
      }
      if (currentNode !== null) currentNode = currentNode.next
    }
    return valueReturned
  }

  count() {

    let counter = 0
    let currentNode = this.tail
    while (currentNode !== null) {

      currentNode = currentNode.next
      counter++

    }
    return counter
  }
}

class Node {
  constructor(prev, next, value) {
    this.prev = prev
    this.next = next
    this.value = value
  }
}

