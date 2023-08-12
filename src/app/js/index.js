import '../index.html';
import '../scss/style.scss';
import variables from './variables';
import data from './data';

const state = {
    current:{},
}

state.current = {...data};

const { main, chooseAll, available, editButton, counter, selectItem, minus, number, plus, current, previous, totalPrice, btn, instantPayCheckbox, salePercent, saleClientPercent, saleDif, saleClientDif, hider, hiderNot, modalButton, modalClose, modalBackground, deliveryModal } = variables;

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

const modalBackClose = () => {
    deliveryModal.classList.remove('modal__active');
    modalBackground.classList.remove('back__active');
    main.classList.remove('overflow')
}

const modalCloseClose = () => {
    deliveryModal.classList.remove('modal__active');
    modalBackground.classList.remove('back__active');
    main.classList.remove('overflow')
}

const openAddress = () => {
    deliveryModal.classList.add('modal__active');
    modalBackground.classList.add('back__active');
    main.classList.add('overflow')
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
modalButton.addEventListener('click', modalBackClose);
modalClose.addEventListener('click', modalCloseClose);