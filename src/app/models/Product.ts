export class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    url?: string

    constructor() {
        this.id = 1;
        this.name = '';
        this.price = 0;
        this.quantity = 0;
        this.description = '';
    }
}

