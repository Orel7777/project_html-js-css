import {showLightBox} from "./lightBox.js"

export default class TvItem {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.title = _item.name;
        this.year = _item.premiered;
        this.rating = _item.rating.average;
        this.img = _item.image.medium;
        this.info = _item.summary;
        
    }
    render() {
        let article = document.createElement("article");
        article.className = "col-md-4";
        document.querySelector(this.parent).append(article);
        article.innerHTML =
            `
            <div class="border shadow p-2 h-100 overflow-hidden">
            <img src=${this.img} alt="pic" class="float-start me-2 col-4">
            <h2>${this.title }</h2>
            <div>Year: ${this.year}</div>
            <div>Rating:${this.rating}</div>
            <button class="btn btn-dark info-Btn">More info</button>
        </div>
        `
        let infoBtn = article.querySelector(".info-Btn");
        infoBtn.addEventListener("click",()=>{
            showLightBox(this);
        })
    }
}