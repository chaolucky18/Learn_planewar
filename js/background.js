/**
 * 背景对象
 */
class Background {
    constructor(){
        this.x = 0
        this.y = -850
        let temp = 29 + parseInt(Math.random() * 5)
        // temp == 34 ? 0 : temp
        this.img = resObj[temp] || resObj[0]
        this.width = obj.width
        this.height = obj.height * 2
    }

    /**
     * 背景绘画
     * @param {Object} gameCtx 
     */
    draw(gameCtx){
        this.move()
        gameCtx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    /**
     * 背景移动
     */
    move(){
        this.y += 1
        this.y = this.y >= 0 ? -850 : this.y
    }
}