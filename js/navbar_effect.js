$(document).ready(function(){

    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if(scroll > 200) {
            if(!flag) {
                $("#logo-romorita").css({"margin-top": "-5px", "width": "50px", "height": "50px"});
                $("#logo-romorita").attr("src","./img/Logo_emblema.png");
                $("header").css({"background-color": "#FFFFFF"});
                $("#leyenda-nav1").css({"color": "#000000"});
                $("#leyenda-nav2").css({"color": "#000000"});
                $("#leyenda-nav2").css({"line-height": "15pt"});
                $("#leyenda-nav2").css({"padding-bottom": "3px"});
                $("#leyenda-nav2").hover(function(){$(this).css("border-bottom", "1px solid black");}, function(){$(this).css("border-bottom", "none");});
                $("#leyenda-nav3").css({"color": "#000000"});
                $("#leyenda-nav3").css({"line-height": "15pt"});
                $("#leyenda-nav3").css({"padding-bottom": "3px"});
                $("#leyenda-nav3").hover(function(){$(this).css("border-bottom", "1px solid black");}, function(){$(this).css("border-bottom", "none");});
                $("#leyenda-nav4").css({"color": "#000000"});
                $("#leyenda-nav4").css({"line-height": "15pt"});
                $("#leyenda-nav4").css({"padding-bottom": "3px"});
                $("#leyenda-nav4").hover(function(){$(this).css("border-bottom", "1px solid black");}, function(){$(this).css("border-bottom", "none");});
                flag = true;
            }
        } else {
            if(flag) {
                $("#logo-romorita").css({"margin-top": "140px", "width": "200px", "height": "400px"});
                $("#logo-romorita").attr("src","./img/logo_emblema2.png");
                $("header").css({"background-color": "transparent"});
                $("#leyenda-nav1").css({"color": "#FFFFFF"});
                $("#leyenda-nav2").css({"color": "#FFFFFF"});
                $("#leyenda-nav2").css({"line-height": "15pt"});
                $("#leyenda-nav2").css({"padding-bottom": "3px"});
                $("#leyenda-nav2").hover(function(){$(this).css("border-bottom", "1px solid white");}, function(){$(this).css("border-bottom", "none");});
                $("#leyenda-nav3").css({"color": "#FFFFFF"});
                $("#leyenda-nav3").css({"line-height": "15pt"});
                $("#leyenda-nav3").css({"padding-bottom": "3px"});
                $("#leyenda-nav3").hover(function(){$(this).css("border-bottom", "1px solid white");}, function(){$(this).css("border-bottom", "none");});
                $("#leyenda-nav4").css({"color": "#FFFFFF"});
                $("#leyenda-nav4").css({"line-height": "15pt"});
                $("#leyenda-nav4").css({"padding-bottom": "3px"});
                $("#leyenda-nav4").hover(function(){$(this).css("border-bottom", "1px solid white");}, function(){$(this).css("border-bottom", "none");});
                flag = false;
            }      
        }
    });
});
