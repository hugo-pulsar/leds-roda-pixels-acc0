let acc0 = 0
basic.showIcon(IconNames.Triangle)
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
let max_acc_tot = 2500
let Lum = 30
let pulse_speed = 0.5
let intervalo = 1000
strip.showRainbow(330, 360)
input.setAccelerometerRange(AcceleratorRange.TwoG)
basic.pause(500)
strip.clear()
strip.showRainbow(1, 360)
music.setVolume(255)
basic.clearScreen()
let previousT = control.millis()
/**
 * acc0 é a acc total menos a força de gravidade. Portanto acc0 é nula quando o microbit está parado. acc0 < 20 significa parado (controla)
 */
/**
 * VER SE DA PARA FAZER WHILE PULSO SINUSOIDAL A VARIAR COM ACC!!!
 */
basic.forever(function () {
    acc0 = Math.constrain(input.acceleration(Dimension.Strength) - 1000, 0, 2500)
    if (acc0 > 100) {
        intervalo = 20
        if (control.millis() - previousT > intervalo) {
            strip.rotate(1)
            strip.show()
            previousT = control.millis()
        }
    } else {
        intervalo += 1
        intervalo = Math.constrain(intervalo, 0, 1000)
        if (control.millis() - previousT > intervalo) {
            strip.rotate(1)
            strip.show()
            previousT = control.millis()
        }
    }
})
