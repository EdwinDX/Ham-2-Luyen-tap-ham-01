let firstArr = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let secondArr = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
let input = prompt('Nhập tên sao').toString();
document.write(checkInSecondArr(findInFirstArr(input)));
function findInFirstArr(starName) {
    for (let i = 0;i<firstArr.length;i++) {
        if (starName===firstArr[i]) {
            return i;
        }
    }
    return -1;
}
function checkInSecondArr(starPosition) {
    if (starPosition===-1) {
        return 'Không tìm thấy sao';
    }
    else {
        return secondArr[starPosition];
    }
}