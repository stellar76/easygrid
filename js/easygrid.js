//easygrid js
var navtoggled = 'off';
$(function() {
    $('#navbutton').click(function() {
        if (navtoggled == 'off') {
            $(this).empty();
            $(this).html('<img src="img/menu_x.png"/>');
            $(this).addClass('open');
            $('topnav ul').addClass('open');
            navtoggled = 'on';
        } else if (navtoggled == 'on') {
            $(this).empty();
            $(this).html('<img src="img/menu.png"/>');
            $(this).removeClass('open');
            $('topnav ul').removeClass('open');
            navtoggled = 'off';
        }
    });
});
