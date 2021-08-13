const ethAmount = 0.02;
const initialCostPerEth = 2350;
let currentValue;

const ethDisplay = document.querySelector('.ethAmount');
const fullDisplay = document.querySelector('.fullAmount');

const urls = [ 'https://open.er-api.com/v6/latest/USD', 'https://api.coincap.io/v2/rates/ethereum' ];

async function fetchData() {
	try {
		const response = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));
		const usdValue = response[0].rates.GBP;
		const ethValue = response[1].data.rateUsd;
		currentValue = ethAmount * (ethValue * usdValue);
		ethDisplay.innerHTML = `£${currentValue.toFixed(2)}`;
		fullDisplay.innerHTML = `(£${currentValue})`;
	} catch (error) {
		console.log(`ERROR`, error);
	}
}
fetchData();
