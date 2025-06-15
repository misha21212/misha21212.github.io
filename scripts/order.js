const TOKEN = '7463890978:AAFUemWSZNqmonm2piekAXOifD7Md9e4gw0';
const CHAT_ID = '-1002657984220';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const succes = document.querySelector('.succes');

const subButton = document.querySelector('.submit-button')

const inputName = document.querySelector('.form-container__item-name')
const inputPhone = document.querySelector('.form-container__item-phone')

subButton.addEventListener('click', function(e) {

    e.preventDefault();

    let message = 'Заявка с сайта\n' + 'Имя: ' + inputName.value + '\n' +
    'Номер телефона: ' + inputPhone.value;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {

        succes.classList.remove('disp');
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() => {
        console.log('Скрипт выполнен');
    })

})
