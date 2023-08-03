function multiplyBy() {
 num1 = document.getElementById("firstNumber").value;
num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

//JavaScript: Get the extension of a filename

const filename = "index.css"

const spliteddata =  filename.split('.').pop();
const data = document.getElementById("split")
data.innerHTML = spliteddata;
console.log(spliteddata )

function sumTriple(x, y ) {
    if(x===y){
        return 3* (x+y)
    }
    else 
    {
        return (x+y);

    }
}

console.log(sumTriple(10, 20))