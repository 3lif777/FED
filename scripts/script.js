// JavaScript Document

let openMenuButton = document.querySelector("header button");

openMenuButton.addEventListener("click", geOpendeMenu);

function geOpendeMenu() {
    let deNav = document.querySelector("header nav");
    deNav.classList.add("is-open");

}

