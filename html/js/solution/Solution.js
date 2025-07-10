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
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966998/1_epcu9p.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966990/2_gdbn2p.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966988/3_jdhlff.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966999/4_joi9hq.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966999/4_joi9hq.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966980/6_nybzfc.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966991/7_euerbk.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966992/8_rvs6ca.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966996/9_ejigue.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966996/9_ejigue.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966975/11_jozkff.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966983/12_pyfkqo.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966989/13_t8mrbp.jpg"
];
GP[0].sanPham = "../product/product.html?thietBiBaoChay";
GP[0].sanPhamBtn = "Thiết bị phòng cháy - chữa cháy";

// Gán dữ liệu cho giải pháp 1 (quan trắc khí tượng thủy văn)
GP[1].id = 1;
GP[1].tenGiaiPhap = "Giới thiệu dịch vụ quan trắc khí tượng thủy văn";
GP[1].khoAnh = [
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966963/1_uruf5f.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966973/2_s0kpi2.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966960/3_sbaag8.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966970/4_qzuf9z.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966967/5_htjbot.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966968/6_iccyze.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966987/7_hn26xb.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966985/8_ok78gh.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966979/9_jrjjog.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966964/10_r1gpp8.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966964/10_r1gpp8.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966957/12_turuw5.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966954/13_nvtkxb.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966958/14_kshh59.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966961/15_pqgfu2.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966971/16_zzropu.jpg",
    "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966959/17_kes4fi.jpg"
    
];
GP[1].sanPham = "../product/product.html?thietBiQuanTrac";
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