/**
 * Numbers
 * 
 * Number 1: Recyclables
 * 
 * Number 2: General Waste
 * 
 * Number 3: Food waste
 */
OLED.init(128, 64)
pins.digitalWritePin(DigitalPin.P1, 1)
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
            basic.pause(1000)
            basic.clearScreen()
            OLED.writeStringNewLine("Does it contain any liquid? Press A (Yes) or B (No)")
            basic.pause(8000)
            OLED.clear()
            if (input.buttonIsPressed(Button.A)) {
                OLED.writeStringNewLine("Unfortunately this cannot be recyclable ")
                basic.pause(8000)
                OLED.clear()
            }
            if (input.buttonIsPressed(Button.B)) {
                OLED.writeStringNewLine("This can be recyclable!")
                basic.pause(8000)
                OLED.clear()
                OLED.writeStringNewLine("Plastic")
                basic.showNumber(1)
                basic.pause(1000)
                basic.clearScreen()
                OLED.clear()
            }
        } else {
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
            }
            basic.showIcon(IconNames.No)
            basic.clearScreen()
        }
    }
})
