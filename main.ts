input.onButtonPressed(Button.A, function () {
    Jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Jokalaria.move(1)
})
let Meteorito: game.LedSprite = null
let Jokalaria: game.LedSprite = null
Jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(500, 750))
    Meteorito = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        Meteorito.change(LedSpriteProperty.Y, 1)
    }
    if (Meteorito.isTouching(Jokalaria)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    Meteorito.delete()
})
