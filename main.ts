/**
 * Numbers
 * 
 * Number 1: Recyclables
 * 
 * Number 2: General Waste
 * 
 * Number 3: Food waste
 */
pins.digitalWritePin(DigitalPin.P1, 1)
pins.digitalWritePin(DigitalPin.P2, 2)
basic.showIcon(IconNames.Angry)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.pause(100)
huskylens.writeName(1, "Env")
basic.pause(100)
huskylens.writeName(1, "Plastic")
basic.showIcon(IconNames.Square)
OLED.writeStringNewLine("test")
basic.forever(function () {
    huskylens.request()
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showLeds(`
                . . # . .
                . # . # .
                . . . # .
                . . # . .
                . . # . .
                `)
        } else {
            basic.showIcon(IconNames.No)
        }
        if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(1)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
