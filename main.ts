function randomRain () {
    list = [setRain(), setRain(), setRain(), setRain(), setRain()]
    row = 0
}
function setRain () {
    return randint(0, 1)
}
let row = 0
let list: number[] = []
randomRain()
basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        if (list[index]) {
            led.plot(index, row)
        }
    }
    basic.pause(1000)
    for (let index = 0; index <= 4; index++) {
        led.unplot(index, row)
    }
    row += 1
    if (row == 4) {
        row = 0
        randomRain()
    }
})
