function toggleMenu() {
    var navigation = document.getElementById("navigation");
    var cheeseburger = document.getElementById("cheeseburger");
    var isShow = navigation.classList.toggle("show");
    if (isShow) {
        navigation.classList.remove("nav-hidden");
        cheeseburger.innerHTML = '✖';
    }
    else {
        navigation.classList.add("nav-hidden");
        cheeseburger.innerHTML = '&#9776;';
    }
    var pageHeader = document.getElementById("page-header");
    pageHeader.classList.toggle("hidden");
}