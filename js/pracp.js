$('nav > ul > li').hover(function(){
    $('.sub').stop().slideDown()}, 
    function(){$('.sub').stop().slideUp()}
);

function slide(){
    $('.swrap').animate({marginLeft:'-100%'},1000,function(){
    $(this).append($('.swrap li').first());
    $(this).css({marginLeft:0});
    });
};
setInterval (slide, 3000);


