# SparkTween
A tiny teeny tween function for SparkAR
### by <a href="https://www.instagram.com/chriserror/">chrisError</a>
https://pl.ai


make sure to add the following to which ever scripts need to use SparkTween


const {
	Tween,
	Ease,
	SparkTweener
} = require("./tween.js");

Tween(startVal, endVal, duration, loopCount, mirror, ease, completeCallback) 

startVal - start value for tween

endVal - end value for tween

duration - length of time for tween (in seconds)

loopCount - how many times should the tween loop (-1 for infinite)

mirror - bool  - should the tween yoyo 

ease - ease type [see enum for supported eases]

completeCallback - method to call on complete


### breaking changes from previous version
please note the .animation when setting the tween to a property


## SIMPLE USAGE (using the tween directly)
var sceneObject = Scene.root.find("MySceneObject);

sceneObject.transform.y = Tween(0.35, 2, 4, -1, false, Ease.LINEAR, null).animation;


## EXTENDED FUNCIONALITY
var sceneObject = Scene.root.find("MySceneObject);
var tween = Tween(0.35, 2, 4, -1, false, Ease.LINEAR, null);
sceneObject.transform.y = tween.animation;

tween.Kill(); //CALL THIS WHEN YOU WANT TO KILL THE TWEEN

tweens also now support infinite loops by passing -1 as the loopCount


@chrisError 20 / 02 / 2020



