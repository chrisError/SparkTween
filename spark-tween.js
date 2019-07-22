const Scene = require('Scene');
const Diagnostics = require('Diagnostics');
const Animation = require('Animation');






const Ease = {
	LINEAR: "linear",
	BOUNCE_IN: "easeInBounce",
	BOUNCE_OUT: "easeOutBounce",


};

function Tween(startVal, endVal, duration, loopCount, mirror, ease, completeCallback) {
	var driver = Animation.timeDriver({
		durationMilliseconds: duration * 1000,
		loopCount: loopCount,
		onComplete: completeCallback,
		mirror: mirror
	});
	var sampler;

	if (ease == Ease.LINEAR) sampler = Animation.samplers.linear(startVal, endVal);
	if (ease == Ease.BOUNCE_IN) sampler = Animation.samplers.easeInBounce(startVal, endVal);
	if (ease == Ease.BOUNCE_OUT) sampler = Animation.samplers.easeOutBounce(startVal, endVal);

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
