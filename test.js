const { sum } = require('./app.js');
test('Add a + b to equal 23', () => {
    let total = sum(14,9)
    expect(total).toBe(23)
})

const { fromDollarToYen } = require('./app.js');
test('Exchange Dollar to Yen', () => {
    let total = fromDollarToYen(1,1)
    expect(total).toBe(127.9)
})

const { fromEuroToDollar } = require('./app.js');
test('Exchange Euro to Dollar', () => {
    let total = fromEuroToDollar(2,2)
    expect(total).toBe(2.4)
})

const { fromYenToPound } = require('./app.js');
test('Exchange Yen to Pound', () => {
    let total = fromYenToPound(1,3)
    expect(total).toBe(0.8)
})