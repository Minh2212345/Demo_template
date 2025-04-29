// let lastScrollTop = 0;
// const header = document.querySelector('#header');

// if (header) {
//   window.addEventListener('scroll', () => {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//       header.classList.add('hidden');
//       console.log('hello - Cuộn xuống');
//     } else if (scrollTop < lastScrollTop) {
//       header.classList.remove('hidden');
//       console.log('hello - Cuộn lên');
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
//   });
// } else {
//   console.error('Phần tử #header không tồn tại trong DOM.');
// }

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".nav-item.dropdown");

    menuItems.forEach(item => {
        const link = item.querySelector("a"); 
        const dropdownMenu = item.querySelector(".dropdown-menu"); 

        // Hover cho desktop
        item.addEventListener("mouseenter", function () {
            dropdownMenu.classList.add("show");
        });

        item.addEventListener("mouseleave", function () {
            dropdownMenu.classList.remove("show");
        });

        // Xử lý click cho dropdown trên mobile
        link.addEventListener("click", function (event) {
            // Ngăn sự kiện lan truyền đến navbar chính
            event.stopPropagation();

            const url = this.getAttribute("href");
            if (url && url !== "#" && url !== "javascript:void(0);") {
                window.location.href = url; 
            }
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
