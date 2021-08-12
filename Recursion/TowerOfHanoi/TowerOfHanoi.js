// Implementation of Tower of Hanoi using recursion

let towerOfHanoi = (n, fromRod, toRod, midRod) => {
  if (n === 1){
    console.log(`Move Disk ${n} from rod ${fromRod} to rod ${toRod}.`);
    return;
  }
  towerOfHanoi(n-1, fromRod, midRod, toRod);
  console.log(`Move Disk ${n} from rod ${fromRod} to rod ${toRod}.`);
  towerOfHanoi(n-1, midRod, toRod, fromRod);
}

towerOfHanoi(4, 'A', 'C', 'B');