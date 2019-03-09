const index = require('.');

test('arrow function works', ()=>{
    expect(index(4)).toBe(8);
})