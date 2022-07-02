const rewire = require("rewire");
const removeArrayValues = rewire("./app.js").__get__("removeArrayValues");

test('Function removeArrayValues must exist', () => {
    
    expect(removeArrayValues).not.toBe(undefined);
});
test('Function removeArrayValues must return something', () => {
    
    expect(removeArrayValues({a: 1, b: [1]})).not.toBe(undefined);
});
test('Function removeArrayValues must return an object', () => {
    
    expect(typeof removeArrayValues({a: 1, b: [1]})).toBe("object");
});


test('The function must removes any properties whose values are arrays.', () => {
  
    var obj = {
        a: [1, 3, 4],
        b: 2,
        c: ['hi', 'there']
    }
    removeArrayValues(obj)
    expect(obj).toEqual({ b: 2 })
})
test('The function must removes any properties whose values are arrays.', () => {

    let obj = {
        a: [3, 2, 6],
        b: 55,
        c: ['let\'s', 'rock'],
        d: 13
    }
    removeArrayValues(obj)
    expect(obj).toEqual({ b: 55, d: 13 })
})
