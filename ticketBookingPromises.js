let destination = prompt("Where do you want to go?");
let time = prompt("When you wanted to go?");
let seatsRequired = Number(prompt("How many seats you want to book"));

function checkAvailability(seatsRequired) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let seatAvailable = 40;
      seatsRemaining = seatAvailable - seatsRequired;
      if (seatsRequired > seatAvailable) {
        reject("Seat not available");
      } else {
        resolve("Seat Available remaining: ", seatsRemaining);
      }
    }, 3000);
  });
}
function processPayment(fare) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let farePerSeat = 1000;
      setInterval;
      let fare = Number(prompt("Enter the fare"));
      if (fare < farePerSeat * seatsRequired) {
        reject("Not enough money Payment Process Failed");
      } else {
        resolve("Payment Process Successful");
      }
    }, 3000);
  });
}
function confirmBooking(destination, time, seatsRequired) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "Booking confirmed for ",
        destination,
        " at ",
        time,
        " with a total seats of ",
        seatsRequired
      );
    }, 100);
  });
}

function bookTickets(destination, time, seatsRequired, fare) {
  return checkAvailability(seatsRequired)
    .then(processPayment)
    .then(confirmBooking)
    .catch(result);
}

function cancelTicket(destination) {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Timeout your ticket to", destination, " has been cancelled");
    }, 3000);
  });
}

Promise.race([bookTickets, cancelTicket]).then("Successful").catch("Failed");
