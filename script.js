"use strict";

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const christmas = "25 Dec 2022";
console.log(new Date(christmas));

const countdown = function () {
  const christmasDate = new Date(christmas);
  const currentDate = new Date();

  const remainingTime = Math.floor((christmasDate - currentDate) / 1000);
  // console.log(remainingTime);

  const day = Math.floor(remainingTime / 3600 / 24);
  const hour = Math.floor((remainingTime / 3600) % 24);
  const min = Math.floor((((remainingTime / 3600) % 24) * 60) % 60);
  const second = Math.floor((((remainingTime / 3600) % 24) * 3600) % 60);

  days.textContent = day;
  hours.textContent = hour;
  mins.textContent = min;
  seconds.textContent = second;
};

countdown();

setInterval(countdown, 1000);
