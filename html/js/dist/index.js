var DataModel = DataModel || (function( src ){
	$.ajax({
        type: "GET",
        url: src,
        timeout: 2000,
        dataType:"json",
        beforeSend: function() {
            $(".loader").show();
        },
        complete: function() {
            $(".loader").animate({
            	opacity:0
            }, 500, function(){
            	$(this).hide();
            });
        },
        success: function(json) {
            navModule(json);
            tagCloud(json);
            Index();
        },
        fail: function() {
            console.log("실패");
        }
    });
});

/*
 * Navigation Module
 * config.json Data Bind - navi
 */
var navModule = navModule || (function( json ){
    var navLen = json.navi.length;
    var i;
    var nav_container = $(".nav").html("<ul></ul>");
    var nav = $(".nav ul");
    for(i = 0; i<navLen; i++){
        nav.append("<li><a href='"+json.navi[i].src+"'>"+json.navi[i].name+"</a></li>");
    }
    $(".contents").html(
        "<span class='"+json.indexText[0].css+"'>"+json.indexText[0].stitle+"</span><br />"+
        "<span class='"+json.indexText[1].css+"'>"+json.indexText[1].title+"</span><br />"+
        "<span class='"+json.indexText[2].css+"'>"+json.indexText[2].job+"</span><br />"+
        "<a href='"+json.indexText[3].contactUrl+"' class='"+json.indexText[3].css+"'>"+json.indexText[3].contact+"</a>"
    );
    $(".wrap").append("<div class='"+json.indexText[4].css+"'>"+json.indexText[4].copyright+"</div>");
});

/*
 * tagCloud Module
 * config.json Data Bind - tags
 */
var tagCloud = tagCloud || (function( json ){
    var k;
    var tagsLen = json.tags.length;
    var tag_list_container = $('#myCanvas').append("<ul></ul>");
    var tag_list = $('#myCanvas ul');
    for(k = 0; k<tagsLen; k++){
        tag_list.append("<li><a href="+ json.tags[k].src +">"+ json.tags[k].name +"</a></li>");
    }

    if( ! $('#myCanvas').tagcanvas(
        { 
        textColour : '#ffffff', 
        outlineThickness : 1, 
        outlineColour : 'transparent',
        maxSpeed : 0.03,
        zoom: 1.1,
        depth : 0.75
        })
        )
    { 
        $('#myCanvasContainer').hide(); 
    }
});

/*
 * setTimeChangeColour Mobule
 * function parameter - time 
 */
var setTimeChangeColour = setTimeChangeColour || (function( time ){

});
var Controller = Controller || (function( obj ){
	// Controller
	var pointer = $(obj).addClass("is-cursor-pointer");
});

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
$stageWidth = $(document).width();
$stageHeight = $(document).height();

// Logo
$(".logo").on("click", function( ){
	alert('Index Src');
});
Sticker.init('.logo');