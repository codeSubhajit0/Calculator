"use strict";

const textContent = document.querySelector(".displayContent");
const equalBtn = document.querySelector("#equal");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", function (e) {
  // if(e.target);
  if (e.target.classList.contains("button")) {
    textContent.textContent += e.target.textContent;
    console.log(e.target.value);
  }
  else if(e.target.classList.contains('allClear')) {
    if(textContent.textContent == "") return;
    textContent.textContent = "";
  }
  else if (e.target.classList.contains('clear')){
    if(textContent.textContent == '') return;
    console.log(textContent.textContent = textContent.textContent.slice(0,-1));
  }
  else if (e.target.classList.contains('operation')){
    if(e.target.textContent == "+"){
      console.log(e.target.textContent);
    }
    if(e.target.textContent == "x"){
      console.log(e.target.textContent);
    }
    if(e.target.textContent == "-"){
      console.log(e.target.textContent);
    }
    if(e.target.textContent == "%"){
      console.log(e.target.textContent);
    }
  }
});

equalBtn.addEventListener("click", function () {
  console.log(textContent.textContent);
});
