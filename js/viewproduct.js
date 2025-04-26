import { danhSachSanPham } from "/js/data.js"; // Đường dẫn đến file chứa danh sách sản phẩm

// Lấy 'maso' từ URL
function getMaSoFromURL() {
    const params = new URLSearchParams(window.location.search);
    const maso = params.get("maso");
    return maso ? Number(maso) : null;
}

function hienThiSanPham(sp) {
    let html = `
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                        <img class="card-img-top mb-4 mb-md-0" 
                             src="${sp.urlAnh}" alt="${sp.TenSP}" />
                    </div>
                    <div class="col-md-6">
                        <h2 class="display-5 fw-bolder">${sp.TenSP}</h2>
                        <h3 class="mt-3 text-secondary">Chức năng:</h3>
                        <ul class="list-unstyled">
                            ${sp.chucNang.map(ch => `<li>- ${ch.CongDung}</li>`).join("")}
                        </ul>
                        <button class="btn btn-dark flex-shrink-0 mt-3" type="button">
                            <i class="bi bi-cart-fill me-1"></i>
                            Liên hệ mua ngay: 04.3998 2277
                        </button>
                        <div class="d-flex mt-4">
                            <h5 class="me-3 text-secondary">Danh mục:</h5>
                            <h5 class="me-3 text-secondary">
                                <a class="text-decoration-none primary" href="${sp.danhMuc}">
                                    ${sp.tenDanhMuc}
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="py-5 bg-light">
            <div class="container px-4 px-lg-5">
                <h3 class="mb-4 text-center text-uppercase fw-bold">Thông số kỹ thuật</h3>
                <table class="table">
                    <tbody>
                        ${sp.thongSo.map(ts => `<tr><td>${ts.ten}</td><td>${ts.giaTri}</td></tr>`).join("")}
                    </tbody>
                </table>
            </div>
        </section>
    `;
    document.getElementById("product-detail").innerHTML = html;
}

function hienThiSanPhamTuongTu(maso) {
    const productContainer = document.getElementById("related-products");
    productContainer.innerHTML = "";

    const filteredProducts = danhSachSanPham.filter(sp => sp.id !== (maso));

    filteredProducts.forEach(sp => {
        let productHTML = `
            <div class="col mb-5">
                <div class="card h-100 shadow-sm">
                    <img class="card-img-top p-3 rounded-top hover-zoom" 
                         src="${sp.urlAnh}" alt="${sp.TenSP}" />
                    <div class="card-body p-4 text-center">
                        <h6 class="fw-medium">${sp.TenSP}</h6>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark mt-auto hover-btn" href="/html/product/productDetail.html?maso=${sp.id}">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    let maso = getMaSoFromURL();
    let product = danhSachSanPham[maso];

    if (product) {
        hienThiSanPham(product);
        hienThiSanPhamTuongTu(maso);
    } else {
        document.getElementById("product-detail").innerHTML = "<p class='text-center text-danger'>Sản phẩm không tồn tại!</p>";
    }
});
