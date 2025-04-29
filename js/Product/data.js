function sanPham() {
    this.id="";
    this.TenSP = "";
    this.chucNang = [];
    this.tenDanhMuc = "";
    this.danhMuc="";
    this.urlAnh = "";
    this.thongSo = [];
}

// Tạo mảng sản phẩm
let SP = new Array(5).fill().map(() => new sanPham());

// Hàm gộp thông số trùng nhau
function gopThongSo(thongSo) {
    let ketQua = [];
    let nhom = {};

    thongSo.forEach(item => {
        if (!nhom[item.ten]) {
            nhom[item.ten] = [];
        }
        nhom[item.ten].push(item.giaTri);
    });

    for (let key in nhom) {
        ketQua.push({ ten: key, giaTri: nhom[key].join("; ") });
    }

    return ketQua;
}

// San pham 0
SP[0].id = 0;
SP[0].TenSP = "Thiết bị cảnh báo cháy"
SP[0].chucNang = [
    { CongDung: "Cảnh báo cháy sớm theo 04 vùng độc lập, có thể mở rộng lên 108 vùng" },
    { CongDung: "Có thể kết nối đầu báo cháy có dây và không dây" },
    { CongDung: "Cảnh báo báo cháy bằng hình thức tại chỗ hoặc từ xa" },
    { CongDung: "Thông báo từ xa qua điện thoại bằng tin nhắn và gọi điện" },
    { CongDung: "Có thể điều khiển: Còi đèn, bơm nước chữa cháy…" },
    { CongDung: "Kết nối mạng, điều khiển giám sát, từ xa." },
];
SP[0].tenDanhMuc = "Thiết bị báo cháy"
SP[0].danhMuc = "/html/product/product.html?thietBiBaoChay"
SP[0].urlAnh = "/img/Products/thiet-bi-canh-bao-chay.png"
SP[0].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "12V,2A" },
    { ten: "Số vùng báo cháy", giaTri: "4 vùng có thể mở rộng đến 128 vùng" },
    { ten: "Điều khiển đầu ra", giaTri: "4 output 220/5A" },
    { ten: "Hiển thị", giaTri: "Đèn Led (nguồn, mạng, tín hiệu)" },
    { ten: "Báo động tại chỗ", giaTri: "Còi đèn" },
    { ten: "Báo động từ xa", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Vật liệu", giaTri: "Nhựa chống cháy, cao su chịu nhiệt" },
    { ten: "Màu", giaTri: "Trắng/đen" },
]

// Sản phẩm 1
SP[1].id = 1;
SP[1].TenSP = "Thiết bị access control - Slock";
SP[1].chucNang = [
    { CongDung: "Hỗ trợ đóng mở cửa thông minh từ xa" },
    { CongDung: "Phân quyền và kiểm soát lịch sử người vào ra" },
    { CongDung: "Cảnh báo khi có đột nhập trái phép" },
    { CongDung: "Cảnh báo nguy cơ cháy nổ" }
];
SP[1].tenDanhMuc = "Thiết bị cảnh báo";
SP[1].danhMuc = "/html/product/product.html?thietBiCanhBao"
SP[1].urlAnh = "/img/Products/thiet-bi-access-control-slock-1.jpg";
SP[1].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "12V,2A" },
    { ten: "Điều khiển đầu ra", giaTri: "02 output 220v/5A" },
    { ten: "Kết nối khóa không dây", giaTri: "RF" },
    { ten: "Hiển thị", giaTri: "Đèn Led (nguồn, mạng, tín hiệu)" },
    { ten: "Báo động tại chỗ", giaTri: "Còi đèn" },
    { ten: "Báo động từ xa", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Apps", giaTri: "Android, IOS" },
    { ten: "Vật liệu", giaTri: "Nhựa chống cháy, cao su chịu nhiệt" },
    { ten: "Màu", giaTri: "Trắng/đen" },
];

// Sản phẩm 2
SP[2].id = 2;
SP[2].TenSP = "Thiết bị giám sát, điều khiển trạm dữ liệu";
SP[2].chucNang = [
    { CongDung: "Thu thập dữ liệu từ cảm biến, thiết bị giám sát..." },
    { CongDung: "Cấu hình, cài đặt đơn giản dễ dàng" },
    { CongDung: "Hiển thị, cài đặt giá trị trên màn hình LCD" },
    { CongDung: "Cảnh báo alarm tại chỗ: cảnh báo cháy, mở cửa, ngưỡng giá trị đặt,..." },
    { CongDung: "Quản lý giám sát từ xa bằng IP,4G,SMS" },
];
SP[2].tenDanhMuc = "Thiết bị quan trắc";
SP[2].danhMuc = "/html/product/product.html?thietBiQuanTrac"
SP[2].urlAnh = "/img/Products/thiet-bi-giam-sat-tram-du-lieu.png";
SP[2].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "8 VDC - 30 VDC" },
    { ten: "Dung lượng bộ nhớ trong", giaTri: "640kB, mở rộng bộ nhớ ngoài từ 2GB trở lên" },
    { ten: "Cổng tín hiệu Analog đầu vào", giaTri: "Cổng 0 - 5 V: 3 cổng" },
    { ten: "Cổng tín hiệu Analog đầu vào", giaTri: "Cổng 0 - 20 mA: 3 cổng" },
    { ten: "Đầu vào tín hiệu số", giaTri: "Cổng đo tần số: 3,0 Hz – 10 Khz : 2 cổng" },
    { ten: "Đầu vào tín hiệu số", giaTri: "Cổng đếm tần số: 300 Hz -10 Khz : 2 cổng" },
    { ten: "Cổng SDI-12", giaTri: "Còi đèn" },
    { ten: "Cổng 12V-SW", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Cổng điện áp kích thích", giaTri: "1 cổng trigger up, 1 trigger down" },
    { ten: "Chuẩn định dạng dữ liệu đầu ra", giaTri: "ASCII" },
    { ten: "Cổng giao tiếp tiêu chuẩn", giaTri: "RS-232; RS-485; TCP/IP, UDP; via GPRS,3G; SMS" },
    { ten: "Đồng hồ thời gian RTC", giaTri: "Sử dụng nguồn pin lắp bên trong thiết bị, loại Lithium" },
    { ten: "Đồng hồ thời gian RTC", giaTri: "Tuổi thọ của Pin ≥ 01 năm" },
    { ten: "Điều kiện môi trường hoạt động", giaTri: "Dải nhiệt độ hoạt động: -10 °C – 60 °C" },
    { ten: "Điều kiện môi trường hoạt động", giaTri: "Dải độ ẩm hoạt động: 0-100 % RH" },
    { ten: "Hiển thị trạng thái", giaTri: "Hiển thị trạng thái, cảnh báo trên màn hình LCD, có các đèn LED báo hiệu trạng thái hoạt động của thiết bị." },
    { ten: "Chế độ giao tiếp", giaTri: "3G/4G, Ethernet, wifi (option)" },
    { ten: "Chế độ giao tiếp", giaTri: "Kết nối gửi dữ liệu và cảnh báo về trung tâm theo chuẩn ABIS" },
    { ten: "Phần mềm", giaTri: "Cung cấp phần mềm quản lý giám sát từ xa" },
];

// SP[2].thongSo = gopThongSo(SP[1].thongSo);


// San pham 3
SP[3].id = 3;
SP[3].TenSP = "Thiết bị điều khiển giám sát an ninh";
SP[3].chucNang = [
    { CongDung: "Cảnh báo đột nhập" },
    { CongDung: "Cảnh báo cháy (khói/nhiệt)" },
    { CongDung: "Cảnh báo ngập nước" },
    { CongDung: "Cảnh báo hỗ trợ người già" },
];

SP[3].tenDanhMuc = "Thiết bị cảnh báo";
SP[3].danhMuc = "/html/product/product.html?thietBiCanhBao"
SP[3].urlAnh = "/img/Products/thiet-bi-giam-sat-an-ninh.png"

SP[3].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "12V,2A" },
    { ten: "Số vùng báo cháy", giaTri: "4 vùng có thể mở rộng đến 128 vùng" },
    { ten: "Điều khiển đầu ra", giaTri: "4 output 220/5A" },
    { ten: "Hiển thị", giaTri: "Đèn Led (nguồn, mạng, tín hiệu)" },
    { ten: "Báo động tại chỗ", giaTri: "Còi đèn" },
    { ten: "Báo động từ xa", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Vật liệu", giaTri: "Nhựa chống cháy, cao su chịu nhiệt" },
    { ten: "Màu", giaTri: "Trắng/đen" },
]

// San pham 4
SP[4].id = 4;
SP[4].TenSP = "Thiết bị theo dõi tiêu thụ điện năng";
SP[4].chucNang = [
    { CongDung: "Cảnh báo cháy (khói/nhiệt)" },
    { CongDung: "Cảnh báo ngập nước" },
    { CongDung: "Cảnh báo hỗ trợ người già" },
];

SP[4].tenDanhMuc = "Thiết bị cảnh báo";
SP[4].danhMuc = "/html/product/product.html?thietBiCanhBao"
SP[4].urlAnh = "/img/Products/thiet-bi-giam-sat-an-ninh.png"

SP[4].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "12V,2A" },
    { ten: "Số vùng báo cháy", giaTri: "4 vùng có thể mở rộng đến 128 vùng" },
    { ten: "Điều khiển đầu ra", giaTri: "4 output 220/5A" },
    { ten: "Hiển thị", giaTri: "Đèn Led (nguồn, mạng, tín hiệu)" },
    { ten: "Báo động tại chỗ", giaTri: "Còi đèn" },
    { ten: "Báo động từ xa", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Vật liệu", giaTri: "Nhựa chống cháy, cao su chịu nhiệt" },
    { ten: "Màu", giaTri: "Trắng/đen" },
]

function renderProducts(products) {
    let productContainer = document.getElementById("product-list");
    
    // Kiểm tra xem productContainer có tồn tại không
    if (!productContainer) {
        console.error("Không tìm thấy phần tử product-list");
        return;
    }

    const queryString = window.location.search;
    let filteredProducts;

    if (queryString.includes("?thietBiBaoChay")) {
        filteredProducts = products.slice(0, 1); 
    } else if (queryString.includes("?thietBiCanhBao")) {        
        filteredProducts = [products[1], products[3], products[4]].filter(p => p !== undefined);
    } else if (queryString.includes("?thietBiQuanTrac")) {
        filteredProducts = [products[2]]; 
    } else {
        filteredProducts = products;
    }

    // Kiểm tra nếu không có sản phẩm nào phù hợp
    if (filteredProducts.length === 0) {
        productContainer.innerHTML = '<p class="text-center">Không có sản phẩm nào phù hợp.</p>';
        return;
    }

    productContainer.innerHTML = filteredProducts.map((product) => `
        <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top" src="${product.urlAnh}" alt="${product.TenSP}" />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h6>${product.TenSP}</h6>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="/html/product/productDetail.html?maso=${product.id}">Chi tiết</a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}


window.onload = function () {
    renderProducts(SP);
};

export const danhSachSanPham = SP;
