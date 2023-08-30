let ary = [28,34,78,34,23,76,23,76];
ary2 = [
    [45,767,23,87,3,890,23,56],
    [56,78,23,34,90,23,90,213],
    [34,67,23,897,34,56,23,76]
]
obj = {
    fname:'siyam',
    lname:'sorkar',
    adrees:['gabtoli','bogra','bangladesh'],
    fullname: function (fname, lname) {
        return this.fname +' '+ this.lname
    }
};

for (let a = 1; a <=100; a= a+10) {
    for (let b = a; b < a+10; b++) {
        console.log(b)
    }

}
for (let a = 1; a <=5; a++) {
    for (let b = 1; b <=a; b++) {
        console.log(b)
    }

}
for (let a = 1; a <=5; a++) {
    for (let b = 1; b <=a; b++) {
        console.log(a)
    }

}
for (let i = 0; i < ary.length; i++) {
   console.log(ary[i])
    
}
for (let i = 0; i < ary2.length; i++) {
    for (let j = 0; j < ary2[i].length; j++) {
        console.log(ary2[i][j])
    }
    
}
ary2.forEach(function(value,index){
    console.log(index+' '+value)
})
for (const key in obj) {
    console.log(key+':'+obj[key])
}
// funcWithloops.js