function formatValue(value: string | number | boolean
) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  else if (typeof value === "number") {
    return value * 10;
  }
  else if (typeof value === "boolean") {
    return !value
  }
}

function getLength(item: string | any[]) {
  if (typeof item === "string") {
    return item.length;
  }
  else if (Array.isArray(item)) {
    return item.length;
  }
}


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


function filterByRating(books: { title: string, rating: number }[]) {
  return books.filter(book => {
    if (book.rating < 0 || book.rating > 5) {
      console.warn(`Invalid rating detected for "${book.title}": ${book.rating}`);
      return false;
    }

    return book.rating >= 4;
  });
}

function filterActiveUsers(users: { id: number, name: string, email: string, isActive: boolean }[]) {
  return users.filter((user) => user.isActive)
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  return (`Title: ${book.title}, Author: ${book.author}, Published:${book.publishedYear}, Available: ${book.isAvailable}`)
}


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]) {
  const result: (string | number)[] = [];

  function existsInResult(value: string | number) {
    {
      for (let i = 0; i < result.length; i++) {
        if (result[i] === value) {
          return true;
        }
      }
      return false;
    }


  }

  for (let i = 0; i < arr1.length; i++) {
    if (!existsInResult(arr1[i])) {
      result[result.length] = arr1[i]
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!existsInResult(arr2[i])) {
      result[result.length] = arr2[i]
    }
  }
  return result;
}


function calculateTotalPrice(products: { name: string, price: number, quantity: number, discount?: number }[]) {
  return products.reduce((total, product) => {
    const discountAmount =
      product.discount !== undefined ? (product.price * product.discount) / 100 : 0;

    const finalPrice = product.price - discountAmount;
    return total + finalPrice * product.quantity;
  }, 0);
}
