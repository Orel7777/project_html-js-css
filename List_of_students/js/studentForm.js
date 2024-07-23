

let student_Ar = localStorage["students"] ? JSON.parse(localStorage["students"]) : [];


const init = () => {
    declareEvents();
    declareBtns();
    window.addEventListener('resize', handleResize);
}


const declareEvents = () => {
    let form = document.querySelector("#id_form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("first")
        let studentObj = {
            name: document.querySelector("#name").value,
            score: document.querySelector("#score").value,
            subject: document.querySelector("#subject").value,
        }
        console.log(studentObj);
        if (studentObj.name.length < 2) {
            return alert("Name too short, please enter min 2 chars.");
        }
        else if (studentObj.score < 1 || studentObj.score > 50) {
            return alert("Score need to be bewtween 1 to 50")
        }
        student_Ar.push(studentObj);
        console.log(student_Ar)
        localStorage.setItem("students", JSON.stringify(student_Ar));
        alert("Another student was added")
        window.location.href = "../List_of_students/student.html"
        
    })
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