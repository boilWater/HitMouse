/**
 * 
 * 
 */
var GameOver=(function(_super){
	function GameOver(hitCallRestartGame){
		GameOver.super(this);

		this.hitCallRestartGame = hitCallRestartGame;
		this.restartGame.on(Laya.Event.CLICK,this,this.onRestartGame);
	}

	Laya.class(GameOver,"GameOver",_super);
	var _proto = GameOver.prototype;

	_proto.onRestartGame = function () {
		this.removeSelf();
		this.hitCallRestartGame.run();
		if(!this.startGame) {
			this.startGame = new GameStart();
		}
		Laya.stage.addChild(this.startGame);
	}

	_proto.updateScoreGameOver = function (score) {
		this.data = {};
        this.temp = score;
        for (var i = 9; i >= 0; i--) {
            this.data["item"+i] = {index:Math.floor(this.temp%10)};
            this.temp /= 10;
        }
        this.scoreNum.dataSource = this.data;
	}
	
	return GameOver;
})(GameOverUI)