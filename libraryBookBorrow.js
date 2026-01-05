let book = prompt("Which book do you want to borrow?");
let personName = prompt("Enter your name:");
let returnDate = prompt("When will you return the book?");

function borrowBook(book, personName, returnDate) {
  return new Promise((resolve, reject) => {
    resolve(
      `Book with title '${book}' is issued to ${personName}. Please return it after ${returnDate} days.`
    );
  });
}

let isBookAvailable = true;

function checkBookAvailability(book) {
  return new Promise((resolve, reject) => {
    if (isBookAvailable) {
      resolve(`The book '${book}' is available.`);
      isBookAvailable = false;
    } else {
      reject(`Sorry, the book '${book}' is not available.`);
    }
  });
}

function cancellation(borrowed) {
  return new Promise((resolve, reject) => {
    let cancel = prompt("Do you want to confirmed borrow request?");
    if (cancel == "yes") {
      return resolve("Borrow request confirmed");
    }
      reject("Borrow request cancelled.");
  });
}
function checkBookStatus(bookName, borrowerName) {
  return new Promise((resolve, reject) => {
    if (!isBookAvailable) {
      reject(
        `Sorry, the book '${bookName}' is currently taken by ${borrowerName}.`
      );
    } else {
      resolve(`This book is available.`);
    }
  });
}

function updateBookStatus(bookName, borrowerName) {
  let isBookReturned = false;

  return new Promise((resolve, reject) => {
    if (isBookReturned) {
      isBookAvailable = true;
      resolve(`The book '${bookName}' is now available in the library.`);
    } else {
      reject(`The book '${bookName}' is still with ${borrowerName}.`);
    }
  });
}


checkBookAvailability(book)
  .then((msg) => {
    console.log(msg);
    return borrowBook(book, personName, returnDate);

  })
  .then((borrowMsg) => {
    console.log(borrowMsg);
    return cancellation(borrowMsg);
  })
  .catch((err) => {
    console.log(err);
  });
