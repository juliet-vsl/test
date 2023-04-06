$(document).ready(function() {
    // Плавный скролл
    $('nav a[href^="#"]').click(function() {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },500);

        // Мобильное меню
        $('nav a[href^="#"]').parent().removeClass('active');
        $(this).parent().addClass('active');
        $('.menu__mobile .header-nav__mobile').toggle(500);
        $('.menu__burger').toggleClass('close');        
        return false;
    });

    $('.scroll-cat').click(function(){
        let toCatalog = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(toCatalog).offset().top
        }, 500);
        return false;
    });

    // Меню-бургер
    
    $('.menu__burger').click(function() {
        $('.menu__mobile .header-nav__mobile').toggle(500);
        $(this).toggleClass('close');
        $('.header-nav__mobile').toggleClass('shadow');
        $('body').toggleClass('overflow');
    });

    // Меню личного кабинета

    $('.item-person').click(function() {
        $('.menu__personal').addClass('active');
        $('.menu__personal').removeClass('active');
        $('.menu__personal').toggle(500);
        return false;
    }); 

    $('nav a[href^="#"]').click(function() {
        $('.menu__personal').css('display', 'none');
        return false;
    })
    
});

//Слайдер первого экрана

new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-arrow'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    
    loop: true,
});


