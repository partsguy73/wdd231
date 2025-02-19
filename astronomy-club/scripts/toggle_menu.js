function toggleMenu() {
    var navigation = document.getElementById("nav-container");
    var cheeseburger = document.getElementById("cheeseburger");
    var isShow = navigation.classList.toggle("");
    if (isShow) {
        navigation.classList.remove("nav-hidden");
        cheeseburger.innerHTML = '✖';
    }
    else {
        navigation.classList.add("nav-hidden");
        cheeseburger.innerHTML = '&#9776;';
    }
}

