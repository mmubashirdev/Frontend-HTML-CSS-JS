let destination = prompt("Where do you want to travel");
let totalNumberOfTravellers = Number(prompt(`How many total number of travellers are you going to ${destination}`));
let travelBudget = Number(prompt("What is you total budget for this trip $"));

function gatherTripInfo(city, travellers, budget, func) {
  let tripInfo = {
    cityName:city,
    NoOfTravellers:travellers,
    totalBudget:budget
  };
  func(tripInfo);
}

function displayItinerary(info) {
  alert(`Great you’re heading to ${info.cityName}  with ${info.NoOfTravellers} travellers and a budget of $${info.totalBudget} Let's get packed!`
  );
}

function budgetCheck(info) {
  if (travelBudget < 1000 * info.NoOfTravellers) {
    alert(`Hmm, with $${(info.totalBudget) / (info.NoOfTravellers)} per traveller you’ll need to watch costs. Consider cheaper options.`
    );
  } else {
    alert(`Budget looks good you’ll travel comfortably!`);
  }
}
gatherTripInfo(destination, totalNumberOfTravellers, travelBudget, budgetCheck);
gatherTripInfo(destination,totalNumberOfTravellers,travelBudget,displayItinerary);
