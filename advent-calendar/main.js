"use strict";
const calendarButton = document.getElementById("btn-start");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (path, event) => {
  if (event.target.style.opacity == "0") {
    event.target.parentNode.style.opacity = "0"; 
    event.target.style.opacity = "1";
    event.target.style.backgroundColor = "0";
  } else {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.parentNode.style.opacity = "1"; 
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#111142";    
  }
}

const createCalendar = () => {
  while (calendarContainer.firstChild) {
    console.log(calendarContainer);
    calendarContainer.removeChild(calendarContainer.firstChild);
  }

  for (let i = 0; i < calendarDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = `door${i + 1}`;
    calendarContainer.appendChild(calendarDoor);
    
    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    let imageNumber = i + 1;
    let imagePath = `./images/xmas-${imageNumber}.svg`;

    calendarDoorText.addEventListener("click", openDoor.bind(null, imagePath));
  }
}

calendarButton.addEventListener("click", createCalendar);