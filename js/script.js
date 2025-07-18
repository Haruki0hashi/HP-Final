window.addEventListener('load', function(){
    var $button = document.querySelector('.hamburger-menu');
    var $menu = document.querySelector('.header-site-menu');
    $button.addEventListener('click', function () {
        if ($menu.classList.contains('is-show')) {
            $menu.classList.remove('is-show');
            $button.classList.remove('is-active');
        }
        else {
            $menu.classList.add('is-show');
            $button.classList.add('is-active');
        }
    });
})
