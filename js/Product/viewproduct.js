import { danhSachSanPham } from "/js/Product/data.js"; // Đường dẫn đến file chứa danh sách sản phẩm

// Lấy 'maso' từ URL
function getMaSoFromURL() {
    const params = new URLSearchParams(window.location.search);
    const maso = params.get("maso");
    return maso ? Number(maso) : null;
}

function hienThiSanPham(sp) {
    let html = `
        <div class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                <div class="col-md-6">
                    <img class="shadow card-img-top mb-4 mb-md-0" 
                         src="${sp.urlAnh}" alt="${sp.TenSP}" />
                </div>
                <div class="col-md-6">
                    <h2 class="text-center display-5 fw-bolder">${sp.TenSP}</h2>
                    <h3 class="mt-3 text-secondary">Chức năng:</h3>
                    <ul class="list-unstyled">
                        ${sp.chucNang.map(ch => `
                            <li style="display: flex; margin-bottom: 10px;">
                                <span style="font-weight: 600; width: 35%;">${ch.tenChucNang}:</span>
                                <span style="width: 65%;">${ch.moTa}</span>
                            </li>
                        `).join("")}
                    </ul>
                    <div class="text-center">
                        <button class="btn btn-dark flex-shrink-0 mt-3 w-100" style="display: inline-block; width: 100%; max-width: 300px; @media (max-width: 767px) { margin: 0 auto; display: block; }">
                            <i class="bi bi-cart-fill me-1"></i>
                            Liên hệ tư vấn: 04.3998 2277
                        </button>
                    </div>
<div class="d-flex justify-content-center mt-4 text-center">
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
        <hr>
    `;
    document.getElementById("product-detail").innerHTML = html;
}

function hienThiSanPhamTuongTu(maso) {
    const productContainer = document.getElementById("related-products");
    productContainer.innerHTML = "";

    const currentProduct = danhSachSanPham.find(sp => sp.id === parseInt(maso));
    if (!currentProduct) return;

    const filteredProducts = danhSachSanPham.filter(
        sp => sp.tenDanhMuc === currentProduct.tenDanhMuc && sp.id !== parseInt(maso)
    );

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = "<p class='text-center'>Không có sản phẩm liên quan cùng danh mục.</p>";
        return;
    }

    filteredProducts.forEach(sp => {
        let productHTML = `
            <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="${sp.urlAnh}" alt="${sp.TenSP}" />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h5>${sp.TenSP}</h5>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="/html/product/productDetail.html?maso=${sp.id}">Xem chi tiết</a>
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