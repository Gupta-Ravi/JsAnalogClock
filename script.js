const Hr = document.querySelector(".hr")
const Min = document.querySelector(".min")
const Sec = document.querySelector(".sec")

setInterval(() => {
    let date = new Date()

    let hr = date.getHours() * 30
    let min = date.getMinutes() * 6
    let sec = date.getSeconds() * 6

    Hr.style.transform = `rotateZ(${(hr) + min/12}deg)`
    Min.style.transform = `rotateZ(${min}deg)`
    Sec.style.transform = `rotateZ(${sec}deg)`
})