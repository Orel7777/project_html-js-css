import Task from "./taskClass.js";

const ar_tasks = [];

const init = () => {
  declareBtns();
  handleResize();
  declareEvents();
  checkLocal();
  
  window.addEventListener('resize', handleResize);
}

const checkLocal = () => {
  if (localStorage["tasks"]) {
    let _ar = JSON.parse(localStorage["tasks"]);
    _ar.forEach(item => {
      ar_tasks.push(item);
    });
    createTasks(ar_tasks);
  }
}

const declareEvents = () => {
  let add_btn = document.querySelector("#add_btn");
  let reset_btn = document.querySelector("#reset_btn");

  reset_btn.addEventListener("click", () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      ar_tasks.splice(0, ar_tasks.length);
      createTasks(ar_tasks);
      alert("All tasks removed");
    }
  });

  add_btn.addEventListener("click", () => {
    let name_val = document.querySelector("#id_name").value;
    let time_val = document.querySelector("#id_time").value;
    let task_ar = {
      name: name_val,
      time: time_val,
      id: Date.now(),
    };
    ar_tasks.push(task_ar);
    console.log(ar_tasks);
    createTasks(ar_tasks);
  });
}

const delSingleTask = (_idDel) => {
  ar_tasks.forEach((item, i) => {
    if (item.id == _idDel) {
      ar_tasks.splice(i, 1);
    }
  });
  createTasks(ar_tasks);
}

const createTasks = (_ar) => {
  document.querySelector("#id_parent").innerHTML = "";
  _ar = _.sortBy(_ar, "time");
  localStorage.setItem("tasks", JSON.stringify(_ar));
  _ar.forEach(item => {
    let task = new Task("#id_parent", item, delSingleTask); // Pass the function here
    task.render();
  });
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

init();
