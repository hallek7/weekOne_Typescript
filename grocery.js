var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
function createGroceries(groceryList) {
    var myGroceryList = 'My grocery list:';
    for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
        var item = groceryList_1[_i];
        myGroceryList = myGroceryList + '\n' +
            " Item: " + item.name + '\n' +
            " Price " + item.price + '\n' +
            " Quantity " + item.quantity;
    }
    return myGroceryList;
}
var groceryList = [];
var banana = new Grocery("banana", 3, 0.35);
var bread = new Grocery("bread", 5, 2.25);
var eggs = new Grocery("eggs", 30, 0.99);
var milk = new Grocery("milk", 4, 1.79);
var cheese = new Grocery("cheese", 1, 3.50);
groceryList.push(banana);
groceryList.push(bread);
groceryList.push(eggs);
groceryList.push(milk);
groceryList.push(cheese);
document.body.textContent = createGroceries(groceryList);
