//diclar a function
function hello() {
    console.log('helow world')
}
// calling a function
hello()

// function with peramitter 
function names(fname, lname) {
    fullname = fname + ' ' + lname;
    return fullname
}
firstName = 'siyam';
lastname = 'sorkar';
fullname = names(firstName, lastname)
console.log(fullname)


// function.js 