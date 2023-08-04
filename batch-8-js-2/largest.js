function largestnumber(numbers) {
    let large = 0;
    for (let i = 0; i < numbers.length; i++) {
        let current = numbers[i]
       if (current > large) {
        large = current;
       }
        
    }
    return large;
}
let ary = [65,78,3,87,23,78,34,67];
let largestNumber = largestnumber(ary);
console.log(largestNumber)