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

        let changeItem;

        if (animationEvent.animationName === 'move-left') {

            CAROUSEL.classList.remove("transition-left");
            changeItem = ITEMLEFT;
            carousel1.querySelector('#item-active').innerHTML = changeItem.innerHTML;

        } else {
            CAROUSEL.classList.remove("transition-right");
            changeItem =  ITEMRIGHT;
            CAROUSEL.classList.remove("transition-left");
            carousel1.querySelector('#item-active').innerHTML = changeItem.innerHTML;
        }

        //const newItems = [];
        changeItem.innerHTML = "";
        for (let i = 0; i<3; i++){
            const card = createCardTemplate();
            card.innerText = Math.floor(Math.random() * 8);
            //newItems.push(card);
            changeItem.appendChild(card);
        }

        // const card1 = createCardTemplate();
        // card1.innerText = Math.floor(Math.random() * 8);
        //
        // const card2 = createCardTemplate();
        // card2.innerText = Math.floor(Math.random() * 8);
        //
        // const card3 =createCardTemplate();
        // card3.innerText = Math.floor(Math.random() * 8);

        // changeItem.innerHTML = "";
        // changeItem.appendChild(card1);
        // changeItem.appendChild(card2);
        // changeItem.appendChild(card3);


        BTN_LEFT.addEventListener('click',moveLeft);
        BTN_RIGHT.addEventListener('click',moveRight);
    });



}