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
fetch('../component/menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu-container').innerHTML = data;
        initDropdownHover();
    })
    .catch(error => console.error('Error loading menu:', error));

fetch('../component/footer.html')
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

// Sticky Menu Behavior
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    let isScrollingDown = false;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Thêm class khi scroll xuống để thay đổi style
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Lưu vị trí scroll hiện tại
        lastScrollTop = scrollTop;
    }

    // Thêm event listener cho scroll
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Thêm smooth scroll cho các link nội bộ
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20; // Thêm offset nhỏ

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});