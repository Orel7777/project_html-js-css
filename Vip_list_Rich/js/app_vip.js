import VipClass from "./vipClass.js";
import { rich_people } from "./list_rich.js";

const init = () => {
    // doApi();
    createAllVip(rich_people)
    declareBtns();
    window.addEventListener('resize', handleResize);
}

// const doApi = async () => {
//     let url = `https://fs1.co.il/bus/vip.php`;
//     let resp = await axios.get(url);
//     // console.log(resp.data)
//     createAllVip(resp.data);
// }

const createAllVip = (_ar) => {
    _ar.forEach(item => {
        console.log(item);
        let vip = new VipClass(".row", item);
        vip.render();
    });

  
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
