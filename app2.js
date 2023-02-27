const col = document.querySelectorAll('.col')
const button = document.querySelectorAll(".fa-solid")
const divSave = document.querySelector('.seveColor')
let colors = []


button.forEach(function (item) {
    item.addEventListener('click', function () {
        changeLock(item)
    })
})
document.addEventListener("keydown", event => {

    event.code.toString().toLowerCase() == "space" ? setRandomColors() : null

})
divSave.addEventListener('click', function () {
    saveColors()
})
let header = document.querySelector('.seveColor1')
header.addEventListener('mouseover', function () {
    header.innerHTML = 'Сохранить цвета?'

})
header.addEventListener('mouseout', function () {
    header.innerHTML = 'Сохрани цвета!'
})




function setRandomColors() {

    col.forEach(function (item) {
        if (isLock(item)) {


            let color = chroma.random()
            item.style.background = color
            let h2 = item.querySelector("H2")
            h2.innerHTML = color.toString().toUpperCase()
            setTextColor(h2, color)
        }

    })

}


function setTextColor(text, color) {
    const lumnance = chroma(color).luminance()
    text.style.color = lumnance > 0.5 ? 'black' : 'white'
}
function isLock(item) {
    const key = item.querySelector('.fa-solid')

    let keyArray = key.classList

    if (key.classList.contains("fa-lock-open")) {

        return true
    } else {
        return false
    }
}
function changeLock(item) {
    let list = item.classList
    if (list.contains('fa-lock-open')) {
        list.remove('fa-lock-open')
        list.add('fa-lock')

    } else if (list.contains('fa-lock')) {
        list.remove('fa-lock')
        list.add('fa-lock-open')

    }
}
function saveColors() {
    colors.splice(0, colors.length)
    let nameOfColors = document.querySelectorAll('H2')
    nameOfColors.forEach(function (item) {
        colors.push(item.textContent)
    })
    colors = colors.map(colors => { return colors.substring(1) })
    document.location.hash = colors.toString()
    // console.log(colors)
}
function loadColors() {
    let string = document.location.hash.substring(1)
    let splitColors = string.split(',')
    for (let index = 0; index < splitColors.length; index++) {
        splitColors[index] = '#' + splitColors[index]
    }
    for (let index = 0; index < col.length; index++) {
        let backgroundLoad = col[index].style.background = splitColors[index]
        let textLoad = (col[index].querySelector('H2').innerHTML = splitColors[index])

    }

}
if (document.location.hash.length > 1) {
    loadColors()
} else {
    setRandomColors()
}