console.log("11111")
const col = document.querySelectorAll('.col');

function genereteColors() {
    const hexCodes = '0123456789ABCDF';
    let color = "";
    for (let index = 0; index < 6; index++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color;
}
console.log(222222)
function setRandomColors() {

    col.forEach(function (item) {
        const text = item.querySelector('H2')
        let a = genereteColors()
        text.innerHTML = a
        item.style.background = a
        console.log(1111)
    })

}

setRandomColors()
