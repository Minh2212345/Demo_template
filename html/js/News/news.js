function tinTuc() {
    this.id = ""; 
    this.TieuDe = ""; 
    this.HinhAnhChinh = ""; 
    this.TacGia = ""; 
    this.NgayDang = ""; 
    this.Nguon = ""; 
    this.NoiDung = []; 
}

let news = new Array(4).fill().map(() => new tinTuc());

// Bài viết 1
news[0].id = "0";
news[0].TieuDe = "Cháy nhà ở Hà Nội, 3 người tử vong";
news[0].HinhAnhChinh = "img/News/FireDinhCongHa.png";
news[0].TacGia = "Phạm Chiêu";
news[0].NgayDang = "2025-04-28";
news[0].Nguon = "https://vnexpress.net/chay-nha-o-ha-noi-3-nguoi-tu-vong-4879392.html";
news[0].NoiDung = [
    { type: "paragraph", content: "Rạng sáng 28/4, ngôi nhà cao 4 tầng một tum trên phố Định Công Hạ, quận Hoàng Mai bốc cháy khiến ba người tử vong." },
    { type: "paragraph", content: "Khoảng 3h15, lửa bất ngờ bùng lên từ tầng 2 ngôi nhà nằm sâu trong ngõ 85 phố Định Công Hạ, sau đó nhanh chóng lan rộng lên các tầng trên. Lúc này trong nhà có bốn người, gồm một cặp vợ chồng, con và mẹ của họ." },
    { type: "paragraph", content: "Những người sống ở các nhà liền kề đã nhanh chóng sơ tán và mở cửa sổ để tạo lối thoát hiểm cho những người mắc kẹt bên trong, nhân chứng cho biết." },
    { type: "image", content: "/img/News/DinhCongHaFireLocation.png", caption: "Người dân chạy khỏi đám cháy" },
    { type: "paragraph", content: "Khoảng 10 phút sau khi cháy bùng phát, cảnh sát điều 4 xe chữa cháy và hàng chục cán bộ đến hiện trường, chia làm hai mũi dập lửa và tìm kiếm nạn nhân. Đám cháy nhiều khói độc gây khó khăn cho cứu hộ. Người vợ được cứu và đưa đi cấp cứu tại Bệnh viện Bạch Mai. Đến 4h30, lửa được dập tắt; 10 phút sau, thi thể ba nạn nhân còn lại được tìm thấy do ngạt khói." },
    { type: "paragraph", content: "Ngôi nhà rộng 40 m², cách phố Định Công Hạ 30 m, do vợ chồng thuê để làm nghề tổ chức hội chợ nên chứa nhiều vật liệu dễ cháy. Cơ quan chức năng đang điều tra nguyên nhân." }
];

news[1].id = "1";
news[1].TieuDe = "Cháy nhà giữa đêm, 4 người trong gia đình tử vong";
news[1].HinhAnhChinh = "img/News/FireTG-1.png";
news[1].TacGia = "Thường Sơn";
news[1].NgayDang = "2025-04-10";
news[1].Nguon = "https://vnexpress.net/chay-nha-giua-dem-4-nguoi-trong-gia-dinh-tu-vong-4872098.html";
news[1].NoiDung = [
    { type: "paragraph", content: "Đám cháy phát sinh từ gác lửng bằng gỗ sau đó bùng lên thiêu rụi căn nhà ở TP Mỹ Tho, 4 người trong gia đình mắc kẹt, tử vong, sáng 10/4." },
    { type: "paragraph", content: "Khoảng 1h, lửa bùng lên từ nhà cấp 4 rộng hơn 50 m² của bà Huỳnh Thị Thủy Tiên trên đường Nam Kỳ Khởi Nghĩa. Người dân dùng bình chữa cháy và nước dập lửa nhưng không thành. Nhà rộng 3 m, dài 17 m, chỉ có một lối thoát ở cửa chính đang khóa. Khi cháy xảy ra, trong nhà có 4 người. Lửa lớn và khóa cửa khiến không ai tiếp cận được." },
    { type: "paragraph", content: "Hơn 30 cảnh sát PCCC cùng nhiều xe cứu hỏa đến hiện trường. Do lửa bùng lên nhanh, nhà cháy nằm trong hẻm sâu rộng chỉ hơn một mét khiến lực lượng chức năng gặp khó khăn khi tiếp cận hiện trường.Một nhóm cảnh sát phá cửa cứu nạn, nhóm khác phun nước ngăn cháy lan." },
    { type: "image", content: "img/News/FireTG-2.png", caption: "FireTG-2" },
    { type: "paragraph", content: "Sau hơn một giờ, đám cháy cơ bản được dập tắt. Cảnh sát phát hiện hai người tử vong ở trên gác, một thi thể ở tầng trệt gần cửa chính, thi thể còn lại trong nhà vệ sinh.  Nhiều tài sản trong nhà như hai xe máy, xe đạp, tivi cùng đồ điện bị thiêu rụi, tường bong vữa xi măng, mái tôn cong vênh, đổ sập." },
    { type: "paragraph", content: "Đến 9h40 phút, lực lượng cứu hộ đã đưa thi thể nạn nhân cuối cùng ra khỏi đống đổ nát. Nguyên nhân vụ cháy đang được điều tra." }
];

news[2].id = "2";
news[2].TieuDe = "Đột nhập nhà hàng xóm trộm tiền";
news[2].HinhAnhChinh = "img/News/AGStole-2.png";
news[2].TacGia = "Ngọc Tài - Tiến Tầm";
news[2].NgayDang = "2025-04-04";
news[2].Nguon = "https://vnexpress.net/dot-nhap-nha-hang-xom-trom-tien-4870060.html";
news[2].NoiDung = [
        { type: "paragraph", content: "Biết hàng xóm thường xuyên vắng nhà, Huỳnh Nam Quốc, 42 tuổi, chui qua lỗ thông gió vào lấy trộm 50 triệu đồng." },
    { type: "paragraph", content: "Ngày 4/4, Quốc bị Công an phường Mỹ Thạnh, TP Long Xuyên, bắt để điều tra hành vi Trộm cắp tài sản." },
    { type: "paragraph", content: "Nghi phạm từng có tiền án về tội này và Tàng trữ trái phép chất ma túy." },
    { type: "image", content: "img/News/AGStole-2.png", caption: "AGStole-1" },
    { type: "paragraph", content: "Theo điều tra, Quốc cần tiền tiêu xài nên nảy sinh ý định trộm tài sản của hàng xóm. Sáng 3/4, ông ta đợi chủ nhà đi khỏi thì tìm cách lẻn vào trong. Thấy lỗ thông gió đủ lớn để đột nhập, Quốc chui vào, lấy 50 triệu đồng trong tủ sau đó tẩu thoát bằng đường cũ" },
    { type: "paragraph", content: "Nhận trình báo của nạn nhân, cảnh sát xác định Quốc là thủ phạm, mời về làm việc. Ban đầu người này chối tội, song sau đó thừa nhận hành vi.Công an đã thu hồi 43 triệu đồng hoàn trả cho bị hại." }
];

news[3].id = "3";
news[3].TieuDe = "Đột nhập nhà dân, phá két sắt trộm vàng";
news[3].HinhAnhChinh = "img/News/stole-2.png";
news[3].TacGia = "Nhật Vy";
news[3].NgayDang = "2022-02-11";
news[3].Nguon = "https://vnexpress.net/dot-nhap-nha-dan-pha-ket-sat-trom-vang-4426147.html";
news[3].NoiDung = [
        { type: "paragraph", content: "Ngày 10/2, Nguyện bị Công an quận 3 tạm giữ hình sự, điều tra về hành vi Trộm cắp tài sản." },
    { type: "paragraph", content: "Rạng sáng 2/2 (mùng 2 Tết), Nguyện mang balô chứa dụng cụ phá khóa đi tìm nhà vắng chủ để trộm. Khi đến đầu hẻm trên đường Lê Văn Sỹ, thấy nhà ông Dũng khóa cửa, Nguyện trèo lên nhà bên cạnh, dùng bình khò lửa phá kính rồi chui vào." },
    { type: "paragraph", content: "Tiếp đó, gã vào phòng ngủ của gia chủ phá két sắt lấy 6 sợi dây chuyền, lắc tay, bông tai, đồng hồ hiệu, nhẫn kim cương cùng nhiều ngoại tệ... với tổng trị giá gần một tỷ đồng đêm về nhà tại quận Gò Vấp cất giấu." },
    { type: "paragraph", content: "Chiều mùng 4 Tết, ông Dũng đi chơi về phát hiện nhà bị trộm nên trình báo công an. Cảnh sát khám nghiệm hiện trường, xác định Nguyện là thủ phạm." },
    { type: "paragraph", content: "Sau nhiều ngày truy tìm, hôm qua, các trinh sát đã bắt Nguyện, thu hồi tang vật và đang làm rõ vai trò những người liên quan." }
];


function renderProducts(newsList) {
    let productContainer = document.getElementById("news-list");

    if (!productContainer) {
        console.error("Không tìm thấy phần tử với id 'news-list'");
        return;
    }

    const queryString = window.location.search;
    let filteredNews = newsList;

    productContainer.innerHTML = filteredNews.map((bv) => `
        <div class="col mb-5">
            <div class="card h-100">
                <img class="card-img-top fixed-img" src="${bv.HinhAnhChinh}" alt="${bv.TieuDe}" />
                <div class="card-body p-4">
                    <div class="text-center">
                        <h6>${bv.TieuDe}</h6>
                    </div>
                </div>
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center">
                        <a class="btn btn-outline-dark mt-auto" href="HomePage/NewsDoc.html?maso=${bv.id}">Đọc thêm</a>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}

function hienThiNoiDung() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const maSo = urlParams.get("maso");

    const baiViet = news.find(item => item.id === maSo);

    if (!baiViet) {
        document.getElementById("showContent").innerHTML = "<p>Không tìm thấy bài viết!</p>";
        return;
    }

    const renderNoiDung = (noiDung) => {
        return noiDung.map(item => {
            switch (item.type) {
                case "paragraph":
                    return `<p>${item.content}</p>`;
                case "subheading":
                    return `<h3>${item.content}</h3>`;
                case "blockquote":
                    return `<blockquote><p>${item.content}</p></blockquote>`;
                case "image":
                    return `
                        <div class="text-center my-4">
                            <img src="${item.content}" class="img-fluid" alt="${item.caption || ''}">                            
                        </div>
                    `;
                default:
                    return "";
            }
        }).join("");
    };
    

    // Tạo HTML cho bài viết
    let html = `
        <div class="container px-4 px-lg-5 my-5">
            <article class="article">
                <h2 class="text-center title">${baiViet.TieuDe}</h2>
            <div class="meta-top text-center">
                <ul class="list-inline d-flex justify-content-center flex-wrap align-items-center gap-3 m-0 p-0">
                    <li class="list-inline-item d-flex align-items-center">
                        <span class="fw-bold me-1">Tác giả:</span> 
                        <span>${baiViet.TacGia || "Không rõ tác giả"}</span>
                    </li>
                    <li class="list-inline-item d-flex align-items-center">
                        <span class="fw-bold me-1">Ngày đăng:</span> 
                        <span><time datetime="${baiViet.NgayDang}">${new Date(baiViet.NgayDang).toLocaleDateString('vi-VN')}</time></span>
                        <br>
                    </li>
                </ul>
        </div>
        <br>
            <div class="text-center post-img">
                <img src="${baiViet.HinhAnhChinh}" alt="${baiViet.TieuDe}" class="img-fluid" onerror="this.src='/img/default-image.png';">
            </div>            
            <br>            
            <div class="content">
                ${renderNoiDung(baiViet.NoiDung)}
            </div>

            <div class="meta-bottom">
                 <li class="list-inline-item d-flex align-items-center">
                        <i class="bi bi-link me-1"></i> 
                        <a href="${baiViet.Nguon}" target="_blank" class="text-reset text-decoration-none">Nguồn: VnExpress</a>
                </li>
            </div>
        </article>
    </div>
    `;

    // Kiểm tra và gán HTML vào showContent
    const showContent = document.getElementById("showContent");
    if (!showContent) {
        console.error("Không tìm thấy phần tử với id 'showContent'");
        return;
    }
    showContent.innerHTML = html;
}

function hienThiTinTucTuongTu(maso) {
    const productContainer = document.getElementById("related-News");
    if (!productContainer) {
        console.error("Không tìm thấy phần tử với id 'related-News'");
        return;
    }

    productContainer.innerHTML = "";

    const filteredProducts = news.filter(item => item.id !== maso);

    filteredProducts.forEach(sp => {
        let productHTML = `
            <div class="col mb-5">
                <div class="card h-100 shadow-sm">
                    <img class="card-img-top p-3 rounded-top hover-zoom fixed-img" 
                         src="${sp.HinhAnhChinh}" alt="${sp.TieuDe}" />
                    <div class="card-body p-4 text-center">
                        <h6 class="fw-medium">${sp.TieuDe}</h6>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                            <a class="btn btn-outline-dark mt-auto hover-btn" href="HomePage/NewsDoc.html?maso=${sp.id}">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    });
}


window.onload = function () {
    if (document.getElementById("news-list")) {
        renderProducts(news);
    }
    if (document.getElementById("showContent")) {
        hienThiNoiDung();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const maso = urlParams.get("maso");
                hienThiTinTucTuongTu(maso)
    }
};