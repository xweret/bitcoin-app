const dollarContainer = document.getElementById('dollar');
const usdAmount = document.getElementById('usd-amount');

    // call to the coindesk api 

    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(data => displayData(data));


    // call to the usd value of the btc
    // divide the usd value by 1000 to get the number of btc coins we 'll display, using the trunc function to cut off the decimal 
    
    const displayData = data => {
        const usd = data.bpi.USD.rate_float;
        usdAmount.textContent = `$${usd} USD`;
        const totalDollarItems = Math.trunc(usd / 1000);
        for (let i = 0; i < totalDollarItems; i++) {
            const newDollar = document.createElement('div');
            newDollar.setAttribute("style", `animation-delay:.${10  + i}s`);
            // animation delay controla la aparicion de las monedas, con delay .${10  + i}s`); aparecen todas de una

            newDollar.textContent = '$';
            newDollar.setAttribute('class', 'coin dollar-item');
            dollarContainer.appendChild(newDollar);
    }
}



