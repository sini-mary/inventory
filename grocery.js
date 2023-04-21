//Create an array containing the names of all items in the inventory.
items=["mushrooms","apples","eggs","oranges","bananas"];
//Create a separate array with the corresponding stock quantities of each item.

quantity=[20,100,180,65,30];
 newObject= Object.assign(...items.map((k, i)=>({[k]: quantity[i]}) ))
    console.log(newObject); 
//Write a function to add a new item to the 
//inventory, updating both arrays.
function update(items,quantity){
    let add= newObject.indexOf(items);
    if (add!== -1){
        newObject[add]=quantity
        console.log(`${items},${quantity}`);
       }

    
}
update("onions",55);
//Write a function to calculate the total 
//number of items in the inventory.

function countItems(){
    sum=0;
    for(let i=0;i<=newObject.length;i++ ){
   sum+=newObject[i];
 
    }
    return sum;
}
console.log(countItems());




//Write a function to find the item with the lowest stock quantity.
function Lowest() {
    let lowest = newObject[0];
    for (let i = 1; i < newObject.length-1; i++) {
      if (newObject[i].quantity < lowest.quantity) {
        lowest = newObject[i];
      }
    }
    return lowest.quantity;
  }
  lowest();


