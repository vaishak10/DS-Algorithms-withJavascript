class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}

class LinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    //Adds a new value from the begining of linked list
    prepend(value) {
        // Make new node to be a head.
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        // If there is no tail yet let's make new node a tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    //Adds new values from the end of the linked list
    append(value) {
        const newNode = new LinkedListNode(value);

        // If there is no head yet let's make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            this.length++;
            return this;
        }

        // Attach new node to the end of linked list.
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this;
    }

    //Removes the last element from linked list
    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // There is only one node in linked list.
            this.head = null;
            this.tail = null;

            this.length--;

            return deletedTail;
        }

        // If there are many nodes in linked list...

        // Rewind to the last node and delete "next" link for the node before the last one.
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;
        this.length--;

        return deletedTail;
    }

    //Removes the first element from linked list
    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        this.length--;
        return deletedHead;
    }

    //Adds a value at an index position of linked list
    addAt(index, element){
        index--;
        // Check if index is out of bounds of list
        if (index > this.length) {
            console.log('Index out of Bound.');
            return;
        }
        const node = new LinkedListNode(element);

        let currentNode = this.head
        let previousNode
        let currentIndex = 0
    
        // Check if index is the start of list
        if (index === 0) {
          node.next = currentNode
          this.head = node
        } else {
          while (currentIndex < index) {
            currentIndex++
            previousNode = currentNode
            currentNode = currentNode.next
          }
    
          // Adding the node at specified index
          node.next = currentNode
          previousNode.next = node
        }
    
        // Incrementing the length
        this.length++
        return true
    }

    //Removes a value at an index position of linked list
    removeAt(index){
        index--;

        // Check if index is present in list
        if (index < 0 || index >= this.length) {
            console.log('index value is invalid');
            return;
        }
        let currentNode = this.head
        let previousNode
        let currentIndex = 0
    
        // Check if element is the first element
        if (index === 0) {
          this.head = currentNode.next
        } else {
          while (currentIndex < index) {
            currentIndex++
            previousNode = currentNode
            currentNode = currentNode.next
          }
          previousNode.next = currentNode.next
        }
    
        // Decrementing the length
        this.length--;
        return currentNode.value;
    }

    //Returns the element at a particular index position
    elementAt(index) {
        let currentNode = this.head
        let count = 0
        while (count < index) {
          count++
          currentNode = currentNode.next
        }
        return currentNode.value;
    }

    // Returns the index of the element passed as param otherwise -1
    indexOf(value) {
        let currentNode = this.head
        let index = -1

        while (currentNode) {
        index++

        // Checking if the node is the element we are searching for
        if (currentNode.value === value) {
            return index;
        }
        currentNode = currentNode.next
        }

        return -1
    }

    //Convert the linked list into an array
    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    //String reperesentation of linked list
    toString(callback) {
        let list = '';
        this.toArray().forEach((node,index) => 
            {
                if(this.toArray().length-1 === index){
                    list += node.toString(callback);
                } else {
                    list += node.toString(callback) + ' --> ';
                }
            }
        );
        return list;
    }

    //Reverses the order of the linked list
    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // Store next node.
            nextNode = currNode.next;

            // Change next node of the current node so it would link to previous node.
            currNode.next = prevNode;

            // Move prevNode and currNode nodes one step forward.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Reset head and tail.
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }

    //Returns the length of the linked list(number of elements in the list)
    size() {
        return this.length;
    }
}

const linklist = new LinkedList()

//Adds new values 2,3,4,5 from end of the linked list
linklist.append(2)
linklist.append(3)
linklist.append(4)
linklist.append(5)
console.log(linklist.toString());

//Adds new values 2,1 from begining of the linked list
linklist.prepend(2)
linklist.prepend(1)
console.log(linklist.toString());

//Removes a value from the begining of linked list
console.log(`Deleted head: ${linklist.deleteHead()}`);
console.log(linklist.toString());

//Removes a value from the end of linked list
console.log(`Deleted Tail: ${linklist.deleteTail()}`);
console.log(linklist.toString());

//Reverses the order of the linked list
linklist.reverse();
console.log("Revered List:");
console.log(linklist.toString());

//Returns the length of the linked list
console.log(linklist.size());

//Adds a new value '5' at position 2(index: 1)
linklist.addAt(2,5);
console.log(linklist.toString());

//Adds a new value '5' at position 7(index: 6)
linklist.addAt(7,5);
console.log(linklist.toString()); //Expected output: Index out of bound

//Removes a value at position 2(index: 1) i., 5
console.log('Removed value: '+linklist.removeAt(2));
console.log(linklist.toString());

//Returns the element at index position 2 i.e, 2
console.log(linklist.elementAt(1));

// Returns the index of element 3 i.e., index = 1
console.log(linklist.indexOf(3));
