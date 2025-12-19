// ===============================
// NAVBAR
// ===============================
fetch("../navbar.html")
.then(res => res.text())
.then(data => {
    const container = document.getElementById("navbar-container");
    if (!container) return;

    container.innerHTML = data;

    initNavbar();
});

function initNavbar() {

    function sidebar1() {
        const navbar = document.getElementById("navbar");
        const sandwich = document.getElementById("navbar-sidebarbutton1");
        const menu = document.getElementById("navbar-sidebar");
        const overlay = document.getElementById("navbar-overlay");
        const list = document.getElementById("navbar-1");

        if (!navbar || !sandwich || !menu || !overlay || !list) return;

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

        if (!navbar || !sandwich || !menu || !overlay || !list1 || !list2) return;

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

        if (!navbar || !sandwich || !list1 || !list2) return;

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

        if (!menu || !overlay) return;

        menu.classList.remove("active");
        overlay.classList.remove("active");
        lists.forEach(list => list && list.classList.remove("active"));
    }

    // Exponer funciones al HTML
    window.sidebar1 = sidebar1;
    window.sidebar2 = sidebar2;
    window.back1 = back1;
    window.back2 = back2;

    // Click fuera
    document.addEventListener("click", (e) => {
        const menu = document.getElementById("navbar-sidebar");
        const overlay = document.getElementById("navbar-overlay");

        if (!menu || !overlay) return;

        const buttons = [
            document.getElementById("navbar-sidebarbutton1"),
            document.getElementById("navbar-sidebarbutton2"),
            document.getElementById("navbar-sidebarbutton3")
        ].filter(Boolean);

        const clickOnButton = buttons.some(btn => btn.contains(e.target));

        if (!menu.contains(e.target) && !clickOnButton) {
            menu.classList.remove("active");
            overlay.classList.remove("active");
            ["navbar-1", "navbar-2"].forEach(id => {
                const el = document.getElementById(id);
                el && el.classList.remove("active");
            });
        }
    });

    // Scroll
    document.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        const sandwich = document.getElementById("navbar-sidebarbutton1");
        const menu = document.getElementById("navbar-sidebar");
        const overlay = document.getElementById("navbar-overlay");

        if (!navbar || !sandwich) return;

        if (window.scrollY > 200) {
            navbar.classList.add("notransparent");
            sandwich.classList.add("notransparent");
        } else {
            navbar.classList.remove("notransparent");
            sandwich.classList.remove("notransparent");
            menu && menu.classList.remove("active");
            overlay && overlay.classList.remove("active");
        }
    });
}

// ===============================
// FOOTER
// ===============================
fetch("../footer.html")
.then(res => res.text())
.then(data => {
    const container = document.getElementById("footer-container");
    if (container) container.innerHTML = data;
});
