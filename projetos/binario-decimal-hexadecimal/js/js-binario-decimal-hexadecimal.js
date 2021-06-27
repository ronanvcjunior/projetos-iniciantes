let tipoConversao
let inputTipo
let inputValue
let outputValue
let valueTamanho
let valuePosition
let charPosition
let inputValido
let valor
var textSpan = document.getElementById('span')
let resto = 0

function converter() {
    tipoConversao = document.getElementById('tipoConversao').value
    inputTipo = tipoConversao.slice(0, 3)
    inputValue = document.getElementById('input').value.trim()
    valueTamanho = inputValue.length
    textSpan.innerHTML = ""

    inputValido = validarConversao(inputTipo, inputValue, valueTamanho)

    valor = 0

    if (inputValido) {
        converterInput(tipoConversao, inputValue, valueTamanho)
    } else {
        textSpan.innerHTML = "insira um valor valido"
        return
    }

    document.getElementById('output').value = outputValue
}

function validarConversao(inputTipo, inputValue, valueTamanho) {
    switch (inputTipo) {
        case 'bin':
            for (let position = 0; position < valueTamanho; position++) {
                retornarValuePosition(inputValue, position)
                
                if (valuePosition === 0 || valuePosition === 1) {
                    
                } else {
                    return false
                }
            }
            break

        case 'dec':
            for (let position = 0; position < valueTamanho; position++) {
                retornarValuePosition(inputValue, position)
                
                if (valuePosition >= 0 && valuePosition <= 9) {
                    
                } else {
                    return false
                }
            }
            break
        
        case 'hex':
            for (let position = 0; position < valueTamanho; position++) {
                retornarValuePosition(inputValue, position)
                
                if (valuePosition >= 0 && valuePosition <= 9) {
                    
                } else if (valuePosition === 'A' || valuePosition === 'B' || valuePosition === 'C' || valuePosition === 'D' || valuePosition === 'E' || valuePosition === 'F') {

                } else {
                    return false
                }
            }
            break
    }
    return true
}

function retornarValuePosition(inputValue, position) {
    charPosition = inputValue.charAt(position)

    valuePosition = parseInt(charPosition)

    if (valuePosition != valuePosition) {
        valuePosition = charPosition.toLocaleUpperCase()
    }
}

function converterInput(tipoConversao, inputValue, valueTamanho) {
    switch (tipoConversao) {
        case 'bin2dec':
            outputValue = 0
            converterBin2dec(inputValue, valueTamanho)
            break;
    
        case 'bin2hex':
            outputValue = ''
            converterBin2hex(inputValue, valueTamanho)
            break;

        case 'dec2bin':
            outputValue = ''
            converterDec2bin(inputValue)
            break;

        case 'dec2hex':
            outputValue = ''
            converterDec2hex(inputValue)
            break;

        case 'hex2bin':
            outputValue = ''
            converterHex2bin(inputValue, valueTamanho)
            break;

        case 'hex2dec':
            outputValue = 0
            converterHex2dec(inputValue, valueTamanho)
            break;
    }
}

function converterBin2dec(inputValue, valueTamanho) {
    let exponencial = 0

    for(let position = valueTamanho-1; position >= 0; position--) {
        retornarValuePosition(inputValue, position)

        outputValue += valuePosition * Math.pow(2, exponencial)
        exponencial++
    }
}

function converterBin2hex(inputValue, valueTamanho) {
    let exponencial = 0

    for(let position = valueTamanho-1; position >= 0; position--) {
        retornarValuePosition(inputValue, position)
        valor += valuePosition * Math.pow(2, exponencial)
        if (exponencial === 3 || position === 0) {
            exponencial = -1
            switch (valor) {
                case 10:
                    valor = "A"
                    break;
            
                case 11:
                    valor = "B"
                    break;
                
                case 12:
                    valor = "C"
                    break;
                
                case 13:
                    valor = "D"
                    break;
                
                case 14:
                    valor = "E"
                    break;
                
                case 15:
                    valor = "F"
                    break;
                
                default:
                    break;
            }
            outputValue = valor.toString() + outputValue
            valor = 0
        }
        exponencial++
    }
}

function converterDec2bin(inputValue) {
    inputValue = parseInt(inputValue)
    do {
        resto = (inputValue % 2).toString()
        inputValue = parseInt(inputValue / 2)
        outputValue = resto + outputValue
    } while (inputValue > 0);

}

function converterDec2hex(inputValue) {
    inputValue = parseInt(inputValue)

    do {
        resto = (inputValue % 16).toString()
        inputValue = parseInt(inputValue / 16)
        switch (resto) {
                case '10':
                    resto = "A"
                    break;
            
                case '11':
                    resto = "B"
                    break;
                
                case '12':
                    resto = "C"
                    break;
                
                case '13':
                    resto = "D"
                    break;
                
                case '14':
                    resto = "E"
                    break;
                
                case '15':
                    resto = "F"
                    break;
                
                default:
                    break;
        }
        outputValue = resto + outputValue
    } while (inputValue > 0);

}

function converterHex2bin(inputValue, valueTamanho) {
    for (let position = valueTamanho-1; position >= 0; position--) {
        retornarValuePosition(inputValue, position)
        switch (valuePosition) {
                case 'A':
                    valuePosition = "10"
                    break;
            
                case 'B':
                    valuePosition = "11"
                    break;
                
                case 'C':
                    valuePosition = "12"
                    break;
                
                case 'D':
                    valuePosition = "13"
                    break;
                
                case 'E':
                    valuePosition = "14"
                    break;
                
                case 'F':
                    valuePosition = "15"
                    break;
                
                default:
                    break;
        }
        converterDec2bin(valuePosition)
    }
}

function converterHex2dec(inputValue, valueTamanho) {
    let exponencial = 0

    for(let position = valueTamanho-1; position >= 0; position--) {
        retornarValuePosition(inputValue, position)
        switch (valuePosition) {
                case 'A':
                    valuePosition = 10
                    break;
            
                case 'B':
                    valuePosition = 11
                    break;
                
                case 'C':
                    valuePosition = 12
                    break;
                
                case 'D':
                    valuePosition = 13
                    break;
                
                case 'E':
                    valuePosition = 14
                    break;
                
                case 'F':
                    valuePosition = 15
                    break;
                
                default:
                    break;
        }

        outputValue += valuePosition * Math.pow(16, exponencial)
        exponencial++
    }
}