obj = new Object()
obj.name = 'siyam'
obj.jila = 'bogra'
console.log(obj)

aboutMe = {
    fname:'siyam',
    lname:'sorkar',
    adrees:['gabtoli','bogra','bangladesh'],
    fullname: function (fname, lname) {
        return this.fname +' '+ this.lname
    }
}
fullname = aboutMe.fullname()
console.log(fullname)
// obj.js