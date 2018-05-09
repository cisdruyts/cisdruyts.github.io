function toggleMenu() {
    this.classList.toggle('open');
}

var list = document.querySelectorAll("#menu li");

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', toggleMenu);
}