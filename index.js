 
// Create the below linked list:
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
    //Code here

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

}
let myLinkedList = new LinkedList(10);
console.log(myLinkedList)
console.log(myLinkedList.append(27));
console.log(myLinkedList.append(47));
console.log(myLinkedList.append(99));
console.log(myLinkedList.prepend(9));
console.log(myLinkedList.prepend(34));




