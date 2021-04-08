let move = false
input.onButtonPressed(Button.A, function () {
    move = true
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.allOff()
    move = false
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
    if (move) {
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 0)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        basic.pause(1000)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 180)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        basic.pause(1000)
    }
})
