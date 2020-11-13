/**
 * 全屏清理敌人道具，同Prop1.js 继承自Prop1
 */

 class Prop2 extends Prop1{
     constructor() {
         super()
         this.img = resObj[24]
     }

     /**
      * 重写移动
      */
     move() {
        this.y += this.speed
        // 移除未捡到的道具
        if (this.y > obj.height) {
            let index = prop2List.indexOf(this)
            if (index != -1) {
                prop2List.splice(index, 1)
            }
        }
    }
 }