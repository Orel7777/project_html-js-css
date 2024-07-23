import { doApi } from "./jokesInfo.js";
import {declareEvent} from "./jokesForm.js"
import {checkQuaryS} from "./jokesInfo.js"

const init = () => {
  // doApi("truck");
  declareEvent();
  checkQuaryS();
  declareBtns();
  window.addEventListener('resize', handleResize);
}


const declareBtns=()=> {
  let burger_btn = document.querySelector("#id_burger");
  let nav_open = document.querySelector(".navbar-nav");
  burger_btn.addEventListener("click", function () {

    (nav_open.style.display != "flex") ? nav_open.style.display = "flex" : nav_open.style.display = "none";
  })
}


const handleResize = ()=> {
  let nav_open = document.querySelector(".navbar-nav");
  if (window.innerWidth > 991) {
      nav_open.style.display = "flex";
  } else {
      nav_open.style.display = "none";
  }
}


init();

