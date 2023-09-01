import cards from '../cardsInfo';
import variables from '../variables';
const allInputs = document.querySelectorAll('.delivery__modal-card-input')

const { deliveryModal, modalBackground, main } = variables;

export const openPay = () => {
    deliveryModal.classList.add('modal__active');
    modalBackground.classList.add('back__active');
    main.classList.add('overflow')
}

export const postPayInfo = ({ target }) => {
    const item = cards.find(card => card.id == target.closest('.delivery__modal-card').id)

    const html = `<div class="card__system"><img src="${require(`/src/assets/images/${item.img}`)}" alt=""></div>
                  <div class="card__number">${item.cardNumber}</div>
                  <div class="card__date">01/30</div>`

    const html2 = `<div class="card__system"><img src="${require(`/src/assets/images/${item.img}`)}" alt=""></div>
                  <div class="card__number">${item.cardNumber}</div>`

    document.querySelector('.pay__system1').innerHTML = html2;
    document.querySelector('.pay__card').innerHTML = html;
}

export const inputCheckPay = ({ target }) => {
    target.classList.add('active__system')
    if (target.classList.contains('delivery__modal-card-input')) {
        allInputs.forEach(input => {
            input.classList.remove('active__system');
        })

    }
}