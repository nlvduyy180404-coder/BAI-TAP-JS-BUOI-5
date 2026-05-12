function tinhThue() {
  let hoTen = document.getElementById("hoTen").value;

  let tongThuNhap = Number(
    document.getElementById("tongThuNhap").value
  );

  let nguoiPhuThuoc = Number(
    document.getElementById("nguoiPhuThuoc").value
  );

  let thuNhapChiuThue =
    tongThuNhap -
    4000000 -
    nguoiPhuThuoc * 1600000;

  let thue = 0;

  if (thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thue = thuNhapChiuThue * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thue = thuNhapChiuThue * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thue = thuNhapChiuThue * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thue = thuNhapChiuThue * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thue = thuNhapChiuThue * 0.3;
  } else {
    thue = thuNhapChiuThue * 0.35;
  }

  document.getElementById("ketQua").innerHTML =
    `Họ tên: ${hoTen} <br> Thuế phải trả: ${thue.toLocaleString()} VNĐ`;
}