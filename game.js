//checking if the document is loaded

window.addEventListener("load", function(event) {

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
                boundaries[1].style.color = "brown"
            }

            function funct2() {
                console.log("heloo world")
            }

            function hit() {
                for (let i = 0; i < boundaries.length; i++) {
                    boundaries[i].style.backgroundColor = "red"
                }
            }
        }