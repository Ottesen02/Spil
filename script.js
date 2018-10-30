window.addEventListener("load", siden_vises)

function siden_vises() {
    console.log("siden_vises");


    document.querySelector("#start").classList.add("show");
    document.querySelector("#menu_background").classList.add("show");

}

function start_klik() {
    console.log("start_klik");


    document.querySelector("#start").classList.add("hide");
    document.querySelector("#menu_background").classList.add("hide");

}

document.querySelector("#start").addEventListener("click", start_klik)
