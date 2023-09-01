import variables from "../variables";

const { payModal, deliveryModal, modalBackground, main, courierBtn, adressBtn } = variables;

export const modalBackClose = ({ target }) => {
    if (target.classList.contains('delivery__modal-btn')) {
        payModal.classList.remove('modal__active');
        deliveryModal.classList.remove('modal__active');
        modalBackground.classList.remove('back__active');
        main.classList.remove('overflow')
    }
}

export const modalCloseClose = ({ target }) => {
    if (target.classList.contains('modal__button')) {
        payModal.classList.remove('modal__active');
        deliveryModal.classList.remove('modal__active');
        modalBackground.classList.remove('back__active');
        main.classList.remove('overflow')
    }
}

export const modal = () => {
    courierBtn.classList.remove('border-active')
}
export const modalC = () => {
    adressBtn.classList.remove('border-active')
}