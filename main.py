# Numbers
# 
# Number 1: Recyclables
# 
# Number 2: General Waste
# 
# Number 3: Food waste
# 
# 
# 
# TODO: Adding sound
# Check if it's recyclable (y: ask the empty food/liquid/wtv qn)
# If not recyclable, ask: does it have food? (y: empty food waste)
def closeShutter():
    pins.servo_write_pin(AnalogPin.P0, 0)
def openShutter3():
    pins.servo_write_pin(AnalogPin.P2, 0)
def foodWaste():
    OLED.clear()
    OLED.new_line()
    OLED.write_string_new_line("Please wait (:")
    basic.pause(5000)
    OLED.clear()
    OLED.new_line()
    OLED.write_string_new_line("Shutter opening")
    OLED.clear()
    openShutter3()
    OLED.write_string_new_line("Please dispose all food waste.")
    basic.pause(5000)
    OLED.clear()
    OLED.write_string_new_line("Shutter closing")
    closeShutter3()
    basic.pause(5000)
    OLED.new_line()
    OLED.write_string_new_line("Thank you! <3")
    OLED.clear()
    basic.clear_screen()

def on_button_pressed_a():
    foodWaste()
input.on_button_pressed(Button.A, on_button_pressed_a)

def openShutter2():
    pins.servo_write_pin(AnalogPin.P1, 180)
def notRecyclable():
    OLED.clear()
    OLED.new_line()
    OLED.write_string_new_line("This cannot be recycled")
    basic.pause(5000)
    OLED.clear()
    OLED.new_line()
    OLED.write_string_new_line("Please wait (:")
    basic.pause(5000)
    OLED.clear()
    OLED.new_line()
    OLED.write_string_new_line("Shutter opening")
    openShutter()
    basic.pause(5000)
    OLED.clear()
    OLED.write_string_new_line("Shutter closing")
    closeShutter()
    basic.pause(5000)
    OLED.clear()
    basic.clear_screen()

def on_button_pressed_ab():
    notRecyclable()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    Recyclable()
input.on_button_pressed(Button.B, on_button_pressed_b)

def closeShutter2():
    pins.servo_write_pin(AnalogPin.P1, 0)
def openShutter():
    pins.servo_write_pin(AnalogPin.P0, 180)
def Recyclable():
    OLED.clear()
    OLED.new_line()
    OLED.write_string_new_line("Kindly rinse first <3")
    OLED.new_line()
    OLED.write_string_new_line("This is recyclable!")
    basic.pause(5000)
    OLED.clear()
    OLED.write_string_new_line("Shutter opening")
    openShutter2()
    basic.pause(5000)
    OLED.clear()
    OLED.write_string_new_line("Shutter closing")
    closeShutter2()
    basic.pause(5000)
    OLED.clear()
    basic.clear_screen()
def closeShutter3():
    pins.servo_write_pin(AnalogPin.P2, 180)
OLED.init(128, 64)
basic.show_icon(IconNames.ANGRY)
huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.OBJECTCLASSIFICATION)
basic.pause(100)
huskylens.write_name(1, "Env")
basic.pause(100)
huskylens.write_name(2, "Plastic")
basic.pause(100)
huskylens.write_name(3, "Tissue Paper")
basic.pause(100)
huskylens.write_name(4, "Food Waste")
basic.show_icon(IconNames.SQUARE)
huskylens.request()
if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
    OLED.write_string_new_line("Ready")
    OLED.new_line()
    OLED.write_string_new_line("Place item")
    basic.show_icon(IconNames.HAPPY)
    basic.pause(10000)
    OLED.clear()
if huskylens.is_appear(2, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
    OLED.write_string_new_line("Is there food?")
    OLED.new_line()
    OLED.write_string_new_line("If yes, press A")
    OLED.new_line()
    OLED.write_string_new_line("If no, press B")
    basic.pause(10000)
    OLED.clear()
if huskylens.is_appear(3, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
    OLED.write_string_new_line("Is there food?")
    OLED.new_line()
    OLED.write_string_new_line("If yes, press A")
    OLED.new_line()
    OLED.write_string_new_line("If no, press A and B")
    basic.pause(10000)
    OLED.clear()
if huskylens.is_appear(4, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
    foodWaste()
    basic.pause(10000)
    OLED.clear()

def on_forever():
    pass
basic.forever(on_forever)
