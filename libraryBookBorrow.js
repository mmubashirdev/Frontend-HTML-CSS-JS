let book = prompt("Which book do you want to borrow?");
let personName = prompt("Enter your name");
let returnDate = prompt("When will you return the book");

function borrowBook(book, personName, returnDate) {
  return new Promise((resolve, reject) => {
    let borrowInfo = {
      bookName: book,
      borrowerName: personName,
      date: returnDate,
    };
    resolve(
      `Book with title ${book} is issued to ${personName} please return it after ${returnDate} days`
    );
  });
}

function checkBookAvailability(book) {
  let isBookAvailable = true;
  return new Promise((resolve, reject) => {
    if (isBookAvailable == true) {
      resolve(`This book is available`);
      isBookAvailable = false;
    } else {
      reject(`Sorry book with book title ${book} is not available`);
    }
  });
}
checkBookAvailability(book)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

function checkBookStatus(bookInfo) {
  let isBookAvailable = true;
  return new Promise((resolve, reject) => {
    if (isBookAvailable == false) {
      reject(
        `Sorry this book with title ${bookInfo.personName}is taken by ${bookInfo.borrowerName}`
      );
    } else {
      resolve(`This book is available`);
    }
  });
}

checkBookStatus(book, personName)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

function updateBookStatus(bookInfo) {
  let isbookReturned = false;
  return new Promise((resolve, reject) => {
    if (isbookReturned == true) {
      resolve(`This book is now available in the libarary now`);
    } else {
      reject(`This book is still with ${bookInfo.borrowerName}`);
    }
  });
}
updateBookStatus(bookInfo)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

function cancellation(borrowBook) {
  return new Promise((resolve, reject) => {
    if (!borrowBook) {
      reject(
        `Your borrow request has been cancelled plz return the book to the librarian`
      );
    } else {
      resolve(`Booking success`);
    }
  });
}
cancellation(bookInfo)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
