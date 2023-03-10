"use strict"

//SPOLLERS

const spollersArray = document.querySelectorAll('[data-spollers]')

if(spollersArray.length > 0){
    const spollersRegular = Array.from(spollersArray).filter(function (item,index,self){
        return !item.dataset.spollers.split(",")[0];
    });

    if( spollersRegular.length > 0){
        initSpollers(spollersRegular);
    }

    const spollersMedia = Array.from(spollersArray).filter(function (item,index,self){
        return item.dataset.spollers.split(",")[0];
    });

    //Инициализация спойлеров с медиа запросами
    if(spollersMedia.length > 0){
        const breakpointsArray = [];
        spollersMedia.forEach(item => {
            const params = item.dataset.spollers;
            const breakpoint = {};
            const paramsArray = params.split(",")
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        //Получаем уникальные брейкпоинты
        let mediaQueries = breakpointsArray.map(function(item) {
            return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        //Работа с каждым брейпоинтом
        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            //Объекты с нужными условиями
            const spollersArray = breakpointsArray.filter(function(item) {
                if (item.value === mediaBreakpoint &&  item.type === mediaType) {
                    return true;
                }
            });

            //Событие
            matchMedia.addListener(function() {
                initSpollers(spollersArray, matchMedia);
            });

            initSpollers(spollersArray, matchMedia);
        });
    }

    //Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ?  spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add('__init');
                //initSpollerBody(spollersBlock);
                //spollersBlock.addEventListener("click", setSpollerAction);
            }
            else {
                spollersBlock.classList.remove('__init');
                //initSpollerBody(spollersBlock, false);
                //spollersBlock.addEventListener("click", setSpollerAction)
            }
        });
    }
    //Работа с контентом
    // function initSpollerBody(spollersBlock, hideSpollerBody = true) {
    //     const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
    //     if (spollerTitles.length > 0) {
    //         spollerTitles.forEach(spollerTitle => {
    //             if (hideSpollerBody) {
    //                 spollerTitle.removeAttribute('tabindex');
    //                 if(!spollerTitle.claccList.contains('__active')) {
    //                     spollerTitle.nextElementSibling.hidden = true;
    //                 }
    //             }
    //             else {
    //                 spollerTitle.setAttribute('tabindex', '-1');
    //                 spollerTitle.nextElementSibling.hidden = false;
    //             }
    //         });
    //     }
    // }

    // function setSpollerAction(e) {
    //     const el = e.target;
    //     if (el.hasAttribute('data-spoller') ||el.closet('[data-spoller]')) {
    //         const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closet('[data-spoller]');
    //         const spollersBlock = spollerTitle.closet('[data-spollers]');
    //         const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
    //         if (!spollersBlock.querySelectorAll('.__slide').length) {
    //             if (oneSpoller && !spollerTitle.claccList.contains('__active')) {
    //                 hideSpollerBody(spollersBlock);
    //             }
    //             spollerTitle.claccList.toggle('__active');
    //             _slideToggle(spollerTitle.nextElementSibling, 500);
    //         }
    //         e.prentDefault();
    //     }
    // }
    // function hideSpollerBody(spollersBlock) {
    //     const spollerActiveTitle = spollersBlock.querySelector('[data-spoller].__active');
    //     if (spollerActiveTitle) {
    //         spollerActiveTitle.claccList.remove('__active');
    //         _slideUp(spollerActiveTitle.nextElementSibling, 500);
    //     }
    // }

}