window.onload = function() {
    var canvas = document.getElementById("canvas");
    var stage = new createjs.Stage("canvas");

    var queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);

    createjs.Sound.alternateExtensions = ["wav"];
    createjs.Sound.on('fileload', loadHandler);
    createjs.Sound.registerSound("sound/sound.wav", "sound");

    function loadHandler(event) {
        // This is fired for each sound that is registered.
        var instance = createjs.Sound.play("sound"); // play using id.  Could also use full sourcepath or event.src.
        instance.volume = 0.5;
    }

    createjs.Ticker.addEventListener("tick", handleTick);

    function handleTick(event) {
        stage.update();
    }
    var heading1 = new createjs.Text("Evgeniya", "36px Lucida Sans", "#4F4519"),
        heading2 = new createjs.Text("Spasova Mircheva", "22px Lucida Sans", "#4F4519"),
        text = document.getElementById("par").innerHTML,
        par = new createjs.Text(text, "Italic 17px Lucida Sans", "#4F4519");

    var loader = new createjs.LoadQueue(false);
    loader.on('complete', drawHeading, this);
    loader.loadManifest([
        { id: "maincreatejs", src: "img/maincreatejs.png" },
        { id: "tweenjs", src: "img/tweenjs.png" },
        { id: "easeljs", src: "img/easeljs.png" },
        { id: "preloadjs", src: "img/preloadjs.png" },
        { id: "soundjs", src: "img/soundjs.png" },
        { id: "face", src: "img/face.png" },
        { id: "tweening", src: "img/tweening.png" },
        { id: "orangeDot", src: "img/orangeDot.png" },
        { id: "yellowDot", src: "img/yellowDot.png" },
        { id: "blackBackground", src: "img/blackBackground.png" },
        { id: "whiteBackground", src: "img/whiteBackground.png" },
        { id: "breezeAudio", src: "img/breezeAudio.png" },
        { id: "buildingStage", src: "img/buildingStage.png" },
    ]);

    function drawHeading() {
        heading1.alpha = 0;
        heading1.x = 100;
        heading1.y = 10;
        stage.addChild(heading1);
        createjs.Tween.get(heading1)
            .to({ alpha: 1, x: 10, y: 10 }, 500, createjs.Ease.cubicInOut)
            .wait(5600)
            .to({ alpha: 0 }, 200);

        setTimeout(frame1, 500)
    }

    function frame1() {
        heading2.alpha = 0;
        heading2.x = -60;
        heading2.y = 50;
        stage.addChild(heading2);
        createjs.Tween.get(heading2)
            .to({ alpha: 1, x: 10, y: 50 }, 500, createjs.Ease.cubicInOut)
            .wait(5100)
            .to({ alpha: 0 }, 200);

        var maincreatejs = new createjs.Bitmap(loader.getResult("maincreatejs"));
        maincreatejs.alpha = 0;
        maincreatejs.x = 30;
        maincreatejs.y = 130;
        stage.addChild(maincreatejs);
        createjs.Tween.get(maincreatejs)
            .wait(500)
            .to({ alpha: 1, x: 30, y: 130 }, 1000, createjs.Ease.cubicInOut)
            .wait(4100).to({ alpha: 0 }, 200);

        par.alpha = 0;
        par.x = 700;
        par.y = 130;
        par.lineHeight = 27;
        par.lineWidth = 250;
        stage.addChild(par);
        createjs.Tween.get(par)
            .wait(800)
            .to({ alpha: 1, x: 200, y: 130, font: "17px Lucida Sans" }, 1200, createjs.Ease.bounceOut)
            .wait(3600).to({ alpha: 0 }, 200);

        function loadIcon(id, x, y, wait1, wait2) {
            var tweenjs = new createjs.Bitmap(loader.getResult(id));
            tweenjs.alpha = 0;
            tweenjs.x = x;
            tweenjs.y = y;
            tweenjs.scaleX = 0;
            tweenjs.scaleY = 0;
            stage.addChild(tweenjs);

            createjs.Tween.get(tweenjs)
                .wait(wait1)
                .to({ alpha: 1, x: x, y: y, rotation: 360, scaleX: 1, scaleY: 1 }, 500, createjs.Ease.quadInOut)
                .wait(wait2)
                .to({ alpha: 0 }, 200);
        }

        loadIcon("tweenjs", 50, 320, 2000, 3100);
        loadIcon("easeljs", 120, 320, 2500, 2600);
        loadIcon("soundjs", 190, 320, 3000, 2100);
        loadIcon("preloadjs", 260, 320, 3500, 1600);

        var face = new createjs.Bitmap(loader.getResult("face"));
        face.alpha = 0;
        face.x = 330;
        face.y = 320;
        createjs.Tween.get(face)
            .wait(4000)
            .to({ alpha: 1, x: 330, y: 320, rotation: 360, scaleX: 1, scaleY: 1 }, 1000, createjs.Ease.bounceOut)
            .wait(600)
            .to({ alpha: 0 }, 200);
        stage.addChild(face);

        setTimeout(frame2, 6000);
    }

    function frame2() {
        var blackBackground = new createjs.Bitmap(loader.getResult("blackBackground"));
        blackBackground.alpha = 0;
        stage.addChild(blackBackground);
        createjs.Tween.get(blackBackground)
            .to({ alpha: 1 }, 1000, createjs.Ease.circIn)

        var tweening = new createjs.Bitmap(loader.getResult("tweening"));
        tweening.alpha = 0;
        tweening.x = 240;
        tweening.y = 240;
        tweening.scaleX = 0;
        tweening.scaleY = 0;
        stage.addChild(tweening);

        createjs.Tween.get(tweening)
            .to({ alpha: 1, x: 50, y: 140, scaleX: 1, scaleY: 1 }, 4500, createjs.Ease.circIn)
            .to({ alpha: 0, scaleX: 1.2, scaleY: 1.2, x: 0, y: 200 }, 1000, createjs.Ease.circOut);

        function newDot(id) {
            var dot = new createjs.Bitmap(loader.getResult(id));
            dot.alpha = 0;
            dot.x = 250;
            dot.y = 200;
            dot.scaleX = 0;
            dot.scaleY = 0;
            stage.addChild(dot);

            createjs.Tween.get(dot)
                .to({ alpha: 1, x: (Math.random() * 500), y: (Math.random() * 400), scaleX: 1, scaleY: 1 }, 1000, createjs.Ease.circIn)
                .to({ alpha: 0, scaleX: 1.3, scaleY: 1.3 }, 600, createjs.Ease.circOut);
        }

        function startDot() {
            newDot("yellowDot");
            newDot("orangeDot");
        }

        var timer = 800;
        for (i = 0; i < 30; i++) {
            setTimeout(startDot, timer);
            timer += 100;
        }
        setTimeout(frame3, 5000);
    }

    function frame3() {
        var breezeAudio = new createjs.Bitmap(loader.getResult("breezeAudio"));
        breezeAudio.alpha = 0;
        breezeAudio.x = 200;
        breezeAudio.y = -170;
        breezeAudio.scaleX = 0;
        breezeAudio.scaleY = 0;
        stage.addChild(breezeAudio);

        createjs.Tween.get(breezeAudio)
            .to({ alpha: 1, x: 130, y: 170, scaleX: 1, scaleY: 1, rotation: 0 }, 2000, createjs.Ease.backOut)
            .wait(1300)
            .to({ alpha: 1, scaleX: 1, scaleY: 1, x: 130, y: 430 }, 1000, createjs.Ease.circOut);

        var soundjs = new createjs.Bitmap(loader.getResult("soundjs"));
        soundjs.alpha = 0;
        soundjs.x = -100;
        soundjs.y = 140;
        stage.addChild(soundjs);

        createjs.Tween.get(soundjs)
            .wait(1000)
            .to({ alpha: 1, x: 20, y: 160, rotation: 0 }, 1000, createjs.Ease.circIn)
            .to({ skewY: 360, rotation: 90 }, 1000).to({ skewY: 360, rotation: 0 }, 500, createjs.Ease.backOut)
            .to({ alpha: 0, scaleX: 0.6, scaleY: 0.6, x: 30, y: 160 }, 300, createjs.Ease.circOut);

        var buildingStage = new createjs.Bitmap(loader.getResult("buildingStage"));
        buildingStage.alpha = 0;
        buildingStage.x = 100;
        buildingStage.y = -170;
        stage.addChild(buildingStage);

        createjs.Tween.get(buildingStage)
            .wait(3000)
            .to({ alpha: 1, x: 130, y: 140, rotation: 0 }, 1000, createjs.Ease.bounceOut)
            .wait(2000)
            .to({ alpha: 0, scaleX: 0, scaleY: 0, x: 250, y: 200 }, 300, createjs.Ease.circOut);

        var easeljs = new createjs.Bitmap(loader.getResult("easeljs"));
        easeljs.x = 30;
        easeljs.y = 430;
        stage.addChild(easeljs);

        createjs.Tween.get(easeljs)
            .wait(3300)
            .to({ x: 20, y: 160, rotation: 0 }, 500, createjs.Ease.circIn)
            .to({ skewY: -90 }, 800)
            .to({ skewY: 0 }, 900, createjs.Ease.bounceOut)
            .wait(500)
            .to({ alpha: 0, scaleX: 0, scaleY: 0, x: 5, y: 160 }, 1000, createjs.Ease.circOut);

        setTimeout(frame4, 7000);
    }

    function frame4() {
        var rect = new createjs.Shape();
        rect.graphics.beginFill("#61E05C").drawRect(0, 0, 60, 60);
        rect.x = 70;
        rect.y = 160;
        rect.scaleX = 0;
        rect.scaleY = 0;
        stage.addChild(rect);

        createjs.Tween.get(rect)
            .to({ alpha: 1, x: 50, y: 200, scaleX: 1, scaleY: 1, rotation: 720 }, 2000, createjs.Ease.quadOut)
            .to({ x: 70, y: 140, rotation: 765 }, 700, createjs.Ease.quadOut)
            .to({ x: 140, y: 140 }, 200, createjs.Ease.quadOut)
            .to({ x: 40, y: 140 }, 200, createjs.Ease.quadOut)
            .to({ x: 140, y: 140 }, 200, createjs.Ease.quadOut)
            .to({ x: 80, y: 140 }, 600, createjs.Ease.bounceOut)
            .to({ x: 80, y: 140, scaleX: 1.4, scaleY: 1.4, }, 900, createjs.Ease.quadOut)
            .wait(1400)
            .to({ alpha: 0 }, 200);

        var text1 = new createjs.Text("Fade in, ", "26px Lucida Sans", "white");
        text1.alpha = 0;
        text1.x = 180;
        text1.y = 140;
        stage.addChild(text1);

        createjs.Tween.get(text1)
            .wait(500)
            .to({ alpha: 1, x: 180, y: 140, }, 1500, createjs.Ease.quadOut)
            .wait(4200)
            .to({ alpha: 0 }, 200);

        var text2 = new createjs.Text("Rotate, ", "26px Lucida Sans", "white");
        text2.alpha = 0;
        text2.x = 290;
        text2.y = 140;
        stage.addChild(text2);

        createjs.Tween.get(text2)
            .wait(1700)
            .to({ alpha: 1, x: 290, y: 140, }, 1200, createjs.Ease.quadOut)
            .wait(3300)
            .to({ alpha: 0 }, 200);

        var text3 = new createjs.Text("Move, ", "26px Lucida Sans", "white");
        text3.alpha = 0;
        text3.x = 390;
        text3.y = 140;
        stage.addChild(text3);

        createjs.Tween.get(text3)
            .wait(2800)
            .to({ alpha: 1, x: 390, y: 140, }, 1200, createjs.Ease.quadOut)
            .wait(2200)
            .to({ alpha: 0 }, 200);

        var text4 = new createjs.Text("and Scale... ", "26px Lucida Sans", "white");
        text4.alpha = 0;
        text4.x = 180;
        text4.y = 190;
        stage.addChild(text4);

        createjs.Tween.get(text4)
            .wait(4000)
            .to({ alpha: 1, x: 180, y: 190, }, 1200, createjs.Ease.quadOut)
            .wait(1000)
            .to({ alpha: 0 }, 200);

        setTimeout(frame5, 6000);
    }

    function frame5() {
        var theEnd = new createjs.Text("The  End !", "Italic 36px Lucida Handwriting", "#cc8400");
        theEnd.x = 700;
        theEnd.y = 140;
        theEnd.scaleX = 0.5;
        theEnd.scaleY = 0.5;
        theEnd.lineWidth = 300;
        stage.addChild(theEnd);

        createjs.Tween.get(theEnd)
            .wait(500)
            .to({ x: 0, y: 140, font: "36px Lucida Handwriting", color: "#FFA500", scaleX: 0.5, scaleY: 0.5 }, 2200, createjs.Ease.bounceOut)
            .to({ x: 150, y: 140, scaleX: 1, scaleY: 1 }, 500, createjs.Ease.quadOut)

        function newPolystar(color) {
            var polyStar = new createjs.Shape();
            polyStar.graphics.beginFill(color).drawPolyStar(0, 0, 10, 5, 0.6, 45);
            polyStar.x = 250;
            polyStar.y = 430;
            polyStar.scaleX = 0;
            polyStar.scaleY = 0;
            stage.addChild(polyStar);

            createjs.Tween.get(polyStar)
                .to({ alpha: 1, x: (Math.random() * 500), y: (Math.random() * 400), scaleX: 1, scaleY: 1 }, 3000, createjs.Ease.quartIn)
                .to({ y: 400 + (Math.random() * 200) }, 3000, createjs.Ease.quartOut)
                .to({ alpha: 0, scaleX: 1.3, scaleY: 1.3 }, 600, createjs.Ease.circOut);
        }

        function newCircle(color) {
            var circle = new createjs.Shape();
            circle.graphics.beginFill(color).drawCircle(0, 0, 7);
            circle.x = 250;
            circle.y = 430;
            circle.scaleX = 0;
            circle.scaleY = 0;
            stage.addChild(circle);

            createjs.Tween.get(circle)
                .to({ alpha: 1, x: (Math.random() * 500), y: (Math.random() * 400), scaleX: 1, scaleY: 1 }, 3000, createjs.Ease.quartIn)
                .to({ y: 400 + (Math.random() * 200) }, 3000, createjs.Ease.quartOut)
                .to({ alpha: 0, scaleX: 1.3, scaleY: 1.3 }, 600, createjs.Ease.circOut);
        }

        function createAllShapes() {
            newPolystar("#61E05C");
            newCircle("#61E05C");
        }

        var timer1 = 500;
        var timer2 = 500;
        var timer3 = 4000;
        for (i = 0; i < 50; i++) {
            setTimeout(createAllShapes, timer1);
            timer1 += 100;
        }
        for (i = 0; i < 10; i++) {
            setTimeout(createAllText, timer2);
            timer2 += 500;
        }
        for (i = 0; i < 30; i++) {
            setTimeout(createLastText, timer3);
            timer3 += 50;
        }

        function createAllText() {
            newTextMessage("Evgeniya");
            newTextMessage("Thank you!");
        }

        function createLastText() {
            lastTextMessage("Thank you!")
        }

        function newTextMessage(text) {
            var text = new createjs.Text(text, "16px Lucida Handwriting", "#FFF621");
            text.x = 250;
            text.y = 430;
            text.scaleX = 0;
            text.scaleY = 0;
            stage.addChild(text);
            createjs.Tween.get(text)
                .to({ alpha: 1, x: (Math.random() * 500), y: (Math.random() * 400), scaleX: 1, scaleY: 1 }, 2000, createjs.Ease.quartIn)
                .to({ y: 400 + (Math.random() * 200) }, 3000, createjs.Ease.quartOut)
                .to({ alpha: 0, scaleX: 1.3, scaleY: 1.3 }, 600, createjs.Ease.circOut);
        }

        function lastTextMessage(text) {
            var text = new createjs.Text(text, "16px Lucida Handwriting", "#cc8400");
            text.x = 250;
            text.y = 430;
            text.scaleX = 0;
            text.scaleY = 0;
            stage.addChild(text);
            createjs.Tween.get(text)
                .to({ alpha: 1, x: (Math.random() * 500), y: (Math.random() * 400), scaleX: 1, scaleY: 1 }, 4000, createjs.Ease.quartIn)
                .wait(2000)
                .to({
                    alpha: 0,
                    scaleX: 0.3,
                    scaleY: 0.3,
                    x: 250,
                    y: 430
                }, 1000, createjs.Ease.circOut);
        }
    }
}
