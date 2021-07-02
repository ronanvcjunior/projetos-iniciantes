



let i = 1;                  //  set your counter to 1
let time = parseFloat('0.25') * 1000
console.log(time)

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log('hello');   //  your code here
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, time)
}

myLoop();                   //  start the loop