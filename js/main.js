fetch("../navbar.html")
.then(res => res.text())
.then(data => {
    document.getElementById("navbar-container").innerHTML = data;
});
function sidebar1() {
    const navbar = document.getElementById("navbar");
    const sandwich = document.getElementById("navbar-sidebarbutton1");
    const menu = document.getElementById("navbar-sidebar");
    const overlay = document.getElementById("navbar-overlay");
    const list = document.getElementById("navbar-1");
    menu.classList.add("active");
    overlay.classList.add("active");
    list.classList.add("active");
    navbar.classList.add("notransparent");
    sandwich.classList.add("notransparent");
}
function sidebar2() {
    const navbar = document.getElementById("navbar");
    const sandwich = document.getElementById("navbar-sidebarbutton1");
    const menu = document.getElementById("navbar-sidebar");
    const overlay = document.getElementById("navbar-overlay");
    const list1 = document.getElementById("navbar-1");
    const list2 = document.getElementById("navbar-2");
    menu.classList.add("active");
    overlay.classList.add("active");
    list1.classList.remove("active");
    list2.classList.add("active");
    navbar.classList.add("notransparent");
    sandwich.classList.add("notransparent");
}
function back2() {
    const navbar = document.getElementById("navbar");
    const sandwich = document.getElementById("navbar-sidebarbutton1");
    const list2 = document.getElementById("navbar-2");
    const list1 = document.getElementById("navbar-1");
    list2.classList.remove("active");
    list1.classList.add("active");
    navbar.classList.add("notransparent");
    sandwich.classList.add("notransparent");
}
function back1() {
    const menu = document.getElementById("navbar-sidebar");
    const overlay = document.getElementById("navbar-overlay");
    const lists = [
        document.getElementById("navbar-1"),
        document.getElementById("navbar-2")
    ];
    menu.classList.remove("active");
    overlay.classList.remove("active");
    lists.forEach(list => list && list.classList.remove("active"));
}
document.addEventListener("click", function(e) {
    const menu = document.getElementById("navbar-sidebar");
    const overlay = document.getElementById("navbar-overlay");
    const lists = [
        document.getElementById("navbar-1"),
        document.getElementById("navbar-2")
    ];
    const buttons = [
        document.getElementById("navbar-sidebarbutton1"),
        document.getElementById("navbar-sidebarbutton2"),
        document.getElementById("navbar-sidebarbutton3")
    ];
    const clikonbutton = buttons.some(btn => btn.contains(e.target));
    if (!menu.contains(e.target) && !clikonbutton) {
        menu.classList.remove("active");
        overlay.classList.remove("active");
        lists.forEach(list => list && list.classList.remove("active"));
    }
});
document.addEventListener("scroll", function(e) {
    const navbar = document.getElementById("navbar");
    const sandwich = document.getElementById("navbar-sidebarbutton1");
    const menu = document.getElementById("navbar-sidebar");
    const overlay = document.getElementById("navbar-overlay");
    const lists = [
        document.getElementById("navbar-1"),
        document.getElementById("navbar-2")
    ];
    if (window.scrollY > 200) {
        navbar.classList.add("notransparent");
        sandwich.classList.add("notransparent");
    } else {
        navbar.classList.remove("notransparent");
        sandwich.classList.remove("notransparent");
        menu.classList.remove("active");
        overlay.classList.remove("active");
        lists.forEach(list => list && list.classList.remove("active"));
    }
});