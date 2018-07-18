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
		this.mole.show();
	}

	return HitMouse;
})(HitMouseUI)