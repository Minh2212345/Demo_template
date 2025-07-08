import { danhSachSC } from "/js/Security/securityService.js";

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
                
            </div>
              </div>
            </div>
    `;
    document.getElementById("showContent").innerHTML = html;
}

function hienThiDichVuBaoVe(sr) {
    let html = `
<div class="row gx-3 gy-4">
    <div class="col-md-12">
        <div class="card shadow border-0 p-3">
            <div class="row g-0 align-items-center">
                <div class="col-md-6">
                    <img src="${sr.urlAnhs[1]}" alt="An ninh" class="fixed-img">
                </div>
                <div class="col-md-6 ps-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold text-primary">An ninh</h4>
                        <p class="card-text text-muted">
                            Ngày nay, nhu cầu về dịch vụ bảo ngày càng cần thiết. Để tìm được một công ty bảo vệ uy tín, chuyên nghiệp thật không đơn giản. Chúng tôi luôn cố gắng làm vừa lòng khách hàng với chất lượng dịch vụ tốt nhất, tin cậy nhất  trong lĩnh vực dịch vụ bảo vệ.
                            Hiện nay chúng tôi đang cung cấp các loại hình dịch vụ:
                        </p>
                         <ul class="list-unstyled">
                          <li> - Dịch vụ bảo vệ nhà máy</li>
                          <li> - Dịch vụ bảo vệ nhà máy</li>
                          <li> - Dịch vụ bảo vệ nhà máy</li>                           
                        </ul>
                         <div class="d-flex mt-4">
                            <h5 class="me-3 text-secondary">Danh mục:</h5>
                            <h5 class="me-3 text-secondary">
                            <a class="text-decoration-none primary" href="${sr.danhMuc}">
                            ${sr.tenDanhMuc}
                        </a>
                    </h5>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12">
        <div class="card shadow border-0 p-3">
            <div class="row g-0 align-items-center">
                <div class="col-md-6">
                    <img src="${sr.urlAnhs[2]}" alt="Huấn luyện" class="fixed-img">
                </div>
                <div class="col-md-6 ps-3">
                    <div class="card-body">
                        <h4 class="card-title fw-bold text-primary">Huấn luyện</h4>
                        <p class="text-muted">
                            Chúng tôi có các chương trình đào tạo chuyên môn nghiệp vụ cho đội ngũ an ninh hết sức bài bản để đảm bảo hiệu quả phục vụ dịch vụ được tốt nhất.
                        </p>    
                         <div class="d-flex mt-4">
                            <h5 class="me-3 text-secondary">Danh mục:</h5>
                            <h5 class="me-3 text-secondary">
                            <a class="text-decoration-none primary" href="${sr.danhMuc}">
                            ${sr.tenDanhMuc}
                        </a>
                    </h5>
                </div>                   
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</div>

    `;
    document.getElementById("showContent").innerHTML = html;
}


function hienThiDichVuNhaMay(sr) {
    let html = `
    <div class="container">
        <div class="row align-items-center gy-4">
            <div class="col-lg-6">
                <img src="${sr.urlAnhs[1]}" class="img-fluid rounded shadow" alt="giải pháp cho nhà máy">
            </div>
            <div class="col-lg-6">
                <h2 class="card-title fw-bold"> Mô hình giải pháp cho nhà máy</h2>
                 <div class="d-flex mt-4">
                    <h5 class="me-3 text-secondary">Danh mục:</h5>
                    <h5 class="me-3 text-secondary">
                        <a class="text-decoration-none primary" href="${sr.danhMuc}">
                            ${sr.tenDanhMuc}
                        </a>
                    </h5>
                </div>
            </div>
        </div>        
    </div>

    <div class="container" style="margin-top: 20px;">
    <div class="row align-items-center gy-4">
            <div class="col-lg-6">
                <img src="${sr.urlAnhs[2]}" class="img-fluid rounded shadow" alt="giải pháp cho nhà máy">
            </div>
            <div class="col-lg-6">
                <h3 class="card-title fw-bold">Sơ đồ đường truyền của hệ thống nhà máy</h3>
                 <div class="d-flex mt-4">
                    <h5 class="me-3 text-secondary">Danh mục:</h5>
                    <h5 class="me-3 text-secondary">
                        <a class="text-decoration-none primary" href="${sr.danhMuc}">
                            ${sr.tenDanhMuc}
                        </a>
                    </h5>
                </div>
            </div>
        </div>
    </div>

`;
    document.getElementById("showContent").innerHTML = html;
}


function hienThiDichVuTuongTu(maso) {
    const productContainer = document.getElementById("related-SecurityService");
    productContainer.innerHTML = "";

    const filteredProducts = danhSachSC.filter(sr => sr.id !== (maso));

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
                            <a class="btn btn-outline-dark mt-auto hover-btn" href="Security/securityTemplate.html?maso=${sr.id}">Xem chi tiết</a>
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
    let service = danhSachSC[maso];

    if (service && maso !== 2 && maso !== 4) {
        hienThiAnhDichVu(service);
        hienThiDichVuTuongTu(maso);
    } else if (service && maso == 2) {
        hienThiDichVuBaoVe(service);
        hienThiDichVuTuongTu(maso);
    } else if (service && maso == 4) {
        hienThiDichVuNhaMay(service);
        hienThiDichVuTuongTu(maso);
    }
    else {
        document.getElementById("product-detail").innerHTML = "<p class='text-center text-danger'>Sản phẩm không tồn tại!</p>";
    }
});
