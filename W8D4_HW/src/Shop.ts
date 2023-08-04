import { v4 } from "uuid";
import { Item } from "./Item";


class Shop{
    readonly id: string;
    private shopName: string;
    items: Item[];
    
    constructor(name: string, item1: Item, item2: Item, item3: Item) {
        this.id = v4();
        this.shopName = name;
        this.items = [];
        this.addItem(item1);
        this.addItem(item2);
        this.addItem(item3);
    }
    
    get name(): string {
        return this.shopName;
    }
    set name(value: string) {
        this.shopName = value;
    }

    addItem(item: Item): void {
        const filter: boolean = this.items.every((i) => { 
            return i.id !== item.id;
        });
        if(filter){
            this.items.push(item);
            console.log(`${item.name} has been added to ${this.name}`);
        } else {
            console.log(`${item.name} already in ${this.name}`);
        }
    }

    deleteItem(item: Item): void {
        this.items = this.items.filter((i: Item) => i.id !== item.id);
        console.log(`${item.name} has been removed from ${this.name}`);
    }

    printItems():void {
        console.log('');
        console.log(' '.repeat(20) + `${this.name}'s Inventory`);
        for(let item of this.items){
            let amount = `$${(Math.round(item.price * 100) / 100).toFixed(2)}`;
            console.log(`${item.name}:${' '.repeat(29 - item.name.length)} ${amount}${' '.repeat(15 - amount.length)}"${item.description}"`);
        }
    }
    
}

export {
    Shop
}