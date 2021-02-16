module.exports = function reverse (n) {
    let a = n < 0 ? n*(-1): n; // если число <0 , то умножаем на -1
    a = a.toString().split('').reverse().join('');
    return a;
}
