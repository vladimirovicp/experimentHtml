const accordion3 = document.querySelector('.accordion3');

if(accordion3){
    const wrapper = accordion3.querySelector('.wrapper');
    const items = wrapper.querySelectorAll('.item')

    items.forEach(element => {
        const title = element.querySelector('.title')
        title.addEventListener("click", function(e){
            title.parentElement.classList.toggle('_active');
        });
    })


}