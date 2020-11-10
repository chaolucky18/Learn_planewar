/**
 * 英雄对象
 */
class Hero {
    constructor(){
        this.x = 200
        this.y = 500
        this.img = resObj[1]
        this.imgIndex = 0
        this.width = this.img.width / 2
        this.height = this.img.height / 2
    }

    /**
     * 绘出英雄战机方法
     * @param {Object} gameCtx 
     */
    draw(gameCtx){
        this.imgIndex++
        this.imgIndex = this.imgIndex >= 10 ? 0 : this.imgIndex
        if(this.imgIndex < 5) {
            this.img = resObj[1]
        } else {
            this.img = resObj[2]
        }
        this.imgFlag = !this.imgFlag
        gameCtx.drawImage(this.img, this.x, this.y, this.width ,this.height)
        // console.log(this.img)
    }
}