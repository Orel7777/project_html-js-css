import Student from './studentsClass.js'

let local_Ar = localStorage["students"] ? JSON.parse(localStorage["students"]) : [];


const init = () => {
    createAllStudents(local_Ar);
    declareBtns();
    window.addEventListener('resize', handleResize);
}


const createAllStudents = (_ar) => {
    document.querySelector("#id_tbody").innerHTML = "";
    _ar.forEach((item, i) => {
        let student = new Student("#id_tbody", item, i, delStudent);
        student.render();
    })
}
const delStudent = (_index) => {
    local_Ar.splice(_index, 1);
    localStorage.setItem("students", JSON.stringify(local_Ar))
    createAllStudents(local_Ar)
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


