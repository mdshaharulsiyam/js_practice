let numbers = [32,34,67,78,90,67,43,-56,45,76,34]
function positiveValue(numbers) {
    let positiveValue = [];
    for (let i = 0; i < numbers.length; i++) {
        let positive = numbers[i];
        if (positive < 0) {
            break;
        }else{
            
        }
        positiveValue.push(positive)
    }
    return positiveValue;
}

console.log(positiveValue(numbers));





// // positive.js