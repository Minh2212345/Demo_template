function sanPham() {
    this.id = "";
    this.TenSP = "";
    this.chucNang = [];
    this.tenDanhMuc = "";
    this.danhMuc = "";
    this.urlAnh = "";
    this.thongSo = [];
}

// Tạo mảng sản phẩm
let SP = new Array(17).fill().map(() => new sanPham());

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

// Thiết bị khí tượng thủy văn
SP[0].id = 0;
SP[0].TenSP = "Thiết bị giám sát, điều khiển trạm dữ liệu";
SP[0].chucNang = [
    { tenChucNang: "Thu thập dữ liệu", moTa: "Thu thập dữ liệu từ cảm biến, thiết bị giám sát..." },
    { tenChucNang: "Cấu hình dễ dàng", moTa: "Cấu hình, cài đặt đơn giản dễ dàng" },
    { tenChucNang: "Hiển thị trên LCD", moTa: "Hiển thị, cài đặt giá trị trên màn hình LCD" },
    { tenChucNang: "Cảnh báo tại chỗ", moTa: "Cảnh báo alarm tại chỗ: cảnh báo cháy, mở cửa, ngưỡng giá trị đặt,..." },
    { tenChucNang: "Quản lý từ xa", moTa: "Quản lý giám sát từ xa bằng IP, 4G, SMS" },
];
SP[0].tenDanhMuc = "Thiết bị quan trắc";
SP[0].danhMuc = "../product/product.html?thietBiQuanTrac";
SP[0].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966981/thiet-bi-giam-sat-tram-du-lieu_sncfzr.png";
SP[0].thongSo = [
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

SP[1].id = 1;
SP[1].TenSP = "Thiết bị thu thập dữ liệu Datalogger BKS 1905";
SP[1].chucNang = [
    {
        tenChucNang: "Tích hợp đa cảm biến",
        moTa: "Kết nối được nhiều loại cảm biến như nhiệt ẩm, áp suất, đo gió, đo mưa, mực nước."
    },
    {
        tenChucNang: "Hỗ trợ nhiều chuẩn tín hiệu",
        moTa: "Tương thích với các tín hiệu analog (điện áp, dòng điện), digital, RS232, RS485,..."
    },
    {
        tenChucNang: "Bộ nhớ trong dung lượng lớn",
        moTa: "Bộ nhớ trong 16MB có thể lưu trữ dữ liệu từ 6 tháng đến 1 năm."
    },
    {
        tenChucNang: "Truy xuất dữ liệu linh hoạt",
        moTa: "Có thể lấy dữ liệu tại chỗ hoặc đẩy dữ liệu về trung tâm theo mô hình quản lý tập trung."
    },
    {
        tenChucNang: "Hỗ trợ kết nối server",
        moTa: "Có thể cài đặt 3 địa chỉ server để gửi dữ liệu tự động."
    }
];
SP[1].tenDanhMuc = "Thiết bị quan trắc";
SP[1].danhMuc = "../product/product.html?thietBiQuanTrac";
SP[1].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966993/dataloggerM_p8ktel.png";

SP[2].id = 2;
SP[2].TenSP = "Thiết bị thu thập dữ liệu Datalogger BKS 1905-M";
SP[2].chucNang = [
    { tenChucNang: "Đo lượng mưa chính xác", moTa: "Thiết bị có độ chính xác cao trong việc đo lượng mưa." },
    { tenChucNang: "Chống chịu thời tiết", moTa: "Thiết bị bền bỉ, hoạt động ổn định trong điều kiện thời tiết khắc nghiệt." },
    { tenChucNang: "Giá thành cạnh tranh", moTa: "Giá thấp hơn so với các thiết bị tương đương từ các hãng quốc tế." },
    { tenChucNang: "Cơ chế gầu lật", moTa: "Sử dụng cơ chế gầu lật cân bằng với nam châm và công tắc từ để ghi nhận lượng mưa." },
    { tenChucNang: "Miệng thiết bị lớn", moTa: "Đường kính miệng thiết bị 200mm giúp thu lượng mưa hiệu quả." },
    { tenChucNang: "Lọc tạp chất", moTa: "Trang bị lưới lọc ngăn tạp chất và mưa đá." },
    { tenChucNang: "Phễu dẫn và gầu lật kép", moTa: "Phễu dẫn nước vào hai gầu lật hoạt động luân phiên để đo liên tục." },
    { tenChucNang: "Tạo xung điện", moTa: "Mỗi lần gầu lật tạo ra một xung điện, tương đương 0.2 mm lượng mưa." },
    { tenChucNang: "Hiệu chuẩn gầu lật", moTa: "Có hai ốc vít dùng để điều chỉnh điểm dừng của gầu lật." },
    { tenChucNang: "Thiết kế cân bằng mắt bò", moTa: "Thiết kế kiểu mắt bò giúp thiết bị cân bằng và dễ căn chỉnh." },
    { tenChucNang: "Lắp đặt linh hoạt", moTa: "Chân thiết bị điều chỉnh được bằng vít tại ba vị trí, dễ lắp đặt trên nhiều địa hình." },
    { tenChucNang: "Tích hợp với Datalogger", moTa: "Thiết bị tương thích với Datalogger để ghi lại lượng mưa qua xung điện." }
];
SP[2].tenDanhMuc = "Thiết bị quan trắc";
SP[2].danhMuc = "../product/product.html?thietBiQuanTrac";
SP[2].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966993/dataloggerM_p8ktel.png";

SP[3].id = 3;
SP[3].TenSP = "Thiết bị đo mưa BKS-RG22";
SP[3].chucNang = [
    { tenChucNang: "Đo lượng mưa chính xác", moTa: "Thiết bị có độ chính xác cao trong việc đo lượng mưa." },
    { tenChucNang: "Chống chịu thời tiết", moTa: "Thiết bị bền bỉ, hoạt động ổn định trong điều kiện thời tiết khắc nghiệt." },
    { tenChucNang: "Giá thành cạnh tranh", moTa: "Giá thấp hơn so với các thiết bị tương đương từ các hãng quốc tế." },
    { tenChucNang: "Cơ chế gầu lật", moTa: "Sử dụng cơ chế gầu lật cân bằng với nam châm và công tắc từ để ghi nhận lượng mưa." },
    { tenChucNang: "Miệng thiết bị lớn", moTa: "Đường kính miệng thiết bị 200mm giúp thu lượng mưa hiệu quả." },
    { tenChucNang: "Lọc tạp chất", moTa: "Trang bị lưới lọc ngăn tạp chất và mưa đá." },
    { tenChucNang: "Phễu dẫn và gầu lật kép", moTa: "Phễu dẫn nước vào hai gầu lật hoạt động luân phiên để đo liên tục." },
    { tenChucNang: "Tạo xung điện", moTa: "Mỗi lần gầu lật tạo ra một xung điện, tương đương 0.1 mm lượng mưa." },
    { tenChucNang: "Hiệu chuẩn gầu lật", moTa: "Có hai ốc vít dùng để điều chỉnh điểm dừng của gầu lật." },
    { tenChucNang: "Thiết kế cân bằng mắt bò", moTa: "Thiết kế kiểu mắt bò giúp thiết bị cân bằng và dễ căn chỉnh." },
    { tenChucNang: "Lắp đặt linh hoạt", moTa: "Chân thiết bị điều chỉnh được bằng vít tại ba vị trí, dễ lắp đặt trên nhiều địa hình." },
    { tenChucNang: "Tích hợp với Datalogger", moTa: "Thiết bị tương thích với Datalogger để ghi lại lượng mưa qua xung điện." }
];
SP[3].tenDanhMuc = "Thiết bị quan trắc";
SP[3].danhMuc = "../product/product.html?thietBiQuanTrac";
SP[3].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966965/thiet_bi_do_mua_jlavqg.png";

SP[4].id = 4;
SP[4].TenSP = "Thiết bị đo mưa BKS-RG23";
SP[4].chucNang = [
    { tenChucNang: "Đo lượng mưa chính xác", moTa: "Thiết bị có độ chính xác cao trong việc đo lượng mưa." },
    { tenChucNang: "Chống chịu thời tiết", moTa: "Thiết bị bền bỉ, hoạt động ổn định trong điều kiện thời tiết khắc nghiệt." },
    { tenChucNang: "Giá thành cạnh tranh", moTa: "Giá thấp hơn so với các thiết bị tương đương từ các hãng quốc tế." },
    { tenChucNang: "Cơ chế gầu lật", moTa: "Sử dụng cơ chế gầu lật cân bằng với nam châm và công tắc từ để ghi nhận lượng mưa." },
    { tenChucNang: "Miệng thiết bị lớn", moTa: "Đường kính miệng thiết bị 200mm giúp thu lượng mưa hiệu quả." },
    { tenChucNang: "Lọc tạp chất", moTa: "Trang bị lưới lọc ngăn tạp chất và mưa đá." },
    { tenChucNang: "Phễu dẫn và gầu lật kép", moTa: "Phễu dẫn nước vào hai gầu lật hoạt động luân phiên để đo liên tục." },
    { tenChucNang: "Tạo xung điện", moTa: "Mỗi lần gầu lật tạo ra một xung điện, tương đương 0.2 mm lượng mưa." },
    { tenChucNang: "Hiệu chuẩn gầu lật", moTa: "Có hai ốc vít dùng để điều chỉnh điểm dừng của gầu lật." },
    { tenChucNang: "Thiết kế cân bằng mắt bò", moTa: "Thiết kế kiểu mắt bò giúp thiết bị cân bằng và dễ căn chỉnh." },
    { tenChucNang: "Lắp đặt linh hoạt", moTa: "Chân thiết bị điều chỉnh được bằng vít tại ba vị trí, dễ lắp đặt trên nhiều địa hình." },
    { tenChucNang: "Tích hợp với Datalogger", moTa: "Thiết bị tương thích với Datalogger để ghi lại lượng mưa qua xung điện." }
];
SP[4].tenDanhMuc = "Thiết bị quan trắc";
SP[4].danhMuc = "../product/product.html?thietBiQuanTrac";
SP[4].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966965/thiet_bi_do_mua_jlavqg.png";

SP[5].id = 5;
SP[5].TenSP = "Cảm biến đo mực nước không tiếp xúc WL-R40";
SP[5].chucNang = [
    {
        tenChucNang: "Đo không tiếp xúc",
        moTa: "Phương pháp đo không tiếp xúc, giúp dễ dàng lắp đặt và bảo dưỡng."
    },
    {
        tenChucNang: "Giao thức truyền thông RS485 Modbus RTU",
        moTa: "Sử dụng giao thức RS485 Modbus RTU, đảm bảo tính ổn định và độ chính xác cao."
    },
    {
        tenChucNang: "Tiêu thụ điện năng thấp",
        moTa: "Dải điện áp đầu vào rộng, tiêu thụ điện năng thấp, tương thích với nguồn năng lượng mặt trời."
    },
    {
        tenChucNang: "Chống ẩm và ăn mòn",
        moTa: "Mạch cảm biến phủ lớp nhựa bảo vệ, hoạt động tốt trong môi trường ẩm cao và hơi nước biển."
    },
    {
        tenChucNang: "Cài đặt địa chỉ linh hoạt",
        moTa: "Cài đặt địa chỉ cảm biến dễ dàng qua công tắc hoặc phần mềm cấu hình nâng cao."
    },
    {
        tenChucNang: "Ứng dụng rộng rãi",
        moTa: "Phù hợp cho các lĩnh vực: khí tượng thủy văn, cấp thoát nước, xử lý nước thải,..."
    }
]
SP[5].tenDanhMuc = "Thiết bị quan trắc";
SP[5].danhMuc = "../product/product.html?thietBiQuanTrac";
SP[5].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966962/cam_bien_do_nuoc_ko_tiep_xuc_slsl96.png";

SP[6].id = 6;
SP[6].TenSP = "Cảm biến mực nước áp lực PL-D20";
SP[6].chucNang = [
    {
        tenChucNang: "Độ chính xác cao",
        "moTa": "Sử dụng chip cảm biến độ chính xác và độ ổn định cao."
    },
    {
        tenChucNang: "Giao tiếp Modbus RTU",
        "moTa": "Giao tiếp RS485 Modbus RTU, phù hợp cho các hệ thống đo lường tự động."
    },
    {
        tenChucNang: "Lắp đặt và bảo dưỡng dễ dàng",
        "moTa": "Thiết kế đơn giản, dễ dàng lắp đặt và bảo trì."
    },
    {
        tenChucNang: "Nguồn xung ổn định",
        "moTa": "Sử dụng nguồn xung DC-DC, dải điện áp 10V–30V, tránh phát nhiệt gây sai số."
    },
    {
        tenChucNang: "Chống ăn mòn, thích hợp môi trường nước",
        "moTa": "Mạch phủ lớp chống ăn mòn, vỏ thép inox SS304 hoạt động bền trong môi trường nước."
    },
    {
        tenChucNang: "Cài đặt địa chỉ linh hoạt",
        "moTa": "Cài đặt đơn giản bằng switch hoặc phần mềm cho cấu hình nâng cao."
    },
    {
        tenChucNang: "Ứng dụng đa dạng",
        "moTa": "Sử dụng trong khí tượng thủy văn (sông, hồ, biển) và thủy lợi (ao, hồ, kênh,...)."
    }
]

SP[6].tenDanhMuc = "Thiết bị quan trắc";
SP[6].danhMuc = "../product/product.html?thietBiQuanTrac";
SP[6].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966953/cam_bien_do_nuoc_co_tiep_xuc_vimniv.png";



// Thiết bị cảnh báo cháy
SP[7].id = 7;
SP[7].TenSP = "Thiết bị cảnh báo cháy";
SP[7].chucNang = [
    { tenChucNang: "Cảnh báo cháy sớm", moTa: "Theo 04 vùng độc lập, có thể mở rộng lên 108 vùng" },
    { tenChucNang: "Kết nối đầu báo cháy", moTa: "Có thể kết nối đầu báo cháy có dây và không dây" },
    { tenChucNang: "Cảnh báo báo cháy", moTa: "Bằng hình thức tại chỗ hoặc từ xa" },
    { tenChucNang: "Thông báo từ xa", moTa: "Qua điện thoại bằng tin nhắn và gọi điện" },
    { tenChucNang: "Điều khiển thiết bị", moTa: "Còi đèn, bơm nước chữa cháy…" },
    { tenChucNang: "Kết nối và giám sát", moTa: "Kết nối mạng, điều khiển giám sát từ xa" },
    { tenChucNang: "Hướng dẫn sử dụng",     moTa: "<a href='/assets/HDSD_BKS_2503.pdf' target='_blank'>Tải file PDF</a>" },
];
SP[7].tenDanhMuc = "Thiết bị báo cháy";
SP[7].danhMuc = "../product/product.html?thietBiBaoChay";
SP[7].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966993/tu_trung_tam_fbydui.jpg";
SP[7].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "12V,2A" },
    { ten: "Số vùng báo cháy", giaTri: "4 vùng có thể mở rộng đến 128 vùng" },
    { ten: "Điều khiển đầu ra", giaTri: "4 output 220/5A" },
    { ten: "Hiển thị", giaTri: "Đèn Led (nguồn, mạng, tín hiệu)" },
    { ten: "Báo động tại chỗ", giaTri: "Còi đèn" },
    { ten: "Báo động từ xa", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Vật liệu", giaTri: "Nhựa chống cháy, cao su chịu nhiệt" },
    { ten: "Màu", giaTri: "Trắng/đen" },
];


SP[8].id = 8;
SP[8].TenSP = "Thiết bị truyền tin báo cháy";
SP[8].chucNang = [
    { tenChucNang: "Kết nối với Tủ trung tâm", moTa: "Là thiết bị ngoại vi, kết nối trực tiếp để truyền tin báo cháy" },
    { tenChucNang: "Truyền thông tin kịp thời", moTa: "Gửi thông báo đến các bên liên quan để điều phối, xử lý và khắc phục sự cố" },
    { tenChucNang: "Đa dạng kênh kết nối", moTa: "Hỗ trợ nhiều phương thức truyền tin (SMS, Call, 4G, LAN, Wifi), đảm bảo liên tục và tin cậy" },
    { tenChucNang: "Thông báo từ xa", moTa: "Thông báo từ xa qua điện thoại bằng tin nhắn và gọi điện" },
    { tenChucNang: "Tương thích cao", moTa: "Kết nối được với hầu hết các Tủ trung tâm báo cháy thông dụng trên thị trường" },
    { tenChucNang: "Dễ dàng nâng cấp", moTa: "Thiết kế và sản xuất chủ động, cho phép cập nhật, nâng cấp phần mềm, kéo dài thời gian sử dụng" },
];
SP[8].tenDanhMuc = "Thiết bị báo cháy";
SP[8].danhMuc = "../product/product.html?thietBiBaoChay";
SP[8].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966976/thiet-bi-truyen-tin-bao-chay_bqgbpj.jpg";


SP[9].id = 9;
SP[9].TenSP = "Đầu báo khói quang điện độc lập";
SP[9].chucNang = [
    { tenChucNang: "Phát hiện khói bằng công nghệ quang điện", moTa: "Sử dụng đi-ốt hồng ngoại để phát hiện khói dựa trên nguyên tắc phản xạ ánh sáng hồng ngoại bởi các hạt khói" },
    { tenChucNang: "Buồng cảm biến đặc biệt", moTa: "Che chắn ánh sáng bên ngoài nhưng cho phép khói đi vào, đảm bảo độ nhạy và chính xác" },
    { tenChucNang: "Hoạt động độc lập", moTa: "Không cần kết nối với Tủ Trung tâm, phù hợp cho các hệ thống đơn giản" },
    { tenChucNang: "Sản xuất bằng công nghệ SMT", moTa: "Đảm bảo độ ổn định cao và chất lượng đáng tin cậy" },
    { tenChucNang: "Dòng chờ thấp", moTa: "Tiết kiệm năng lượng khi ở trạng thái chờ" },
    { tenChucNang: "Hai đèn LED báo cháy", moTa: "Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (360°)" },
    { tenChucNang: "Chống nhiễu", moTa: "Bảo vệ chống côn trùng, bụi và ánh sáng trắng, giảm báo động giả" },
    { tenChucNang: "Cảnh báo điện áp thấp", moTa: "Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động" },
    { tenChucNang: "Đèn báo đa chức năng", moTa: "Hiển thị cảnh báo flash và tín hiệu pin yếu" },
    { tenChucNang: "Nút Kiểm tra/Im lặng", moTa: "Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần" },
];
SP[9].tenDanhMuc = "Thiết bị báo cháy";
SP[9].danhMuc = "../product/product.html?thietBiBaoChay";
SP[9].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966974/dau-bao-khoi_f0mx2o.jpg";


SP[10].id = 10;
SP[10].TenSP = "Đầu báo khói quang điện không dây";
SP[10].chucNang = [
    { tenChucNang: "Phát hiện khói bằng công nghệ quang điện", moTa: "Sử dụng đi-ốt hồng ngoại để phát hiện khói dựa trên nguyên tắc phản xạ ánh sáng hồng ngoại bởi các hạt khói" },
    { tenChucNang: "Buồng cảm biến đặc biệt", moTa: "Che chắn ánh sáng bên ngoài nhưng cho phép khói đi vào, đảm bảo độ nhạy và chính xác" },
    { tenChucNang: "Kết nối không dây có địa chỉ", moTa: "Cho phép xác định vị trí cụ thể của đầu báo trong hệ thống, hỗ trợ quản lý hiệu quả" },
    { tenChucNang: "Sản xuất bằng công nghệ SMT", moTa: "Đảm bảo độ ổn định cao và chất lượng đáng tin cậy" },
    { tenChucNang: "Dòng chờ thấp", moTa: "Tiết kiệm năng lượng khi ở trạng thái chờ" },
    { tenChucNang: "Hai đèn LED báo cháy", moTa: "Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (370°)" },
    { tenChucNang: "Chống nhiễu", moTa: "Bảo vệ chống côn trùng, bụi và ánh sáng trắng, giảm báo động giả" },
    { tenChucNang: "Cảnh báo điện áp thấp", moTa: "Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động" },
    { tenChucNang: "Đèn báo đa chức năng", moTa: "Hiển thị cảnh báo flash và tín hiệu pin yếu" },
    { tenChucNang: "Nút Kiểm tra/Im lặng", moTa: "Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần" },
];
SP[10].tenDanhMuc = "Thiết bị báo cháy";
SP[10].danhMuc = "../product/product.html?thietBiBaoChay";
SP[10].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966974/dau-bao-khoi_f0mx2o.jpg";


SP[11].id = 11;
SP[11].TenSP = "Đầu báo nhiệt loại thường";
SP[11].chucNang = [
    { tenChucNang: "Phát hiện nhiệt độ cố định", moTa: "Sử dụng nhiệt điện trở để phát hiện nhiệt độ vượt ngưỡng, phù hợp cho gia đình và khu vực thương mại" },
    { tenChucNang: "Nguyên lý hoạt động", moTa: "Nhiệt điện trở đọc nhiệt độ từ luồng không khí và truyền tín hiệu đến MCU để kích hoạt báo động khi vượt điểm dừng" },
    { tenChucNang: "Vỏ thiết kế đặc biệt", moTa: "Bảo vệ nhiệt điện trở, đồng thời tối ưu hóa luồng không khí để đảm bảo độ nhạy" },
    { tenChucNang: "Hoạt động độc lập", moTa: "Không cần kết nối với Tủ Trung tâm, phù hợp cho các hệ thống đơn giản" },
    { tenChucNang: "Sản xuất bằng công nghệ SMT", moTa: "Đảm bảo độ ổn định cao và chất lượng đáng tin cậy" },
    { tenChucNang: "Dòng chờ thấp", moTa: "Tiết kiệm năng lượng khi ở trạng thái chờ" },
    { tenChucNang: "Hai đèn LED báo cháy", moTa: "Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (360°)" },
    { tenChucNang: "Chống nhiễu", moTa: "Bảo vệ chống côn trùng, bụi và ánh sáng trắng, giảm báo động giả" },
    { tenChucNang: "Cảnh báo điện áp thấp", moTa: "Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động" },
    { tenChucNang: "Đèn báo đa chức năng", moTa: "Hiển thị cảnh báo flash và tín hiệu pin yếu" },
    { tenChucNang: "Nút Kiểm tra/Im lặng", moTa: "Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần" },
];
SP[11].tenDanhMuc = "Thiết bị báo cháy";
SP[11].danhMuc = "../product/product.html?thietBiBaoChay";
SP[11].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966982/dau-bao-nhiet_uvft4c.jpg";


SP[12].id = 12;
SP[12].TenSP = "Đầu báo nhiệt không dây";
SP[12].chucNang = [
    { tenChucNang: "Phát hiện nhiệt độ cố định", moTa: "Sử dụng nhiệt điện trở để phát hiện nhiệt độ vượt ngưỡng, phù hợp cho gia đình và khu vực thương mại" },
    { tenChucNang: "Nguyên lý hoạt động", moTa: "Nhiệt điện trở đọc nhiệt độ từ luồng không khí và truyền tín hiệu đến MCU để kích hoạt báo động khi vượt điểm dừng" },
    { tenChucNang: "Vỏ thiết kế đặc biệt", moTa: "Bảo vệ nhiệt điện trở, đồng thời tối ưu hóa luồng không khí để đảm bảo độ nhạy" },
    { tenChucNang: "Kết nối không dây", moTa: "Hỗ trợ triển khai linh hoạt mà không cần dây nối" },
    { tenChucNang: "Hai đèn LED báo cháy", moTa: "Cho phép quan sát tín hiệu báo cháy từ mọi góc độ (360°)" },
    { tenChucNang: "Sản xuất bằng công nghệ SMT", moTa: "Đảm bảo độ ổn định cao và chất lượng đáng tin cậy" },
    { tenChucNang: "Dòng chờ thấp", moTa: "Tiết kiệm năng lượng khi ở trạng thái chờ" },
    { tenChucNang: "Chống nhiễu", moTa: "Bảo vệ chống nhiễu tần số vô tuyến (RFI), nhiễu điện từ (EMI), côn trùng, bụi và ánh sáng trắng, giảm báo động giả" },
    { tenChucNang: "Cảnh báo điện áp thấp", moTa: "Thông báo khi pin yếu, đảm bảo thiết bị luôn hoạt động" },
    { tenChucNang: "Đèn báo đa chức năng", moTa: "Hiển thị cảnh báo flash và tín hiệu pin yếu" },
    { tenChucNang: "Nút Kiểm tra/Im lặng", moTa: "Hỗ trợ kiểm tra thiết bị hàng tháng và chế độ im lặng khi cần" },
];
SP[12].tenDanhMuc = "Thiết bị báo cháy";
SP[12].danhMuc = "../product/product.html?thietBiBaoChay";
SP[12].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966982/dau-bao-nhiet_uvft4c.jpg";

// Thiết bị cảnh báo
SP[13].id = 13;
SP[13].TenSP = "Thiết bị Access control - Slock";
SP[13].chucNang = [
    { tenChucNang: "Đóng mở cửa thông minh", moTa: "Hỗ trợ đóng mở cửa thông minh từ xa" },
    { tenChucNang: "Phân quyền và kiểm soát", moTa: "Phân quyền và kiểm soát lịch sử người vào ra" },
    { tenChucNang: "Cảnh báo đột nhập", moTa: "Cảnh báo khi có đột nhập trái phép" },
    { tenChucNang: "Cảnh báo nguy cơ cháy nổ", moTa: "Cảnh báo nguy cơ cháy nổ" },
];
SP[13].tenDanhMuc = "Thiết bị cảnh báo";
SP[13].danhMuc = "../product/product.html?thietBiCanhBao";
SP[13].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966955/thiet-bi-access-control-slock-1_zymkts.jpg";
SP[13].thongSo = [
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


SP[14].id = 14;
SP[14].TenSP = "Thiết bị điều khiển giám sát an ninh";
SP[14].chucNang = [
    { tenChucNang: "Cảnh báo đột nhập", moTa: "Cảnh báo đột nhập" },
    { tenChucNang: "Cảnh báo cháy", moTa: "Cảnh báo cháy (khói/nhiệt)" },
    { tenChucNang: "Cảnh báo ngập nước", moTa: "Cảnh báo ngập nước" },
    { tenChucNang: "Cảnh báo hỗ trợ", moTa: "Cảnh báo hỗ trợ người già" },
];
SP[14].tenDanhMuc = "Thiết bị cảnh báo";
SP[14].danhMuc = "../product/product.html?thietBiCanhBao";
SP[14].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966995/thiet-bi-giam-sat-an-ninh_oqfcxa.png";
SP[14].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "12V,2A" },
    { ten: "Số vùng báo cháy", giaTri: "4 vùng có thể mở rộng đến 128 vùng" },
    { ten: "Điều khiển đầu ra", giaTri: "4 output 220/5A" },
    { ten: "Hiển thị", giaTri: "Đèn Led (nguồn, mạng, tín hiệu)" },
    { ten: "Báo động tại chỗ", giaTri: "Còi đèn" },
    { ten: "Báo động từ xa", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Vật liệu", giaTri: "Nhựa chống cháy, cao su chịu nhiệt" },
    { ten: "Màu", giaTri: "Trắng/đen" },
];

SP[15].id = 15;
SP[15].TenSP = "Thiết bị theo dõi tiêu thụ điện năng";
SP[15].chucNang = [
    { tenChucNang: "Cảnh báo cháy", moTa: "Cảnh báo cháy (khói/nhiệt)" },
    { tenChucNang: "Cảnh báo ngập nước", moTa: "Cảnh báo ngập nước" },
    { tenChucNang: "Cảnh báo hỗ trợ", moTa: "Cảnh báo hỗ trợ người già" },
];
SP[15].tenDanhMuc = "Thiết bị cảnh báo";
SP[15].danhMuc = "../product/product.html?thietBiCanhBao";
SP[15].urlAnh = "https://res.cloudinary.com/di33kl2zd/image/upload/v1751966961/thiet_bi_theo_doi_tieu_thu_dien_nang_decd9g.png";
SP[15].thongSo = [
    { ten: "Nguồn hoạt động", giaTri: "12V,2A" },
    { ten: "Số vùng báo cháy", giaTri: "4 vùng có thể mở rộng đến 128 vùng" },
    { ten: "Điều khiển đầu ra", giaTri: "4 output 220/5A" },
    { ten: "Hiển thị", giaTri: "Đèn Led (nguồn, mạng, tín hiệu)" },
    { ten: "Báo động tại chỗ", giaTri: "Còi đèn" },
    { ten: "Báo động từ xa", giaTri: "05 lần nhắn tin, 05 lần gọi điện" },
    { ten: "Vật liệu", giaTri: "Nhựa chống cháy, cao su chịu nhiệt" },
    { ten: "Màu", giaTri: "Trắng/đen" },
];


function renderProducts(products) {
    let productContainer = document.getElementById("product-list");

    // Kiểm tra xem productContainer có tồn tại không
    if (!productContainer) {
        console.error("Không tìm thấy phần tử product-list");
        return;
    }

    const queryString = window.location.search;
    let filteredProducts;

    if (queryString.includes("?thietBiQuanTrac")) {
        filteredProducts = products.slice(0, 7).filter(p => p !== undefined);
    } else if (queryString.includes("?thietBiBaoChay")) {
        filteredProducts = products.slice(7, 13).filter(p => p !== undefined);
    } else if (queryString.includes("?thietBiCanhBao")) {
        filteredProducts = products.slice(13, 16).filter(p => p !== undefined);
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
                        <a class="btn btn-outline-dark mt-auto" href="../product/productDetail.html?maso=${product.id}">Xem chi tiết</a>
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