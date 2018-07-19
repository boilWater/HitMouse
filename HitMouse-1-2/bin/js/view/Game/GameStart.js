/**
 * 
 * 
 */
var GameStart=(function(_super){
	function GameStart(){
		GameStart.super(this);
		this.startGame.on(Laya.Event.CLICK, this, this.onStartGame);
	}

	Laya.class(GameStart,"GameStart",_super);
	var _proto = GameStart.prototype;

	_proto.onStartGame = function () {
		this.removeSelf();

		if (!this.mouseGame) {
			this.mouseGame = new HitMouse();
		}
		this.mouseGame.startGame();
		Laya.stage.addChild(this.mouseGame);
	}

	return GameStart;
})(GameStartUI)