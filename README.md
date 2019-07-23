# SparkTween
A tiny teeny tween function for SparkAR

Doesn't add any new functionality to SparkAR, instead it just wraps the Animation, TimeDriver and Samplers into (I think) an easier to read format, so if you are used to TweenMax / TweenLite or DoTween in Unity etc then the syntax below _should_ be pretty readable to you.


sceneObject.transform.x = Tween(-100, 100, 5, 10000, true, Ease.BOUNCE_OUT, OnAnimationCompleteCallback);


if you like this / find it useful why not follow me on the Instagrams @chrisError


TODO:

<br>create some real docs
<br>look at adding support for sequences
<br>moar testing
<br>add infinite loops for loop count


