/**
 * 双排子弹道具对象
 * 道具的初始坐标，高度由图片决定，高度决定纵坐标
 * 横坐标随机
 * 宽度由图片决定
 */

 class Prop1 {
     constructor(){
        this.img = resObj[23]
        this.width = this.img.width
        this.height = this.img.height
        this.x = parseInt(Math.random() * (obj.width - this.height))
        this.y = 0 - this.height
        this.speed = 5 + parseInt(Math.random() * 15)
     }

     /**
      * 移动
      */
     move() {
         this.y += this.speed
         // 移除未捡到的道具
         if (this.y > obj.height) {
             let index = prop1List.indexOf(this)
             if (index != -1) {
                 prop1List.splice(index, 1)
             }
         }
     }

     /**
      * 
      * @param {Object} gameCtx 
      */
     draw(gameCtx) {
        this.move()
        gameCtx.drawImage(this.img, this.x, this.y, this.width, this.height)
     }
 }