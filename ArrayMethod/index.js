let PG_marks = [91, 81, 75, 71, 65, 61, null, 'absent'];
console.log(PG_marks);
console.log(PG_marks.length)
console.log(PG_marks[0])
console.log(PG_marks[1])
console.log(PG_marks[2])
console.log(PG_marks[3])
console.log(PG_marks[4])
console.log(PG_marks[5])
console.log(PG_marks[6])
console.log(PG_marks[7])
PG_marks[8] = 80;
console.log(PG_marks.length)
//change array element
PG_marks[0] = 96;
console.log(PG_marks)
console.log(typeof PG_marks)

//ARRAY ARE MUTABLE ARRAYS CAN BE CHANGE STRING ARE IMMUTABLE IT CANNOT BE CHANGE

//IN JS ARRAYS ARE OBJECT TYPEOF ON ARRAY RETURNS OBJECT

//ARRAY CAN HOLD MANY ELEMENT IN SINGLE ARRAY

for(let i in PG_marks){
    console.log(PG_marks[i])
}

for(let i of PG_marks){
    console.log(PG_marks[i])
}