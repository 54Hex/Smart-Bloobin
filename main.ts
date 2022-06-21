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
    pins.servoWritePin(AnalogPin.P2, 0)
}
function foodWaste () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("Please wait (:")
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter opening")
    OLED.clear()
    openShutter3()
    OLED.writeStringNewLine("Please dispose all food waste.")
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter closing")
    closeShutter3()
    basic.pause(5000)
    OLED.newLine()
    OLED.writeStringNewLine("Thank you! <3")
    OLED.clear()
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    foodWaste()
})
function openShutter2 () {
    pins.servoWritePin(AnalogPin.P1, 180)
}
function notRecyclable () {
    OLED.newLine()
    OLED.writeStringNewLine("This cannot be recycled")
    OLED.newLine()
    OLED.writeStringNewLine("Please wait for the shutter to open.")
    basic.pause(10000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter opening")
    openShutter()
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter closing")
    closeShutter()
    basic.pause(5000)
    basic.clearScreen()
}
input.onButtonPressed(Button.AB, function () {
    notRecyclable()
})
input.onButtonPressed(Button.B, function () {
    Recyclable()
})
function closeShutter2 () {
    pins.servoWritePin(AnalogPin.P1, 0)
}
function openShutter () {
    pins.servoWritePin(AnalogPin.P0, 180)
}
function Recyclable () {
    OLED.clear()
    OLED.newLine()
    OLED.writeStringNewLine("Kindly rinse first <3")
    OLED.newLine()
    OLED.writeStringNewLine("This is recyclable!")
    basic.pause(5000)
    OLED.clear()
    OLED.writeStringNewLine("Shutter opening")
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
huskylens.writeName(3, "Tissue Paper")
basic.pause(100)
huskylens.writeName(4, "Food Waste")
basic.showIcon(IconNames.Square)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        OLED.writeStringNewLine("Ready")
        OLED.newLine()
        OLED.writeStringNewLine("Place item")
        basic.showIcon(IconNames.Happy)
        basic.pause(10000)
        OLED.clear()
    }
    if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        OLED.writeStringNewLine("Is there food?")
        OLED.newLine()
        OLED.writeStringNewLine("If yes, press A")
        OLED.newLine()
        OLED.writeStringNewLine("If no, press B")
        basic.pause(10000)
        OLED.clear()
    }
    if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        OLED.writeStringNewLine("Does this contains any food? Press A+B (Yes) else press B")
        basic.pause(10000)
        OLED.clear()
    }
    if (huskylens.isAppear(4, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        foodWaste()
        basic.pause(10000)
        OLED.clear()
    }
})
