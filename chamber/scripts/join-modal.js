// Get the modal
var goldModal = document.getElementById("gold-info");
var silverModal = document.getElementById("silver-info");
var bronzeModal = document.getElementById("bronze-info");
var nfpModal = document.getElementById("nfp-info");

// Get the button that opens the modal
var goldBtn = document.getElementById("gold-info-btn");
var silverBtn = document.getElementById("silver-info-btn");
var bronzeBtn = document.getElementById("bronze-info-btn");
var nfpBtn = document.getElementById("nfp-info-btn");

// Get the <span> element that closes the modal
var goldSpan = document.getElementsByClassName("close")[0];
var silverSpan = document.getElementsByClassName("close")[1];
var bronzeSpan = document.getElementsByClassName("close")[2];
var nfpSpan = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
goldBtn.onclick = function () {
    goldModal.style.display = "block";
}
silverBtn.onclick = function () {
    silverModal.style.display = "block";
}
bronzeBtn.onclick = function () {
    bronzeModal.style.display = "block";
}
nfpBtn.onclick = function () {
    nfpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
goldSpan.onclick = function () {
    goldModal.style.display = "none";
}
silverSpan.onclick = function () {
    silverModal.style.display = "none";
}
bronzeSpan.onclick = function () {
    bronzeModal.style.display = "none";
}
nfpSpan.onclick = function () {
    nfpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == goldModal) {
        goldModal.style.display = "none";
    }
    if (event.target == silverModal) {
        silverModal.style.display = "none";
    }
    if (event.target == bronzeModal) {
        bronzeModal.style.display = "none";
    }
    if (event.target == nfpModal) {
        nfpModal.style.display = "none";
    }
}