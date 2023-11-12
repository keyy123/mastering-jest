function sum(a, b) {
    return a + b;
}

function sumv2(a) {
    let num1 = a;
    return (b) => {
        return num1 + b;
    }
}

console.log(sumv2(5)(10))

module.exports = {sum, sumv2}