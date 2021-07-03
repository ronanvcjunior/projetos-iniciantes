let circle = document.getElementById('circle')
let checkBox = document.getElementById('check')
let pushColor = document.getElementById('pushColor')
let inputColor = document.getElementById('inputColor')
let inputTime = document.getElementById('inputTime')
let cleanColor = document.getElementById('cleanColor')
let aviso = document.getElementById('aviso')

let cores = []

let i = 0
let time = parseFloat('3') * 1000

function myLoop() {
  setTimeout(function() {
      if (checkBox.checked == false) {
        i = 1000
    } 
    circle.style.background = `${cores[i]}`
    console.log(i);
    i++
    if (i < cores.length) {
      myLoop()
    } else if (i == cores.length) {
        i = 0
        myLoop()
    }
  }, time)
}

function check() {
    if (checkBox.checked == false) {
        inputColor.readOnly = false
        inputTime.readOnly = false

        inputColor.style.cursor = 'auto'
        inputTime.style.cursor = 'auto'
        pushColor.style.cursor = 'pointer'
        cleanColor.style.cursor = 'pointer'

        inputColor.style.userSelect = 'auto'
        inputTime.style.userSelect = 'auto'

        pushColor.setAttribute('class', 'pushColorOFF')

        circle.style.background = '#292b2c'
        circle.style.boxShadow = '-4px -4px 10px rgba(255, 255, 255, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.3), inset -4px -4px 10px rgba(255, 255, 255, 0.05), inset 4px 4px 10px rgba(0, 0, 0, 0.3)'
    } else {
        inputColor.readOnly = true
        inputTime.readOnly = true

        inputColor.style.cursor = 'default'
        inputTime.style.cursor = 'default'
        pushColor.style.cursor = 'default'
        cleanColor.style.cursor = 'default'

        inputColor.style.userSelect = 'none'
        inputTime.style.userSelect = 'none'

        pushColor.setAttribute('class', '')

        if (cores.length != '0') {
            if (inputTime.value != '') {
                time = parseFloat(inputTime.value) * 1000
            }
            console.log(cores)
            circle.style.boxShadow = '-4px -4px 10px rgba(255, 255, 255, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.3)'

            circle.style.background = `${cores[0]}`

            i = 1
            myLoop()
        }
    }
}

function isInputNumberAnpPoint(event) {
    let char = String.fromCharCode(event.which)

    if (!(/^[0-9.]+$/.test(char))) {
        event.preventDefault()
    }
}

function isInputHex(event) {
    let char = String.fromCharCode(event.which)

    if (!(/^[0-9A-Fa-f]+$/.test(char))) {
        event.preventDefault()
    }
}

function AdicionarColor() {
    if (checkBox.checked == false) {
        if (inputColor.value.length == '3' || inputColor.value.length == '6') {
            aviso.style.display = 'none'
            cores.push('#' + inputColor.value)
        } else {
            console.log(inputColor.value.length);
            aviso.style.display = 'initial'
        }

        inputColor.value = ''
    }
}

function limparCor() {
    if (checkBox.checked == false) {
        cores = []
    }
}

function mouseDown() {
    if (checkBox.checked == false) {
        cleanColor.style.fontSize = '0.95rem'
        cleanColor.style.boxShadow = '-4px -4px 10px rgba(255, 255, 255, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.3), inset -4px -4px 10px rgba(255, 255, 255, 0.05), inset 4px 4px 10px rgba(0, 0, 0, 0.3)'
    }
}

function mouseUp() {
    cleanColor.style.fontSize = '1rem'
    cleanColor.style.boxShadow = '-4px -4px 10px rgba(255, 255, 255, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.3)'
}