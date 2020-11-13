/**
 * 爆炸对象
 */

class Boom {
    constructor(x, y, type) {
        this.x = x
        this.y = y
        this.type = type

        switch (this.type) {
            case 2:
                this.imgs = resObj.slice(9, 13)
                break
            case 1:
                this.imgs = resObj.slice(13, 17)
                break
            case 0:
                this.imgs = resObj.slice(17, 23)
            default:
                break;
        }
        this.width = this.imgs[0].width
        this.height = this.imgs[0].height
        this.imgIndex = 0
    }

    /**
     * 绘画敌机的爆炸效果
     * @param {Object} gameCtx 
     */
    draw(gameCtx) {
        gameCtx.drawImage(this.imgs[parseInt(this.imgIndex)], this.x, this.y, this.width, this.height)
        // 索引慢速增加，.2表示一张重复10/2 5次，在索引上parseInt，就可实现暂留效果
        this.imgIndex += 0.2
        if(this.imgIndex >= this.imgs.length) {
            let i = boomList.indexOf(this)
            if (i != -1) {
                boomList.splice(i, 1)
            }
        }
    }
}