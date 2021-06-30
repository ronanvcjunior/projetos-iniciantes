let caixa = document.getElementById("caixa")
let checkBox = document.getElementById('checkBox')

function check() {
    if (checkBox.checked == true) {
        caixa.setAttribute('class', 'caixa play')
    } else {
        caixa.setAttribute('class', 'caixa')
    }
}