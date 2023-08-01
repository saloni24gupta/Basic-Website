function animate_string(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;

    setInterval( () => {
        text = text[text.length -1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}

function leapyear(year) {
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
} 
console.log(leapyear(1996))
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));