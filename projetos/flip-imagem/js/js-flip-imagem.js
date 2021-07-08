let cube = document.getElementById('cube')
let horizontal = 0
let vertical = 0

function flip(move) {
    cube.style.transform = `perspective(100000px) translateX(-50%) translateY(-50%) ${move}`
    switch (move) {
        case 'top':
            horizontal-= 90
            break;
    
        case 'left':
            vertical-= 90
            break;

        case 'right':
            vertical+= 90
            break;

        case 'bottom':
            horizontal+= 90
            break;
    }

    cube.style.transform = `perspective(100000px) translateX(-50%) translateY(-50%) rotateX(${horizontal}deg) rotateY(${vertical}deg)`
}