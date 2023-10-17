const sum = (a,b) => {
    return a + b
}

function fromEuroToDollar (euro) {
    if (euro < 0) {
        return "This is a negative number"
    }
    return euro * 1.2
}

function fromDollarToYen (dollar) {
    if (dollar < 0) {
        return "This is a negative number"
    }
    return dollar * 127.9
}

function fromYenToPound (yen) {
    if (yen < 0) {
        return "This is a negative number"
    }
    return yen * 0.8
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

/* const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar * 127.9
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.8
    return valueInPound;
} */