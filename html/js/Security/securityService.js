function sc() {
    this.id = "";
    this.tieuDe = "";
    this.urlAnhs = [];
    this.tenDanhMuc = "";
    this.danhMuc = "";
    this.linkFB = "";
    this.linkTwitter = "";
    this.linkLinkedIn = "";
}

// Khởi tạo mảng securityArray
let securityArray = Array.from({ length: 5 }, () => new sc());

securityArray[0] = { 
    id: 0, 
    tieuDe: "Giải pháp cho hệ thống an ninh ATM", 
    urlAnhs: ["img/Security/Banner/dv5.jpg", "img/Security/giai-phap-atm.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "Security/security.html",
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), 
    linkTwitter: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Giải pháp an ninh ATM"), 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location.href)
};
securityArray[1] = { 
    id: 1, 
    tieuDe: "Giải pháp cho hệ thống an ninh siêu thị", 
    urlAnhs: ["img/Security/Banner/dv-4.jpg", "img/Security/giai-phap-sieu-thi.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), 
    linkTwitter: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Giải pháp an ninh siêu thị"), 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location.href)
};
securityArray[2] = { 
    id: 2, 
    tieuDe: "Dịch vụ bảo vệ", 
    urlAnhs: ["img/Security/Banner/dv-3.jpg", "/img/Security/SecurityService/guard1.jpg", "img/Security/SecurityService/luyen-tap1.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), 
    linkTwitter: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Dịch vụ bảo vệ"), 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location.href)
};
securityArray[3] = { 
    id: 3, 
    tieuDe: "Mô hình an ninh nhà riêng", 
    urlAnhs: ["img/Security/Banner/dv-2.jpg", "img/Banner/bms/giai-phap-parking.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), 
    linkTwitter: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Mô hình an ninh nhà riêng"), 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location.href)
};
securityArray[4] = { 
    id: 4, 
    tieuDe: "Mô hình giải pháp cho nhà máy", 
    urlAnhs: ["img/Security/Banner/mohinhgiaiphapchonhamay.jpg", "img/Security/giai-phap-nha-may1-1.jpg", "img/Security/giai-phap-nha-may-2.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href), 
    linkTwitter: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Giải pháp cho nhà máy"), 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location.href)
};

// Hàm hiển thị dịch vụ chung (ATM, Siêu thị, Nhà riêng)
function hienThiAnhDichVu(sr) {
    return `
        <div class="col-md-6 service-section text-center">
            <img style="border: 1px solid black; border-radius: 20px; height: 300px; object-fit: cover;" class="img-fluid shadow mb-3" src="${sr.urlAnhs[1]}" alt="${sr.tieuDe}" />
            <h5 class="fw-bolder">${sr.tieuDe}</h5>
        </div>
    `;
}

// Hàm hiển thị dịch vụ bảo vệ
function hienThiDichVuBaoVe(sr) {
    return `
        <div class="service-section">
            <div class="row gx-3 gy-4">
                <div class="col-md-12">
                    <div class="card shadow border-0 p-3">
                        <div class="row g-0 align-items-center">
                            <div class="col-md-6">
                                <img src="${sr.urlAnhs[1]}" alt="An ninh" class="fixed-img">
                            </div>
                            <div class="col-md-6 ps-3">
                                <div class="card-body">
                                    <h5 class="card-title fw-bold text-primary">An ninh</h5>
                                    <p class="card-text text-muted">
                                        Ngày nay, nhu cầu về dịch vụ bảo vệ ngày càng cần thiết. Để tìm được một công ty bảo vệ uy tín, chuyên nghiệp thật không đơn giản. Chúng tôi luôn cố gắng làm vừa lòng khách hàng với chất lượng dịch vụ tốt nhất, tin cậy nhất trong lĩnh vực dịch vụ bảo vệ.
                                        Hiện nay chúng tôi đang cung cấp các loại hình dịch vụ:
                                    </p>
                                    <ul class="list-unstyled">
                                        <li> - Dịch vụ bảo vệ nhà máy</li>
                                        <li> - Dịch vụ bảo vệ siêu thị</li>
                                        <li> - Dịch vụ bảo vệ cá nhân</li>                           
                                    </ul>                                    
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
                                    <h5 class="card-title fw-bold text-primary">Huấn luyện</h5>
                                    <p class="text-muted">
                                        Chúng tôi có các chương trình đào tạo chuyên môn nghiệp vụ cho đội ngũ an ninh hết sức bài bản để đảm bảo hiệu quả phục vụ dịch vụ được tốt nhất.
                                    </p>                                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Hàm hiển thị ảnh nhà riêng và nhà máy (trả về mảng HTML để xếp vào row)
function hienThiAnhNhaRiengVaNhaMay() {
    const nhaRieng = securityArray[3];
    const nhaMay = securityArray[4];

    const html = [
        // Ảnh của Mô hình an ninh nhà riêng
        `
        <div class="col-md-4 service-section text-center">
            <img class="img-fluid rounded shadow mb-3" style="height: 300px; object-fit: cover;" src="${nhaRieng.urlAnhs[1]}" alt="${nhaRieng.tieuDe}">
            <h5 class="card-title fw-bold">${nhaRieng.tieuDe}</h5>
        </div>
        `,
        // Ảnh chính của Mô hình giải pháp cho nhà máy
        `
        <div class="col-md-4 service-section text-center">
            <img class="img-fluid rounded shadow mb-3" style="height: 300px; object-fit: cover;" src="${nhaMay.urlAnhs[1]}" alt="${nhaMay.tieuDe}">
            <h5 class="card-title fw-bold">${nhaMay.tieuDe}</h5>
        </div>
        `,
        // Ảnh sơ đồ của Mô hình giải pháp cho nhà máy
        `
        <div class="col-md-4 service-section text-center">
            <img class="img-fluid rounded shadow mb-3" style="height: 300px; object-fit: cover;" src="${nhaMay.urlAnhs[2]}" alt="Sơ đồ đường truyền nhà máy">
            <h5 class="card-title fw-bold">Sơ đồ đường truyền của hệ thống nhà máy</h5>
        </div>
        `
    ];

    return html;
}

// Hàm render tất cả dịch vụ
function renderAllServices() {
    const showContent = document.getElementById("showContent");
    if (!showContent) {
        console.error("Không tìm thấy phần tử showContent");
        return;
    }

    let html = "";

    // Nhóm Giải pháp ATM và Siêu thị vào một hàng
    html += `
    <div class="row gx-4 gx-lg-5">
        ${hienThiAnhDichVu(securityArray[0])}
        ${hienThiAnhDichVu(securityArray[1])}
    </div>
    `;

    html += hienThiDichVuBaoVe(securityArray[2]);

    // Nhóm ảnh của Nhà riêng và Nhà máy vào một hàng
    const nhaRiengVaNhaMayHtml = hienThiAnhNhaRiengVaNhaMay();
    html += `
    <div class="row gx-4 gx-lg-5">
        ${nhaRiengVaNhaMayHtml.join("")}
    </div>
    `;

    showContent.innerHTML = html;
}

// Gọi hàm render khi trang tải
document.addEventListener("DOMContentLoaded", renderAllServices);