 
// Creating the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

// class for newNode
class node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
  // create newNode

    const newNode = new node(value)
      this.tail.next = newNode
      this.tail = newNode
      this.length ++
     
    
      return this
  }

  prepend(value){

    const newNode = new node(value)

    
    let placeHolder = this.head
    this.head = newNode
    this.head.next = placeHolder
    this.length ++
    
    return this
    
  }
  // function to traverse through the linked list 
traverse(index){
  let currentNode = this.head
  let counter = 0 

  while (index > counter){
    let temp = currentNode.next
    currentNode = temp
    counter ++
  }
  
  return currentNode
}
insert (index,value){
  if (index > this.length){
   this.append(value)
    return this
  }

  const newNode = new node(value)

  let firstNode = this.traverse(index-1)
  let nodeAfter = firstNode.next



  newNode.next = nodeAfter
  firstNode.next = newNode
  this.length ++
  return this
  
}

printList() {
  const array = []
  let currentNode = this.head;
  while (currentNode !== null) {
    array.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return array
}
  

}
let myLinkedList = new LinkedList(10);
console.log(myLinkedList)
console.log(myLinkedList.append(27));
console.log(myLinkedList.append(47));
console.log(myLinkedList.append(99));
console.log(myLinkedList.prepend(9));
console.log(myLinkedList.prepend(34))
  ;
console.log(myLinkedList.printList())
console.log(myLinkedList.traverse(3))
console.log(myLinkedList.insert(3,55))
console.log(myLinkedList.printList())





