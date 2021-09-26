/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * https://medium.com/@taylorshephard1/instantiation-patterns-in-javascript-7f9463b95839
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// const list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


function Node(data) {
  this.data = data
  this.next = null
}

function LinkedList(head = null) {
  this.head = head
  this.tail = null
}

LinkedList.prototype.size = function () {
  let count = 0;
  let node = this.head;
  while (node) {
    count++;
    node = node.next
  }

  return count
}

LinkedList.prototype.clear = function () {
  this.head = null
  this.tail = null
}

LinkedList.prototype.getLast = function () {
  return this.tail
}

LinkedList.prototype.getFirst = function () {
  return this.head
}

LinkedList.prototype.addToTail = function(obj) {
  const last = this.getLast()
  if (!last) {
    this.head = new Node(obj)
    this.tail = this.head
  } else {
    last.next = new Node(obj)
    this.tail = last.next
  }
}

LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
}

LinkedList.prototype.contains = function(obj) {
  let node = this.head;
  while (node) {
    if (node.data === obj)
      return true
    node = node.next
  }

  return false
}


describe("Tests", () => {
  const list = new LinkedList()
  list.addToTail(2)
  list.addToTail(5)
  list.addToTail(7)

  it("test contains", () => {
    expect(list.contains(2)).toEqual(true)
    expect(list.contains(7)).toEqual(true)
    expect(list.contains(3)).toEqual(false)
  })

  it("test linked list methods", () => {
		expect(list.size()).toEqual(3)
		expect(list.getFirst()).toStrictEqual(list.head)
		expect(list.getLast()).toStrictEqual(list.head.next.next)
		expect(list.head.next.data).toEqual(5)
	})

  it("test removeHead", () => {
    list.removeHead()
    expect(list.head.data).toEqual(5)
  })

  it("test addToTail", () => {
    list.addToTail(9)
    expect(list.contains(9)).toEqual(true)
  })

  it("test linked list clear", () => {
    list.clear()
		expect(list.getFirst()).toBeNull()
	})
});

//write methods here!
