const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const Hands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; /* 90° - 444° */

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90 + (secondsDegrees - 90) / 59; /* 90° (+0°) - 444° (+6°) */

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90 + (minutesDegrees - 90) / 12; /* 90° (+0°) - 780° (+30°) */

  Hands.forEach(function() {
    if (secondsDegrees === 90) {
      Hands[2].style.transition = "none";
      Hands[2].style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } else {
      Hands[2].style.transition = "all 0.05s";
      Hands[2].style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } 

    if (minutesDegrees === 90) {
      Hands[1].style.transition = "none";
      Hands[1].style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } else {
      Hands[1].style.transition = "all 0.05s";
      Hands[1].style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } 

    if (hoursDegrees === 90) {
      Hands[0].style.transition = "none";
      Hands[0].style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } else {
      Hands[0].style.transition = "all 0.05s";
      Hands[0].style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)";
    } 
  });

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);