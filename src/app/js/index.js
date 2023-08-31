import '../index.html';
import '../scss/style.scss';
import variables from './variables';
import data from './data';
import { renderItems } from './itemsRender';
// import { userInfo } from './userInfo';

const state = {
    current: [],
}
state.current = [...data];

const { main, remove, receiver, submitButton, bucketCounter, editPayButton, form, placeDel, placePay, chooseAll, payModal, toAdress, courier, available, editButton, counter, selectItem, minus, number, plus, current, previous, totalPrice, btn, instantPayCheckbox, salePercent, saleClientPercent, saleDif, saleClientDif, hider, hiderNot, modalButton, modalClose, modalBackground, deliveryModal } = variables;

// const phone = /^(\+?7|8) + ?9\d{9}$/
const phone = /^(\+?7|8)?([- _():=+]?\d[- _():=+]?){10}(\s*)?$/;
const text = /^[A-ZА-ЯЁ]+$/i;
const mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const renderList = () => {
    renderItems(state.current);
    bucketCounter.innerHTML = state.current.length;
}
renderList();

const renderAgain = (id) => {
    renderCurrent(id + 1);
    renderPrevious(id + 1);
    billUpdate();

    document.querySelector('.available__choose-item').innerHTML = '';

    const renderList = () => {
        renderItems(state.current);
        bucketCounter.innerHTML = state.current.length;
    }

    renderList();
}

const chooseAllItems = () => {
    chooseAll.classList.toggle('active-all');
    if (chooseAll.classList.contains('active-all')) {
        state.current.forEach(function (checkbox) {
            if (state.current.choosen === false) {
                checkbox.classList.add('selected');
            }
        })
    } else {
        state.current.forEach(function (checkbox) {
            if (state.current.choosen === true) {
                checkbox.classList.remove('selected');
            }
        })
    }
}

const selectOne = ({ target }) => {
    if (target.classList.contains('item__photo')) {
        target.classList.toggle('selected');
    }
}

const renderNumber = () => {
    for (let i = 0; i < number.length; i++) {
        number[i].innerHTML = state.current[i].value;
    }
}

const renderCurrent = (id) => {
    const item = state.current.find(item => item.globalId == id)
    item.total = item.value * item.price;
}

const renderPrevious = (id) => {
    const item = state.current.find(item => item.globalId == id)
    item.saleTotal = item.value * item.sale_price;
}

const salePercentage = () => {
    for (let i = 0; i < salePercent.length; i++) {
        let percent = (state.current[i].price.split(' ').join('') - state.current[i].sale_price.split(' ').join('')) / state.current[i].sale_price.split(' ').join('') * 100;
        salePercent[i].innerHTML = `Скидка ${Math.abs(percent.toFixed(2))}%`;
    }
}
const saleDifference = () => {
    for (let i = 0; i < saleDif.length; i++) {
        let percent = (state.current[i].price.split(' ').join('') - state.current[i].sale_price.split(' ').join(''));
        saleDif[i].innerHTML = `${percent.toFixed(0)}cом`;
    }
}

const saleDifferenceClient = () => {
    for (let i = 0; i < saleClientDif.length; i++) {
        let percent = state.current[i].price.split(' ').join('') / 10;
        saleClientDif[i].innerHTML = `${percent.toFixed(2)}сом`;
    }
}

const renderData = () => {
    salePercentage();
    saleDifference();
    saleDifferenceClient();
}

const counterFunction = ({ target }) => {

    if (target.classList.contains('count__number-plus')) {
        plusFunction(target.previousElementSibling.id);
    }
    if (target.classList.contains('count__number-minus')) {
        minusFunction(target.nextElementSibling.id);
    }
}

const plusFunction = id => {
    const item = state.current.find(obj => obj.id == id)
    let elem = document.getElementById(id);
    if (item.value >= 0 && item.value < item.left) {
        item.value++
        elem.innerHTML = item.value;
    }

    renderAgain(id);
}

const minusFunction = id => {
    const item = state.current.find(obj => obj.id == id)
    let elem = document.getElementById(id);
    if (item.value >= 1) {
        item.value--
        elem.innerHTML = item.value;
    }

    renderAgain(id);
}

const instantPay = () => {
    instantPayCheckbox.classList.toggle('instant__pay')
    if (instantPayCheckbox.classList.contains('instant__pay')) {
        btn.innerHTML = `Оплатить ${totalPrice.textContent} сом`;
    } else {
        btn.innerHTML = `Заказать`;
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

const modalBackClose = ({ target }) => {
    if (target.classList.contains('delivery__modal-btn')) {
        payModal.classList.remove('modal__active');
        deliveryModal.classList.remove('modal__active');
        modalBackground.classList.remove('back__active');
        main.classList.remove('overflow')
    }
}

const modalCloseClose = ({ target }) => {
    if (target.classList.contains('modal__button')) {
        payModal.classList.remove('modal__active');
        deliveryModal.classList.remove('modal__active');
        modalBackground.classList.remove('back__active');
        main.classList.remove('overflow')
    }
}

const openAddress = () => {
    payModal.classList.add('modal__active');
    modalBackground.classList.add('back__active');
    main.classList.add('overflow')
}

const openPay = () => {
    deliveryModal.classList.add('modal__active');
    modalBackground.classList.add('back__active');
    main.classList.add('overflow')
}

const borderActive = ({ target }) => {
    target.classList.toggle('border-active')
}

const validate = (form) => {
    let result = true;

    form.querySelectorAll('input').forEach(input => {
        if (input.value === '') {
            input.previousElementSibling.classList.remove('active-hat');
            input.nextElementSibling.classList.add('error');
            result = false;
        }
        if ((input.value !== '')) {
            input.previousElementSibling.classList.add('active-hat');
            input.nextElementSibling.classList.remove('error');
            result = true;
        }



        if ((input.classList.contains('name__name-input'))) {
            if (text.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if (text.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if ((input.classList.contains('name__second-input'))) {
            if (text.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if (text.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if ((input.classList.contains('more-email'))) {
            if (mail.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if (mail.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if ((input.classList.contains('more-tel'))) {
            if (phone.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if (phone.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if ((input.classList.contains('more-number'))) {
            if (input.value.length !== 14) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if (input.value.length === 14) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
    })

    return result;
}

const inputSubmit = (e) => {
    if ((e.target.classList.contains('name__name-input'))) {
        if (text.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if (text.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if ((e.target.classList.contains('name__second-input'))) {
        if (text.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if (text.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if ((e.target.classList.contains('more-email'))) {
        if (mail.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if (mail.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if ((e.target.classList.contains('more-tel'))) {
        if (phone.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if (phone.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if ((e.target.classList.contains('more-number'))) {
        if (e.target.value.length !== 14) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if (e.target.value.length === 14) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if (e.target.value === '') {
        e.target.previousElementSibling.classList.remove('active-hat');
        e.target.nextElementSibling.classList.remove('error');
    }

}

const formValidation = (event) => {
    event.preventDefault();
    const mediaQ = window.matchMedia("(max-width: 340px)");
    if (validate(form) === true) {
    }
    if (validate(form) === false) {
        if (mediaQ.matches) {
            receiver.scrollIntoView({ behavior: "smooth", inline: 'nearest' });
        }
    }
}

const formSubmit = () => {
    form.addEventListener('submit', formValidation);
    form.addEventListener('input', inputSubmit);
}

const elemRemove = ({ target }) => {
    if (target.classList.contains('count__remove')) {
        const filteredItems = state.current.filter(item => item.globalId != target.closest('.available__item').id);
        state.current = filteredItems;
        document.querySelector('.available__choose-item').innerHTML = '';
        billUpdate();
        renderList(state.current);
    }
}

const billUpdate = () => {
    const totalValue = document.querySelector('.total__value');
    totalValue.innerHTML = state.current.reduce((sum, elem) => sum + elem.total, 0);
}

chooseAll.addEventListener('click', chooseAllItems);
available.addEventListener('click', selectOne);
chooseAll.addEventListener('click', renderNumber)
chooseAll.addEventListener('click', renderCurrent)
chooseAll.addEventListener('click', renderPrevious)
document.addEventListener('DOMContentLoaded', renderData);
document.addEventListener('click', counterFunction);
instantPayCheckbox.addEventListener('click', instantPay);
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

