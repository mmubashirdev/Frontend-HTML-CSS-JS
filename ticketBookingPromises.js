let destination = prompt("Where do you want to go?");
let time = prompt("When you wanted to go?");
let seatsRequired = Number(prompt("How many seats you want to book"));
let farePerSeat = 1000;

function checkAvailability(seatsRequired) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let seatAvailable = 40;
      let seatsRemaining = seatAvailable - seatsRequired;
      if (seatsRequired > seatAvailable) {
        reject("Seat not available");
      } else {
        resolve(seatsRemaining);
      }
    }, 1000);
  });
}
function processPayment(amount) {
  return new Promise((resolve, reject) => {
    let farePerSeat = 1000;
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject("Not enough money Payment Process Failed");
      } else {
        resolve(`Payment of $${amount} Successful`);
      }
    }, 1000);
  });
}
function confirmBooking(destination, time, seatsRequired) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        `Booking confirmed for ${destination} at ${time} with a total seats of ${seatsRequired}`
      );
    }, 500);
  });
}

function bookTickets(destination, farePerSeat, time, seatsRequired) {
  let totalFare = farePerSeat * seatsRequired;
  return checkAvailability(seatsRequired)
    .then(() => processPayment(totalFare))
    .then(() => confirmBooking(destination, time, seatsRequired));
}

function cancelTicket(destination) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Timeout your ticket to ${destination} has been cancelled`);
    }, 0);
  });
}

Promise.race([
  bookTickets(destination, farePerSeat, time, seatsRequired),
  cancelTicket(destination),
])
  .then((res) => console.log("Successful:", res))
  .catch((err) => console.log("Failed: ", err));
