const index = require('./index');

test('arrow function works', ()=>{
    expect(index(4)).toBe(8);
})