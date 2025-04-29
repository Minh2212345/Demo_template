import { danhSachBMS } from "/js/BuildingService/buidingServicesHome.js"; // Đường dẫn đến file chứa danh sách sản phẩm

function getMaSoFromURL() {
    const params = new URLSearchParams(window.location.search);
    const maso = params.get("maso");
    return maso ? Number(maso) : null;
}


function hienThiAnhDichVu(sr) {
    let html = `
    <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center" id="service-detail">
            <div class="col-md-7">
                <img style="border: 1px solid black; border-radius: 20px;" class="card-img-top mb-4 mb-md-0" src="${sr.urlAnhs[1]}" alt="${sr.tieuDe}" />
            </div>
            <div class="col-md-5">
                <h2 class="display-5 fw-bolder">${sr.tieuDe}</h2>
                
                <div class="d-flex mt-4">
                    <h5 class="me-3 text-secondary">Danh mục:</h5>
                    <h5 class="me-3 text-secondary">
                        <a class="text-decoration-none primary" href="${sr.danhMuc}">
                            ${sr.tenDanhMuc}
                        </a>
                    </h5>
                </div>

                <div class="d-flex align-items-center gap-3 mt-4">
                    <span class="fw-bold">Chia sẻ:</span>
                    <a href="${sr.linkFB}" class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="${sr.linkTwitter}" class="btn btn-outline-info rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="${sr.linkLikendi}" class="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                        <i class="fab fa-linkedin-in"></i>
                    </a>                            
                </div>
            </div>
              </div>
            </div>
    `;
    document.getElementById("showContent").innerHTML = html;
}

function hienThiDichVuBaoTri(sr) {
    let html = `
   <style>
    .fixed-img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        border-radius: 8px;
    }
</style>

<div class="row gx-3 gy-4">
    <!-- Phần 1: Bảo dưỡng -->
    <div class="col-md-12">
        <div class="card shadow border-0 p-3">
            <div class="row g-0 align-items-center">
                <div class="col-md-6">
                    <img src="${sr.urlAnhs[1]}" alt="Bảo dưỡng" class="fixed-img">
                </div>
                <div class="col-md-6 ps-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold text-primary">Bảo dưỡng</h4>
                        <p class="card-text text-muted">
                            Bảo dưỡng giúp cắt giảm chi phí vận hành, giảm tổn hao, tăng tuổi thọ cho thiết bị máy móc...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Phần 2: Bảo trì điện -->
    <div class="col-md-12">
        <div class="card shadow border-0 p-3">
            <div class="row g-0 align-items-center">
                <div class="col-md-6">
                    <img src="${sr.urlAnhs[2]}" alt="Bảo trì điện" class="fixed-img">
                </div>
                <div class="col-md-6 ps-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold text-primary">Bảo trì điện</h4>
                        <p class="text-muted">
                            AKS xây dựng sự hợp tác lâu dài bằng cách cung cấp dịch vụ hỗ trợ chuyên nghiệp...
                        </p>
                        <ul class="list-unstyled">
                            <li> - Bảo dưỡng phòng ngừa</li>
                            <li> - Khắc phục sự cố</li>
                            <li> - Cung cấp thay thế phụ kiện</li>
                            <li> - Cải tạo nâng cấp</li>
                            <li> - Khảo sát thiết kế</li>
                            <li> - Vận hành chạy thử</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Phần 3: Bảo trì nước -->
    <div class="col-md-12">
        <div class="card shadow border-0 p-3">
            <div class="row g-0 align-items-center">
                <div class="col-md-6 pe-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold text-primary">Bảo trì nước</h4>
                        <p class="text-muted">
                            Những lĩnh vực chúng tôi tham gia:
                        </p>
                        <ul class="list-unstyled">
                            <li> - Điều hòa thông gió</li>
                            <li> - Hệ thống điện</li>
                            <li> - Máy phát điện</li>
                            <li> - CCTV, PAS, Network</li>
                            <li> - Hệ thống nước (bơm, xử lý nước,...)</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="${sr.urlAnhs[3]}" alt="Bảo trì nước" class="fixed-img">
                </div>
            </div>
        </div>
    </div>
</div>

    `;
    document.getElementById("showContent").innerHTML = html;
}

function hienThiDichVuAnNinh(sr) {
    let html = `
    <div class="container">
        <h2 class="text-center fw-bold mb-4">Quy tắc bảo vệ tòa nhà</h2>
        <div class="row align-items-center gy-4">
            <div class="col-lg-6">
                <img src="${sr.urlAnhs[1]}" class="img-fluid rounded shadow" alt="Nhân viên bảo vệ">
            </div>
            <div class="col-lg-6">
                <ul class="list-group">
                    <li class="list-group-item border-0">
                    Nhân viên bảo vệ thể hiện tác phong lịch sự, chuyên nghiệp chào đón khách.
                    </li>
                    <li class="list-group-item border-0">
                    Nghiêm cấm mang vật nguy hiểm như súng, dao, chất cháy nổ hoặc hàng cấm.
                    </li>
                    <li class="list-group-item border-0">
                    Công nhân viên phải tuân thủ nội quy của ban quản lý tòa nhà.
                    </li>
                    <li class="list-group-item border-0">
                    Nhân viên bảo vệ hỗ trợ, hướng dẫn khách sử dụng thang máy và đến các khu vực cần thiết.
                    </li>
                    <li class="list-group-item border-0">
                    Bình tĩnh phối hợp xử lý sự cố hỏa hoạn một cách hiệu quả.
                    </li>
                    <li class="list-group-item border-0">
                    Tuần tra, giám sát thi công, đảm bảo an ninh trật tự.
                    </li>
                    <li class="list-group-item border-0">
                     Quan sát và đảm bảo an toàn tài sản trong phạm vi khu vực trực.
                    </li>
                </ul>
            </div>
        </div>
    </div>
`;
    document.getElementById("showContent").innerHTML = html;
}

function hienThiDichVuTuongTu(maso) {
    const productContainer = document.getElementById("related-BMSService");
    productContainer.innerHTML = "";

    const filteredProducts = danhSachBMS.filter(sr => sr.id !== (maso));

    filteredProducts.forEach(sr => {
        let productHTML = `
            <div class="col mb-5">
                <div class="card h-100 shadow-sm">
                    <img class="card-img-top p-3 rounded-top hover-zoom" 
                         src="${sr.urlAnhs[0]}" alt="${sr.tieuDe}" />
                    <div class="card-body p-4 text-center">
                        <h6 class="fw-medium">${sr.tieuDe}</h6>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark mt-auto hover-btn" href="html/buildingServices/bmsTemplate.html?maso=${sr.id}">Xem chi tiết</a>
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
    let service = danhSachBMS[maso];

    if (service && maso !== 2 && maso !== 4) {
        hienThiAnhDichVu(service);
        hienThiDichVuTuongTu(maso);
    } else if (service && maso == 2) {
        hienThiDichVuBaoTri(service);
        hienThiDichVuTuongTu(maso);
    } else if (service && maso == 4) {
        hienThiDichVuAnNinh(service);
        hienThiDichVuTuongTu(maso);
    }
    else {
        document.getElementById("product-detail").innerHTML = "<p class='text-center text-danger'>Sản phẩm không tồn tại!</p>";
    }
});
