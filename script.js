//If this looks similar to Tyler and Max's that is because they helped me, I did not copy them!

//This declares how much the bill is, the amount of diners there are, and what the quality of service is.
let billAmount = 200;
let numOfDiners = 5;
let qualityOfService = 'Great';
let tip;

//This function makes it so that if the service was great the percentage of tip is 20% or 15% if the service is good, and so on.
function calcTip() {
  if (qualityOfService === 'Great') {
    tip = .20;
  }
  else if (qualityOfService === 'Good') {
    tip = .15;
  }
  else if (qualityOfService === 'Terrible') {
    tip = .10;
  }
}

//This calculates what the Total Tip, the Tip Per Person, and the Total Bill is.
calcTip();
let totalTip = billAmount * tip;
let tipPerPerson = totalTip / numOfDiners;
let totalBill = billAmount + totalTip;



//This logs everything (Total Tip, the Tip Per Person, and the Total Bill) to the Console.
console.log('The total tip is $' + totalTip);
console.log('The total tip per person is $' + tipPerPerson);
console.log('The total bill is $' + totalBill);