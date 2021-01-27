let arr = [98, 67, 42, 0, 1, 3, 'window', 'apple'];
const countEvenOddNumbers = arr => {
    let zero = 0;
    let oddNumbers = 0;
    let evenNumbers = 0;
    arr.map (i=> {
        if (i === 0) return zero++
        if (typeof i !== 'number') return null
        if (i%2 === 0) return evenNumbers++
        return oddNumbers++
    })
    console.log ('Чётные элементы:', evenNumbers);
    console.log ('Нечётные элементы:', oddNumbers);
    console.log ('Нулевой элемент:', zero);
}
countEvenOddNumbers (arr);