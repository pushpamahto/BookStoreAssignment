// Author constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}


Book.prototype.getBookInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log('-------------------------');
};

let author1 = new Author('Pushpa', 1999, 'Indian');
let author2 = new Author('Lily', 2000, 'American');
let author3 = new Author('Anjali', 2002, 'Chinese');


let book1 = new Book("Atomic Habits", author1, "Self-Help", 20.00);
let book2 = new Book("The Mind", author2, "Fiction", 15.50);
let book3 = new Book("Believe in yourself", author3, "Fiction", 18.00);


book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
