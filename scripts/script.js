// JavaScript Document

let openMenuButton = document.querySelector("header button");

openMenuButton.addEventListener("click", geOpendeMenu);

function geOpendeMenu() {
    let deNav = document.querySelector("header nav");
    deNav.classList.toggle("is-open");

}


// detail pagina
// selecting radio buttons
let upcomingButton = document.getElementById("upcomingevents");
let pastButton = document.getElementById("pastevents");
let yourButton = document.getElementById("yourevents");

// selecting all list items in 3rd section
let eventItems = document.querySelectorAll("main section:nth-of-type(3) ul li");

// listeners to radios
upcomingButton.addEventListener("change", showUpcoming);
pastButton.addEventListener("change", showPast);
yourButton.addEventListener("change", showYour);

// hide all items
function hideAll() {
    eventItems.forEach(li => li.style.display = "none");

}

function showUpcoming() {
    // show everything
    eventItems.forEach(li => li.style.display = "")

}

function showPast() {
    hideAll();
    // show only the first item (index 0). Check it exists first:
    if (eventItems[0]) eventItems[0].style.display = "";
}

function showYour() {
    hideAll();
    // show the 2nd and 3rd items (indexes 1 and 2)
    if (eventItems[1]) eventItems[1].style.display = "";
    if (eventItems[2]) eventItems[2].style.display = "";
}


  //  run once on load to set initial state according to the checked radio
  //    This makes sure the page reflects the radio that is already checked.
if (upcomingBtn.checked) showUpcoming();
else if (pastBtn.checked) showPast();
else if (yourBtn.checked) showYour();

// heb chatgpt hoe de functions and if/else moet maken en hiermee gesleuteld

// hideAll(); → roept een functie aan die alle items verstopt (display: none).

// eventItems[0] → pakt het eerste item in de lijst.

// .style.display = "" → laat het item weer zien (door de inline stijl weg te halen).
// Resultaat: alleen het eerste event blijft zichtbaar.