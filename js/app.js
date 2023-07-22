const swordImage = document.querySelector(".sword");
const spiderImage = document.querySelector(".spider");
const body = document.querySelector("body")
const changeTime = document.querySelector("#change-time")


window.addEventListener('mousemove', e => {
   swordImage.style = `
   position:absolute;
   top: ${e.pageY - 10}px;
   left: ${e.pageX - 18}px;
   `
})

let innerWidth = window.innerWidth - 100
let innerHeight = window.innerHeight - 100
window.addEventListener('resize', (e) => {
   innerWidth = window.innerWidth - 100
   innerHeight = window.innerHeight - 100
})

let speed = 1000

let moveSpiderInterval

function moveSpider(speed) {
   moveSpiderInterval = setInterval(() => {
      let left = Math.random() * innerWidth;
      let top = Math.random() * innerHeight;

      spiderImage.style = `
      position: absolute;
      top: ${top}px;
      left: ${left}px;
      
      `

   }, speed)
}

changeTime.addEventListener("change", () => {
   clearInterval(moveSpiderInterval)
   moveSpider(parseInt(changeTime.value))
})
moveSpider(speed)


const score = document.createElement("h1")
score.textContent = "Score: 0"
body.append(score)
let counter = 0


spiderImage.addEventListener('click', () => {
   counter++
   console.log(counter)
   score.textContent = `Score: ${counter}`
})