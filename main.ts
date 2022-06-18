// Numbers
// 
// Number 1: Recyclables
// 
// Number 2: General Waste
// 
// Number 3: Food waste
// 
// 
// 
// TODO: Adding sound
// Check if it's recyclable (y: ask the empty food/liquid/wtv qn)
// If not recyclable, ask: does it have food? (y: empty food waste)
function closeShutter () {
    pins.servoWritePin(AnalogPin.P0, 0)
}
function openShutter3 () {
    pins.servoWritePin(AnalogPin.P2, 2)
}
function foodWaste () {
    OLED.writeStringNewLine("Please dispose all your food waste!")
    OLED.newLine()
    OLED.writeStringNewLine("Please wait for the shutter to open.")
    basic.showNumber(3)
    basic.pause(10000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter open")
    openShutter3()
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter closing")
    closeShutter3()
    basic.pause(5000)
    OLED.clear()
    basic.clearScreen()
}
function openShutter2 () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
function notRecyclable () {
    OLED.newLine()
    OLED.writeStringNewLine("Does this contains any food? Press A+B (Yes) else wait")
    basic.pause(10000)
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("Unfortunately this cannot be recyclable. ")
    basic.showNumber(1)
    OLED.newLine()
    OLED.writeStringNewLine("Please wait for the shutter to open.")
    basic.pause(10000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter open")
    openShutter()
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter closing")
    closeShutter()
    basic.pause(5000)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    foodWaste()
})
function closeShutter2 () {
    pins.servoWritePin(AnalogPin.P1, 1)
}
function openShutter () {
    pins.servoWritePin(AnalogPin.P0, 180)
}
function Recyclable () {
    OLED.newLine()
    OLED.writeStringNewLine("Does this contains any food? Press A+B (Yes) else wait")
    basic.pause(10000)
    OLED.clear()
    OLED.writeStringNewLine("This can be Recyclable!")
    OLED.newLine()
    OLED.writeStringNewLine("Please wait for the shutter to open.")
    basic.showNumber(2)
    basic.pause(10000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter open")
    openShutter2()
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter closing")
    closeShutter2()
    basic.pause(5000)
    OLED.clear()
    basic.clearScreen()
}
function closeShutter3 () {
    pins.servoWritePin(AnalogPin.P2, 180)
}
OLED.init(128, 64)
basic.showIcon(IconNames.Angry)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.pause(100)
huskylens.writeName(1, "Env")
basic.pause(100)
huskylens.writeName(2, "Plastic")
basic.pause(100)
huskylens.writeName(3, "Apple")
basic.pause(100)
huskylens.writeName(4, "Battery")
basic.showIcon(IconNames.Square)
basic.forever(function () {
    music.setVolume(100)
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        OLED.writeStringNewLine("Ready")
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . # . .
            . . # . .
            `)
        basic.pause(5000)
        OLED.clear()
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Recyclable()
        basic.pause(5000)
        basic.clearScreen()
        OLED.clear()
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        foodWaste()
        basic.pause(5000)
        basic.clearScreen()
        OLED.clear()
    }
    if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        notRecyclable()
        basic.pause(5000)
        basic.clearScreen()
        OLED.clear()
    }
})
