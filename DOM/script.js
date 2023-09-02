const a = document.querySelector('h1')
const b = document.querySelector('#btn')
// console.log(a)
a.innerHTML = "Leetcode"
a.style.color = 'green'
// console.log(a)

// add eventlistner
// a.addEventListener('click', () => {
//     a.style.color = 'blue'
// })
let clickCount = 0
b.addEventListener('click', () => {
    if (clickCount % 2 === 0) {
        a.innerHTML = "Leetcode"
        a.style.backgroundColor = 'black'
        a.style.color = 'green'
    } else {
        a.innerHTML = "Codechef"
        a.style.backgroundColor = 'brown'
        a.style.color = 'yellow'
    }
    clickCount += 1
})

// document.querySelector('button').addEventListener('click', () => {
//     console.log("Hello")
// })


var c = document.querySelectorAll('button')
console.log(c)
c.forEach((e) => {
    console.log(e)
})