const allLinks = document.querySelectorAll('a');
const allimage = document.getElementsByTagName("img")
allimage[0].src = "https://media.istockphoto.com/id/1414224771/photo/female-engineer-inspects-and-controls-the-cooling-system-of-a-large-factory-air-conditioner.jpg?s=1024x1024&w=is&k=20&c=LF7PDWAd09fiiG0kVMr8RfL3U8IIUF-Fav36aftDL5w="
const para = document.getElementsByTagName("p")
console.log(para)



const headerrrr = document.getElementById("song")
headerrrr.innerHTML = "Saloni Gupta"
const tag = document.getElementsByTagName("b")
const square = document.getElementsByClassName("square")

for (let SQUARE of square) {
    SQUARE.src = "https://media.istockphoto.com/id/1399292810/photo/group-of-wildlife-animals-in-the-jungle-together.jpg?s=1024x1024&w=is&k=20&c=eVXWL8BnyaG5f210DZ_cSWiDD0NO4SkaKNdIX4mlAeQ=";
}
tag[0].innerText = "Saloni";;

// tag.innerText = "saloni gupta";
// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    console.log(link)
    // link.style.color = 'rgb(0, 108, 134)';
    // link.style.textDecorationColor = 'magenta';
    // link.style.textDecorationStyle = 'wavy'
}



for (let img of allimage) {
    console.log(img)
}
allLinks[0].href = "www.google.com"
allLinks[0].innerText = "Google";
