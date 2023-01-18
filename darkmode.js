let darkmode = document.querySelector(".switch");
let body = document.querySelector("body");
let titleLabels =  [...document.querySelectorAll("h1")];
let dataBox = [...document.querySelectorAll(".container__data")];
let statsBox = [...document.querySelectorAll(".stats__box")];
let pLabels =  [...document.querySelectorAll("p")]

darkmode.addEventListener("click", (event)=> {

  if (event.target.nodeName == "LABEL" || event.target.nodeName == "SPAN" ) {

    body.classList.toggle("dark");
    
  }
})