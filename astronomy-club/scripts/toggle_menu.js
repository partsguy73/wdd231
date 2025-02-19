function toggleMenu() {
    var navigation = document.getElementById("nav-container");
    var cheeseburger = document.getElementById("cheeseburger");
    var isShow = navigation.classList.toggle("nav-hidden");
    if (isShow) {
        cheeseburger.innerHTML = '✖';
    } else {
        cheeseburger.innerHTML = '&#9776;';
    }
}

