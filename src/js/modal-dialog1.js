const openModal = document.querySelector('.openModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.closeModal');

if(openModal && modal){
    openModal.addEventListener('click',()=>{
        modal.showModal();
    });

    closeModal.addEventListener('click',()=>{
        modal.close();
    });

    modal.addEventListener('click', (e)=>{
        if(e.target ===modal) modal.close();
        //Сделай через node name
    })
}



