function checkTwoNums(num1,num2) {
    if (num1 > num2) {
        alert('Số thứ nhất lớn hơn số thứ hai');
    }
    else {
        return num1 + num2;
    }
}
let a = +prompt('Nhập số thứ nhất');
let b = +prompt('Nhập số thứ hai');
// checkTwoNums(a,b);
document.write(checkTwoNums(a,b));