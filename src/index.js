module.exports = function reverse (n) {
    const arrN = Math.abs(n).toString().split('').reverse()
    for (let i = 0; i < arrN.length; i++) {
        if (arrN[i] == 0) {
            continue
        } else {
            return +arrN.splice(i).join('')
        }
    }
}
