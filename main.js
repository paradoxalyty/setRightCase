//программа нуждается в проверке на правильность определения падежа

const deposit = prompt("Введите сумму, которую вы хотите положить в банк.");
checkPrompt(deposit);

/**
 * Функция проверяет введенные данные и в зависимости от полученных данных
 * выдает соответствующую ошибку или вызывает соответствующую функцию для
 * определения правильного падежа
 * @param {string} deposit количество рублей в виде строки.
 * @returns {string} В зависимости от введенных данных - соответствующее предложение..
 */
function checkPrompt() {
    if (deposit == null) {
        alert("К сожалетию вы отменили сделку.");
    } else if (isNaN(parseInt(deposit)) || !Number.isInteger(Number(deposit))) {
        alert("Введите пожалуйста целое число.");
    } else if (parseInt(deposit) === 0) {
        alert("Вы ввели 0, попробуйте ещё раз.");
    } else if (parseInt(deposit) < 0) {
        alert("Вы ввели отрицательное число, попробуйте ещё раз.");
    } else {
        alert(`Ваша сумма в ${deposit} ${setRightCaseForPenultimateElem()} успешно зачислена.`);
    }
}

/**
 *Функция возвращает верный падеж для слова "рубль",
 * если предпоследний элемент в строке 'deposit' равен 1 или
 * вызывает следующую функцию для проверки других вариантов.
 * @returns {string} - "рублей".
 */
function setRightCaseForPenultimateElem() {
    let penultimateElem = deposit.charAt(deposit.length - 2);
    if (penultimateElem === '1') {
        return "рублей";
    } else {
        return setRightCase2();
    }
}

/**
 * Функция возвращает верный падеж для слова "рубль", в конкретных случаях или
 * вызывает следующую функцию для проверки всех других возможных вариантов.
 * @returns {string} В зависимости от введенных данных - слово в соответствующем падеже .
 */
function setRightCase2() {

    switch (parseInt(deposit)) {
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
        default:
            return setRightCase3();
    }
}

/**
 * Функция возвращает верный падеж для слова "рубль", в зависимости
 * от остатка от деления на 10.
 * @returns {string} В зависимости от введенных данных - слово "рубль" в соответствующем падеже .
 */
function setRightCase3() {

    switch (parseInt(deposit) % 10) {
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
        default:
            return "рублей";
    }
}
