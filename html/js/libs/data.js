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
