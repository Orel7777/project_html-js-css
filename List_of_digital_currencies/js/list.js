import Crypto from "./crypto_class.js";

const init =()=>{
  declareBtns();
  handleResize();
  window.addEventListener('resize', handleResize);
  doApi();
}


const doApi = async ()=>{
  let url = `http://fs1.co.il/bus/bitcoin.php`;
  document.querySelector("#id_parent").innerHTML = `<h1 style="color:red">Loading...</h1>`;
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data)
  createCoins(data)
}

const createCoins = (_ar)=>{
  document.querySelector("#id_parent").innerHTML = "";
  
  _ar.forEach(item=> {
    let coin = new Crypto("#id_parent",item)
    coin.render()
  })
}


const declareBtns = () => {
    let burger_btn = document.querySelector("#id_burger");
    let nav_open = document.querySelector(".navbar-nav");
    burger_btn.addEventListener("click", function () {
      nav_open.style.display = (nav_open.style.display != "flex") ? "flex" : "none";
    });
  }
  
const handleResize = () => {
    let nav_open = document.querySelector(".navbar-nav");
    if (window.innerWidth > 991) {
      nav_open.style.display = "flex";
    } else {
      nav_open.style.display = "none";
    }
  }

init()