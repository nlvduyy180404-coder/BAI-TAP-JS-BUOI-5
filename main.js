function xuLyTuyenSinh() {
  let diemChuan = Number(document.getElementById("diemChuan").value);
  let mon1 = Number(document.getElementById("mon1").value);
  let mon2 = Number(document.getElementById("mon2").value);
  let mon3 = Number(document.getElementById("mon3").value);

  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value;

  let diemKV = 0;
  let diemDT = 0;

  switch (khuVuc) {
    case "A":
      diemKV = 2;
      break;

    case "B":
      diemKV = 1;
      break;

    case "C":
      diemKV = 0.5;
      break;
  }

  switch (doiTuong) {
    case "1":
      diemDT = 2.5;
      break;

    case "2":
      diemDT = 1.5;
      break;

    case "3":
      diemDT = 1;
      break;
  }

  let tongDiem = mon1 + mon2 + mon3 + diemKV + diemDT;

  let ketQua = "";

  if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    ketQua = "Rớt do có môn 0 điểm";
  } else if (tongDiem >= diemChuan) {
    ketQua = `Đậu - Tổng điểm: ${tongDiem}`;
  } else {
    ketQua = `Rớt - Tổng điểm: ${tongDiem}`;
  }

  document.getElementById("ketQua").innerHTML = ketQua;
}