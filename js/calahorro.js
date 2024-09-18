function calculateSavings() {
    const currentUsage = parseFloat(document.getElementById('currentUsage').value);
    const newUsage = parseFloat(document.getElementById('newUsage').value);
    const tarifa = document.getElementById('tarifa').value;

    if (isNaN(currentUsage) || isNaN(newUsage) || currentUsage <= 0 || newUsage <= 0) {
        alert('Por favor, ingresa valores válidos para el consumo.');
        return;
    }

    const tariffs = {
        BT7: { low: 49.97 / 30, mid: 71.39 / (140 - 30), high: 73.67 / (500 - 140) },
        BT5i: { low: 47.61 / 30, mid: 68.02 / (140 - 30), high: 70.20 / (500 - 140) },
        BT5f: { low: 78.55 / 30, mid: 112.22 / (140 - 30), high: 115.81 / (500 - 140) },
        BT5e: { low: 50.59 / 30, mid: 72.27 / (140 - 30), high: 74.58 / (500 - 140) },
        BT5d: { low: 38.60 / 30, mid: 55.14 / (140 - 30), high: 56.90 / (500 - 140) },
        BT5b: { low: 50.74 / 30, mid: 72.48 / (140 - 30), high: 74.80 / (500 - 140) },
        BT5a: { low: 183.95 / 30, mid: 217.08 / (140 - 30), high: 218.95 / (500 - 140) },
    };

    const selectedRates = tariffs[tarifa];

    const calculateCost = (usage) => {
        if (usage <= 30) {
            return usage * selectedRates.low;
        } else if (usage <= 140) {
            return (30 * selectedRates.low) + ((usage - 30) * selectedRates.mid);
        } else {
            return (30 * selectedRates.low) + (110 * selectedRates.mid) + ((usage - 140) * selectedRates.high);
        }
    };

    const currentCost = calculateCost(currentUsage);
    const newCost = calculateCost(newUsage);

    const savings = currentCost - newCost;
    const annualSavings = savings * 12;

    const resultElement = document.getElementById('savings-result');
    resultElement.innerHTML = `
        <h2>Resultado del Ahorro</h2>
        <p>Ahorro mensual: S/ ${savings.toFixed(2)}</p>
        <p>Ahorro anual: S/ ${annualSavings.toFixed(2)}</p>
    `;
}
