const navbar = document.querySelector(".navbar");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

if (navbar && openMenu && closeMenu) {

    // Open menu
    openMenu.addEventListener("click", () => {
        navbar.classList.add("menu-open");
        openMenu.setAttribute("aria-expanded", "true");
    });

    // Close menu
    closeMenu.addEventListener("click", () => {
        navbar.classList.remove("menu-open");
        openMenu.setAttribute("aria-expanded", "false");
    });

    // Close menu after clicking a link
    document.querySelectorAll("#id-first-half a, #id-second-half a")
        .forEach((link) => {
            link.addEventListener("click", () => {
                navbar.classList.remove("menu-open");
                openMenu.setAttribute("aria-expanded", "false");
            });
        });

    // Reset menu when returning to desktop width
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navbar.classList.remove("menu-open");
            openMenu.setAttribute("aria-expanded", "false");
        }
    });
}
