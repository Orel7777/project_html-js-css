import { declareEvents } from './tvFrom.js';
import {doApi} from './tvList.js'
import {declareLightBox} from './lightBox.js'

const init = () => {
    doApi("lego");
    declareEvents();
    declareLightBox();
    declareBtns();
    window.addEventListener('resize', handleResize);
}

const declareBtns=()=> {
  let burger_btn = document.querySelector("#id_burger");
  let nav_open = document.querySelector(".navbar-nav");
  burger_btn.addEventListener("click",  ()=> {

    (nav_open.style.display != "flex") ? nav_open.style.display = "flex" : nav_open.style.display = "none";
  })
}


const handleResize=()=> {
  let nav_open = document.querySelector(".navbar-nav");
  if (window.innerWidth > 991) {
      nav_open.style.display = "flex";
  } else {
      nav_open.style.display = "none";
  }
}
  

init();