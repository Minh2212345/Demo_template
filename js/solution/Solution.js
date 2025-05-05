function giaiPhap() {
    this.id = "";
    this.tenGiaiPhap = "";
    this.khoAnh = [];
    this.sanPham = "";
}

let GP = new Array(10).fill().map(() => new giaiPhap());

GP[0].id = 0;
GP[0].tenGiaiPhap = "Sử dụng AI để giám sát tình trạng hệ thống điện nhằm xác định nguy cơ chập cháy điện";
GP[0].khoAnh = [
    "/img/Products/FireSolution/1.jpg",
    "/img/Products/FireSolution/2.jpg",
    "/img/Products/FireSolution/3.jpg",
    "/img/Products/FireSolution/4.jpg",
    "/img/Products/FireSolution/5.jpg",
    "/img/Products/FireSolution/6.jpg",
    "/img/Products/FireSolution/7.jpg",
    "/img/Products/FireSolution/8.jpg",
    "/img/Products/FireSolution/9.jpg",
    "/img/Products/FireSolution/10.jpg",
    "/img/Products/FireSolution/11.jpg",
    "/img/Products/FireSolution/12.jpg",
    "/img/Products/FireSolution/13.jpg"
];
GP[0].sanPham = "/html/product/product.html?thietBiBaoChay";

function renderProducts(solutions) {
    let titleContainer = document.getElementById("solution-title");
    let detailsContainer = document.getElementById("solution-details");
    let viewProductsBtn = document.getElementById("view-products-btn");

    // Kiểm tra xem các container có tồn tại không
    if (!titleContainer || !detailsContainer || !viewProductsBtn) {
        console.error("Không tìm thấy các container cần thiết");
        return;
    }

    const queryString = window.location.search;
    let filteredProducts;

    // Kiểm tra query string
    if (queryString.includes("?giaiPhapBaoChay")) {
        filteredProducts = [solutions[0]].filter(p => p !== undefined);
    } else {
        filteredProducts = solutions;
    }

    if (filteredProducts.length === 0) {
        titleContainer.innerHTML = '';
        detailsContainer.innerHTML = '<p class="text-center">Không có giải pháp nào phù hợp.</p>';
        viewProductsBtn.style.display = 'none';
        return;
    }

    // Hiển thị tiêu đề lớn
    titleContainer.innerHTML = `<h1>${filteredProducts[0].tenGiaiPhap}</h1>`;

    // Hiển thị lần lượt từng ảnh, căn giữa
    detailsContainer.innerHTML = filteredProducts.map((product) => {
        return product.khoAnh.map((image, index) => `
            <div class="row mb-5 justify-content-center">
                <div class="col-md-9 text-center">
                    <img src="${image}" alt="Ảnh ${index + 1}" class="img-fluid rounded" />
                </div>
            </div>
        `).join("");
    }).join("");

    viewProductsBtn.href = filteredProducts[0].sanPham;
}

window.onload = function () {
    renderProducts(GP);
};