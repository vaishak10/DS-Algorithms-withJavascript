class Queue {
    constructor(){
        this.queue = [];
    }

    //Inserts a new element into the queue from the back of the queue
    enqueue(value){
        this.queue.push(value);
    }

    //Deletes a element from the front of the queue
    dequeue(){
        this.queue.splice(0,1);
    }

    //Return number of items in the queue
    queueLength(){
        return this.queue.length;
    }

    //Return first element in the queue
    seek(){
        return this.queue[0];
    }

    //View the elements in the queue
    view(){
        if(this.queue.length > 0)
        {
            return this.queue
        } else {
            console.log('Queue is empty.');
        }
    }
}

const queue = new Queue();

//Inserts elements 2,3,4 into the queue
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.view());

//Deletes 2 from the queue 
queue.dequeue();
console.log(queue.view());

//returns the length of queue
let queueLength = queue.queueLength();
if(queueLength) console.log("Length of the queue: " + queueLength);


//View the first element of the queue
let firstElement = queue.seek();
if(firstElement) {
    console.log("First element of the queue: "+firstElement);
} else {
    console.log('Queue is empty.');
}
