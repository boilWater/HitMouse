/**
 * 
 * 打地鼠 game 进入页面
 * 
 */
var LayaSample = (function() {
    (function() {
        //适配小程序游戏
        Laya.MiniAdpter.init();

        Laya.init(800, 600);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_CENTER;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.bgColor = "#ffcccc";
        Laya.loader.load("res/atlas/comp.atlas",Laya.Handler.create(this,onLoaded),null,Laya.Loader.ATLAS);
    })();

    //初始化 game 游戏界面
    function onLoaded() {
        // var hitMouse = new HitMouse();
        // Laya.stage.addChild(hitMouse);
        // LayaSample.gameStart = new GameStart();
        // Laya.stage.addChild(LayaSample.gameStart);

        this.gameStart = new GameStart();
        Laya.stage.addChild(this.gameStart);
    }
})();


