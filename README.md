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


##SIMPLE USAGE (using the tween directly)
var sceneObject = Scene.root.find("MySceneObject);
sceneObject.transform.y = Tween(0.35, 2, 4, -1, false, Ease.LINEAR, null).animation;


##EXTENDED FUNCIONALITY
var sceneObject = Scene.root.find("MySceneObject);
var tween = Tween(0.35, 2, 4, -1, false, Ease.LINEAR, null);
sceneObject.transform.y = tween.animation;

tween.Kill(); //CALL THIS WHEN YOU WANT TO KILL THE TWEEN

tweens also now support infinite loops by passing -1 as the loopCount


@chrisError 20 / 02 / 2020



