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
basic.showIcon(IconNames.Angry)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.pause(100)
huskylens.writeName(1, "Env")
basic.pause(100)
huskylens.writeName(2, "Plastic")
basic.showIcon(IconNames.Square)
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
        } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(1)
            basic.pause(1000)
            basic.clearScreen()
        } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(1)
            basic.pause(1000)
            basic.clearScreen()
        } else if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(3)
            basic.pause(1000)
            basic.clearScreen()
        } else if (huskylens.isAppear(5, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Yes)
            basic.showNumber(3)
            basic.pause(1000)
            basic.clearScreen()
        } else {
            basic.showIcon(IconNames.No)
            basic.clearScreen()
        }
    }
})
