import variables from "../variables";
import { dependOnNum, dataWords } from "../words";

const { instantPayCheckbox, btn, totalPrice } = variables;

export const instantPay = () => {
    instantPayCheckbox.classList.toggle('instant__pay')
    if (instantPayCheckbox.classList.contains('instant__pay')) {
        btn.innerHTML = `Оплатить ${totalPrice.textContent} сом`;
    } else {
        btn.innerHTML = `Заказать`;
    }
}

export const billUpdate = (state) => {
    const piecesValue = document.querySelector('.pieces__value')
    const saleValue = document.querySelector('.sale__value')
    const totalValue = document.querySelector('.total__value');
    const totalItems = document.querySelector('.info__h2');
    const totalValues = state.reduce((sum, elem) => sum + elem.value, 0)
    const word = dependOnNum(totalValues, dataWords('товар'));
    totalItems.innerHTML = `${totalValues} ${word}`;
    totalValue.innerHTML = state.reduce((sum, elem) => sum + elem.total, 0);

    piecesValue.innerHTML = state.reduce((sum, elem) => sum + elem.saleTotal, 0);
    saleValue.innerHTML = state.reduce((sum, elem) => sum + elem.total, 0) - state.reduce((sum, elem) => sum + elem.saleTotal, 0);
}