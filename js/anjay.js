$(window).scroll(function(){

    var wscroll = $(this).scrollTop();

    $('.banner h2').css({
        'transform':'translate(0px, '+wscroll/4+'%)'
    });
})