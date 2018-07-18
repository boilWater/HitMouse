/**
 * 
 * 
 * 
 */
var HitMouse=(function(_super){
	function HitMouse(){
		HitMouse.super(this);
		
		this.mole = new Mole(this.normal,this.hit,21);
		Laya.timer.loop(1000,this,this.isShow);
	}

	Laya.class(HitMouse,"HitMouse",_super);
	var _proto = HitMouse.prototype;

	_proto.isShow = function() {
		this.barNum -= (1/120);
		this.mole.show();

		if (this.barNum <= 0) {
			this.gameOver();
			return;
		}
	}

	_proto.gameOver = function() {

	}

	return HitMouse;
})(HitMouseUI)