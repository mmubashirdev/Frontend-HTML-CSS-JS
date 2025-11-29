// let seatreq = prompt("How much seats needed")

// function checkAvailability(seatreq){
//   let seatAvailability = 40
//   let seatRemaining = seatAvailability - seatreq
//   return new Promise((resolve, reject) => {

//     setTimeout(()=>{
//       if(seatreq > 40){
//         reject("Seat not available")
//       }else{
//         resolve("Seat Available")
//       }
//     },1000)
//   })
// }

// checkAvailability(seatreq)
// .then((msg)=>{
//   console.log(msg)
// })
// .catch((err)=>{
//   console.log(err)
// })
let fare = prompt("Enter fare")
function payment(amount){
  let ticketPrice = 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random()<0.8){
        if(ticketPrice == amount)
        resolve("Payment Success")
      }else if(ticketPrice < amount){
        reject("Payment failed not enough cash")
      }
    }, 1000);
  })
}
payment(fare)
.then((res)=>{
  console.log(res)
})
.catch((err)=>{
  console.log(err)
})
.finally("DOne")
