var TAX_RATE = 0.07;
var TIP_RATE = 0.20;

var menu = [
    { sku: 0, name: "Cheeseburger", price: 9.95},
    { sku: 1, name: "Lobster Roll", price: 12.95},
    { sku: 2, name: "Vegan Thing", price: 10.95},
    { sku: 3, name: "Waffle Fries", price: 5.95},
    { sku: 4, name: "Side Salad", price: 4.95}
];

var Diner = function(name, items) {
    this.name = name;
    this.items = items;
    this.displayItems = function() {
        this.items.forEach(function(item) {
            console.log("Item: " + item.name + ", " + "Price: $" + item.price);
        })
    };
    this.calcItems = function() {
        var total = 0;
        this.items.forEach(function(item) {
            total += item.price;
        })
        return total;
    };
    this.calcTax = function() {
        var tax = this.calcItems() * TAX_RATE;
        return tax;
    };
    this.calcTip = function() {
        var tip = this.calcItems() * TIP_RATE;
        return tip;
    }
}

Diner.prototype.displayInfo = function() {
    console.log(this.name);
    console.log(this.displayItems());
    console.log("Total: $" + this.calcItems().toFixed(2));
    console.log("Tax: $" + this.calcTax().toFixed(2));
    console.log("Suggested Tip: $" + this.calcTip().toFixed(2));
}

var Bill = function(diners) {
    this.diners = diners;
    this.calcTotal = function() {
        var total = 0;
        this.diners.forEach(function(diner) {
            diner.items.forEach(function(item) {
                total += item.price;
            })
        })
        return total;
    };
    this.calcTax = function() {
        return this.calcTotal() * TAX_RATE;
    }
    this.calcTip = function() {
        return this.calcTotal() * TIP_RATE;
    }
    this.calcGrandTotal = function() {
        return this.calcTotal() + this.calcTip();
    }
}

Bill.prototype.displayInfo = function() {
    this.diners.forEach(function(diner) {
        diner.displayInfo();
        console.log("----------------------------------");
    })
    console.log("Ticket Total: $" + this.calcTotal().toFixed(2));
    console.log("Ticket Tax: $" + this.calcTax().toFixed(2));
    console.log("Grand Total: $" + this.calcGrandTotal().toFixed(2));
    console.log("Suggested Total Tip: $" + this.calcTip().toFixed(2));
}

var Matt = new Diner("Matt Bliffert", [menu[0], menu[3]]);
var Joe = new Diner("Joe Biden", [menu[1], menu[4]]);
var Gary = new Diner("Gary Busey", [menu[2], menu[3]]);

var dummyTicket = new Bill([Matt, Joe, Gary]);

dummyTicket.displayInfo();