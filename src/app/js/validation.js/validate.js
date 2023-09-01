const phone = /^(\+?7|8)?([- _():=+]?\d[- _():=+]?){10}(\s*)?$/;
const text = /^[A-ZА-ЯЁ]+$/i;
const mail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
import variables from "../variables";

const { receiver } = variables;

export const validate = (form) => {
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

export const inputSubmit = (e) => {
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

export const formValidation = (event) => {
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

export const formSubmit = () => {
    form.addEventListener('submit', formValidation);
    form.addEventListener('input', inputSubmit);
}