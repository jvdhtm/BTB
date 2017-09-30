(function () {
    'use strict';

    $(window).scroll(function () {
        var scroll = $('.scroll-top');
        if (scroll) {
            if ($(this).height() < $(this).scrollTop()) {
                scroll.fadeIn();
            } else {
                scroll.fadeOut();
            }
        }
    });
    $(document).on('click','.scroll-top',function (){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
})();