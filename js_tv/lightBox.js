export const showLightBox = (item) =>{
    let lightBox = document.querySelector("#id_lightWindow");
    lightBox.style.display="flex";
    lightBox.querySelector("img").src = item.img;
    lightBox.querySelector("h2").innerHTML = item.title;
    lightBox.querySelector("#id_light_date").innerHTML = item.year;
    lightBox.querySelector("#id_light_rating").innerHTML =  item.rating;
    lightBox.querySelector("#id_light_plot").innerHTML =  item.info;
   

}


export const hideLightBox = () =>{
    document.querySelector("#id_lightWindow").style.display="none";
}

export const declareLightBox = () =>{
    let closeBtn = document.querySelector("#close_window_lightBox");
    closeBtn.addEventListener("click",hideLightBox)
}

