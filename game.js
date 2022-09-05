//checking if the document is loaded
/*
if (document.readyState === "complete") {
      console.log("document.readyState: ", document.readyState, 
        `- The page DOM with Sub-resources are now fully loaded. `,
        `- "load" event`
        )
}

document.addEventListener('DOMContentLoaded', function(event) {
  
})
*/
document.onload=funct1()


// creating constants

const status = document.getElementById("status")
const game = document.getElementById("game")
const start = document.getElementById("start")
const boundary1 = document.getElementById("boundary1")
const end = document.getElementById("end")

const boundaries = document.getElementsByClassName("boundary")
const example = document.getElementsByClassName("example")

//creating functions

function funct1() {
    console.log("hello world")
    /*boundaries[1].style.color="red"*/
}

function funct2(){
  console.log("heloo world")
}

funct2()

console.info(document.readyState)

console.log("hi")

/*for(let i=0;i<boundaries.length;i++){
    boundaries(i).style.color="yellow"
}
*/
