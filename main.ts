/**
 * Numbers
 * 
 * Number 1: Recyclables
 * 
 * Number 2: General Waste
 * 
 * Number 3: Food waste
 */
function closeShutter () {
    pins.servoWritePin(AnalogPin.P0, 0)
}
input.onButtonPressed(Button.A, function () {
    OLED.newLine()
    OLED.writeStringNewLine("Unfortunately this cannot be recyclable ")
    basic.pause(8000)
    OLED.clear()
})
input.onButtonPressed(Button.AB, function () {
    OLED.writeStringNewLine("Shutter open")
    basic.pause(5000)
    OLED.clear()
    openShutter()
    basic.pause(5000)
    closeShutter()
})
input.onButtonPressed(Button.B, function () {
    OLED.newLine()
    OLED.writeStringNewLine("This can be recyclable!")
    OLED.newLine()
    OLED.writeStringNewLine("Plastic")
    basic.pause(5000)
    OLED.clear()
    basic.showNumber(1)
    basic.pause(5000)
    basic.clearScreen()
    OLED.clear()
})
function openShutter () {
    pins.servoWritePin(AnalogPin.P0, 180)
}
OLED.init(128, 64)
basic.showIcon(IconNames.Angry)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.pause(100)
huskylens.writeName(1, "Env")
basic.pause(100)
huskylens.writeName(2, "Plastic")
basic.showIcon(IconNames.Square)
basic.forever(function () {
    music.setVolume(100)
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        OLED.writeStringNewLine("Ready")
        basic.pause(5000)
        OLED.clear()
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . # . .
            . . # . .
            `)
    } else {
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Yes)
            basic.pause(5000)
            OLED.writeStringNewLine("Does it contain any waste? Press A (Yes) or B (No)")
            basic.pause(5000)
            basic.clearScreen()
            OLED.clear()
        }
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    }
})
