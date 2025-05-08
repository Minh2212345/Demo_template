function initDropdownHover() {
    const menuItems = document.querySelectorAll(".nav-item.dropdown");

    menuItems.forEach(item => {
        const dropdownMenu = item.querySelector(".dropdown-menu");

        // JavaScript hỗ trợ hover (dự phòng nếu CSS không hoạt động)
        item.addEventListener("mouseenter", function () {
            dropdownMenu.classList.add("show");
            item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "true");
        });

        item.addEventListener("mouseleave", function () {
            dropdownMenu.classList.remove("show");
            item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
        });
    });
}

// Load menu and initialize hover
fetch('/html/component/menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
        initDropdownHover();
    })
    .catch(error => console.error('Error loading menu:', error));

fetch('/html/component/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
        initDropdownHover();
    })
    .catch(error => console.error('Error loading menu:', error));

// Xử lý click trên mobile để tránh xung đột
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-item.dropdown");

    menuItems.forEach(item => {
        const link = item.querySelector("a");

        link.addEventListener("click", function (event) {
            const url = this.getAttribute("href");
            if (url && url !== "#" && url !== "javascript:void(0);") {
                event.preventDefault();
                window.location.href = url;
            }
            // Không cần stopPropagation vì Bootstrap đã xử lý click
        });
    });

    // Ngăn toggler của navbar phụ ảnh hưởng đến navbar chính
    const subToggler = document.querySelector('.navbar:nth-of-type(2) .navbar-toggler');
    if (subToggler) {
        subToggler.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }
});