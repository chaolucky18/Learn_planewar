/**
 * 背景对象
 */
class Background {
    constructor(){
        this.x = 0
        this.y = -850
        this.img = resObj[0]
    }

    /**
     * 背景绘画
     * @param {Object} gameCtx 
     */
    draw(gameCtx){
        this.move()
        gameCtx.drawImage(this.img, this.x, this.y)
    }

    /**
     * 背景移动
     */
    move(){
        this.y += 1
        this.y = this.y >= 0 ? -850 : this.y
    }
}