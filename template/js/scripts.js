
$(document).ready(
    function(){
        $('.header__burger').click(
            function (event) {
                $('div.header__burger').toggleClass('header__burger_close');
                $('nav.header__menu').toggleClass('header__menu_phone');
                $('.header__button').toggleClass('header__button_phone');
                $('.header__button2').toggleClass('header__button2_phone');
            }
        );
    }
);
