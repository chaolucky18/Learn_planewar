/**
 * 玩家子弹类
 * 玩家在哪，子弹就在哪里
 */
class Bullet {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.img = resObj[3]
        this.width = this.img.width / 2
        this.height = this.img.height / 2
    }

    /**
     * 子弹绘画方法
     * @param {Object} gameCtx 
     */
    draw(gameCtx) {
        this.move()
        gameCtx.drawImage(this.img, this.x - (this.width / 2), this.y, this.width, this.height)
    }

    /**
     * 子弹移动方法（绘制）
     */
    move() {
        const speed = 20 // 子弹速度
        this.y -= speed
        if (this.y < 0) {
            let i = bulletList.indexOf(this)
            if (i != -1) {
                bulletList.splice(i, 1)
            }
        }
    }
}