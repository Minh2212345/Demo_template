function giaiPhap() {
    this.id = "";
    this.tenGiaiPhap = "";
    this.khoAnh = [];
    this.sanPham = "";
    this.sanPhamBtn = "";
}

let GP = [
    new giaiPhap(),
    new giaiPhap()
];

GP[0].id = 0;
GP[0].tenGiaiPhap = "Sử dụng AI để giám sát tình trạng hệ thống điện nhằm xác định nguy cơ chập cháy điện";
GP[0].khoAnh = [
    "/html/img/Products/FireSolution/1.jpg",
    "/html/img/Products/FireSolution/2.jpg",
    "/html/img/Products/FireSolution/3.jpg",
    "/html/img/Products/FireSolution/4.jpg",
    "/html/img/Products/FireSolution/5.jpg",
    "/html/img/Products/FireSolution/6.jpg",
    "/html/img/Products/FireSolution/7.jpg",
    "/html/img/Products/FireSolution/8.jpg",
    "/html/img/Products/FireSolution/9.jpg",
    "/html/img/Products/FireSolution/10.jpg",
    "/html/img/Products/FireSolution/11.jpg",
    "/html/img/Products/FireSolution/12.jpg",
    "/html/img/Products/FireSolution/13.jpg"
];
GP[0].sanPham = "/html/product/product.html?thietBiBaoChay";
GP[0].sanPhamBtn = "Thiết bị phòng cháy - chữa cháy";

// Gán dữ liệu cho giải pháp 1 (quan trắc khí tượng thủy văn)
GP[1].id = 1;
GP[1].tenGiaiPhap = "Giới thiệu dịch vụ quan trắc khí tượng thủy văn";
GP[1].khoAnh = [
    "/html/img/Products/HydrometeorologicalService/1.jpg",
    "/html/img/Products/HydrometeorologicalService/2.jpg",
    "/html/img/Products/HydrometeorologicalService/3.jpg",
    "/html/img/Products/HydrometeorologicalService/4.jpg",
    "/html/img/Products/HydrometeorologicalService/5.jpg",
    "/html/img/Products/HydrometeorologicalService/6.jpg",
    "/html/img/Products/HydrometeorologicalService/7.jpg",
    "/html/img/Products/HydrometeorologicalService/8.jpg",
    "/html/img/Products/HydrometeorologicalService/9.jpg",
    "/html/img/Products/HydrometeorologicalService/10.jpg",
    "/html/img/Products/HydrometeorologicalService/11.jpg",
    "/html/img/Products/HydrometeorologicalService/12.jpg",
    "/html/img/Products/HydrometeorologicalService/13.jpg",
    "/html/img/Products/HydrometeorologicalService/14.jpg",
    "/html/img/Products/HydrometeorologicalService/15.jpg",
    "/html/img/Products/HydrometeorologicalService/16.jpg",
    "/html/img/Products/HydrometeorologicalService/17.jpg"
    
];
GP[1].sanPham = "/html/product/product.html?thietBiQuanTrac";
GP[1].sanPhamBtn = "Thiết bị quan trắc";

function renderProducts(solutions) {
    let titleContainer = document.getElementById("solution-title");
    let detailsContainer = document.getElementById("solution-details");

    if (!titleContainer || !detailsContainer) {
        console.error("Không tìm thấy các container cần thiết");
        document.body.innerHTML = '<p class="text-center text-danger">Lỗi: Không thể tải nội dung. Vui lòng thử lại sau.</p>';
        return;
    }

    const queryString = window.location.search;
    let filteredProduct = null;

    if (queryString.includes("?giaiPhapBaoChay")) {
        filteredProduct = solutions.find(s => s.id === 0);
    } else if (queryString.includes("?thietBiQuanTrac")) {
        filteredProduct = solutions.find(s => s.id === 1);
    }

    if (!filteredProduct) {
        titleContainer.innerHTML = '<h1>Không tìm thấy giải pháp</h1>';
        detailsContainer.innerHTML = '<p class="text-center">Vui lòng kiểm tra lại liên kết hoặc liên hệ với chúng tôi.</p>';
        return;
    }

    // Hiển thị tiêu đề
    titleContainer.innerHTML = `<h1>${escapeHTML(filteredProduct.tenGiaiPhap)}</h1>`;

    // Render ảnh và nút sản phẩm
    const imagesHTML = filteredProduct.khoAnh.map((image, index) => `
        <div class="row mb-4 justify-content-center">
            <div class="shadow rounded-4 col-md-12 text-center">
                <img src="${image}" alt="Ảnh ${index + 1}" class="img-fluid rounded" onerror="this.src='/img/fallback.jpg';" />
            </div>
        </div>
    `).join("");

    detailsContainer.innerHTML = `
        ${imagesHTML}
        <div class="text-center mt-5">
            <a class="btn btn-lg view-products-btn" style="background-color: #3a389b;color: white;" href="${filteredProduct.sanPham}">${filteredProduct.sanPhamBtn}</a>
        </div>
    `;
}

// Hàm thoát ký tự HTML
function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

window.onload = function () {
    renderProducts(GP);
};