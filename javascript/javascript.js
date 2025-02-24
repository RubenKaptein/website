var button = document.querySelector("#contact")

button.addEventListener("click", myfunction)

function myfunction()
{
    alert("Mail: kapteinstudios@gmail.com\nTelefoonnummer: +31 6 27518455")
}


// w3schools slider

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }

  let slideIndex = 1;
showDivs(slideIndex);

// Functie om naar een specifieke slide te gaan
function currentDiv(n) {
  showDivs(slideIndex = n);
}

// Functie om de slides te tonen/verbergen
function showDivs(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Verberg alle slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Maak alle indicator-afbeeldingen minder zichtbaar
  for (i = 0; i < dots.length; i++) {
    dots[i].style.opacity = "0.6";
  }

  // Toon de actieve slide en highlight de geselecteerde indicator
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.opacity = "1";
}
