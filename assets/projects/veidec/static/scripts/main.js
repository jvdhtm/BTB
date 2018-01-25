jQuery.fn.center = function () {

    if($(window).width()  >= 992)
    {
        this.css("left",'50%');
        var width = this.width();
        var mleft = width / 2;
        this.css("margin-left", - mleft);
    }
    else
    {
        this.css("left",'0');
        this.css("margin-left", 0);
    }
    return this;
}
$(document).ready(function(){

    $('.block--center_js').center();

    setInterval(function(){
        $('.block--center_js').center();

    }, 100);

});
