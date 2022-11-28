// event will be executed when the toggle-button is clicked
document.getElementById("button-toggle").addEventListener("click", () => {

    // when the button-toggle is clicked, it will add/remove the active-sidebar class
    document.getElementById("sidebar").classList.toggle("active-sidebar");

    // when the button-toggle is clicked, it will add/remove the active-main-content class
    document.getElementById("main-content").classList.toggle("active-main-content");
});