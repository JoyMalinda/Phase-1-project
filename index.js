const rateA = document.querySelector(".rateA");
const rateB = document.querySelector(".rateB");
const initialSelect = document.querySelector(".initial select");
const targetSelect = document.querySelector(".target select");
const initialInput = document.querySelector(".initial input");
const resultInput = document.querySelector(".result input");
const exchangeButton = document.querySelector(".exchange");

const apiKey = `oy8a4Jd318eyu9HCfYECVjy46QedRZKL`;

const currenciesurl = `https://api.apilayer.com/exchangerates_data/live?access_key=${apiKey}&format=1&source=${sourceCurrency}&currencies=${targetCurrency}`;

const apiRequestUrl = `${url}&${sourceCurrency}&currencies=${targetCurrency}`

fetch(currenciesurl)
  .then(response => response.json())
  .then(data => {
    const currencies = data.currencies;
    for (const currencyCode in currencies) {
      const option1 = document.createElement("option");
      option1.text = `${currencyCode} - ${currencies[currencyCode]}`;
      option1.value = currencyCode;
      initialSelect.add(option1);

      const option2 = document.createElement("option");
      option2.text = `${currencyCode} - ${currencies[currencyCode]}`;
      option2.value = currencyCode;
      targetSelect.add(option2);
    }
  })
  .catch(error => console.error(error));

exchangeButton.addEventListener("click", () => {
    const sourceCurrency = initialSelect.value;
    const targetCurrency = targetSelect.value;
    const amount = parseFloat(initialInput.value);
  
    const exchangeUrl = `http://apilayer.net/api/live?access_key=${apiKey}&format=1&source=${sourceCurrency}&currencies=${targetCurrency}`;
  
    fetch(exchangeUrl)
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.quotes[`USD${targetCurrency}`] / data.quotes[`USD${sourceCurrency}`];
        const result = amount * exchangeRate;
        resultInput.value = result.toFixed(2);
        rateA.innerText = `1 ${sourceCurrency} = ${exchangeRate.toFixed(2)} ${targetCurrency}`;
        rateB.innerText = `1 ${targetCurrency} = ${(1/exchangeRate).toFixed(2)} ${sourceCurrency}`;
      })
      .catch(error => console.error(error));
  });

  
  
  
  
  
  

