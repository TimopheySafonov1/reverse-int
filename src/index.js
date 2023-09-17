module.exports = function reverse(n) {
    let result = 0;
    let remainder = 0;
    n = Math.abs(n);
    while (n > 0) {
        remainder = (n % 10);
        result = (result * 10) + remainder;
        n = Math.floor(n / 10);
    }
    return result;
}