export default class Prod{
    constructor(_parent,_item){
        this.parent = _parent;
        this.name = _item.name;
        this.price = _item.price;
        this.cat = _item.cat;
    }
    render() {
        let div = document.createElement("div");
        div.className = "col-lg-6 border p-2 bg-secondary";
        document.querySelector(this.parent).append(div);
        div.innerHTML =
        `
        <div class="badge bg-gradient float-end">${this.name }</div>
        <h2 class="text-light text-decoration-underline">${this.cat}</h2>
        <div class="text-light">Price: ${this.price}</div>
       
        `
        let btn = document.createElement("button");
        btn.className = "btn btn-primary";
        btn.innerHTML = "show usd price";
        div.append(btn);
        btn.addEventListener("click",(item)=>{
            alert((this.price/3.2).toFixed(2));
        })
    }
}