document.addEventListener('DOMContentLoaded', function () {
    let videoClick = document.querySelector('.play-icon');
    let video = document.querySelector('.video video');
    if (videoClick) {
        videoClick.addEventListener('click', function (e) {
            e.preventDefault();
            videoClick.classList.add('hidden');
            video.play();
        });
    }
   
    $(function () {
        $(".form_input_tel").mask("+380(99)-999-99-99");
    });
    $(document).ready(function () {
        $('.burger-menu').click(function (event){
            $('.burger-menu,.menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
    });
});
