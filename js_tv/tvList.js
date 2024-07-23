import TvItem from './tvItem.js'


export const doApi = async (_search) => {
    let url = `https://api.tvmaze.com/search/shows?q=${_search}`;
    document.querySelector("#id_p").innerHTML = `<h1 style="color:red">Loading...</h1>`;
    let resp = await axios.get(url);
    console.log(resp.data)
    createList(resp.data)
}


const createList = (_ar) => {
    document.querySelector("#id_p").innerHTML = "";
    _ar.forEach(item => {
        let tvShow = new TvItem("#id_p",item.show);
        tvShow.render();
    })
}