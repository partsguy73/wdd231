document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".sidebar");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentVisit = new Date();
    let message = "";

    if (lastVisit) {
        const lastVisitDate = new Date(lastVisit);
        const timeDiff = currentVisit - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        if (daysDiff < 1) {
            message = "Back so soon! Awesome!";
        } 
        else {
            message = `Welcome back! You visited ${daysDiff} days ago.`;
        }
    } else {
        message = "Welcome! Let us know if you have any questions.";
    }

    sidebar.innerHTML = `<p>${message}</p>`;
    localStorage.setItem("currentVisit", currentVisit);
});
