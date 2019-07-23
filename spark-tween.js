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

	if (ease == Ease.LINEAR || ease == null) sampler = Animation.samplers.linear(startVal, endVal);
	if (ease == Ease.BOUNCE_IN) sampler = Animation.samplers.easeInBounce(startVal, endVal);
	if (ease == Ease.BOUNCE_OUT) sampler = Animation.samplers.easeOutBounce(startVal, endVal);
	if (ease == Ease.EASE_IN_BACK) sampler = Animation.samplers.easeInBack(startVal, endVal);
	if (ease == Ease.EASE_IN_CIRC) sampler = Animation.samplers.easeInCirc(startVal, endVal);
	if (ease == Ease.EASE_IN_CUBIC) sampler = Animation.samplers.easeInCubic(startVal, endVal);
	if (ease == Ease.EASE_IN_ELASTIC) sampler = Animation.samplers.easeInElastic(startVal, endVal);
	if (ease == Ease.EASE_IN_EXPO) sampler = Animation.samplers.easeInExpo(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_BACK) sampler = Animation.samplers.easeInOutBack(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_BOUNCE) sampler = Animation.samplers.easeInOutBack(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_CIRC) sampler = Animation.samplers.easeInOutCirc(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_ELASTIC) sampler = Animation.samplers.easeInOutElastic(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_EXPO) sampler = Animation.samplers.easeInOutExpo(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_QUAD) sampler = Animation.samplers.easeInOutQuad(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_QUART) sampler = Animation.samplers.easeInOutQuart(startVal, endVal);
	if (ease == Ease.EASE_IN_OUT_SINE) sampler = Animation.samplers.easeInQuart(startVal, endVal);
	if (ease == Ease.EASE_IN_QUAD) sampler = Animation.samplers.easeInQuad(startVal, endVal);
	if (ease == Ease.EASE_IN_QUART) sampler = Animation.samplers.easeInQuart(startVal, endVal);
	if (ease == Ease.EASE_IN_QUINT) sampler = Animation.samplers.easeInQuint(startVal, endVal);
	if (ease == Ease.EASE_IN_SINE) sampler = Animation.samplers.easeInSine(startVal, endVal);
	if (ease == Ease.EASE_OUT_BACK) sampler = Animation.samplers.easeOutBack(startVal, endVal);
	if (ease == Ease.EASE_OUT_CIRC) sampler = Animation.samplers.easeOutCirc(startVal, endVal);
	if (ease == Ease.EASE_OUT_CUBIC) sampler = Animation.samplers.easeOutCubic(startVal, endVal);
	if (ease == Ease.EASE_OUT_ELASTIC) sampler = Animation.samplers.easeOutElastic(startVal, endVal);
	if (ease == Ease.EASE_OUT_EXPO) sampler = Animation.samplers.easeOutExpo(startVal, endVal);
	if (ease == Ease.EASE_OUT_QUAD) sampler = Animation.samplers.easeOutQuad(startVal, endVal);
	if (ease == Ease.EASE_OUT_QUART) sampler = Animation.samplers.easeOutQuart(startVal, endVal);
	if (ease == Ease.EASE_OUT_QUINT) sampler = Animation.samplers.easeOutQuint(startVal, endVal);
	if (ease == Ease.EASE_OUT_SINE) sampler = Animation.samplers.easeOutSine(startVal, endVal);


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
