const appliances = {
    Refrigeradora: {
        models: [
            { name: 'Samsung RT35K5930S8', power: 361 },
            { name: 'Samsung RS64T5B00B1/PE', power: 638 },
            { name: 'Samsung RL4363SBABS', power: 432 },
            { name: 'Samsung RS65R5681M9/PE', power: 602 },
            { name: 'Samsung LRF71A9671SG', power: 713 },
            { nam: '-----------------------------------'},
            { name: 'Panasonic NR-BV361BPKE', power: 270 },
            { name: 'Panasonic NR-BS90PV1BD', power: 29.3 },
            { name: 'Panasonic NR-BT43PV1TD', power: 31 },
            { name: 'Panasonic NR-BV320GKd', power: 265 },
            { nam: '-----------------------------------'},
            { name: 'Oster OS-PNFME21200BD', power: 285 },
            { name: 'Oster OS-PSBSME20SSEBDI', power: 358 },
            { nam: '-----------------------------------'},
            { name: 'Indurama RI-389', power: 320 },
            { name: 'Indurama RI-359', power: 308 },
            { name: 'Indurama RI-389D', power: 320 },
            { name: 'Indurama RI-289D', power: 161 },
            { nam: '-----------------------------------'},
            { name: 'LG GB37WGT', power: 254 },
            { name: 'LG GB41BPP', power: 267 },
            { name: 'LG GB46TGT', power: 280 },
            { name: 'LG LS51BPP', power: 433 },
        ]
    },
    Lavadora: {
        models: [
            { name: 'Samsung WD12TP84DBX/PE', power: 1600 },
            { name: 'Samsung WA13T5260BV', power: 500 },
            { name: 'Samsung WF21T6500GV/PE', power: 2400 },
            { nam: '-----------------------------------'},
            { name: 'Panasonic NA-F120', power: 500 },
            { name: 'Panasonic NA-F190H7', power: 700 },
            { name: 'Panasonic NA-FS19P7', power: 627 },
            { nam: '-----------------------------------'},
            { name: 'LG WT19BV6', power: 220 },
            { name: 'LG WT19DV6', power: 220 },
            { name: 'LG WT13BSB', power: 200 },
            { name: 'LG TS1366NTP', power: 200 },
            { name: 'LG WT16BPB', power: 200 },
            { nam: '-----------------------------------'},
            { name: 'Indurama LRI13BLA', power: 480 },
            { name: 'Indurama LRI-13DGR', power: 480 },
            { name: 'Indurama LRI-15DGR', power: 600 },
            { name: 'Indurama LRI-21CR', power: 680 },
            { nam: '-----------------------------------'},
            { name: 'LG WM10WVC4S6', power: 2200 },
            { name: 'LG WT25PBVS6', power: 2600 },
            { name: 'LG WT9GL', power: 1420 },
            { name: 'LG WT21PBVS6', power: 2720 },
            { name: 'LG WT17DV6T', power: 2500 },
            { nam: '-----------------------------------'},
            { name: 'BOSCH WAT28402PE', power: 880 },
        ]
    },
    Microondas: {
        models: [
            { name: 'Samsung AGE83X', power: 1200 },
            { name: 'Samsung MG32J5133AG/PE', power: 1500 },
            { name: 'Samsung AMW831K', power: 800 },
            { name: 'Samsung AME1114TW', power: 1500 },
            { nam: '-----------------------------------'},
            { name: 'Panasonic NN-DS59NBRPH', power: 1350 },
            { name: 'Panasonic NN-SC649S', power: 1200 },
            { name: 'Panasonic NN-ST965SRPH', power: 1200 },
            { nam: '-----------------------------------'},
            { name: 'Oster Pogm3702', power: 700 },
            { name: 'Oster Poggm3902G', power: 800 },
            { name: 'Oster POGME2701', power: 700 },
            { nam: '-----------------------------------'},
            { name: 'AIWA AWHMG20S01', power: 700 },
            { name: 'AIWA AW MM28S50', power: 900 },
            { nam: '-----------------------------------'},
            { name: 'Indurama MWI-20TCRP', power: 1050 },
            { name: 'Indurama MWI-32TCRP', power: 1500 },
            { name: 'Indurama MWI-20TCRP', power: 700 },
            { nam: '-----------------------------------'},
            { name: 'LG MS2596DIR', power: 1000 },
            { name: 'LG MS2032GAS', power: 1050 },
            { name: 'LG MS2536GIS', power: 1000 },
            { nam: '-----------------------------------'},
            { name: 'BOSCH BEL554MS0V', power: 900 },
            { nam: '-----------------------------------'},
            { name: 'Electrolux EMDO25S2GSRUG', power: 900 },
            { name: 'Electrolux EMDO30G2GSRUG', power: 900 },
            { name: 'Electrolux EMTP24G2GXB', power: 1400 },
            { name: 'Electrolux EMDY25S2MXB', power: 1200 },
        ]
    },
    TV: {
        models: [
            { name: 'Samsung RT35K5930S8', power: 361 },
            { name: 'Samsung RS64T5B00B1/PE', power: 638 },
            { name: 'Samsung RL4363SBABS', power: 432 },
            { name: 'Samsung RS65R5681M9/PE', power: 602 },
            { name: 'Samsung LRF71A9671SG', power: 713 },
            { nam: '-----------------------------------'},
            { name: 'Panasonic NR-BV361BPKE', power: 270 },
            { name: 'Panasonic NR-BS90PV1BD', power: 29.3 },
            { name: 'Panasonic NR-BT43PV1TD', power: 31 },
            { name: 'Panasonic NR-BV320GKd', power: 265 },
            { nam: '-----------------------------------'},
            { name: 'Oster OS-PNFME21200BD', power: 285 },
            { name: 'Oster OS-PSBSME20SSEBDI', power: 358 },
            { nam: '-----------------------------------'},
            { name: 'Indurama RI-389', power: 320 },
            { name: 'Indurama RI-359', power: 308 },
            { name: 'Indurama RI-389D', power: 320 },
            { name: 'Indurama RI-289D', power: 161 }
        ]
    },
    Licuadora: {
        models: [
            { name: 'Panasonic MJ-L700', power: 150 },
            { name: 'Panasonic MX-151SG1WZC', power: 450 },
            { nam: '-----------------------------------'},
            { name: 'Oster BLST3BRPG', power: 450 },
            { name: 'Oster BLSTBPST', power: 1100 },
            { name: 'Oster ActiFit™ BLSTAFB', power: 700 },
            { nam: '-----------------------------------'},
            { name: 'Holstein HH-09101067B', power: 400 },
            { name: 'Holstein HH-0914902B', power: 250 },
            { nam: '-----------------------------------'},
            { name: 'Indurama LI-INX', power: 1000 },
            { name: 'Indurama LI-CRB', power: 500 },
            { name: 'Indurama LI-CRP', power: 750 },
            { name: 'Indurama LI-INX', power: 1000 },
            { nam: '-----------------------------------'},
            { name: 'Mabe BLSTKAGWRD', power: 550 },
            { name: 'Mabe BLSTKAGBPB', power: 550 }
        ]
    },
    Freidora: {
        models: [
            { name: 'IMACO AF2714R', power: 1400 },
            { name: 'IMACO AF6015M', power: 1500 },
            { name: 'IMACO AF5514', power: 1400 },
            { nam: '-----------------------------------'},
            { name: 'Oster CKSTAF18DDF', power: 1000 },
            { name: 'Oster CKSTAF68T', power: 1700 },
            { nam: '-----------------------------------'},
            { name: 'Indurama FAI-35MN', power: 1500 },
            { name: 'Indurama FAI-35DN', power: 1500 },
            { name: 'Indurama FAI-35DN', power: 1500 }
        ]
    },
    Olla_Arrocera: {
        models: [
            { name: 'Panasonic SR-Y22FGJLZB', power: 700 },
            { name: 'Panasonic SR-DF101', power: 750 },
            { name: 'Panasonic SR-DF181', power: 750 },
            { nam: '-----------------------------------'},
            { name: 'Oster CKSTRC5731S', power: 700 },
            { name: 'Oster CKSTRC1700B', power: 700 },
            { name: 'Oster CKSTRC5730W', power: 700 },
            { name: 'Oster CKSTRC8029T', power: 700 },
            { name: 'Oster CKSTRC1700W', power: 700 },
            { nam: '-----------------------------------'},
            { name: 'Indurama OAI-GR18', power: 700 },
            { name: 'Indurama OAI-BL18', power: 700 },
            { name: 'Indurama OAI-BL15', power: 500 },
            { nam: '-----------------------------------'},
            { name: 'Mabe RC15N', power: 900 },
            { name: 'Mabe RC18VE', power: 950 }
        ]
    },
    Terma: {
        models: [
            { name: 'ROTOPLAS New Compact Silver', power: 4500 },
            { name: 'ROTOPLAS Digital Max', power: 5500 },
            { name: 'ROTOPLAS New Sense Pro', power: 4500 },
            { name: 'ROTOPLAS Prisma', power: 5500 },
            { nam: '-----------------------------------'},
            { name: 'SOLE SOLSOL010C', power: 1500 },
            { name: 'SOLE SOLENGASN05V3C', power: 11000 },
            { name: 'SOLE SOLTEEV050C', power: 1500 },
            { name: 'SOLE SOLTEM110V', power: 2000 },
            { name: 'SOLE SOLTEM050V', power: 1200 },
            { name: 'SOLE SOLRD3000C', power: 3000 },
            { name: 'SOLE SOLRD4000V3C', power: 4000 },
            { name: 'SOLE SOLTD7000EC', power: 7000 },
            { name: 'SOLE SOLRD5500V3C', power: 5500 },
        ]
    },
    Cafetera: {
        models: [
            { name: 'BOSCH TKA8013', power: 1160 },
            { nam: '-----------------------------------'},
            { name: 'Electrolux ECM10', power: 800 },
            { name: 'Electrolux ECM20', power: 800 },
            { name: 'Electrolux ECM30', power: 800 },
            { name: 'Electrolux ECM25', power: 800 },
        ]
    },
    Lavavajilla: {
        models: [
            { name: 'Electrolux EHCE08M2STG', power: 1400 },
            { name: 'Electrolux EHFE14T2MSBXB', power: 1760 },
            { name: 'Electrolux EHFE10T2MSBUS', power: 1760 },
            { name: 'Electrolux EHFE14T2MSBUS', power: 1760 },
        ]
    },
};

const tariffs = {
    BT7: [
        { range: [0, 30], rate: 0.5 },
        { range: [31, 140], rate: 0.7143 },
        { range: [101, Infinity], rate: 0.7372 }
    ],
    BT5I: [
        { range: [0, 30], rate: 0.357 },
        { range: [31, 140], rate: 0.51 },
        { range: [141, Infinity], rate: 0.5263 }
    ],
    BT5F: [
        { range: [0, 30], rate: 0.3474 },
        { range: [31, 140], rate: 0.4963 },
        { range: [141, Infinity], rate: 0.5122 }
    ],
    BT5E: [
        { range: [0, 30], rate: 0.5062 },
        { range: [31, 140], rate: 0.7231 },
        { range: [141, Infinity], rate: 0.7462 }
    ],
    BT5D: [
        { range: [0, 30], rate: 0.3863 },
        { range: [31, 140], rate: 0.5518 },
        { range: [141, Infinity], rate: 0.5695 }
    ],
    BT5B: [
        { range: [0, 30], rate: 0.5076 },
        { range: [31, 140], rate: 0.7252 },
        { range: [141, Infinity], rate: 0.7484 }
    ],
};

let totalConsumption = 0;
let appliancesList = [];

function updateModels() {
    const applianceSelect = document.getElementById('appliance');
    const modelSelect = document.getElementById('model');
    const selectedAppliance = applianceSelect.value;

    // Clear previous options
    modelSelect.innerHTML = '<option value="" disabled selected>Selecciona un modelo</option>';

    if (selectedAppliance) {
        const models = appliances[selectedAppliance].models;
        models.forEach(model => {
            const option = document.createElement('option');
            option.value = model.name;
            option.textContent = model.name;
            option.dataset.power = model.power;
            modelSelect.appendChild(option);
        });
    }

    document.getElementById('power').value = '';
}

function updatePower() {
    const modelSelect = document.getElementById('model');
    const selectedModel = modelSelect.options[modelSelect.selectedIndex];
    const power = selectedModel ? selectedModel.dataset.power : '';
    document.getElementById('power').value = power;
}

function addAppliance() {
    const power = parseFloat(document.getElementById('power').value);
    const hours = parseFloat(document.getElementById('hours').value);
    const days = parseFloat(document.getElementById('days').value);
    const appliance = document.getElementById('appliance').value;
    const model = document.getElementById('model').value;

    if (isNaN(power) || isNaN(hours) || isNaN(days)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }

    const consumption = (power * hours * days)/1000;

    const applianceItem = {
        name: `${appliance} (${model})`,
        consumption: consumption
    };

    appliancesList.push(applianceItem);

    const applianceList = document.getElementById('applianceList');
    const listItem = document.createElement('li');
    listItem.textContent = `${applianceItem.name}: ${consumption.toFixed(2)} kWh`;
    applianceList.appendChild(listItem);

    totalConsumption += consumption;

    // Reset the form for the next input
    document.getElementById('consumptionForm').reset();
    document.getElementById('power').value = '';
}

function calculateTotal() {
    const selectedTariff = document.getElementById('tariff').value;
    const cost = calculateCost(totalConsumption, selectedTariff);
    const resultElement = document.getElementById('totalResult');
    resultElement.innerHTML = `Consumo total: ${totalConsumption.toFixed(2)} kWh al mes<br>Costo aproximado: S/ ${cost.toFixed(2)} al mes`;

    // Identificar el electrodoméstico con mayor consumo
    let maxConsumption = 0;
    let maxAppliance = '';
    appliancesList.forEach(item => {
        if (item.consumption > maxConsumption) {
            maxConsumption = item.consumption;
            maxAppliance = item.name;
        }
    });

    if (maxAppliance) {
        const recommendationElement = document.createElement('div');
        recommendationElement.className = 'recommendation';
        recommendationElement.innerHTML = `
            <h3>Electrodoméstico con mayor consumo:</h3>
            <p>${maxAppliance}: ${maxConsumption.toFixed(2)} kWh</p>
            <h3>Recomendaciones:</h3>
            <p>Para reducir el consumo de ${maxAppliance}, considera las siguientes recomendaciones:</p>
            <ul>
                <li>Asegúrate de utilizarlo solo cuando sea necesario.</li>
                <li>Opta por electrodomésticos de bajo consumo energético.</li>
                <li>Mantén el electrodoméstico en buen estado para asegurar su eficiencia.</li>
                <li>Desconéctalo cuando no esté en uso para evitar consumos en stand-by.</li>
            </ul>
        `;
        resultElement.appendChild(recommendationElement);
    }
}

function calculateCost(consumption, tariff) {
    let cost = 0;
    if (tariff in tariffs) {
        tariffs[tariff].forEach(t => {
            if (consumption > t.range[0] && consumption <= t.range[1]) {
                cost += consumption * t.rate / 1;
            } else if (consumption > t.range[1]) {
                cost += (t.range[1] - t.range[0]) * t.rate / 1;
                consumption -= (t.range[1] - t.range[0]);
            }
        });
    }
    return cost;
}

function calculateTotal() {
    const selectedTariff = document.getElementById('tariff').value;

    if (!selectedTariff) {
        alert('Por favor, selecciona una tarifa antes de calcular el total.');
        return;
    }

    const cost = calculateCost(totalConsumption, selectedTariff);
    const resultElement = document.getElementById('totalResult');
    resultElement.innerHTML = `Consumo total: ${totalConsumption.toFixed(2)} kWh al mes<br>Costo aproximado: S/ ${cost.toFixed(2)} al mes`;

    // Identificar el electrodoméstico con mayor consumo
    let maxConsumption = 0;
    let maxAppliance = '';
    appliancesList.forEach(item => {
        if (item.consumption > maxConsumption) {
            maxConsumption = item.consumption;
            maxAppliance = item.name;
        }
    });

    if (maxAppliance) {
        const recommendationElement = document.createElement('div');
        recommendationElement.className = 'recommendation';
        recommendationElement.innerHTML = `
            <h3>Electrodoméstico con mayor consumo:</h3>
            <p>${maxAppliance}: ${maxConsumption.toFixed(2)} kWh</p>
            <h3>Recomendaciones:</h3>
            <p>Para reducir el consumo de ${maxAppliance}, considera las siguientes recomendaciones:</p>
            <ul>
                <li>Asegúrate de utilizarlo solo cuando sea necesario.</li>
                <li>Opta por electrodomésticos de bajo consumo energético.</li>
                <li>Mantén el electrodoméstico en buen estado para asegurar su eficiencia.</li>
                <li>Desconéctalo cuando no esté en uso para evitar consumos en stand-by.</li>
            </ul>
        `;
        resultElement.appendChild(recommendationElement);
    }
}
