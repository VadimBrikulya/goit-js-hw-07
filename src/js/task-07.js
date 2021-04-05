
"use strict";

const inputEl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

function handleChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', handleChange);