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

  const day = Math.floor(remainingTime / 3600 / 24);
  const hour = Math.floor((remainingTime / 3600) % 24);
  const min = Math.floor((remainingTime / 60) % 60);
  const second = Math.floor(remainingTime % 60);

  days.textContent = formatTime(day);
  hours.textContent = formatTime(hour);
  mins.textContent = formatTime(min);
  seconds.textContent = formatTime(second);
};

const formatTime = (time) => (time < 10 ? `0${time}` : time);

countdown();

setInterval(countdown, 1000);
