var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var HitMouseUI=(function(_super){
		function HitMouseUI(){
			
		    this.normal=null;
		    this.hit=null;

			HitMouseUI.__super.call(this);
		}

		CLASS$(HitMouseUI,'ui.Game.HitMouseUI',_super);
		var __proto__=HitMouseUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HitMouseUI.uiView);

		}

		HitMouseUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":196,"x":159},"child":[{"type":"Image","props":{"x":2,"var":"normal","skin":"comp/mouse_normal_1.png"}},{"type":"Image","props":{"y":16,"var":"hit","skin":"comp/mouse_hit_1.png"}},{"type":"Image","props":{"y":82,"width":130,"skin":"comp/mask-01.png","height":46}}]}]};
		return HitMouseUI;
	})(View);