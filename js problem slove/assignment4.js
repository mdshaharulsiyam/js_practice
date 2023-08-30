function cubeNumber(number) {
        if ((typeof number) === 'number') {
        let result = Math.pow(number, 3);
        return result;
   }else{
        let result = 'please input a valid number ';
        return result;
   }
}
// console.log(cubeNumber('a'))
function matchFinder(string1, string2) {
     if (((typeof string1) !== 'string') || ((typeof string2) !== 'string')) {
        return 'please input a valid string ';
    }else{
         return string1.includes(string2)
   }
}
// console.log(matchFinder('siyam', 3))
function sortMaker(arr) {  
    if(arr.length == 2 && (arr[0] > 0 || arr[2] > 0) ){
        largestNumber = arr[0];
        sortedArr = [largestNumber,];
            if(arr[0]<arr[1]){
                sortedArr.unshift(arr[1]);
            }else if(arr[0]==arr[1]){
                return 'equal'
            }
            else{
                sortedArr.push(arr[1]);
            }
            
    }else{
        return 'Invalid Input'
    }
    return sortedArr;
}
// console.log(sortMaker([-2,2]))
function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
    return street +', '+ house+', '+society;
}
function canPay(changeArray, totalDue) {
   let totalMonyIhave = 0;
   if (Array.isArray(changeArray) && changeArray.length !== 0) {
    for (let i = 0; i < changeArray.length; i++) {
        totalMonyIhave += changeArray[i]
    }
    if (totalMonyIhave>=totalDue) {
        return true
    }else{
        return false
    }
   }else{
        return 'invalid Please input how much money you have'
   }
}
// console.log(canPay(2, 10))