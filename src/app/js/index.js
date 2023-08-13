import '../index.html';
import '../scss/style.scss';
import variables from './variables';
import data from './data';
import { userInfo } from './userInfo';

const state = {
    current:{},
}

state.current = {...data};

const { main, receiver, submitButton, editPayButton, form, placeDel, placePay, chooseAll, payModal, toAdress, courier, available, editButton, counter, selectItem, minus, number, plus, current, previous, totalPrice, btn, instantPayCheckbox, salePercent, saleClientPercent, saleDif, saleClientDif, hider, hiderNot, modalButton, modalClose, modalBackground, deliveryModal } = variables;

const chooseAllItems = () => {
    chooseAll.classList.toggle('active-all');
    if(chooseAll.classList.contains('active-all')) {
        selectItem.forEach(function(checkbox){
            checkbox.classList.add('selected');
        })
    } else {
        selectItem.forEach(function(checkbox){
            checkbox.classList.remove('selected');
        })
    }

    console.log(state.current[0].value)
}

const selectOne = ({target}) => {
    if(target.classList.contains('item__photo')) {
        target.classList.toggle('selected');
    }
}

const renderNumber = () => {
    for(let i = 0; i < number.length; i++) {
        number[i].innerHTML = state.current[i].value;
    }
}

const renderCurrent = () => {
    for(let i = 0; i < current.length; i++) {
        current[i].innerHTML = state.current[i].total_price;
    }
}

const renderPrevious = () => {
    for(let i = 0; i < previous.length; i++) {
        previous[i].innerHTML = state.current[i].sale_price;
    }
}

const salePercentage = () => {
    for(let i = 0; i < salePercent.length; i++) {
        let percent = (state.current[i].total_price.split(' ').join('') - state.current[i].sale_price.split(' ').join(''))/state.current[i].sale_price.split(' ').join('')*100;
        salePercent[i].innerHTML = `Скидка ${Math.abs(percent.toFixed(2))}%`;
    }
}
const saleDifference = () => {
    for(let i = 0; i < saleDif.length; i++) {
        let percent = (state.current[i].total_price.split(' ').join('') - state.current[i].sale_price.split(' ').join(''));
        saleDif[i].innerHTML = `${percent.toFixed(0)}cом`;
    }
}

const saleDifferenceClient = () => {
    for(let i = 0; i < saleClientDif.length; i++) {
        let percent = state.current[i].total_price.split(' ').join('') / 10;
        saleClientDif[i].innerHTML = `${percent.toFixed(2)}сом`;
    }
}

const renderData = () => {
    renderNumber();
    renderCurrent();
    renderPrevious();
    salePercentage();
    saleDifference();
    saleDifferenceClient();
}

const counterFunction = ({ target }) => {
    
    if(target.classList.contains('count__number-plus')) {
        plusFunction(target.previousElementSibling.id);
    }
    if(target.classList.contains('count__number-minus')) {
        minusFunction(target.nextElementSibling.id);
    }
}

const plusFunction = id => {
    let elem = document.getElementById(id);
    if(state.current[id].value >= 0 && state.current[id].value < state.current[id].left) {
        state.current[id].value++
        elem.innerHTML = state.current[id].value;
    }

}

const minusFunction = id => {
    let elem = document.getElementById(id);
    if(state.current[id].value >= 1) {
        state.current[id].value--
        elem.innerHTML = state.current[id].value; 
    }
}

const instantPay = () => {
    instantPayCheckbox.classList.toggle('instant__pay')
    if(instantPayCheckbox.classList.contains('instant__pay')) {
        btn.innerHTML = `Оплатить ${totalPrice.textContent} сом`;
    } else{
        btn.innerHTML = `Заказать`;
    }
}

const hideAll = () => {
    hider.classList.toggle('reversed-hide');
    available.classList.toggle('hidden');
}

const payCheck = ({ target }) => {
    if(target.classList.contains('delivery__modal-card-input'))  {
        target.classList.toggle('active__system');
    }
}

const modalBackClose = ({ target }) => {
    if(target.classList.contains('delivery__modal-btn')) {
        payModal.classList.remove('modal__active');
        deliveryModal.classList.remove('modal__active');
        modalBackground.classList.remove('back__active');
        main.classList.remove('overflow')}
}

const modalCloseClose = ({ target }) => {
    if(target.classList.contains('modal__button')) {
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

const phone = /^(\+?7|8) + ?9\d{9}$/
const text = /^[A-ZА-ЯЁ]+$/i;
const mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const validate = (form) => {
    let result = true;

    form.querySelectorAll('input').forEach(input => {
        if(input.value === '') {
            input.previousElementSibling.classList.remove('active-hat');
            input.nextElementSibling.classList.add('error');
            result = false;
        } 
        if((input.value !== '')) {
            input.previousElementSibling.classList.add('active-hat');
            input.nextElementSibling.classList.remove('error');
            result = true;
        }



        if((input.classList.contains('name__name-input'))) {
            if(text.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if(text.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if((input.classList.contains('name__second-input'))) {
            if(text.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if(text.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if((input.classList.contains('more-email'))) {
            if(mail.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if(mail.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if((input.classList.contains('more-tel'))) {
            if(phone.test(input.value) === false) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if(phone.test(input.value) === true) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
        if((input.classList.contains('more-number'))) {
            if(input.value.length !== 14) {
                input.classList.add('error');
                input.nextElementSibling.classList.add('error');
            }
            if(input.value.length === 14) {
                input.classList.remove('error');
                input.nextElementSibling.classList.remove('error');
            }
        }
    })

    return result;
}

const inputSubmit = (e) => {
    if((e.target.classList.contains('name__name-input'))) {
        if(text.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if(text.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if((e.target.classList.contains('name__second-input'))) {
        if(text.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if(text.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if((e.target.classList.contains('more-email'))) {
        if(mail.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if(mail.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if((e.target.classList.contains('more-tel'))) {
        if(phone.test(e.target.value) === false) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if(phone.test(e.target.value) === true) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if((e.target.classList.contains('more-number'))) {
        if(e.target.value.length !== 14) {
            e.target.classList.add('error');
            e.target.nextElementSibling.classList.add('error');
        }
        if(e.target.value.length === 14) {
            e.target.classList.remove('error');
            e.target.nextElementSibling.classList.remove('error');
        }
    }
    if(e.target.value === '') {
        e.target.previousElementSibling.classList.remove('active-hat');
        e.target.nextElementSibling.classList.remove('error');
    } 
    
}

const formValidation = (event) => {  
    event.preventDefault();

    if(validate(form) === true) {
    }
}

const formSubmit = () => {
    form.addEventListener('submit', formValidation);
    form.addEventListener('input', inputSubmit);
}

chooseAll.addEventListener('click', chooseAllItems);
available.addEventListener('click', selectOne);
chooseAll.addEventListener('click', renderNumber)
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
submitButton.addEventListener('click', formSubmit)
// const keyValid = () => {
//     form.addEventListener('submit', keyValidate)
// }

// const keyValidate = (event) => {
//     event.preventDefault();

//     if(keyValidForm(form) === true) {
//     }
// }

// const keyValidForm = (form) => {
//     let result = true;
//     const phone = /^(\+?7|8) + ?9\d{9}$/
//     const text = /^[A-ZА-ЯЁ]+$/i;
//     const mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//     form.querySelectorAll('input').forEach(input => {
//         if(input.value === '') {
//             input.previousElementSibling.classList.remove('active-hat');
//             input.nextElementSibling.classList.add('error');
//             result = false;
//         } 
//         if((input.value !== '')) {
//             input.previousElementSibling.classList.add('active-hat');
//             input.nextElementSibling.classList.remove('error');
//             result = true;
//         }



//         if((input.classList.contains('name__name-input'))) {
//             if(text.test(input.value) === false) {
//                 input.classList.add('error');
//                 input.nextElementSibling.classList.add('error');
//             }
//             if(text.test(input.value) === true) {
//                 input.classList.remove('error');
//                 input.nextElementSibling.classList.remove('error');
//             }
//         }
//         if((input.classList.contains('name__second-input'))) {
//             if(text.test(input.value) === false) {
//                 input.classList.add('error');
//                 input.nextElementSibling.classList.add('error');
//             }
//             if(text.test(input.value) === true) {
//                 input.classList.remove('error');
//                 input.nextElementSibling.classList.remove('error');
//             }
//         }
//         if((input.classList.contains('more-email'))) {
//             if(mail.test(input.value) === false) {
//                 input.classList.add('error');
//                 input.nextElementSibling.classList.add('error');
//             }
//             if(mail.test(input.value) === true) {
//                 input.classList.remove('error');
//                 input.nextElementSibling.classList.remove('error');
//             }
//         }
//         if((input.classList.contains('more-tel'))) {
//             if(phone.test(input.value) === false) {
//                 input.classList.add('error');
//                 input.nextElementSibling.classList.add('error');
//             }
//             if(phone.test(input.value) === true) {
//                 input.classList.remove('error');
//                 input.nextElementSibling.classList.remove('error');
//             }
//         }
//         if((input.classList.contains('more-number'))) {
//             if(input.value.length !== 14) {
//                 input.classList.add('error');
//                 input.nextElementSibling.classList.add('error');
//             }
//             if(input.value.length === 14) {
//                 input.classList.remove('error');
//                 input.nextElementSibling.classList.remove('error');
//             }
//         }
//     })

//     return result;
// }