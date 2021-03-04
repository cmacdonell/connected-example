function randomRain () {
    list = [setRain(), setRain(), setRain(), setRain(), setRain()]
    row = 0
}
input.onButtonPressed(Button.A, function () {
    led.unplot(man_x, 4)
    if (man_x >= 1) {
        man_x += -1
    }
    led.plot(man_x, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(man_x, 4)
    if (man_x <= 3) {
        man_x += 1
    }
    led.plot(man_x, 4)
})
function setRain () {
    return randint(0, 1)
}
let row = 0
let list: number[] = []
let man_x = 0
randomRain()
man_x = 2
led.plot(man_x, 4)
let countdown = 500
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        if (list[index]) {
            led.plot(index, row)
        }
    }
    basic.pause(countdown)
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, row)
    }
    row += 1
    if (row == 4) {
        if (list[man_x] == 1) {
            basic.showString("Game Over!")
        } else {
            row = 0
            randomRain()
            if (countdown > 100) {
                countdown += -25
            }
        }
    }
})
