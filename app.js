fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6

// SOLUTION #1:

function returnDay(num) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (num < 1 || num > 7) {
    return null;
  } else {
    return days[num - 1];
  }
}
// SOLUTION #2:

function returnDay(num) {
  const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  if (num < 1 || num > 7) {
    return null;
  } else {
    return days[num];
  }
}
// method SOLUTION #3:

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  }
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[num - 1];
}
//methd4

function returnDay(num) {
  if (num >= 1 && num <= 7) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days[num - 1];
  }
  return null;
}
//method 5

function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  }
  const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  };
  return days[num];
}
//method 6

function returnDay(num) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const day = days[num - 1];
  // Using the JavaScript ternary operator syntax
  return day ? day : null;
}


// A long approach:
function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  } else if (num === 1) {
    return ('Monday');
  } else if (num === 2) {
    return ('Tuesday');
  } else if (num === 3) {
    return ('Wednesday');
  } else if (num === 4) {
    return ('Thursday');
  } else if (num === 5) {
    return ('Friday');
  } else if (num === 6) {
    return ('Saturday');
  } else if (num === 7) {
    return ('Sunday');
  }
}


// A long approach with a switch statement
function returnDay(num) {
  if (num >= 1 || num <= 7) {
    switch (num) {
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return null;
    }
  }
}

//jkjhjhj method 1
function sumofarray(nums){
    let sum =0;
    for(let i=0; i<nums.length; i++){
        sum +=nums[i];
    }
    return sum;
}

//method2
     
function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
      total += num;
    }
    return total;
  }
const containers = document.querySelector("#container")
for(let i=0; i<100; i++){
    const buttons = document.createElement("button")
    buttons.innerText = "button";
    buttons.setAttribute("class", "border purple")
    containers.appendChild(buttons)
}

function greet(first, second) {
    console.log(`hey there ${first} `)
}
function repeat(str, nameitme) 
{for(let i=0; i<nameitme; i++)
    { 
         console.log("hhiii")
    }
}

//repeat('saloni', 7)
// output = salonisalonisalonisalonisalonisalonisaloni
function repeatt(str, numb) {
    let result
    for(let i =0; i< numb; i++){
        result += str;
    }
    console.log(result)
}
const BTN = document.querySelectorAll(".btn");
const fas  = document.querySelector("b")
const pix = document.createElement("IMG")
pix.src = "https://media.istockphoto.com/id/186843858/photo/ocean-sunset.jpg?s=1024x1024&w=is&k=20&c=W395dC9Gu77HiBHYkoTcXhe_NW_RRAf1QaCmrz3UHzM=";
document.body.appendChild(pix);
pix.classList.add("square");
const hrs = document.createElement("h2");
hrs.append("are adorable chickens");
const pasth1 = document.querySelector("h1");
pasth1.insertAdjacentElement("beforebegin", hrs)
const creatediv = document.createElement("DIV")
creatediv.innerText = "hello i am div cretated by jso";
creatediv.setAttribute("id", "demoid")
creatediv.setAttribute("class", "border purple");
console.log(creatediv)
const demoid = document.querySelector("#demoid");
console.log(demoid)
const cli = document.createElement("li");
cli.innerText = "i am a alist li";

demoid.insertAdjacentElement("afterend", cli)
document.body.appendChild(creatediv);

const para = document.querySelector("p")
para.append("i am new in this ");
const para1 = document.querySelectorAll("p")
para1[1].append("i am child here");
const createul = document.createElement("ul");
createul.innerText = "i am ul";
document.body.appendChild(createul)

const createli = document.childNodes("li");
createli.innerText = "i am first in list";
document.children.appendChild(createli)
 BTN.forEach(btn => {
    btn.addEventListener('click', () => {
btn.classList.toggle("icons")
    })
   
})

// const dataaaaa = document.querySelectorAll("a");
// console.log(dataaaaa);
// console.log("i a herer" );
const Three = document.querySelectorAll(".three")
// const BTNs = document.querySelectorAll(".btn");
Three.forEach(threes => {
    console.log(threes)
    BTN.addEventListener('click', () => {
        console.log("button click")
    })
    
})
// BTNs.addEventListener('click', () => {
//     threes.classList.toggle("threes")
//     console.log("button click")
// }
//  )
const alllinks = document.querySelectorAll("a");
for (let link of alllinks) {
    link.innerText = "I am a link"
    link.style.color = "green";
}

// const BTNs = document.querySelectorAll(".btn");
// for(let btn of BTN) {
//     btn.addEventListener('click', () =>  {
//         btn.classList.toggle("icon");
//     })  
// }
// BTN.forEach(btn=> {
 

// });

BTN.addEventListener('click', () =>  {
    BTN.classList.toggle("icon");
})  
const BTNs = document.querySelector("button");
BTNs.addEventListener('click', () =>  {
    BTNs.classList.toggle("icon");
})
const BTNs = document.querySelector("button");
BTNs.addEventListener('click', () =>  {
    BTNs.classList.toggle("icons");
})
setting classlist

const h2 = document.querySelector("h2");
h2.setAttribute("class", "purple border bcolor");



// const allLinks = document.querySelectorAll('a');
// const allimage = document.getElementsByTagName("img")
// allimage[0].src = "https://media.istockphoto.com/id/1414224771/photo/female-engineer-inspects-and-controls-the-cooling-system-of-a-large-factory-air-conditioner.jpg?s=1024x1024&w=is&k=20&c=LF7PDWAd09fiiG0kVMr8RfL3U8IIUF-Fav36aftDL5w="
// const para = document.getElementsByTagName("p")
// console.log(para)


const headerrrr = document.getElementById("song")
headerrrr.innerHTML = "Saloni Gupta"
const tag = document.getElementsByTagName("b")
const square = document.getElementsByClassName("square")
// document.QuerrySellectorAll("p a")// ancger tG INSIDE p
// const hreddd = document.querySelectorAll('p a');


for(let hr of hreddd) {
    const demo = document.getElementById("demo");
demo.innerText = hr.href;
// console.log(demo.innerText)

}

console.log("till here")
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
