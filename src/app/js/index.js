import '../index.html';
import '../scss/style.scss';
import variables from './variables';
import data from './data';
import { openPay } from './modals/payModal';
import { openAddress } from './modals/deliveryModal';
import { renderItems } from './itemsRender';
import { postAdress, inputCheck, chooseDeliveryOption } from './modals/deliveryModal'
import { postPayInfo, inputCheckPay } from './modals/payModal'
import { formSubmit } from './validation.js/validate';
import { modalBackClose, modalCloseClose, modal, modalC } from './modals/modal';
import { counterFunction } from './counter/counter';
import { instantPay, billUpdate } from './bill/bill';
import { renderCurrent, renderPrevious, renderNumber, renderData } from './counter/counter';

const state = {
    current: [],
}
state.current = [...data];

const { payModalInputs, payModalList, payModalListSecond, adressBtn, courierBtn, submitButton, bucketCounter, editPayButton, placeDel, placePay, chooseAll, toAdress, courier, available, editButton, number, instantPayCheckbox, hider } = variables;

const renderList = () => {
    renderItems(state.current);
    let value = document.querySelector('.info__h2').innerHTML;
    bucketCounter.innerHTML = parseInt(value);
}
renderList();

export const renderAgain = (id) => {
    renderCurrent(id + 1, state.current);
    renderPrevious(id + 1, state.current);
    billUpdate(state.current);

    document.querySelector('.available__choose-item').innerHTML = '';

    renderList();
}

const selectOne = ({ target }) => {
    if (target.classList.contains('item__photo')) {
        target.classList.toggle('selected');
    }
}

const chooseAllItems = () => {
    chooseAll.classList.toggle('active-all');
    const selectItem = document.querySelectorAll('.item__photo');

    if (chooseAll.classList.contains('active-all')) {
        selectItem.forEach(function (checkbox) {
            checkbox.classList.add('selected');
            state.current.forEach((item) => item.choosen = true);
        })

    } else {
        selectItem.forEach(function (checkbox) {
            checkbox.classList.remove('selected');
            state.current.forEach((item) => item.choosen = false);
        })
    }
}

const hideAll = () => {
    hider.classList.toggle('reversed-hide');
    available.classList.toggle('hidden');
}

const payCheck = ({ target }) => {
    if (target.classList.contains('delivery__modal-card-input')) {
        target.classList.toggle('active__system');
    }
}

const borderActive = ({ target }) => {
    target.classList.toggle('border-active')
}

const elemRemove = ({ target }) => {
    if (target.classList.contains('count__remove')) {
        const filteredItems = state.current.filter(item => item.globalId != target.closest('.available__item').id);
        state.current = filteredItems;
        document.querySelector('.available__choose-item').innerHTML = '';
        billUpdate(state.current);
        renderList(state.current);
    }
}
chooseAll.addEventListener('click', chooseAllItems);
available.addEventListener('click', selectOne);
chooseAll.addEventListener('click', () => {
    renderNumber(state.current)
})
document.addEventListener('DOMContentLoaded', () => {
    renderData(state.current)
});
document.addEventListener('click', (e) => {
    counterFunction(e, state.current)
});




instantPayCheckbox.addEventListener('click', instantPay);
document.addEventListener('click', chooseDeliveryOption);
hider.addEventListener('click', hideAll);
document.addEventListener('click', payCheck);
editButton.addEventListener('click', openAddress);
editPayButton.addEventListener('click', openPay);
document.addEventListener('click', modalBackClose);
document.addEventListener('click', modalCloseClose);
toAdress.addEventListener('click', borderActive);
courier.addEventListener('click', borderActive);
placeDel.addEventListener('click', openAddress);
placePay.addEventListener('click', openPay);
submitButton.addEventListener('click', formSubmit);
document.addEventListener('click', elemRemove);
adressBtn.addEventListener('click', modal);
courierBtn.addEventListener('click', modalC);
payModalInputs.addEventListener('click', inputCheckPay)
payModalInputs.addEventListener('click', postPayInfo)
payModalList.addEventListener('click', postAdress)
payModalList.addEventListener('click', inputCheck)
payModalListSecond.addEventListener('click', postAdress)
payModalListSecond.addEventListener('click', inputCheck)

