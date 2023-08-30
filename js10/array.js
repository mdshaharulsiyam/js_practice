// let ary = [28,34,78,34,23,76,23,76]
let ary = new Array()
ary.push(23)
ary.push(3)
console.log(ary)
let ary2 = [28,34,78,34,23,76,23,76]
ary2.push(49)
console.log(ary2)
ary2.pop()
console.log(ary2)
ary2.unshift(43)
console.log(ary2)
ary2.shift()
console.log(ary2)
a = Array.isArray(ary2)
console.log(a)
ary3 = ary2.slice(1,3)
console.log(ary3)
ary3 = ary2.splice(1,2,100,200)
console.log(ary2)
console.log(ary3)
ary4 = ary.concat(ary2,ary3)
console.log(ary4)
ary4 = ary.includes(100)
console.log(ary4)
ary4 = ary2.includes(34)
console.log(ary4)
ary4 = ary2.indexOf(34)
console.log(ary4)
// nested array 
delete ary2[2]
console.log(ary2)
arry = [
    [45,767,23,87,3,890,23,56],
    [56,78,23,34,90,23,90,213],
    [34,67,23,897,34,56,23,76]
]
// array.js