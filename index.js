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

var duration = 45 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
	var timeLeft = animationEnd - Date.now();

	if (timeLeft <= 0) {
		return clearInterval(interval);
	}
	var particleCount = 50 * (timeLeft / duration);
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: {
				x: randomInRange(0.1, 0.3),
				y: Math.random() - 0.2
			}
		})
	);
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
		})
	);
}, 250);
