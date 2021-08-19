function scrollAppearPort(){
        var homeImage = document.querySelector('.portfolio-sect');
        var introPositions = homeImage.getBoundingClientRect().top;
        var screenPositions = window.innerHeight /1.9;
        if(introPositions < screenPositions){
            homeImage.classList.add('portfolio-sects');
        }
    }
window.addEventListener('scroll',scrollAppearPort);



function Utils() {}
        Utils.prototype = {
            constructor: Utils,
            isElementInView: function (element, fullyInView) {
                var pageTop = $(window).scrollTop();
                var pageBottom = pageTop + $(window).height();
                var elementTop = $(element).offset().top;
                var elementBottom = elementTop + $(element).height();

                if (fullyInView === true) {
                    return ((pageTop < elementTop) && (pageBottom > elementBottom));
                } else {
                    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
                }
            }
        };

        var Utils = new Utils();
        $(window).on('load', addFadeIn());
        
        $(window).scroll(function() {
            addFadeIn(true);
        });

function addFadeIn(repeat) {
            var classToFadeIn = ".will-fadeIn";
            
            $(classToFadeIn).each(function( index ) {
                var isElementInView = Utils.isElementInView($(this), false);
                if (isElementInView) {
                    if(!($(this).hasClass('fadeInRight')) && !($(this).hasClass('fadeInLeft'))) {
                        if(index % 2 == 0) $(this).addClass('fadeInRight');
                        else $(this).addClass('fadeInLeft');
                    }
                } else if(repeat) {
                    $(this).removeClass('fadeInRight');
                    $(this).removeClass('fadeInLeft');
                }
            });
        }