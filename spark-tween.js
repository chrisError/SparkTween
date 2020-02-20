// function Tween(startVal, endVal, duration, loopCount, mirror, ease, completeCallback) {}


/*

---NOTES-----

make sure to add the following to which ever scripts need to use SparkTween


const {
	Tween,
	Ease,
	SparkTweener
} = require("./tween.js");



SIMPLE USAGE (using the tween directly)
var sceneObject = Scene.root.find("MySceneObject);
sceneObject.transform.y = Tween(0.35, 2, 4, -1, false, Ease.LINEAR, null).animation;


EXTENDED FUNCIONALITY
var sceneObject = Scene.root.find("MySceneObject);
var tween = Tween(0.35, 2, 4, -1, false, Ease.LINEAR, null);
sceneObject.transform.y = tween.animation;

tween.Kill(); //CALL THIS WHEN YOU WANT TO KILL THE TWEEN


@chrisError 20 / 02 / 2020

*/
const Time = require('Time');
const Reactive = require('Reactive');
const Animation = require('Animation');


export const Ease = {

	LINEAR: "linear",
	BOUNCE_IN: "easeInBounce",
	BOUNCE_OUT: "easeOutBounce",
	EASE_IN_BACK: "easeInBack",
	EASE_IN_CIRC: "easeInCirc",
	EASE_IN_CUBIC: "easeInCubic",
	EASE_IN_ELASTIC: "easeInElastic",
	EASE_IN_EXPO: "easeInExpo",

	EASE_IN_OUT_BACK: "easeInOutBack",
	EASE_IN_OUT_BOUNCE: "easeInOutBounce",

	EASE_IN_OUT_CIRC: "easeInOutCirc",
	EASE_IN_OUT_ELASTIC: "easeInOutElastic",

	EASE_IN_OUT_EXPO: "easeInOutExpo",
	EASE_IN_OUT_QUAD: "easeInOutQuad",

	EASE_IN_OUT_QUART: "easeInOutQuart",
	EASE_IN_OUT_SINE: "easeInOutSine",

	EASE_IN_QUAD: "easeInQuad",
	EASE_IN_QUART: "easeInQuart",

	EASE_IN_QUINT: "easeInQuint",
	EASE_IN_SINE: "easeInSine",


	EASE_OUT_BACK: "easeOutBack",
	EASE_OUT_CIRC: "easeOutCirc",


	EASE_OUT_CUBIC: "easeOutCubic",
	EASE_OUT_ELASTIC: "easeOutElastic",


	EASE_OUT_EXPO: "easeOutExpo",
	EASE_OUT_QUAD: "easeOutQuad",

	EASE_OUT_QUART: "easeOutQuart",
	EASE_OUT_QUINT: "easeOutQuint",
	EASE_OUT_SINE: "easeOutSine"

};

export class SparkTweener {
	constructor(animation, driver, sub) {
		this.animation = animation;
		this.driver = driver;
		this.sub = sub;
	}

	Kill() {
		this.driver.stop();
		if (this.sub != null) {
			this.sub.unsubscribe();
		}
	}


}

export function Tween(startVal, endVal, duration, loopCount, mirror, ease, completeCallback) {

	if (loopCount == -1) {
		loopCount = Infinity;
	}
	var driver = Animation.timeDriver({
		durationMilliseconds: duration * 1000,
		loopCount: loopCount,
		onComplete: completeCallback,
		mirror: mirror
	});
	var sampler;

	try {
		sampler = Animation.samplers[ease](startVal, endVal);
	} catch (e) {
		sampler = Animation.samplers.linear(startVal, endVal);
	}
	var sub = null;

	if (completeCallback != null) {
		var sub = driver.onCompleted().subscribe(completeCallback);
		driver.callback = sub;
	}

	driver.start();

	var tweener = new SparkTweener(Animation.animate(driver, sampler), driver, sub);

	return tweener;
}
