import '../index.html';
import '../scss/style.scss';
import variables from './variables';
import data from './data';

const state = {
    current:{},
}

state.current = {...data};

const { chooseAll, available, counter, selectItem, minus, number, plus, current, previous } = variables;

console.log(current)

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

// const itemSum = () => {
//     let elem = document.getElementById(id);
//     if(state.current[id].value >= 1) {
//         state.current[id].value--
//         elem.innerHTML = state.current[id].value; 
//     }
// }

const renderData = () => {
    renderNumber();
    renderCurrent();
    renderPrevious();
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


chooseAll.addEventListener('click', chooseAllItems);
available.addEventListener('click', selectOne);
chooseAll.addEventListener('click', renderNumber)
document.addEventListener('DOMContentLoaded', renderData);
document.addEventListener('click', counterFunction);
document.addEventListener('click', itemSum);
