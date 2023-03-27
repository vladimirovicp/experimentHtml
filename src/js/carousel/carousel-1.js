const carousel1 = document.querySelector('.carousel-1');

if(carousel1){

    const BTN_LEFT = carousel1.querySelector("#btn-left");
    const BTN_RIGHT = carousel1.querySelector("#btn-right");
    const CAROUSEL = carousel1.querySelector(".carousel");
    const ITEMLEFT = carousel1.querySelector('#item-left');
    const ITEMRIGHT = carousel1.querySelector('#item-right');

    const createCardTemplate = () =>{
        const card = document.createElement("div");
        card.classList.add("card");
        return card;
    };

    const moveLeft = () =>{
        CAROUSEL.classList.add("transition-left");
        BTN_LEFT.removeEventListener('click',moveLeft);
        BTN_RIGHT.removeEventListener('click',moveRight);
    }

    BTN_LEFT.addEventListener('click',moveLeft);


    const moveRight = () =>{
        CAROUSEL.classList.add("transition-right");
        BTN_RIGHT.removeEventListener('click',moveRight);
        BTN_LEFT.removeEventListener('click',moveLeft);
    }

    BTN_RIGHT.addEventListener('click',moveRight);


    CAROUSEL.addEventListener("animationend", (animationEvent) =>{

        // console.log(animationEvent);
        // console.log(animationEvent.animationName);

        //move-left
        // move-right

        if (animationEvent.animationName !== 'move-left') {
            CAROUSEL.classList.remove("transition-right");
        } else {
            CAROUSEL.classList.remove("transition-left");

            const leftItems = ITEMLEFT.innerHTML;
            carousel1.querySelector('#item-active').innerHTML = leftItems;


            const card1 = createCardTemplate();
            card1.innerText = Math.floor(Math.random() * 8);

            const card2 = createCardTemplate();
            card2.innerText = Math.floor(Math.random() * 8);

            const card3 =createCardTemplate();
            card3.innerText = Math.floor(Math.random() * 8);

            ITEMLEFT.innerHTML = "";
            ITEMLEFT.appendChild(card1);
            ITEMLEFT.appendChild(card2);
            ITEMLEFT.appendChild(card3);


        }


        BTN_LEFT.addEventListener('click',moveLeft);
        BTN_RIGHT.addEventListener('click',moveRight);
    });



}