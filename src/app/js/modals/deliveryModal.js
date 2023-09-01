import posts from '../posts';
import variables from '../variables';

const { payModal, modalBackground, main } = variables;

export const openAddress = () => {
    payModal.classList.add('modal__active');
    modalBackground.classList.add('back__active');
    main.classList.add('overflow')
}

const allInputs = document.querySelectorAll('.delivery__modal-card-input')
export const postAdress = ({ target }) => {
    const item = posts.find(post => post.id == target.closest('.pay__modal-title-item').id)

    document.querySelector('.place__address').innerHTML = item.place;
    document.querySelector('.address__city').innerHTML = item.place;
}



export const inputCheck = ({ target }) => {
    target.classList.add('active__system')
    if (target.classList.contains('delivery__modal-card-input')) {
        allInputs.forEach(input => {
            input.classList.remove('active__system');
        })

    }
}

