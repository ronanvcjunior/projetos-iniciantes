window.onload = function(){
    borderTop()
    borderRight()
    borderBottom()
    borderLeft()

    AlernativeSize()
    check()
    reZise()
}

let sliderTopOne = document.getElementById("slider-top-1")
let sliderTopTwo = document.getElementById("slider-top-2")
let sliderRightOne = document.getElementById("slider-right-1")
let sliderRightTwo = document.getElementById("slider-right-2")
let sliderBottomOne = document.getElementById("slider-bottom-1")
let sliderBottomTwo = document.getElementById("slider-bottom-2")
let sliderLeftOne = document.getElementById("slider-left-1")
let sliderLeftTwo = document.getElementById("slider-left-2")

let borderBox = document.getElementById("borderBox")
let trackRight = document.getElementById("track-right")
let trackLeft = document.getElementById("track-left")
let borderBoxWidth = 300
let borderBoxHeight = 300

let caixa = document.getElementById("caixa")

let borderTopOne = 10
let borderTopTwo = 10
let borderRightOne = 10
let borderRightTwo = 10
let borderBottomOne = 10
let borderBottomTwo = 10
let borderLeftOne = 10
let borderLeftTwo = 10

let borderInput = document.getElementById("borderInput")

let checkBox = document.getElementById('check')
let inputWidth = document.getElementById("inputWidth")
let inputHeight = document.getElementById("inputHeight")

function borderTop() {
    borderTopOne = Math.round(parseFloat(sliderTopOne.value))
    borderTopTwo = Math.round(parseFloat(sliderTopTwo.value))

    if(borderTopOne > borderTopTwo){
        let mudança = borderTopOne
        borderTopOne = borderTopTwo
        borderTopTwo = mudança
    }

    borderTopTwo = 100 - borderTopTwo

    borderBox.style.borderRadius = `${borderTopOne}% ${borderTopTwo}% ${borderBottomTwo}% ${borderBottomOne}% / ${borderLeftTwo}% ${borderRightTwo}% ${borderRightOne}% ${borderLeftOne}%`

    InputBorder()
}

function borderRight() {
    borderRightOne = Math.round(parseFloat(sliderRightOne.value))
    borderRightTwo = Math.round(parseFloat(sliderRightTwo.value))

    if(borderRightOne > borderRightTwo){
        let mudança = borderRightOne
        borderRightOne = borderRightTwo
        borderRightTwo = mudança
    }

    borderRightTwo = 100 - borderRightTwo

    borderBox.style.borderRadius = `${borderTopOne}% ${borderTopTwo}% ${borderBottomTwo}% ${borderBottomOne}% / ${borderLeftTwo}% ${borderRightTwo}% ${borderRightOne}% ${borderLeftOne}%`

    InputBorder()
}

function borderBottom() {
    borderBottomOne = Math.round(parseFloat(sliderBottomOne.value))
    borderBottomTwo = Math.round(parseFloat(sliderBottomTwo.value))

    if(borderBottomOne > borderBottomTwo){
        let mudança = borderBottomOne
        borderBottomOne = borderBottomTwo
        borderBottomTwo = mudança
    }

    borderBottomTwo = 100 - borderBottomTwo

    borderBox.style.borderRadius = `${borderTopOne}% ${borderTopTwo}% ${borderBottomTwo}% ${borderBottomOne}% / ${borderLeftTwo}% ${borderRightTwo}% ${borderRightOne}% ${borderLeftOne}%`

    InputBorder()
}

function borderLeft() {
    borderLeftOne = Math.round(parseFloat(sliderLeftOne.value))
    borderLeftTwo = Math.round(parseFloat(sliderLeftTwo.value))

    if(borderLeftOne > borderLeftTwo){
        let mudança = borderLeftOne
        borderLeftOne = borderLeftTwo
        borderLeftTwo = mudança
    }
    
    borderLeftTwo = 100 - borderLeftTwo

    borderBox.style.borderRadius = `${borderTopOne}% ${borderTopTwo}% ${borderBottomTwo}% ${borderBottomOne}% / ${borderLeftTwo}% ${borderRightTwo}% ${borderRightOne}% ${borderLeftOne}%`

    InputBorder()
}

function AlernativeSize() {
    caixa.style.width = `${borderBoxWidth + 20}px`
    caixa.style.height = `${borderBoxHeight + 20}px`

    trackRight.style.width = `${borderBoxHeight}px`
    trackRight.style.right = `${-borderBoxHeight/2 + 3}px`

    sliderRightOne.style.width = `${borderBoxHeight}px`
    sliderRightTwo.style.width = `${borderBoxHeight}px`
    sliderRightOne.style.right = `${-borderBoxHeight/2 + 3}px`
    sliderRightTwo.style.right = `${-borderBoxHeight/2 + 3}px`

    trackLeft.style.width = `${borderBoxHeight}px`
    trackLeft.style.left = `${-borderBoxHeight/2 + 3}px`

    sliderLeftOne.style.width = `${borderBoxHeight}px`
    sliderLeftTwo.style.width = `${borderBoxHeight}px`
    sliderLeftOne.style.left = `${-borderBoxHeight/2 + 3}px`
    sliderLeftTwo.style.left = `${-borderBoxHeight/2 + 3}px`
}

function InputBorder() {
    borderInput.value = `${borderTopOne}% ${borderTopTwo}% ${borderBottomTwo}% ${borderBottomOne}% / ${borderLeftTwo}% ${borderRightTwo}% ${borderRightOne}% ${borderLeftOne}%`
}

function copyBorder() {
    borderInput.select()
    borderInput.setSelectionRange(0, 9999)
    document.execCommand("copy")
}

function check() {
    if (checkBox.checked == true) {
        inputWidth.readOnly = false
        inputHeight.readOnly = false

        inputWidth.style.cursor = 'auto'
        inputHeight.style.cursor = 'auto'

        inputWidth.style.userSelect = 'auto'
        inputHeight.style.userSelect = 'auto'
    } else {
        inputWidth.readOnly = true
        inputWidth.value = 300

        inputHeight.readOnly = true
        inputHeight.value = 300

        inputWidth.style.cursor = 'default'
        inputHeight.style.cursor = 'default'

        inputWidth.style.userSelect = 'none'
        inputHeight.style.userSelect = 'none'

        borderBoxWidth = 300
        borderBoxHeight = 300

        AlernativeSize()
    }
}

function isInputNumber(event) {
    let char = String.fromCharCode(event.which)

    if (!(/[0-9]/.test(char))) {
        event.preventDefault()
    }
}

function reZise() {
    borderBoxWidth = parseInt(inputWidth.value)
    borderBoxHeight = parseInt(inputHeight.value)

    AlernativeSize()
}