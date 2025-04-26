function sc() {
    this.id = "";
    this.tieuDe = "";
    this.urlAnhs = [];
    this.tenDanhMuc = "";
    this.danhMuc = "";
    this.linkFB = "";
    this.linkTwitter = "";
    this.linkLinkedIn = ""; // Sửa lỗi đánh máy
}

// Tạo mảng securityArray
let securityArray = Array.from({ length: 5 }, () => new sc());

securityArray[0] = { 
    id: 0, 
    tieuDe: "Giải pháp cho hệ thống an ninh ATM", 
    urlAnhs: ["/img/Security/Banner/dv5.jpg", "/img/Security/giai-phap-atm.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "/html/Security/security.html",
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=", 
    linkTwitter: "https://twitter.com/intent/tweet?url=____&text=___", 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=____" 
};
securityArray[1] = { 
    id: 1, 
    tieuDe: "Giải pháp cho hệ thống an ninh siêu thị", 
    urlAnhs: ["/img/Security/Banner/dv-4.jpg","/img/Security/giai-phap-sieu-thi.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "/html/Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=", 
    linkTwitter: "https://twitter.com/intent/tweet?url=____&text=___", 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=____" 
};
securityArray[2] = { 
    id: 2, 
    tieuDe: "Dịch vụ bảo vệ", 
    urlAnhs: ["/img/Security/Banner/dv-3.jpg","/img/Security/SecurityService/guard1.jpg", "/img/Security/SecurityService/luyen-tap1.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "/html/Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=", 
    linkTwitter: "https://twitter.com/intent/tweet?url=____&text=___", 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=____" 
};
securityArray[3] = { 
    id: 3, 
    tieuDe: "Mô hình an ninh nhà riêng", 
    urlAnhs: ["/img/Security/Banner/dv-2.jpg", "/img/Banner/bms/giai-phap-parking.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "/html/Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=", 
    linkTwitter: "https://twitter.com/intent/tweet?url=____&text=___", 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=____" 
};
securityArray[4] = { 
    id: 4, 
    tieuDe: "Mô hình giải pháp cho nhà máy", 
    urlAnhs: ["/img/Security/Banner/mohinhgiaiphapchonhamay.jpg", "/img/Security/giai-phap-nha-may1-1.jpg", "/img/Security/giai-phap-nha-may-2.jpg"], 
    tenDanhMuc: "Dịch vụ an ninh", 
    danhMuc: "/html/Security/security.html", 
    linkFB: "https://www.facebook.com/sharer/sharer.php?u=", 
    linkTwitter: "https://twitter.com/intent/tweet?url=____&text=___", 
    linkLinkedIn: "https://www.linkedin.com/shareArticle?mini=true&url=____" 
};

function renderProducts(products) {
    const productContainer = document.getElementById("security-list");

    if (!productContainer) {
        console.error("Không tìm thấy phần tử có ID 'security-list'");
        return;
    }

    // Tạo DocumentFragment để tối ưu hiệu suất
    const fragment = document.createDocumentFragment();

    products.forEach((sc, i) => {
        const div = document.createElement("div");
        div.className = "col-lg-4 col-md-4 mb-5";
        div.innerHTML = `
            <div class="card h-100 custom-card">
                <img class="card-img-top" src="${sc.urlAnhs[0] || '/img/default.jpg'}" alt="Hình ảnh dịch vụ" />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h6 class="fw-bolder">${sc.tieuDe}</h6>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="/html/Security/securityTemplate.html?maso=${i}">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        `;
        fragment.appendChild(div);
    });

    // Xóa nội dung cũ và thêm fragment
    productContainer.innerHTML = "";
    productContainer.appendChild(fragment);
}

window.onload = function () {
    renderProducts(securityArray);
};

export const danhSachSC = securityArray;