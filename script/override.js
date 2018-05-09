//OVERRIDE - TEXT
function toggleMenu() {
    this.classList.toggle('open');
}

var list = document.querySelectorAll("#menu li");

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', toggleMenu);
}


//lees alle fotos op de website en steek ze in een lijst (beelden)
var beelden = document.querySelectorAll('img');

// loop door de lijst van beelden en maak een event voor elk beeld (on click)
for (var i = 0; i < beelden.length; i++) {
    var foto = beelden[i];
    foto.addEventListener('click', doSomething);
}

// haal de h1 tag uit het document
var info = document.querySelector('#info');

function doSomething(e) {
    // overschrijf de h1 tag met info uit de foto (alt attribuut)
    info.innerHTML = this.getAttribute('alt');
    //aantal px dat gebruiker heeft gescrolt optellen bij muiswaarde Y.
    var yWaarde = e.clientY + window.scrollY;
    // zet info op de muislocatie
    info.style.left = e.clientX + "px";
    info.style.top = yWaarde + "px";
}