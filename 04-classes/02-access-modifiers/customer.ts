class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirstName: string, theLastName: string) {
        this._firstName = theFirstName;
        this._lastName = theLastName;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer = new Customer("Yuvraj", "Singh");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);