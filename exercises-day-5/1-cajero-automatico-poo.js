class User {
    constructor(name, username, password, id) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.id = id;
    }

    validateCredentials(username, password) {
        if(username !== this.username) {
            throw "Invalid credentials, incorrect username";
        }

        if(password !== this.password) {
            throw "Invalid credentials, incorrect password";
        }

        return true;
    }

};

class BankAccount {
    constructor (balance, user) {
        this.user = user;
        this.initialBalance = balance;
        this.balance = balance;
        this.movements = [];
    }

    get initialBalance() {
        return this.initialBalance;
    }

    get balance() {
        return this.balance;
    }

    get movements() {
        return this.movements;
    }

    addMovement(movementInfo) {
        return this.movements.push(movementInfo);
    }

    set addBalance(adition) {
        const oldBalance = this.balance;
        const result = adition > 0 ? this.balance += adition : this.balance;
        this.addMovement({"type": "⬆ adition", "status": result == oldBalance ? "Invalid" : "Succesful", "value": adition, "newBalance": result})
        return result;
    }

    set removeBalance(subtraction) {
        const oldBalance = this.balance;
        const result = this.balance - subtraction > 0 ? this.balance -= subtraction : this.balance;
        this.addMovement({"type": "⬇ subtraction", "status": result == oldBalance ? "Invalid" : "Succesful", "value": subtraction, "newBalance": result})
        return result;
    }
}


const amappola = new User("Ana María Porras Pinto", "amappola7", "marip0sas3scapar", "1002696327");
const bancolombia = new BankAccount(1000000, amappola);

// Looking for the balance
// console.log(`Initial balance: $${bancolombia.balance}`);

// Adding balance
bancolombia.addBalance = 200000;
// console.log(`New balance: $${bancolombia.balance}`);
// Adding negative balance
bancolombia.addBalance = -100000;
// console.log(`New balance: $${bancolombia.balance}`);


// Removing balance
bancolombia.removeBalance = 500000;
// console.log(`New balance: $${bancolombia.balance}`);
// Removing insufficient balance
bancolombia.removeBalance = 5000000;
// console.log(`New balance: $${bancolombia.balance}`);

// Getting movements
console.log(`Initial Balance: ${bancolombia.initialBalance}\n`);
bancolombia.movements.forEach((movement, index) => {
    console.log(`Movement: ${index+1}\nStatus: ${movement.status}\nType: ${movement.type}\nValue: ${movement.value}\nNew Balance: ${movement.newBalance}\n`)
})