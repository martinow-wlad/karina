document.addEventListener('DOMContentLoaded', function () {
        let videoClick = document.querySelector('.play-icon');
        let video = document.querySelector('.video video');
        let line = document.querySelector('.line');
        videoClick.addEventListener('click', function (e) {
            e.preventDefault();
            videoClick.classList.add('hidden');
            video.play();
        });

        let slider = document.querySelector('.rewiee');

        let flkty = new Flickity(slider, {
            // options
            // cellAlign: 'left',
            // contain: true,
            pageDots: false,
            // groupCells: 2,
            wrapAround: true
        });

    });
