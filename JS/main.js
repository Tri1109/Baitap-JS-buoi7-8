//-------------------JS layout--------------------// 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

//-------------------Bài 1--------------------//
const arrNumber = [];

function addNumber() {
    document.querySelector(".numberList").innerHTML = arrNumber;
    var number = +document.querySelector("#themSo").value;
    arrNumber.push(number);
  
    document.querySelector(".numberList").innerHTML = arrNumber;
  }

function hanldeAdd() {
    addNumber();
}

function tinhTongSoDuongTrongMang(arr) {
    var tong = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            tong += arr[i];
        }
    }
    return tong;
}

function handleSum() {
    var tongSoDuong = tinhTongSoDuongTrongMang(arrNumber);
    document.querySelector(".result1").innerHTML = `Tổng số dương: ${tongSoDuong}`;
}

//-------------------Bài 2--------------------//
function demSoDuongTrongMang(arr) {
    var demSoDuong = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            demSoDuong++;
        }
    }
    return demSoDuong;
}

function handlePositive() {
    var soDuong = demSoDuongTrongMang(arrNumber);
    document.querySelector(".result2").innerHTML = `Số dương có ${soDuong} số`;
}

//-------------------Bài 3--------------------//
function timSoNhoNhatTrongMang(arr) {
    var soNhoNhat = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < soNhoNhat) {
            soNhoNhat = arr[i];
        }
    }
    return soNhoNhat;
}

function handleMin() {
    var soNhoNhat = timSoNhoNhatTrongMang(arrNumber);
    document.querySelector(".result3").innerHTML = `Số nhỏ nhất trong mảng là ${soNhoNhat}`;
}

//-------------------Bài 4--------------------//
function timSoDuongNhoNhatTrongMang(arr) {
    var soDuongNhoNhat = Infinity;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] < soDuongNhoNhat) {
            soDuongNhoNhat = arr[i];
        }
    }

    return soDuongNhoNhat;
}

function handleMinPositive() {
    var soDuongNhoNhat = timSoDuongNhoNhatTrongMang(arrNumber);
    if (soDuongNhoNhat === Infinity) {
        document.querySelector(".result4").innerHTML = "Không có số dương trong mảng";
    } else {
        document.querySelector(".result4").innerHTML = `Số dương nhỏ nhất trong mảng là ${soDuongNhoNhat}`;
    }
}

//-------------------Bài 5--------------------//
function timSoChanCuoiCungTrongMang(arr) {
    var soChanCuoiCung = null;

    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 === 0) {
            soChanCuoiCung = arr[i];
            break;
        }
    }

    if (soChanCuoiCung === null) {
        return -1;
    } else {
        return soChanCuoiCung;
    }
}

function handleLastEven() {
    var soChanCuoiCung = timSoChanCuoiCungTrongMang(arrNumber);
    document.querySelector(".result5").innerHTML = `Số chẵn cuối cùng trong mảng là ${soChanCuoiCung}`;
}
//-------------------Bài 6--------------------//
function swapArr(arr, viTri1, viTri2) {
    if (viTri1 < 0 || viTri1 >= arr.length || viTri2 < 0 || viTri2 >= arr.length) {
        return "Vị trí chỉ định không hợp lệ";
    }

    var temp = arr[viTri1];
    arr[viTri1] = arr[viTri2];
    arr[viTri2] = temp;

    return arr;
}

function handleSwap() {
    var viTri1 = document.getElementById("viTri1").value;
    var viTri2 = document.getElementById("viTri2").value;
    var newArr = swapArr(arrNumber, viTri1, viTri2);
    document.querySelector(".result6").innerHTML = newArr;
}

//-------------------Bài 7--------------------//
function sapXepTangDan(arr) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Đổi chỗ hai phần tử nếu phần tử hiện tại lớn hơn phần tử tiếp theo
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function handleIncrease() {
    var sapXepMang = sapXepTangDan(arrNumber);
    document.querySelector(".result7").innerHTML = sapXepMang;
}

//-------------------Bài 8--------------------//
function laSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function timSoNguyenToDauTien(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && laSoNguyenTo(arr[i])) {
            return arr[i];
        }
    }
    return -1;
}

function soNguyenToDauTien() {
    var soNguyenToDauTien = timSoNguyenToDauTien(arrNumber);
    document.querySelector(".result8").innerHTML = `Số nguyên tố đầu tiên là ${soNguyenToDauTien}`;
}

//-------------------Bài 9--------------------//
const arrNumber2 = [];

function addNumber2() {
    document.querySelector(".numberList2").innerHTML = arrNumber2;
    var number = +document.querySelector("#themSo2").value;
    arrNumber2.push(number);
  
    document.querySelector(".numberList2").innerHTML = arrNumber2;
  }

function hanldeAdd2() {
    addNumber2();
}

function demSoNguyenTrongMang(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            count++;
        }
    }
    return count;
}

function soNguyen() {
    var soLuongSoNguyen = demSoNguyenTrongMang(arrNumber2);
    document.querySelector(".result9").innerHTML = `Số lượng số nguyên là ${soLuongSoNguyen}`;
}

//-------------------Bài 10--------------------//
function demSoAmTrongMang(arr) {
    var demSoAm = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            demSoAm++;
        }
    }
    return demSoAm;
}

function soSanh() {
    var soDuong = demSoDuongTrongMang(arrNumber);
    var soAm = demSoAmTrongMang(arrNumber);

    if (soDuong > soAm) {
        document.querySelector(".result10").innerHTML = "Trong mảng, số dương nhiều hơn số âm.";
    } else if (soDuong < soAm) {
        document.querySelector(".result10").innerHTML = "Trong mảng, số âm nhiều hơn số dương.";
    } else {
        document.querySelector(".result10").innerHTML = "Trong mảng, số dương và số âm bằng nhau.";
    }
}