input.onButtonPressed(Button.A, function () {
    Jokalaria.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Jokalaria.move(1)
})
let Meteorito2: game.LedSprite = null
let Meteorito: game.LedSprite = null
let Jokalaria: game.LedSprite = null
Jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(300, 600))
    Meteorito = game.createSprite(randint(0, 4), 0)
    Meteorito2 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(80)
        Meteorito.change(LedSpriteProperty.Y, 1)
        Meteorito2.change(LedSpriteProperty.Y, 1)
    }
    if (Meteorito.isTouching(Jokalaria) || Meteorito2.isTouching(Jokalaria)) {
        music.playMelody("G E C - G E C - ", 800)
        game.gameOver()
    }
    basic.pause(200)
    music.playMelody("C E G C E G - - ", 800)
    game.addScore(1)
    Meteorito.delete()
})
