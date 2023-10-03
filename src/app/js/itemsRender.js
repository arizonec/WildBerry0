const itemsList = document.querySelector('.available__choose-item');


export const renderItems = (items) => {


    let html = items.map((item) =>
        `<div class="available__item item" id="${item.globalId}">
            <div class="item__about">
                <div class="item__photo choosen selected ">
                    <img src="${require(`../../assets/images/${item.imageUrl}`)}" alt="">
                        <input type="checkbox">
                        </div>
                        <div class="item__info info">
                            <div class="item__price1 price">
                                <div class="price__current">
                                    <h3 class="value">${item.total}</h3>
                                    <h4 class="currency">сом</h4>
                                </div>
                                <div class="price__previous">
                                    <p class="value ">${item.saleTotal}</p>
                                    <p class="currency">сом</p>
                                </div>
                            </div>
                            <div class="info__name">${item.title}</div>
                            <div class="info__param" style="${!item.color && 'margin-bottom: 0px'}">
                                ${item.color.length !== 0 ? `<div class="info__color">Цвет: ${item.color}</div>` : ''}
                                ${item.size.length !== 0 ? `<div class="info__size">Размер: ${item.size}</div>` : ''}
                            </div>
                            <div class="info__location">${item.adress}</div>
                            <div class="info__company">
                                <p>${item.company}</p>
                                <button type="button">i</button>
                                <div class="comp__about-info comp">
                                    <div class="comp__title">ООО Вайлдберриз</div>
                                    <div class="comp__ogrn">ОГРН: 1067746062449</div>
                                    <div class="comp__adress">142181, Московская область, д Коледино, тер.
                                        Индустриальный Парк Коледино, д. 6 стр. 1</div>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="item__counter">
                    <div class="item__count count">
                        <div class="count__number">
                            <div class="count__number-minus"></div>
                            <div class="count__number-num" id="${item.id}">${item.value}</div>
                            <div class="count__number-plus active-color">+</div>
                        </div>
                        <div class="count__left">${item.left < 3 ? `Осталось ${item.left < 3 ? item.left : ''} шт.` : ''}</div>
                        <div class="count__liked">
                            <!-- <img class="count__like" src="/src/assets/images/Like.svg" alt=""> -->
                                <svg class="count__like" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
                                        fill="black" />
                                </svg>
                                <!-- <img class="count__remove" src="/src/assets/images/Remove.svg" alt=""> -->
                                    <svg class="count__remove" width="16" height="16" viewBox="0 0 16 16"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0.5 3C0.5 2.72386 0.723858 2.5 1 2.5H15C15.2761 2.5 15.5 2.72386 15.5 3C15.5 3.27614 15.2761 3.5 15 3.5H1C0.723858 3.5 0.5 3.27614 0.5 3Z"
                                            fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1.4584 2.5H14.5059L13.6411 13.6926C13.5405 14.9947 12.4546 16 11.1486 16H4.84639C3.54299 16 2.45829 14.9986 2.35435 13.6994L1.4584 2.5ZM2.5416 3.5L3.35117 13.6196C3.41353 14.3992 4.06435 15 4.84639 15H11.1486C11.9322 15 12.5837 14.3968 12.6441 13.6155L13.4256 3.5H2.5416Z"
                                            fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M11 3.5H5V1.46875C5 0.657582 5.65758 0 6.46875 0H9.53125C10.3424 0 11 0.657582 11 1.46875V3.5ZM6.46875 1C6.20987 1 6 1.20987 6 1.46875V2.5H10V1.46875C10 1.20987 9.79013 1 9.53125 1H6.46875Z"
                                            fill="black" />
                                    </svg>
                                </div>
                        </div>
                        <div class="item__count-mobile count">
                            <div class="count__number">
                                <div class="count__number-minus"></div>
                                <div class="count__number-num-mobile">1</div>
                                <div class="count__number-plus active-color">+</div>
                            </div>
                            <div class="count__left">${item.left < 3 ? `Осталось ${item.left < 3 ? item.left : ''} шт.` : ''}</div>
                            <div class="count__liked">
                                <!-- <div class="count__like"><img src="/src/assets/images/Like.svg" alt=""></div> -->
                                <svg class="count__like" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
                                        fill="black" />
                                </svg>
                                <!-- <div class="count__remove"><img src="/src/assets/images/Remove.svg" alt=""></div> -->
                                <svg class="count__remove" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.5 3C0.5 2.72386 0.723858 2.5 1 2.5H15C15.2761 2.5 15.5 2.72386 15.5 3C15.5 3.27614 15.2761 3.5 15 3.5H1C0.723858 3.5 0.5 3.27614 0.5 3Z"
                                        fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.4584 2.5H14.5059L13.6411 13.6926C13.5405 14.9947 12.4546 16 11.1486 16H4.84639C3.54299 16 2.45829 14.9986 2.35435 13.6994L1.4584 2.5ZM2.5416 3.5L3.35117 13.6196C3.41353 14.3992 4.06435 15 4.84639 15H11.1486C11.9322 15 12.5837 14.3968 12.6441 13.6155L13.4256 3.5H2.5416Z"
                                        fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11 3.5H5V1.46875C5 0.657582 5.65758 0 6.46875 0H9.53125C10.3424 0 11 0.657582 11 1.46875V3.5ZM6.46875 1C6.20987 1 6 1.20987 6 1.46875V2.5H10V1.46875C10 1.20987 9.79013 1 9.53125 1H6.46875Z"
                                        fill="black" />
                                </svg>
                            </div>
                        </div>
                        <div class="item__price price">
                            <div class="price__current">
                                <h3 class="value current__value">${item.total}</h3>
                                <h4 class="currency">сом</h4>
                            </div>
                            <div class="price__previous">
                                <p class="value previous__value">${item.saleTotal}</p>
                                <p class="currency">сом</p>
                                <div class="price__difference">
                                    <div class="sale-difference">
                                        <div class="sale-perc">Скидка 55%</div>
                                        <div class="sale-dif">-300сом</div>
                                    </div>
                                    <div class="sale__client-difference">
                                        <div class="sale__client-perc">Скидка покупателя 10%</div>
                                        <div class="sale__client-dif">-30сом</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>`
    );


    html.forEach(item => {
        itemsList.innerHTML += item;
    });
};
