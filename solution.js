function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return !value;
    }
}
function getLength(item) {
    if (typeof item === "string") {
        return item.length;
    }
    else if (Array.isArray(item)) {
        return item.length;
    }
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
function filterByRating(books) {
    return books.filter(function (book) {
        if (book.rating < 0 || book.rating > 5) {
            return false;
        }
        return book.rating >= 4;
    });
}
var books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
console.log(filterByRating(books));
function filterActiveUsers(users) {
    return users.filter(function (user) { return user.isActive; });
}
function printBookDetails(book) {
    return ("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published:").concat(book.publishedYear, ", Available: ").concat(book.isAvailable));
}
function getUniqueValues(arr1, arr2) {
    var result = [];
    function existsInResult(value) {
        {
            for (var i = 0; i < result.length; i++) {
                if (result[i] === value) {
                    return true;
                }
            }
            return false;
        }
    }
    for (var i = 0; i < arr1.length; i++) {
        if (!existsInResult(arr1[i])) {
            result[result.length] = arr1[i];
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        if (!existsInResult(arr2[i])) {
            result[result.length] = arr2[i];
        }
    }
    return result;
}
function calculateTotalPrice(products) {
    return products.reduce(function (total, product) {
        var discountAmount = product.discount !== undefined ? (product.price * product.discount) / 100 : 0;
        var finalPrice = product.price - discountAmount;
        return total + finalPrice * product.quantity;
    }, 0);
}
