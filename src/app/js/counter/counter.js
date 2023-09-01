import { renderAgain } from "../index";
import variables from "../variables";

const { number, salePercent, saleDif, saleClientDif } = variables;

export const counterFunction = ({ target }, state) => {

    if (target.classList.contains('count__number-plus')) {
        plusFunction(target.previousElementSibling.id, state);
    }
    if (target.classList.contains('count__number-minus')) {
        minusFunction(target.nextElementSibling.id, state);
    }
}

export const plusFunction = (id, state) => {
    const item = state.find(obj => obj.id == id)
    let elem = document.getElementById(id);
    if (item.value >= 0 && item.value < item.left) {
        item.value++
        elem.innerHTML = item.value;
    }

    renderAgain(id);
}

export const minusFunction = (id, state) => {
    const item = state.find(obj => obj.id == id)
    let elem = document.getElementById(id);
    if (item.value >= 1) {
        item.value--
        elem.innerHTML = item.value;
    }

    renderAgain(id);
}


export const renderNumber = (state) => {
    for (let i = 0; i < number.length; i++) {
        number[i].innerHTML = state[i].value;
    }
}

export const renderCurrent = (id, state) => {
    const item = state.find(item => item.globalId == id)
    item.total = item.value * item.price;
}

export const renderPrevious = (id, state) => {
    const item = state.find(item => item.globalId == id)
    item.saleTotal = item.value * item.sale_price;
}

const salePercentage = (state) => {
    for (let i = 0; i < salePercent.length; i++) {
        let percent = (state[i].price.split(' ').join('') - state[i].sale_price.split(' ').join('')) / state[i].sale_price.split(' ').join('') * 100;
        salePercent[i].innerHTML = `Скидка ${Math.abs(percent.toFixed(2))}%`;
    }
}
const saleDifference = (state) => {
    for (let i = 0; i < saleDif.length; i++) {
        let percent = (state[i].price.split(' ').join('') - state[i].sale_price.split(' ').join(''));
        saleDif[i].innerHTML = `${percent.toFixed(0)}cом`;
    }
}

const saleDifferenceClient = (state) => {
    for (let i = 0; i < saleClientDif.length; i++) {
        let percent = state[i].price.split(' ').join('') / 10;
        saleClientDif[i].innerHTML = `${percent.toFixed(2)}сом`;
    }
}

export const renderData = (state) => {
    salePercentage(state);
    saleDifference(state);
    saleDifferenceClient(state);
}