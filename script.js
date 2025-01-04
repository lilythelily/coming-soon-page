"use strict";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const small = document.querySelector("small");
const fb = document.querySelector(".fb");
const ig = document.querySelector(".ig");
const twitter = document.querySelector(".twitter");

function validation(email) {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  return regex.test(email);
}

function showError() {
  input.style.borderColor = "hsl(354, 100%, 66%)";
  small.style.display = "block";
}

function success() {
  input.style.borderColor = "limegreen";
  small.style.display = "none";
}

btn.addEventListener("click", (e) => {
  validation(input.value) ? success() : showError();
});

fb.addEventListener("mouseenter", (e) => {
  fb.src = "images/fb-icon.svg" ? (fb.src = "images/fb.svg") : "";
});

fb.addEventListener("mouseleave", (e) => {
  fb.src = "images/fb-icon.svg";
});

ig.addEventListener("mouseenter", (e) => {
  ig.src = "images/ig-icon.svg" ? (ig.src = "images/ig.svg") : "";
});

ig.addEventListener("mouseleave", (e) => {
  ig.src = "images/ig-icon.svg";
});

twitter.addEventListener("mouseenter", (e) => {
  twitter.src = "images/twitter-icon.svg"
    ? (twitter.src = "images/twitter.svg")
    : "";
});

twitter.addEventListener("mouseleave", (e) => {
  twitter.src = "images/twitter-icon.svg";
});
