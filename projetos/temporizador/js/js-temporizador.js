let date = document.getElementById('date')
var data = new Date()
let evento = ''
let time

var milisegundosPorDia = 1 * 24 * 60 * 60 * 1000
var milisegundosPorHora = 1 * 60 * 60 * 1000
var milisegundosPorMinuto = 1 * 60 * 1000
var milisegundosPorSegundo = 1 * 1000

let dia 
let hora
let minuto
let segundo

let i = 0

let day = document.getElementById('day')
let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')

function pushDate() {
    evento = new Date(date.value)
    evento.setHours(evento.getHours() + 3)

    time = evento.getTime() - data.getTime() - (3000)

    if (time > 0) {
        dia = parseInt(time / milisegundosPorDia)

        hora = parseInt((time - dia * milisegundosPorDia) / milisegundosPorHora)

        minuto = parseInt((time - (dia * milisegundosPorDia + hora * milisegundosPorHora)) / milisegundosPorMinuto)

        segundo = Math.round((time - (dia * milisegundosPorDia + hora * milisegundosPorHora + minuto * milisegundosPorMinuto)) / milisegundosPorSegundo)

        day.innerText = dia
        hour.innerText = hora 
        minute.innerText = minuto 
        second.innerText = segundo

        console.log(`Dia: ${dia} - Hora: ${hora} - Minuto: ${minuto} - Segundo: ${segundo}`);

        i = 1
        myLoop()
    }
}

function myLoop() {
    setInterval(function() {
        time = evento.getTime() - data.getTime() - (3000 + i * 1000)

        dia = parseInt(time / milisegundosPorDia)

        hora = parseInt((time - dia * milisegundosPorDia) / milisegundosPorHora)

        minuto = parseInt((time - (dia * milisegundosPorDia + hora * milisegundosPorHora)) / milisegundosPorMinuto)
        
        segundo = Math.round((time - (dia * milisegundosPorDia + hora * milisegundosPorHora + minuto * milisegundosPorMinuto)) / milisegundosPorSegundo)

        day.innerText = dia
        hour.innerText = hora 
        minute.innerText = minuto 
        second.innerText = segundo

        console.log(`Dia: ${dia} - Hora: ${hora} - Minuto: ${minuto} - Segundo: ${segundo}`);

        i++
    }, 1000)
}