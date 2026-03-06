basic.showIcon(IconNames.Yes)
basic.forever(function () {
    serial.writeNumber(pins.analogReadPin(AnalogReadWritePin.P2))
    if (pins.analogReadPin(AnalogReadWritePin.P2) < 900) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M2A,
        0
        )
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M2A,
        150
        )
    }
})
