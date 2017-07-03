// Portfolio Index
var Index = Index || (function( ){
	var canvas = document.getElementById("index");
	var ctx = canvas.getContext("2d");

	canvas.width = $stageWidth;
	canvas.height = $stageHeight;

	ctx.fillStyle = "transparent";
	ctx.fillRect(0,0,$stageWidth,$stageHeight);

	var gradation = ctx.createLinearGradient(640,110,940,450);
	gradation.addColorStop(0,'rgba(80,227,194,0)');
	gradation.addColorStop(1,'rgba(80,227,194,1)');

	// Canvas Gradation
	ctx.fillStyle = gradation;
	ctx.beginPath();
	ctx.moveTo(640,110);
	ctx.lineTo(740,10);
	ctx.lineTo(1040,350);
	ctx.lineTo(940,450);
	ctx.fill();

	// Canvas Circle
	var _ball = {};
	_ball.x = $stageWidth / 2;
	_ball.y = $stageHeight / 2;
	_ball.vx = -8;
	_ball.vy = -8;
	_ball.radius = 10;

	requestAnimationFrame(animate);

	var sttlTop = Math.floor($(".stitle").offset().top);

	/*console.log("stitle left : " + Math.floor($(".stitle").offset().left));
	console.log("stitle top : " + Math.floor($(".stitle").offset().top));
	console.log("stitle right : " + $(".stitle").width());
	console.log("title left : " + Math.floor($(".title").offset().left));
	console.log("title top : " + Math.floor($(".title").offset().top));
	console.log("job left : " + Math.floor($(".job").offset().left));
	console.log("job top : " + Math.floor($(".job").offset().top));
	console.log("contact left : " + Math.floor($(".contact").offset().left));
	console.log("contact top : " + Math.floor($(".contact").offset().top));*/
	function animate(){

		requestAnimationFrame(animate);

		ctx.clearRect(0,0, $stageWidth,$stageHeight);

		if(_ball.y + _ball.radius > $stageHeight || _ball.y - _ball.radius < 60 ){
			_ball.vy *= -1;
		}
		if(_ball.x + _ball.radius > $stageWidth || _ball.x - _ball.radius < 0){
			_ball.vx *= -1;
		}

		_ball.y += _ball.vy;
		_ball.x += _ball.vx;

		ctx.beginPath();
		ctx.fillStyle = "#fff";
		ctx.arc(_ball.x, _ball.y, _ball.radius, 0, Math.PI * 2, false);
		ctx.fill();
	}
});