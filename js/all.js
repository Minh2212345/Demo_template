document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-item.dropdown");

    menuItems.forEach(item => {
        const link = item.querySelector("a"); 
        const dropdownMenu = item.querySelector(".dropdown-menu"); 

        item.addEventListener("mouseenter", function () {
            dropdownMenu.classList.add("show");
        });

        item.addEventListener("mouseleave", function () {
            dropdownMenu.classList.remove("show");
        });

        link.addEventListener("click", function (event) {
            const url = this.getAttribute("href");
            if (url && url !== "javascript:void(0);") {
                window.location.href = url; 
            }
        });
    });
});