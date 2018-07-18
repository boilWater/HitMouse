var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hit=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.Game.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);

		}

		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":56,"x":52,"width":98,"skin":"comp/hammer.png","rotation":20,"pivotY":45,"pivotX":51,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":56,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0},{"value":56,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":1}],"x":[{"value":52,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":52,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":1}],"rotation":[{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":6}]}}],"name":"hit","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);
var HitMouseUI=(function(_super){
		function HitMouseUI(){
			
		    this.barNum=null;
		    this.scoreNums=null;

			HitMouseUI.__super.call(this);
		}

		CLASS$(HitMouseUI,'ui.Game.HitMouseUI',_super);
		var __proto__=HitMouseUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HitMouseUI.uiView);

		}

		HitMouseUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":196,"x":156,"name":"item0"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":10,"x":62,"width":86,"skin":"comp/score_1.png","pivotY":16,"pivotX":43,"name":"scoreImg","height":30}},{"type":"Image","props":{"y":81,"skin":"comp/mask-01.png"}}]},{"type":"Box","props":{"y":195,"x":339,"name":"item1"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":81,"x":5,"width":136,"skin":"comp/mask-02.png","height":46}},{"type":"Image","props":{"y":8,"x":65,"width":86,"skin":"comp/score_1.png","pivotY":15,"pivotX":45,"name":"scoreImg","height":30}}]},{"type":"Box","props":{"y":199,"x":537,"name":"item2"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":3,"width":135,"skin":"comp/mask-03.png","height":46}},{"type":"Image","props":{"y":9,"x":62,"width":86,"skin":"comp/score_1.png","pivotY":16,"pivotX":44,"name":"scoreImg","height":30}}]},{"type":"Box","props":{"y":287,"x":125,"name":"item3"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":82,"x":6,"width":134,"skin":"comp/mask-04.png","height":46}},{"type":"Image","props":{"y":9,"x":59,"width":86,"skin":"comp/score_1.png","pivotY":15,"pivotX":39,"name":"scoreImg","height":30}}]},{"type":"Box","props":{"y":289,"x":346,"name":"item4"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":81,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":6,"x":59,"width":86,"skin":"comp/score_1.png","pivotY":14,"pivotX":40,"name":"scoreImg","height":30}}]},{"type":"Box","props":{"y":284,"x":541,"name":"item5"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":81,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":6,"x":63,"width":86,"skin":"comp/score_1.png","pivotY":13,"pivotX":44,"name":"scoreImg","height":30}}]},{"type":"Box","props":{"y":383,"x":120,"name":"item6"},"child":[{"type":"Image","props":{"y":8,"x":64,"width":86,"skin":"comp/score_1.png","pivotY":14,"pivotX":44,"name":"scoreImg","height":30}},{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":83,"x":2,"width":136,"skin":"comp/mask-07.png","height":46}}]},{"type":"Box","props":{"y":388,"x":345,"name":"item7"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":81,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":9,"x":63,"width":86,"skin":"comp/score_1.png","pivotY":14,"pivotX":44,"name":"scoreImg","height":30}}]},{"type":"Box","props":{"y":393,"x":567,"name":"item8"},"child":[{"type":"Image","props":{"x":3,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":13,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":81,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":9,"x":64,"width":86,"skin":"comp/score_1.png","pivotY":14,"pivotX":43,"name":"scoreImg","height":30}}]},{"type":"ProgressBar","props":{"y":11,"x":14,"width":261,"var":"barNum","value":1,"skin":"comp/progress_time.png","height":23}},{"type":"Box","props":{"y":45,"x":23,"var":"scoreNums"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":18,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":36,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":54,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":72,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":90,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":108,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":144,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":162,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]};
		return HitMouseUI;
	})(View);