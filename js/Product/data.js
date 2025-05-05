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
let SP = new Array(10).fill().map(() => new sanPham());

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
SP[0].urlAnh = "/img/Products/FireProduct/tu_trung_tam.jpg"
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


// Thiết bị báo cháy
// San pham 5
SP[5].id = 5;
SP[5].TenSP = "Thiết bị truyền tin báo cháy"
SP[5].chucNang = [
    { CongDung: "Kết nối với Tủ trung tâm báo cháy: Là thiết bị ngoại vi, kết nối trực tiếp để truyền tin báo cháy." },
    { CongDung: "Truyền thông tin kịp thời: Gửi thông báo đến các bên liên quan để điều phối, xử lý và khắc phục sự cố." },
    { CongDung: "Đa dạng kênh kết nối: Hỗ trợ nhiều phương thức truyền tin (SMS, Call, 4G, LAN, Wifi), đảm bảo liên tục và tin cậy." },
    { CongDung: "Thông báo từ xa qua điện thoại bằng tin nhắn và gọi điện" },
    { CongDung: "Tương thích cao: Kết nối được với hầu hết các Tủ trung tâm báo cháy thông dụng trên thị trường." },
    { CongDung: "Dễ dàng nâng cấp: Thiết kế và sản xuất chủ động, cho phép cập nhật, nâng cấp phần mềm, kéo dài thời gian sử dụng." },
];
SP[5].tenDanhMuc = "Thiết bị báo cháy"
SP[5].danhMuc = "/html/product/product.html?thietBiBaoChay"
SP[5].urlAnh = "/img/Products/FireProduct/thiet-bi-truyen-tin-bao-chay.jpg"

// San pham 6
SP[6].id = 6;
SP[6].TenSP = "Đầu báo khói quang điện độc lập"
SP[6].chucNang = [
    { CongDung: "Phát hiện khói bằng công nghệ quang điện: Sử dụng đi-ốt hồng ngoại để phát hiện khói dựa trên nguyên tắc phản xạ ánh sáng hồng ngoại bởi các hạt khói." },
    { CongDung: "Buồng cảm biến đặc biệt: Che chắn ánh sáng bên ngoài nhưng cho phép khói đi vào, đảm bảo độ nhạy và chính xác." },
    { CongDung: "Hoạt động độc lập: Không cần kết nối với Tủ Trung tâm, phù hợp cho các hệ thống đơn giản." },
    { CongDung: "Sản xuất bằng công nghệ SMT: Đảm bảo độ ổn định cao và chất lượng đáng tin cậy." },
    { CongDung: "Dòng chờ thấp: Tiết kiệm năng lượng khi ở trạng thái chờ." },
    { CongDung: "Hai đèn LED báo cháy: Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (360°)." },
    { CongDung: "Chống nhiễu: Bảo vệ chống côn trùng, bụi và ánh sáng trắng, giảm báo động giả." },
    { CongDung: "Cảnh báo điện áp thấp: Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động." },
    { CongDung: "Đèn báo đa chức năng: Hiển thị cảnh báo flash và tín hiệu pin yếu." },
    { CongDung: "Nút Kiểm tra/Im lặng: Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần." },
];
SP[6].tenDanhMuc = "Thiết bị báo cháy"
SP[6].danhMuc = "/html/product/product.html?thietBiBaoChay"
SP[6].urlAnh = "/img/Products/FireProduct/dau-bao-khoi.jpg"

// San pham 7
SP[7].id = 7;
SP[7].TenSP = "Đầu báo khói quang điện không dây"
SP[7].chucNang = [
    { CongDung: "Phát hiện khói bằng công nghệ quang điện: Sử dụng đi-ốt hồng ngoại để phát hiện khói dựa trên nguyên tắc phản xạ ánh sáng hồng ngoại bởi các hạt khói." },
    { CongDung: "Buồng cảm biến đặc biệt: Che chắn ánh sáng bên ngoài nhưng cho phép khói đi vào, đảm bảo độ nhạy và chính xác." },
    { CongDung: "Kết nối không dây có địa chỉ: Cho phép xác định vị trí cụ thể của đầu báo trong hệ thống, hỗ trợ quản lý hiệu quả." },
    { CongDung: "Sản xuất bằng công nghệ SMT: Đảm bảo độ ổn định cao và chất lượng đáng tin cậy." },
    { CongDung: "Dòng chờ thấp: Tiết kiệm năng lượng khi ở trạng thái chờ." },
    { CongDung: "Hai đèn LED báo cháy: Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (370°)." },
    { CongDung: "Chống nhiễu: Bảo vệ chống côn trùng, bụi và ánh sáng trắng, giảm báo động giả." },
    { CongDung: "Cảnh báo điện áp thấp: Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động." },
    { CongDung: "Đèn báo đa chức năng: Hiển thị cảnh báo flash và tín hiệu pin yếu." },
    { CongDung: "Nút Kiểm tra/Im lặng: Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần." },
];
SP[7].tenDanhMuc = "Thiết bị báo cháy"
SP[7].danhMuc = "/html/product/product.html?thietBiBaoChay"
SP[7].urlAnh = "/img/Products/FireProduct/dau-bao-khoi.jpg"

// San pham 8
SP[8].id = 8;
SP[8].TenSP = "Đầu báo nhiệt độc lập loại thường"
SP[8].chucNang = [
    { CongDung: "Phát hiện nhiệt độ cố định: Sử dụng nhiệt điện trở để phát hiện nhiệt độ vượt ngưỡng, phù hợp cho gia đình và khu vực thương mại." },
    { CongDung: "Nguyên lý hoạt động bằng nhiệt điện trở: Nhiệt điện trở đọc nhiệt độ từ luồng không khí và truyền tín hiệu đến MCU để kích hoạt báo động khi vượt điểm dừng." },
    { CongDung: "Vỏ thiết kế đặc biệt: Bảo vệ nhiệt điện trở, đồng thời tối ưu hóa luồng không khí để đảm bảo độ nhạy." },
    { CongDung: "Hoạt động độc lập: Không cần kết nối với Tủ Trung tâm, phù hợp cho các hệ thống đơn giản." },
    { CongDung: "Sản xuất bằng công nghệ SMT: Đảm bảo độ ổn định cao và chất lượng đáng tin cậy." },
    { CongDung: "Dòng chờ thấp: Tiết kiệm năng lượng khi ở trạng thái chờ." },
    { CongDung: "Hai đèn LED báo cháy: Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (360°)." },
    { CongDung: "Chống nhiễu: Bảo vệ chống côn trùng, bụi và ánh sáng trắng, giảm báo động giả." },
    { CongDung: "Cảnh báo điện áp thấp: Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động." },
    { CongDung: "Đèn báo đa chức năng: Hiển thị cảnh báo flash và tín hiệu pin yếu." },
    { CongDung: "Nút Kiểm tra/Im lặng: Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần." },
];
SP[8].tenDanhMuc = "Thiết bị báo cháy"
SP[8].danhMuc = "/html/product/product.html?thietBiBaoChay"
SP[8].urlAnh = "/img/Products/FireProduct/dau-bao-nhiet.jpg"

// San pham 9
SP[9].id = 9;
SP[9].TenSP = "Đầu báo nhiệt không dây"
SP[9].chucNang = [
    { CongDung: "Phát hiện nhiệt độ cố định: Sử dụng nhiệt điện trở để phát hiện nhiệt độ vượt ngưỡng, phù hợp cho gia đình và khu vực thương mại." },
    { CongDung: "Nguyên lý hoạt động bằng nhiệt điện trở: Nhiệt điện trở đọc nhiệt độ từ luồng không khí và truyền tín hiệu đến MCU để kích hoạt báo động khi vượt điểm dừng." },
    { CongDung: "Vỏ thiết kế đặc biệt: Bảo vệ nhiệt điện trở, đồng thời tối ưu hóa luồng không khí để đảm bảo độ nhạy." },
    { CongDung: "Kết nối không dây: Hỗ trợ triển khai linh hoạt mà không cần dây nối." },
    { CongDung: "Hai đèn LED báo cháy: Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (360°)." },
    { CongDung: "Sản xuất bằng công nghệ SMT: Đảm bảo độ ổn định cao và chất lượng đáng tin cậy." },
    { CongDung: "Dòng chờ thấp: Tiết kiệm năng lượng khi ở trạng thái chờ." },
    { CongDung: "Chống nhiễu: Bảo vệ chống nhiễu tần số vô tuyến (RFI), nhiễu điện từ (EMI), côn trùng, bụi và ánh sáng trắng, giảm báo động giả." },
    { CongDung: "Cảnh báo điện áp thấp: Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động." },
    { CongDung: "Đèn báo đa chức năng: Hiển thị cảnh báo flash và tín hiệu pin yếu." },
    { CongDung: "Nút Kiểm tra/Im lặng: Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần." },
];
SP[9].tenDanhMuc = "Thiết bị báo cháy"
SP[9].danhMuc = "/html/product/product.html?thietBiBaoChay"
SP[9].urlAnh = "/img/Products/FireProduct/dau-bao-nhiet.jpg"

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
        filteredProducts = [products[0], products[5], products[6],products[7],products[8],products[9]].filter(p => p !== undefined);
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
                        <h5>${product.TenSP}</h5>
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
