import { v4 } from "uuid";
import { Item } from "./Item";

class User {
    readonly id: string;
    private userAge: number;
    private userCart: Item[];
    private userName: string;

    constructor(
        name: string,
        age: number,
    ){
        this.id = v4();
        this.userName = name;
        this.userAge = age;
        this.userCart = [];
    }

    get name(): string {
        return this.userName;
    }
    set name(value: string) {
        this.userName = value;
    }
    get age(): number {
        return this.userAge;
    }
    set age(value: number) {
        this.userAge = value;
    }
    get cart(): Item[] {
        return this.userCart;
    }
    set cart(value: Item[]) {
        this.userCart = value;
    }

    addToCart(item: Item): void {
        this.userCart.push(item);
        console.log(`${item.name} added to ${this.name}'s cart`);
    }

    removeFromCart(item: Item):void {
        this.userCart = this.userCart.filter((i: Item) => i.id !== item.id);
        console.log(`All instances of ${item.name} have been removed from ${this.name}'s cart`);
    }

    removeQuantityFromCart(item: Item, amount: number):void {
        let i: number = 0;
        for(i; i < amount; i++){
            let f:number = this.userCart.findIndex((x: Item) => x.id === item.id);
            if(f === -1){
                break;
            } else {
                this.userCart.splice(f, 1);
            }
        }
        console.log(`${i} instances of ${item.name} have been removed from ${this.name}'s cart`);
    }

    cartTotal():number {
        let total = 0;
        for(let item of this.userCart){
            total += item.price;
        }
        return total;
    }

    printCart():void {
        console.log('');
        console.log(' '.repeat(20) + `${this.name}'s Cart`);
        for(let item of this.cart){
            let amount = `$${(Math.round(item.price * 100) / 100).toFixed(2)}`;
            console.log(`${item.name}:${' '.repeat(29 - item.name.length)} ${amount}${' '.repeat(15 - amount.length)}"${item.description}"`);
        }
    }
}

export {
    User
}