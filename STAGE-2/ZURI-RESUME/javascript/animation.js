function scrollAppear(){
        var homeText = document.querySelector('.home-text');
        var introPosition = homeText.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 3;
        if(introPosition < screenPosition){
            homeText.classList.add('intro-text');
        }


    }

window.addEventListener('scroll',scrollAppear);

function scrollAppearImage(){
        var homeImage = document.querySelectorAll('.home-image');
        var introPositions = homeImage.getBoundingClientRect().top;
        var screenPositions = window.innerHeight / 3.3;
        if(introPositions < screenPositions){
            homeImage.classList.add('intro-image');
        }


    }


window.addEventListener('scroll',scrollAppearImage);






