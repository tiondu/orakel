input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Down), function () {
    if (randint(0, 5) < 2) {
        basic.showIcon(IconNames.Sad, 3 * 1000)
    } else {
        basic.showIcon(IconNames.Happy, 3 * 1000)
    }
    for (let index = 0; index < 1; index++) {
        basic.showIcon(IconNames.ArrowWest, 800)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.ArrowWest, 800)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.ArrowWest, 800)
    }
})
for (let index = 0; index < 1; index++) {
    basic.showIcon(IconNames.ArrowWest, 800)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.ArrowWest, 800)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.ArrowWest, 800)
}
