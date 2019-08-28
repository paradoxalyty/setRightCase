checkPrompt();

/**
 * Функция проверяет введенные данные и в зависимости от полученных данных
 * выдает соответствующую ошибку или вызывает соответствующую функцию для
 * определения правильного падежа.
 * @returns {string} В зависимости от введенных данных - соответствующее предложение.
 */
function checkPrompt() {
    const deposit = parseInt(prompt("Введите сумму, которую вы хотите положить в банк."));
    
    if (deposit == null) {
        //Если пользователь нажмет кнопку <<отмена>>, prompt вернет NULL и программа завершит выполнение.
        alert("К сожалетию вы отменили сделку.");
    } else if (isNaN(deposit) || !Number.isInteger(Number(deposit))) {
        alert("Необходимо ввести целое число, попробуйте ещё раз.");
        checkPrompt();
    } else if (deposit === 0) {
        alert("Вы ввели 0, попробуйте ещё раз.");
        checkPrompt();
    } else if (deposit < 0) {
        alert("Вы ввели отрицательное число, попробуйте ещё раз.");
        checkPrompt();
    } else {
        alert(`Ваша сумма в ${deposit} ${setRightCaseForPenultimateElem(deposit)} успешно зачислена.`);
    }
}

/**
 *Функция возвращает верный падеж для слова "рубль",
 * если предпоследний элемент в строке 'deposit' равен 1 или
 * вызывает следующую функцию для проверки других вариантов.
 * @param deposit - данные введенные пользователем в prompt.
 * @returns {string} - "рублей".
 */
function setRightCaseForPenultimateElem(deposit) {
    deposit = String(deposit);
    let penultimateElem = deposit.charAt(deposit.length - 2);
    
    if (penultimateElem === '1') {
        return "рублей";
    } else {
        return setRightCase(deposit);
    }
}

/**
 * Функция возвращает верный падеж для слова "рубль", в зависимости
 * от остатка от деления на 10.
 * @param deposit - данные введенные пользователем в prompt.
 * @returns {string} В зависимости от введенных данных - слово "рубль" в соответствующем падеже .
 */
function setRightCase(deposit) {

    switch (deposit % 10) {
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
