export default class VipClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.image = _item.image;
        this.name = _item.name;
        this.company = _item.source;
        this.country = _item.country;
        this.year = _item.birth_year;
    }


    render() {
        let div = document.createElement("div");
        document.querySelector(this.parent).append(div);
        div.innerHTML +=
            `
            <img src="${this.image}" class="w-25 float-start me-2 my-4" alt="${this.name}">
            <h2>${this.name}</h2>
            <div>Company: ${this.company}</div>
        `
        let btn =document.createElement("button");
        btn.innerHTML = "Show age"
        btn.className = "btn btn-success"
        div.append(btn)
        btn.addEventListener("click", () => {
            let dt = new Date();
            alert(dt.getFullYear() - this.year)
        })
    }
}