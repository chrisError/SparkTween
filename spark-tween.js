// SparkTween needs the following libraries

const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const Animation = require('Animation');




const Ease = {
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

function Tween(startVal, endVal, duration, loopCount, mirror, ease, completeCallback) {
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

	if (completeCallback != null) {
		driver.onCompleted().subscribe(completeCallback);
	}

	driver.start();

	return Animation.animate(driver, sampler);
}



//EXAMPLE USAGE
/*
	anim.transform.rotationZ = Tween(-.1, .1, 6, 10000, true, Ease.LINEAR, null);
	anim.transform.y = Tween(-27, 8, 8, 1, true, Ease.LINEAR, OnRaiseUpComplete);
	anim.transform.x = Tween(-17, -15, 4, 1000, true, Ease.LINEAR, null);
*/
