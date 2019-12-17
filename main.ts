namespace SpriteKind {
    export const object = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    jared.vy += -250
    trampo.setKind(SpriteKind.object)
    trampo.x += Math.randomRange(-70, 70)
    trampo.y += Math.randomRange(-50, -60)
})
let trampo: Sprite = null
let jared: Sprite = null
scene.setBackgroundColor(15)
jared = sprites.create(img`
f f f f f 5 5 5 5 5 f f f f f f 
f f 5 5 5 5 f f f f 5 5 5 5 f f 
f f 5 f f f f f f f f f f 5 5 5 
f 5 f f 9 f f f f f 9 f f f f 5 
5 5 f 9 9 f f f f f 9 9 f f f 5 
5 f f f f f f 9 9 f f f f f f 5 
5 f f f f f f 9 9 f f f f f f 5 
5 5 f f f f f f f f f f f f 5 5 
f 5 f f f 5 5 5 5 5 5 5 5 f 5 f 
5 f 5 5 5 5 f f f f f 5 5 5 f 5 
5 f f 5 f f f f f f f f f 5 f 5 
5 5 5 5 5 5 f f f f 5 5 5 5 5 5 
f f f 5 5 5 f f f f 5 5 5 f f f 
f f f 5 5 5 f f f f 5 5 5 f f f 
f f f 5 5 5 f f f f 5 5 5 f f f 
f f f 5 5 5 f f f f 5 5 5 f f f 
`, SpriteKind.Player)
scene.cameraFollowSprite(jared)
jared.ay = 100
trampo = sprites.create(img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
5 f f f f f f 5 f f f f f f f 5 
f 5 5 f f 5 5 f 5 5 f f f 5 5 f 
f f 5 f 5 f f f f f 5 f 5 f f f 
f f f 5 f f f f f f f 5 f f f f 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.object)
jared.setPosition(300, 400)
trampo.setPosition(300, 520)
game.onUpdate(function () {
    jared.x += controller.dx()
})
