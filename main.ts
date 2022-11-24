let number = 0
input.onButtonPressed(Button.A, function () {
    if (input.temperature() < 25) {
        basic.showString("Switch off Air Conditioner")
    }
})
input.onButtonPressed(Button.AB, function () {
    number = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(number)
        number += 2
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("20211019")
})
basic.forever(function () {
	
})
