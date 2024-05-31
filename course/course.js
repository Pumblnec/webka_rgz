function updateCurrency() {
    const currencyInput = document.getElementById('currencyInput');
    const currencySelector = document.getElementById('currencySelector');

    const selectedCurrency = currencySelector.value;

    if (selectedCurrency === 'RUB') {
        currencyInput.placeholder = 'Введите рубли';
    } else if (selectedCurrency === 'CAD') {
        currencyInput.placeholder = 'Введите канадские доллары';
    }
}

document.getElementById('convertButton').addEventListener('click', function() {
    let currencyInput = document.getElementById('currencyInput').value;
    let convertedInput = document.getElementById('convertedInput');

    if (currencySelector.value === 'RUB') {
        // Перевод из рублей в канадских доллары
        convertedInput.value = fx(currencyInput).from("RUB").to("CAD").toFixed(2);
    } else if (currencySelector.value === 'CAD') {
        // Перевод из канадских долларов в рубли
        convertedInput.value = fx(currencyInput).from("CAD").to("RUB").toFixed(2);
    }
});