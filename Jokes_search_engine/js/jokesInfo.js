export const checkQuaryS =()=> {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get("s"))
    if(params.get("s")){
      doApi(params.get("s"))
    }
    else(
      doApi("truck")
    )
  }
  
  export const doApi = async (_searchQ) => {
    let url = `https://v2.jokeapi.dev/joke/Any?contains=${_searchQ}`;
    document.querySelector("#id_info").innerHTML = `<h1 style="color:blue">Loading...</h1>`;
    let resp = await axios.get(url);
    console.log(resp.data);
    updataInfo(resp.data);
    addQuaryToUrl(_searchQ)
  }
  
  const addQuaryToUrl = (_searchQ)=> {
    let params = new URL(window.location.href);
    params.searchParams.set("s", _searchQ);
    history.pushState(null,'',params);
  }
  
  
  const updataInfo = (_info) => {
    document.querySelector("#id_category").innerHTML = _info.category;
    if (_info.setup) {
      document.querySelector("#id_info").innerHTML =
        `
        <p class="h4">Setup: ${_info.setup}.</p>
        <p class="h5">Delivery: ${_info.delivery}.</p>
      
      `
    }
    else if(_info.joke){
      document.querySelector("#id_info").innerHTML =
      `
      <p class="h4">Setup: ${_info.joke}.</p>
      `
    }
    else if(_info.error){
      document.querySelector("#id_info").innerHTML =
      `
      <p class="h4">Jokes not found.</p>
      `
    }
  };
  