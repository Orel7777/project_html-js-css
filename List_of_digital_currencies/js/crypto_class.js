export default class Crypto {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name;
        this.id = _item.id;
        this.price = localStorage.getItem(this.id) || _item.price_usd;
        this.imgUrl = `https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/${this.id}.png`;
    }

    render() {
        let newBox = document.createElement("div");
        newBox.className = "box";
        document.querySelector(this.parent).append(newBox);
        newBox.innerHTML = 
        `   <img src=${this.imgUrl}>
            <h5>${this.id}</h5>
            <h3>${this.name}</h3>
            <div>Value: ${parseFloat(this.price).toFixed(2)} usd</div>
        `
        let btn = document.createElement("button");
        newBox.append(btn);
        btn.innerHTML += "Follow coin"
        btn.addEventListener("click", () => {
            this.price = localStorage.getItem(this.id) || this.price;
            btn.innerHTML = `coin is : ${parseFloat(this.price).toFixed(2)}`
            localStorage.setItem(this.id, this.price);
        })
    }
}
