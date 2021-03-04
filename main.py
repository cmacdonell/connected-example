def setRain():
    return randint(0, 1)
list2 = [setRain(), setRain(), setRain(), setRain(), setRain()]
row = 0

def on_forever():
    global row
    for index in range(5):
        if list2[index]:
            led.plot(index, row)
    for index2 in range(5):
        led.unplot(index2, row)
    row += 1
basic.forever(on_forever)
