import posts from '../posts';
import variables from '../variables';

const { payModal, modalBackground, main } = variables;

const firstList = document.querySelector('.pay__modal-list');
const secondList = document.querySelector('.pay__modal-list-punkt');

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

export const chooseDeliveryOption = () => {
    if (document.querySelector('.by-courier').classList.contains('border-active')) {
        document.querySelector('.address__title').innerHTML = document.querySelector('.by-courier').innerHTML;
        document.querySelector('.place__title').innerHTML = 'Доставка курьером';
        firstList.style.display = 'block'
        secondList.style.display = 'none'
    } else {
        document.querySelector('.address__title').innerHTML = document.querySelector('.to-adress').innerHTML;
        document.querySelector('.place__title').innerHTML = 'Доставка в пункт выдачи';
        secondList.style.display = 'block';
        firstList.style.display = 'none';
    }
}


export const inputCheck = ({ target }) => {
    target.classList.add('active__system');
    if (target.classList.contains('delivery__modal-card-input')) {
        allInputs.forEach(input => {
            input.classList.remove('active__system');
        })

    }
}

