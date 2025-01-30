function toggleMenu() {
    var navigation = document.getElementById("navigation");
    var cheeseburger = document.getElementById("cheeseburger");
    var isShow = navigation.classList.toggle("show");
    if (isShow) {
        navigation.classList.add("nav-show");
        cheeseburger.innerHTML = '✖';
    }
    else {
        navigation.classList.remove("nav-show");
        cheeseburger.innerHTML = '&#9776;';
    }
}

