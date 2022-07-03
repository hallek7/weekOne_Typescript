class Grocery {
constructor(
public name: string,
public quantity: number,
public price: number,
)
{
}
}
function createGroceries(groceryList) {
let myGroceryList = 'My grocery list:';
for(let item of groceryList){
   myGroceryList = myGroceryList + '\n' +
   " Item: " + item.name +  '\n' +
   " Price " + item.price +  '\n' +
   " Quantity " + item.quantity;
}
return myGroceryList;
}

const groceryList = [];
let banana = new Grocery("banana",3,0.35);
let bread = new Grocery("bread",5,2.25);
let eggs = new Grocery("eggs",30,0.99);
let milk = new Grocery("milk",4,1.79);
let cheese = new Grocery("cheese",1,3.50);

groceryList.push(banana);
groceryList.push(bread);
groceryList.push(eggs);
groceryList.push(milk);
groceryList.push(cheese);

document.body.textContent  = createGroceries(groceryList);

