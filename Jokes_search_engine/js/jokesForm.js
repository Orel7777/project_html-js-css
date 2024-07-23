
import {doApi} from './jokesInfo.js'

export const declareEvent = ()=>{
    let input= document.querySelector("#id_search");   
    let btn_s= document.querySelector("#btn");   

    input.addEventListener("keydown",(e)=>{
         if(e.key =="Enter"){
            doApi(input.value);
         }
    })

    btn_s.addEventListener("click", ()=>{
        doApi(input.value);
    })
 }
