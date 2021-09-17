const form = document.getElementsByTagName('form')[0];
const button = document.querySelector(".wrapper button[type='button']");
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

button.addEventListener('click',()=>{
    showModal();
});

closeModal.addEventListener('click',()=>{
    showModal();
});

const showModal = function() {
    console.log(modal.style.display);

    if(modal.style.display == 'flex')
        modal.style.display = 'none';
    else
        modal.style.display = 'flex'
}