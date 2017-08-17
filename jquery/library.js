$(document).ready(function() {
    /*------ SEARCH DROPDOWN-----------*/
    $('.bottom-bar-search-item').hover(
        function() {
            $('.bottom--search-bar-section').stop().show('fast');
        },
        function() {
            $('.bottom--search-bar-section').stop().hide('fast');
        });

    /*------ MY BASKET DROPDOWN-----------*/
    $(".basket-button a").hover(
        function() {
            $(this).css('color', 'white');
            $(".hideaway-img.active-img").css('display', 'inline');
            $(".basket-bar-section").stop().show('fast');
        },
        function() {
            $(".basket-button a").css('color', '#b3b3b2');
            $(".hideaway-img.active-img").css('display', 'none');
            $('.basket-bar-section').stop().hide('fast');
        });


    /*------ MY GIFTS DROPDOWN-----------*/
    $(".gifts-button a").hover(
        function() {
            $(this).css('color', 'white');
            $(".hideaway-img-g.active-img-g").css('display', 'inline');
            $(".gifts-bar-section").stop().show('fast');
        },
        function() {
            $(".gifts-button a").css('color', '#b3b3b2');
            $(".hideaway-img-g.active-img-g").css('display', 'none');
            $('.gifts-bar-section').stop().hide('fast');
        });

    /*------ SHOP DROPDOWN-----------*/
    $(".shop-button a").hover(
        function() {
            $(this).css('color', 'white');
            $(".hideaway-img-s.active-img-s").css('display', 'inline');
            $(".bottom-shop-bar-section").stop().show('fast');
        },
        function() {
            $(".shop-button a").css('color', '#b3b3b2');
            $(".hideaway-img-s.active-img-s").css('display', 'none');
            $('.bottom-shop-bar-section').stop().hide('fast');
        });
});
