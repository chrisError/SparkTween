# SparkTween
A tiny teeny tween function for SparkAR

Doesn't add any new functionality to SparkAR, instead it just wraps the Animation, TimeDriver and Samplers into (I think) an easier to read format, so if you are used to TweenMax / TweenLite or DoTween in Unity etc then the syntax below _should_ be pretty readable to you.


sceneObject.transform.x = Tween(-100, 100, 5, 10000, true, Ease.BOUNCE_OUT, OnAnimationCompleteCallback);


if you like this / find it useful why not follow me on the Instagrams @chrisError


//NOTES

I'm still adding some of the missing ease types and will add some real docs as soon as I get chance.


