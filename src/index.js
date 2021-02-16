module.exports = function reverse (n) {
    let a = n < 0 ? n*(-1): n;
    a = a.toString().split('').reverse().join('');
}
