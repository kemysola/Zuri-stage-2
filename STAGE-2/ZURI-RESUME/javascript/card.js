function scrollCard(){
        var homeCard = document.querySelectorAll('.inline-card');
        var introPos = homeText.getBoundingClientRect().top;
        var screenPos = window.innerHeight / 1.5;
        if(introPos < screenPos){
            homeCard.classList.add('out-text');
        }


    }


    window.addEventListener('scroll',scrollCard);
