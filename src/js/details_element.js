class Details1 {
    constructor(el) {
        // Store the <details> element
        this.el = el;
        // Store the <summary> element
        this.summary = el.querySelector('summary');
        // Store the <div class="content"> element
        this.content = el.querySelector('.content');

        // Store the animation object (so we can cancel it if needed)
        this.animation = null;
        // Store if the element is closing
        this.isClosing = false;
        // Store if the element is expanding
        this.isExpanding = false;
        // Detect user clicks on the summary element
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }

    onClick(e) {
        // Stop default behaviour from the browser
        e.preventDefault();
        // Add an overflow on the <details> to avoid content overflowing
        this.el.style.overflow = 'hidden';
        // Check if the element is being closed or is already closed
        if (this.isClosing || !this.el.open) {
            this.open();
            // Check if the element is being openned or is already open
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        // Set the element as "being closed"
        this.isClosing = true;

        // Store the current height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the height of the summary
        const endHeight = `${this.summary.offsetHeight}px`;

        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }

        // Start a WAAPI animation
        this.animation = this.el.animate({
            // Set the keyframes from the startHeight to endHeight
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });

        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(false);
        // If the animation is cancelled, isClosing variable is set to false
        this.animation.oncancel = () => this.isClosing = false;
    }

    open() {
        // Apply a fixed height on the element
        this.el.style.height = `${this.el.offsetHeight}px`;
        // Force the [open] attribute on the details element
        this.el.open = true;
        // Wait for the next frame to call the expand function
        window.requestAnimationFrame(() => this.expand());
    }

    expand() {
        // Set the element as "being expanding"
        this.isExpanding = true;
        // Get the current fixed height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the open height of the element (summary height + content height)
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }

        // Start a WAAPI animation
        this.animation = this.el.animate({
            // Set the keyframes from the startHeight to endHeight
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(true);
        // If the animation is cancelled, isExpanding variable is set to false
        this.animation.oncancel = () => this.isExpanding = false;
    }

    onAnimationFinish(open) {
        // Set the open attribute based on the parameter
        this.el.open = open;
        // Clear the stored animation
        this.animation = null;
        // Reset isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remove the overflow hidden and the fixed height
        this.el.style.height = this.el.style.overflow = '';
    }
}
class Details3 {
    constructor(el) {
        // Сохраним элемент <details>
        this.el = el;
        // Сохраним элемент <summary>
        this.summary = el.querySelector('summary');
        // Сохраним элемент <div class="content">
        this.content = el.querySelector('.content');

        // Сохраним объект анимации (чтобы мы могли отменить его при необходимости)
        this.animation = null;
        // Сохраним, если элемент закрывается
        this.isClosing = false;
        // Store if the element is expanding
        this.isExpanding = false;
        // Слушаем клики пользователя по элементу summary
        this.summary.addEventListener('click', (e) => this.onClick(e));
    }

    onClick(e) {
        // Остановим поведение браузера по умолчанию
        e.preventDefault();
        // Добавим overflow в <details>, чтобы избежать переполнения содержимого
        this.el.style.overflow = 'hidden';
        // Проверьте, закрывается ли элемент или он уже закрыт
        if (this.isClosing || !this.el.open) {

            // const details = details3[0].querySelectorAll(".burger-menu__item");
            // for(let i=0;i<details.length;i++) {
            //     if (details[i].tagName == "DETAILS" && details[i].hasAttribute('open') && event.target != details[i]){
            //         //console.log(details[i])
            //         //setInterval(() => new Details3(details[i]).shrink(), 2000)
            //
            //
            //
            //         new Details3(details[i]).shrink()
            //
            //     }
            // }

            //setTimeout(this.open(), 1000);

            //setInterval(() => this.open(), 2000)

            this.open();

            // Проверьте, открывается ли элемент или он уже открыт
        } else if (this.isExpanding || this.el.open) {
            this.shrink();
        }
    }

    shrink() {
        // Set the element as "being closed"
        this.isClosing = true;

        // Store the current height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the height of the summary
        const endHeight = `${this.summary.offsetHeight}px`;

        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }

        // Start a WAAPI animation
        this.animation = this.el.animate({
            // Set the keyframes from the startHeight to endHeight
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });

        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(false);
        // If the animation is cancelled, isClosing variable is set to false
        this.animation.oncancel = () => this.isClosing = false;


    }

    open() {

        // const details = details3[0].querySelectorAll(".burger-menu__item");
        // for(let i=0;i<details.length;i++) {
        //     if (details[i].tagName == "DETAILS" && details[i].hasAttribute('open') && event.target != details[i]){
        //         //console.log(details[i])
        //         //setInterval(() => new Details3(details[i]).shrink(), 2000)
        //         let timerId = setTimeout(() => new Details3(details[i]).shrink(), 1000);
        //         //new Details3(details[i]).shrink()
        //     }
        // }

        //console.log(this.details)
        // Apply a fixed height on the element
        this.el.style.height = `${this.el.offsetHeight}px`;
        // Force the [open] attribute on the details element
        this.el.open = true;

        // Wait for the next frame to call the expand function
        window.requestAnimationFrame(() => this.expand());


        //console.log(this.el)

    }

    expand() {
        // Set the element as "being expanding"
        this.isExpanding = true;
        // Get the current fixed height of the element
        const startHeight = `${this.el.offsetHeight}px`;
        // Calculate the open height of the element (summary height + content height)
        const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

        // If there is already an animation running
        if (this.animation) {
            // Cancel the current animation
            this.animation.cancel();
        }

        // Start a WAAPI animation
        this.animation = this.el.animate({
            // Set the keyframes from the startHeight to endHeight
            height: [startHeight, endHeight]
        }, {
            duration: 400,
            easing: 'ease-out'
        });
        // When the animation is complete, call onAnimationFinish()
        this.animation.onfinish = () => this.onAnimationFinish(true);
        // If the animation is cancelled, isExpanding variable is set to false
        this.animation.oncancel = () => this.isExpanding = false;
    }

    onAnimationFinish(open) {
        //console.log(this.el)
        // Set the open attribute based on the parameter
        this.el.open = open;
        // Clear the stored animation
        this.animation = null;
        // Reset isClosing & isExpanding
        this.isClosing = false;
        this.isExpanding = false;
        // Remove the overflow hidden and the fixed height
        this.el.style.height = this.el.style.overflow = '';
    }

}

let details1 = document.querySelectorAll('.details1');
if( details1.length > 0){
    for(let index = 0; index < details1.length; index++){
        details1[index].querySelectorAll('details').forEach((el) => {
            new Details1(el);
         });
    }
}


let details2 = document.querySelector('.details2');
if( details2){
    const details = details2.querySelectorAll(".item > details");
    const detailsSub = details2.querySelectorAll(".item_sub > details");

    for(i=0;i<details.length;i++) {
        details[i].addEventListener("toggle", accordion);
    }
    for(let i=0;i<detailsSub.length;i++) {
        detailsSub[i].addEventListener("toggle", accordion);
    }
    function accordion(event) {
        if (!event.target.open) return;
        let item = event.target.parentNode;
        // console.log(event.target.children)
        if( item.className === 'item'){
            for(i=0;i<details.length;i++) {
                if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
                details[i].removeAttribute("open");
            }
            for(i=0;i<detailsSub.length;i++) {
                detailsSub[i].removeAttribute("open");
            }
        } else if( item.className === 'item_sub'){

            const current = event.target.parentNode.children;
            for(i=0;i<current.length;i++) {
                if (current[i].tagName != "DETAILS" || !current[i].hasAttribute('open') || event.target == current[i]) continue;
                current[i].removeAttribute("open");
            }
        }
    }
}



let details3 = document.querySelectorAll('.details3');
if( details3.length > 0){

    // const details = details3[0].querySelectorAll(".burger-menu__item");
    // const detailsSub = details3[0].querySelectorAll(".burger-menu__sub-item");


    for(let index = 0; index < details3.length; index++){
        let burgerMenuItem = details3[index].querySelectorAll('.burger-menu__item');
        burgerMenuItem.forEach((el) => {
            new Details3(el);
        });

        for(let i = 0; i< burgerMenuItem.length; i++){
            let burgerMenuSubItem = details3[index].querySelectorAll('.burger-menu__sub-item');
            burgerMenuSubItem.forEach((el) => {
                new Details3(el);
            });
        }
    }
}


