let counterel=document.querySelector(".counter")
let lodingfront=document.querySelector(".loding-bar-front")




let idx=0
updatenum()

function updatenum(){
    counterel.textContent = idx + "%"
    lodingfront.style.width = idx + "%";
    idx++
    if (idx <101) {
        setTimeout(updatenum,20)
    }
}