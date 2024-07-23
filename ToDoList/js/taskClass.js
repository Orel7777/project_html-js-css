export default class Task {
  constructor(_parent, _item, _delSingleTask) {
      this.parent = _parent;
      this.name = _item.name;
      this.time = _item.time;
      this.id = _item.id;
      this.delSingleTask = _delSingleTask; 
  }

  render() {
      let div = document.createElement("div");
      div.className = "shadow-sm my-2 p-2 d-flex justify-content-between align-items-center";
      document.querySelector(this.parent).append(div);
      div.innerHTML += `
          <h4 class="mb-0">${this.name} - ${this.time}</h4>
          <button class="btn btn-danger btn-sm" style="width: 50px;">X</button>
      `;
      let btnX = div.querySelector("button");
      btnX.addEventListener("click", () => {
          if (window.confirm("Are you sure you want to delete this task")) {
              this.delSingleTask(this.id); 
          }
      });
  }
}
