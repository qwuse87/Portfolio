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