let Aboutme = 'My name is siyam i am a web developer is';
let Aboutme2 = ' my age is 21';
let str = 545;
console.log(Aboutme.length);
let aboutMe = Aboutme.toLowerCase()
console.log(aboutMe);
aboutMe = Aboutme.toUpperCase()
console.log(aboutMe);
console.log(Aboutme.includes('siyam'));
console.log(Aboutme.startsWith('siyam'));
console.log(Aboutme.endsWith('developer'));
aboutMe = Aboutme.search('i')
console.log(aboutMe);
aboutMe = Aboutme.matchAll(/i/g)
console.log(aboutMe);
aboutMe = Aboutme.match(/is/g)
console.log(aboutMe);
aboutMe = Aboutme.indexOf('is')
console.log(aboutMe);
aboutMe = Aboutme.lastIndexOf('is')
console.log(aboutMe);
aboutMe = Aboutme.replace(/is/g,'are')
console.log(aboutMe);
aboutMe = Aboutme.trim()
console.log(aboutMe);
aboutMe = Aboutme.charAt(3)
console.log(aboutMe);
aboutMe = Aboutme.charCodeAt(3)
console.log(aboutMe);
// aboutMe = Aboutme.fromCharCode(3)
// console.log(aboutMe);
aboutMe = Aboutme.concat(Aboutme2)
console.log(aboutMe);
aboutMe = Aboutme.split(' ')
console.log(aboutMe);
aboutMe = Aboutme.repeat(3)
console.log(aboutMe);
aboutMe = Aboutme.slice(3, 10)
console.log(aboutMe);
aboutMe = Aboutme.substring(3, 10)
console.log(aboutMe);
aboutMe = str.toString()
console.log(aboutMe);
x = .1
y = .2
z = x*y
console.log(z);
z = z.toFixed(3);
console.log(z);
z = Number(z); //parseFloat() parseInt()
console.log(z);
// stringMathode.js