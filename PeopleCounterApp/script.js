const countEl = document.getElementById("count-el")
const saveEl = document.getElementById("save-el")


let count = 0
const increment = () => {
    count += 1
    countEl.textContent = count
}

const save = () => {
    saveEl.textContent += ` - ${count}`
    countEl.textContent = 0
    count = 0
}
