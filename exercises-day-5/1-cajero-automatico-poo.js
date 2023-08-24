class ATM {
    constructor (balance) {
        this.initialBalance = balance;
        this.balance = balance;
        this.movements = [];
    }

    get getBalance() {
        return this.balance;
    }

    get getMovements() {
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

const bancolombia = new ATM(1000000);

// Looking for the balance
// console.log(`Initial balance: $${bancolombia.getBalance}`);

// Adding balance
bancolombia.addBalance = 200000;
// console.log(`New balance: $${bancolombia.getBalance}`);
// Adding negative balance
bancolombia.addBalance = -100000;
// console.log(`New balance: $${bancolombia.getBalance}`);


// Removing balance
bancolombia.removeBalance = 500000;
// console.log(`New balance: $${bancolombia.getBalance}`);
// Removing insufficient balance
bancolombia.removeBalance = 5000000;
// console.log(`New balance: $${bancolombia.getBalance}`);

// Getting movements
console.log(`Initial Balance: ${bancolombia.initialBalance}\n`);
bancolombia.movements.forEach((movement, index) => {
    console.log(`Movement: ${index+1}\nStatus: ${movement.status}\nType: ${movement.type}\nValue: ${movement.value}\nNew Balance: ${movement.newBalance}\n`)
})