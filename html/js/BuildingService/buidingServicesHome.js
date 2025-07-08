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

bmsArray[0] = { id: 0, tieuDe: "Xây dựng hệ thống an ninh tòa nhà", urlAnhs: ["../img/Banner/bms/hethonganninhtoanha.jpg","../img/Banner/bms/cotrol-building.jpg"], tenDanhMuc: "BMS - Building Managent System", danhMuc: "buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____"};
bmsArray[1] = { id: 1, tieuDe: "Tích hợp các hệ thống an toàn và tiết kiệm", urlAnhs: ["../img/Banner/bms/antoantietkiemdien.jpg","../img/Banner/bms/giai-phapDien.jpg"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[2] = { id: 2, tieuDe: "Dịch vụ bảo trì & sửa chữa dịch vụ", urlAnhs: ["../img/Banner/bms/baotrisuachua.jpg","../img/Banner/bms/bao-tri1.jpg","../img/Banner/bms/bao-tri2.jpg","../img/Banner/bms/bao-tri3.jpg"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[3] = { id: 3, tieuDe: "Phương án an ninh đỗ xe tòa nhà", urlAnhs:["../img/Banner/bms/anninhdoxetoanha.jpg","../img/Banner/bms/giai-phap-parking.jpg"] ,tenDanhMuc: "BMS - Building Managent System", danhMuc: "buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[4] = { id: 4, tieuDe: "Phương án bảo vệ an ninh tòa nhà cao ốc", urlAnhs: ["../img/Banner/bms/baovetoanhacaooc.jpg","../img/Banner/bms/bao-ve-toa-nha1.jpg"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };
bmsArray[5] = { id: 5, tieuDe: "Giám sát điện", urlAnhs: ["../img/Banner/bms/giamSatDien.png"],tenDanhMuc: "BMS - Building Managent System", danhMuc: "buildingServices/bms.html",linkFB:"https://www.facebook.com/sharer/sharer.php?u=",linkTwitter:"https://twitter.com/intent/tweet?url=____&text=___",linkLikendi:"https://www.linkedin.com/shareArticle?mini=true&url=____" };


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
    