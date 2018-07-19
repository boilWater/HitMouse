/**
 * 打地鼠游戏的关卡界面
 * 
 */
var HitMouse=(function(_super){
	function HitMouse(){
		this.moleNum = 9;
		this.moles = new Array;
		this.hitCallBackHd = Laya.Handler.create(this,this.setScore,null,false);
		this.hitCallRestartGame = Laya.Handler.create(this,this.restartGame,null,false);

		HitMouse.super(this);
		
		// this.mole = new Mole(this.normal,this.hit,21);
		for(var i = 0;i<this.moleNum;i++){
            this.box = this.getChildByName("item"+i);
            this.mole = new Mole(this.box.getChildByName("normal"),this.box.getChildByName("hit"),21,
            this.hitCallBackHd,this.box.getChildByName("scoreImg"));
            this.moles.push(this.mole);
        }
		this.hammer = new Hammer();
		this.hammer.visible = false;
		this.addChild(this.hammer);
	}

	Laya.class(HitMouse,"HitMouse",_super);
	var _proto = HitMouse.prototype;

	//显示 地鼠
	_proto.isShow = function() {
		this.barNum.value -= (1/20);
		if (this.barNum.value <= 0) {
			this.gameOver();
			return;
		}
		//随机从树洞中出现地鼠
        this.index = Math.floor(Math.random()*this.moleNum);
        this.moles[this.index].show();
	}

	_proto.startGame = function () {
		this.barNum.value = 1;
		this.score = 0;
		this.updateScoreUI();

		this.hammer.visible = true;
		this.hammer.start();
		Laya.timer.loop(1000,this,this.isShow);	
	}

	//Game Over 游戏结束
	_proto.gameOver = function () {
		Laya.timer.clear(this,this.isShow);
		this.hammer.visible = false;
        this.hammer.end();
		
		this.gameOver = new GameOver(this.hitCallRestartGame);
		this.gameOver.centerX = 0;
		this.gameOver.centerY = 30;
		this.gameOver.updateScoreGameOver(this.score);
		Laya.stage.addChild(this.gameOver);
	}

	//重新开始游戏
	_proto.restartGame = function () {
		this.removeSelf();
	}

	 //设置分数
    _proto.setScore = function(type) {
        this.score += (type==1 ? -100:100);
        if(this.score <= 0) this.score = 0;
		// console.log(this.score);
        this.updateScoreUI();
    }

    _proto.updateScoreUI = function() {
        this.data = {};
        this.temp = this.score;
        for (var i = 9; i >= 0; i--) {
            this.data["item"+i] = {index:Math.floor(this.temp%10)};
            this.temp /= 10;
        }
        this.scoreNums.dataSource = this.data;
    }

	return HitMouse;
})(HitMouseUI)