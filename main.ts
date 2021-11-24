input.onButtonPressed(Button.A, function () {
    Jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Jokalaria.move(1)
})
let Pilota: game.LedSprite = null
let Jokalaria: game.LedSprite = null
Jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(500, 1000))
    Pilota = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(400)
        Pilota.change(LedSpriteProperty.Y, 1)
    }
    if (Pilota.get(LedSpriteProperty.Y) == 4) {
        if (Jokalaria.isTouching(Pilota)) {
            game.addScore(1)
            Pilota.delete()
        } else {
            game.gameOver()
        }
    }
})
