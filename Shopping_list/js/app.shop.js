import Prod from './prodClass.js'
import { shop_list } from './shop_ar.js';

const init = () => {
    // doApi();
    declareBtns();
    window.addEventListener('resize', handleResize);
    createAllProducts(shop_list)
}


// const doApi = async () => {
//     let url = `http://fs1.co.il/bus/shop.php`;
//     try {
//         let resp = await axios.get(url);
//         console.log(resp.data);
//         createAllProducts(resp.data);
//     }
//     catch (error) {
//         console.log(error, "Error getting")
//     }
// }

const createAllProducts = (_ar) => {
    _ar.forEach((item)=>{
        let prod = new Prod("#id_row", item)
        prod.render();
    })
}

const declareBtns=()=> {
    let burger_btn = document.querySelector("#id_burger");
    let nav_open = document.querySelector(".navbar-nav");
    burger_btn.addEventListener("click", function () {
  
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