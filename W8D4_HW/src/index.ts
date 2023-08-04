import { Item } from "./Item";
import { Shop } from "./Shop";
import { User } from "./User";


const itemA = new Item('Steel Cut Oats', 3.67, "20oz.");
const itemB = new Item('Sharp Cheddar', 3.20, "not even wensleydale?");
const itemC = new Item('birch beer', 1, "Muy Delicioso!");
const itemD = new Item("Nukie (1987)", 80600, "Frauds")

const shop = new Shop("Spinj's Shop", itemA, itemB, itemC);
shop.addItem(itemD);
shop.addItem(itemD);
shop.printItems();
shop.deleteItem(itemB);
shop.printItems();

const user = new User('pinj', 22);

user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[2])
user.addToCart(shop.items[0])
user.addToCart(shop.items[0])
user.addToCart(shop.items[1])
user.addToCart(shop.items[1])
user.printCart();

user.removeFromCart(itemD);
user.printCart();

user.removeQuantityFromCart(itemC, 1);
user.printCart();

user.addToCart

















/* 
const user = createUser('pinj', 22);
const itemA = createItem('Steel Cut Oats', 3.67, "20oz.");
const itemB = createItem('Sharp Cheddar', 3.20, "not even wensleydale?");
const itemC = createItem('birch beer', 1, "Muy Delicioso!");

addToCart(itemA, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

addToCart(itemB, user);
addToCart(itemB, user);
addToCart(itemB, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

addToCart(itemC, user);
addToCart(itemC, user);
addToCart(itemC, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

removeFromCart(itemB, user);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

removeQuantityFromCart(itemC, user, 2);
printCart(user);
console.log(`TOTAL:${' '.repeat(24)} $${cartTotal(user)} `);

 */