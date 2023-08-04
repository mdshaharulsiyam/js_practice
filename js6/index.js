function oddnumbersum(numbers) {
    let oddnumber = [];
    let sum = 0;
     for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i]
     //    document.write(element +' ')
        if ((element % 2 )!==0) {
         // document.write(element +' ')
         oddnumber.push(element)
        }
     }
     for (let i = 0; i < oddnumber.length; i++) {
         sum =sum + oddnumber[i];
     }
     // document.write(oddnumber +' ')
     // document.write(sum +' ')
     return sum;
    }
   let number = [46,45,34,65,56,65,74,65,65,98,34,78,54,87,76]
 //    oddnumbersum(number)
 console.log(oddnumbersum(number))