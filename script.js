//infinity scroll dat wel werkt ///

var afbeeldingen = [
    'boekcover_is_this_it.jpg',
    'cover_layer.jpg',
    'design_coca_cola.jpg',
    'experiment.jpg',
    'logo_cis_druyts.jpg',
    'logo_no_guarantee.jpg',
    'mix_dorpen.jpg',
    'poster_egyptienne.jpg',
    'poster_fresh_air.jpg',
    'punten_lijnen_vlakken.jpg',
    'save_sex_poster.jpg',
    'twighlight_zone.jpg',
    'wired.jpg',
    'poster1.jpg',
    'poster2.jpg',
    'cover%20metropolis%20m-1.jpg'
];


function nearBottom() {
    let body = document.body;
    let html = document.documentElement;
    let documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    let windowHeight = window.innerHeight;
    let scrollPos = window.scrollY;

    let pixelsFromWindowBottom = documentHeight - scrollPos - windowHeight;
    return pixelsFromWindowBottom <= 100;
}

function randInt(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function choice(l) {
    return l[Math.floor(Math.random() * l.length)];
}

function makeElement() {
    let div = document.createElement('div');
    div.classList.add('project');
    let filename = 'afbeeldingen/' + choice(afbeeldingen);
    div.innerHTML = `<img src="${filename}">`;
    return div;
}

function addMoreElements(parentElement) {
    for (let i = 0; i < 3; i++) {
        let el = makeElement();
        parentElement.appendChild(el);
    }
}

let parentElement = document.querySelector('.allprojects');
window.addEventListener('scroll', function (e) {
    if (nearBottom()) {
        addMoreElements(parentElement);
    }
});

////////menu////////

function toggleMenu() {
    this.classList.toggle('open');
}

var list = document.querySelectorAll("#menu li");

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', toggleMenu);
}


