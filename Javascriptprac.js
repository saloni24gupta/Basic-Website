const num = Math.ceil(Math.random() * 10);
console.log(num)

const gnum = prompt('Guess the number between 1 and 10 inclusive')
if(gnum === num) {
    console.log('Good Match')
}
else {
    console.log('Not Match')
}

//Days left in chrismas

const today = new Date();
const years = new Date(today.getFullYear(), 11, 25);
if(today.getMonth() == 11 && today.getDate() > 25){
years.setFullYear(years.getFullYear()+1);
}


console.log(years - today)

