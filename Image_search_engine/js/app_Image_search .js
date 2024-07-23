import Pic from "./pixaClass.js";

const init = () => {
  declareBtns();
  declarEvents();
  doApi("dogs");
  window.addEventListener('resize', handleResize);
}


const declarEvents= () =>{
  let search_btn = document.querySelector("#btn_search");
  search_btn.addEventListener("click",()=>{
    let input_val = document.querySelector("#input_search").value;
    doApi(input_val);
  })
  document.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
      let input_val = document.querySelector("#input_search").value;
      doApi(input_val);
    }
    
  });
}

const doApi = async (_searchQ) => {
  document.querySelector(".row").innerHTML =
  `
   <div class="text-center mt-3 w-100">
      <h1 class="text-bg-dark">Loading...</h1>
      <img src="images/Gray_circles_rotate.gif" alt="loading">
     </div>
  `
  let url = `https://pixabay.com/api/?key=33067649-d7427243fb398216f761e6f70&q=${_searchQ}&image_type=photo&pretty=true`;
  let resp = await axios.get(url);
  console.log(resp.data.hits)
  creactPicts(resp.data.hits);
}



const creactPicts = (_ar) => {
  document.querySelector(".row").innerHTML = "";
  _ar.forEach(item => {
    let pic = new Pic(".row", item);
    pic.render();
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