function bms() {
    this.id = "";
    this.tieuDe = "";
    this.urlAnhs = [];
    this.tenDanhMuc="";
    this.danhMuc="";
    this.linkFB="";
    this.linkTwitter="";
    this.linkLikendi="";
}

let bmsArray = Array.from({ length: 6 }, () => new bms());

bmsArray[0] = { id: 0, tieuDe: "Hệ thống an ninh tòa nhà", urlAnhs: ["https://res.cloudinary.com/di33kl2zd/image/upload/v1751966862/hethonganninhtoanha_ghu8vf.jpg","https://res.cloudinary.com/di33kl2zd/image/upload/v1751966859/cotrol-building_yneryd.jpg"], tenDanhMuc: "BMS - Building Managent System", danhMuc: "../buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____"};
bmsArray[1] = { id: 1, tieuDe: "Tích hợp các hệ thống an toàn và tiết kiệm", urlAnhs: ["https://res.cloudinary.com/di33kl2zd/image/upload/v1751966852/antoantietkiemdien_eyisvq.jpg","https://res.cloudinary.com/di33kl2zd/image/upload/v1751966861/giai-phapDien_dtae7y.jpg"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "../buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[2] = { id: 2, tieuDe: "Dịch vụ bảo trì & sửa chữa dịch vụ", urlAnhs: ["https://res.cloudinary.com/di33kl2zd/image/upload/v1751966857/baotrisuachua_ledu94.jpg","https://res.cloudinary.com/di33kl2zd/image/upload/v1751966852/bao-tri1_amujid.jpg","https://res.cloudinary.com/di33kl2zd/image/upload/v1751966854/bao-tri2_upebev.jpg","https://res.cloudinary.com/di33kl2zd/image/upload/v1751966855/bao-tri3_cugehj.jpg"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "../buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[3] = { id: 3, tieuDe: "Phương án an ninh đỗ xe tòa nhà", urlAnhs:["https://res.cloudinary.com/di33kl2zd/image/upload/v1751966851/anninhdoxetoanha_pdjyu5.jpg","https://res.cloudinary.com/di33kl2zd/image/upload/v1751966860/giai-phap-parking_q0tbne.jpg"] ,tenDanhMuc: "BMS - Building Managent System", danhMuc: "../buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[4] = { id: 4, tieuDe: "Phương án bảo vệ an ninh tòa nhà cao ốc", urlAnhs: ["https://res.cloudinary.com/di33kl2zd/image/upload/v1751966859/baovetoanhacaooc_dx5j6b.jpg","https://res.cloudinary.com/di33kl2zd/image/upload/v1751966855/bao-ve-toa-nha1_jiqfsg.jpg"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "../buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[5] = { id: 5, tieuDe: "Giám sát điện", urlAnhs: ["https://res.cloudinary.com/di33kl2zd/image/upload/v1751966861/giamSatDien_boijxf.png"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };


function renderProducts(products) {
    let productContainer = document.getElementById("bms-list");

    if (!productContainer) {
        console.error("Không tìm thấy phần tử có ID 'bms-list'");
        return;
    }

    productContainer.innerHTML = products.map((bms,i) => `
        <div class="col-lg-4 col-md-4 mb-5">
            <div class="card h-100 custom-card">
                <img class="card-img-top" src="${bms.urlAnhs[0]}" alt="Hình ảnh sản phẩm" />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h6 class="fw-bolder">${bms.tieuDe}</h6>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="../buildingServices/bmsTemplate.html?maso=${i}">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

window.onload = function () {
    renderProducts(bmsArray);
};

export const danhSachBMS = bmsArray;
    