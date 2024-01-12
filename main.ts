let Graus = 0
basic.forever(function () {
    Graus = input.compassHeading()
    if (Graus < 45 || Graus > 315) {
        basic.showString("N")
    } else if (Graus < 135) {
        basic.showString("L")
    } else if (Graus < 225) {
        basic.showString("S")
    } else {
        basic.showString("O")
    }
})
