function HashStringIntoInt(str, tableSize){
/*spread out(TO AVOID COLLISION) keys 
and store in different values in the array
*/

  let hash = 37;
  for(let i=0; i<str.length; i++){ //arbitrary numbers 
    hash = (13 * hash * str.charCodeAt(i) % tableSize); 
    //mod of the value so that it stays within the tablesize limit
    //hash value will get bigger as values proceed 
  }
  return hash;
}

class HashMap{
  //hashmap will store the information in an array
  table = new Array(3007)
  //set the size of the array 

  numItems = 0;
  //sets the key value pair 
  put(key, value){
    this.numItems++;
    
    const index = HashStringIntoInt(key, this.table.length);
    if(this.table[index]){
      this.table[index].push([key , value]);
    }
    //this.table refers to the table inside our hashmap
    else {
// if table size is small, it can store multiple nested arrays
//avoiding collision 
      this.table[index] = [[key , value]].find(x => x[0] === key)[1]; //value stored at index 1
    }
  }

  //returns the key
  get(key){
    const index = HashStringIntoInt(key, this.table.length);
    if(!this.table[index]){
      return null;
    }
    //looping through the array to find the key 
    return this.table[index];
  }

  //remove function
  remove(key){
    const index = HashStringIntoInt(key, this.table.length);
    if(!this.table[index]){
      return null;
    }
    for(let i=0; i<this.table[index].length; i++){
      if(this.table[index] === key){
        const value = this.table[index][i][1];
        this.table[index].splice(i, 1);
        if(this.table[index].length === 0){
          delete this.table[index];
        }
        this.numItems--;
        return value;
      }
    }
    return null;
  }
}

const myTable = new HashMap()
//use of GET, SET and REMOVE functions 
myTable.put('firstName','Global');
myTable.put('lastName','Trends');
myTable.get('firstName')
console.log(myTable.get('firstName'))
console.log(myTable.get('lastName'))
console.log("Removed last name " + myTable.remove('lastName'))
//displaying null as value has been deleted
