fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd')
    .then(data => data.json())
    .then(ValueData => {
        const dogeV = ValueData.dogecoin.usd;
        const dogevalue = document.getElementById('doge');
        const bitcoinV = ValueData.bitcoin.usd;
        const bitcoinvalue = document.getElementById('bitcoin');
        const liteV = ValueData.litecoin.usd;
        const litecoinvalue = document.getElementById('litecoin');
        const ethereumV = ValueData.ethereum.usd;
        const ethereumvalue = document.getElementById('ethereum');
        
        dogevalue.innerHTML = dogeV;
        bitcoinvalue.innerHTML = bitcoinV;
        litecoinvalue.innerHTML = liteV;
        ethereumvalue.innerHTML = ethereumV;

    })