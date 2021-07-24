function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    //modal.classList.toggle('show');
    document.body.style.overflow = ''; //Можно записать "scroll", но не обязательно
}
function openModel(modalSelector, setTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    //Можно и использовать toggle:)
    //modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    if(setTimerId) {
        clearInterval(setTimerId);
    }
    
    /* window.removeEventListener('scroll', showModalByScroll); */
}

function modal(triggerSelector, modalSelector, setTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModel(modalSelector, setTimerId));
    });

    modal.addEventListener('click', (event) => {
        if(event.target === modal || event.target.getAttribute('data-close') == ''){
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('show')){
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if(window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight) {
            openModel(modalSelector, setTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModel};