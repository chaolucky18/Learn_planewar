/**
 * 敌机对象
 */

class Enemy {
    constructor() {
        let temp = parseInt(Math.random() * 100)
        if (temp < 4) {
            // 大
            this.type = 0
            this.hp = 20
            this.img = resObj[6]
            this.speed = 1 + parseInt(Math.random() * 2)
        }
        else if (temp < 18) {
            // 中
            this.type = 1
            this.hp = 7
            this.img = resObj[5]
            this.speed = 2 + parseInt(Math.random() * 3)
        }
        else if (temp <= 100) {
            // 小
            this.type = 2
            this.hp = 3
            this.img = resObj[4]
            this.speed = 3 + parseInt(Math.random() * 4)
        }

        this.width = this.img.width
        this.height = this.img.height
        this.y = 0 - this.height;
        this.x = parseInt(Math.random() * obj.width)
        this.totalLife = this.hp
    }

    /**
     * 敌机绘制方法
     * @param {Object} gameCtx 
     */
    draw(gameCtx) {
        if (this.x + this.width > obj.width) {
            this.x = obj.width - this.width
        }
        this.move()
        gameCtx.strokeRect(this.x, this.y - 12, this.width, 4)
        gameCtx.fillStyle = "black"
        gameCtx.fillRect(this.x, this.y - 12, this.hp / this.totalLife * this.width, 2)
        gameCtx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    /**
     * 移动
     */
    move() {
        this.y += this.speed
        if (this.y > obj.height + this.height) {
            let i = enemyList.indexOf(this)
            if (i != -1) {
                enemyList.splice(i, 1)
            }
        }
    }

    /**
     * 检测是否血量为0，为0则完成死亡流程
     */
    isDie() {
        if (this.hp <= 0) {
            let index = enemyList.indexOf(this)
            if (index != -1) {
                enemyList.splice(index, 1)
            }
            // 根据飞机的类型统计分数
            switch(this.type) {
                case 2:
                    score += 10
                    break
                case 1:
                    score += 30
                    break
                case 0:
                    score += 100
                    break
                default:
                    break
            }
            // 爆炸动画
            let b = new Boom(this.x, this.y, this.type)
            boomList.push(b)
            // 爆炸音效
            let audio = document.createElement('audio')
            if(this.type == 2 || this.type == 1) {
                audio.src = './img/enemy0_down.mp3'
            }
            else {
                audio.src = './img/enemy2_down.mp3'
            }
            audio.play()
        }
        else {
            // 大飞机
            if(this.type == 0) {
                this.img = resObj[8]
            }
            // 中飞机
            else if(this.type == 1) {
                this.img = resObj[7]
            }
        }
    }
}