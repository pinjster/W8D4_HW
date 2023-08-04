import { v4 } from "uuid"

class Item{
    readonly id: string
    private itemName: string
    private itemPrice: number
    private itemDescription: string

    constructor(
        name: string,
        price: number,
        description: string
    ){
        this.id = v4();
        this.itemName = name;
        this.itemPrice = price;
        this.itemDescription = description;
    }

    get name(): string {
        return this.itemName
    }
    set name(value: string) {
        this.itemName = value
    }

    get price(): number {
        return this.itemPrice
    }
    set price(value: number) {
        this.itemPrice = value
    }

    get description(): string {
        return this.itemDescription
    }
    set description(value: string) {
        this.itemDescription = value
    }

}

export {
    Item
}
