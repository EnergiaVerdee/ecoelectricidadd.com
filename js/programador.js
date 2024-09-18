const applianceData = {
    Refrigeradora:[
            { model: 'Samsung RT35K5930S8', voltage: 361 },
            { model: 'Samsung RS64T5B00B1/PE', voltage: 638 },
            { model: 'Samsung RL4363SBABS', voltage: 432 },
            { model: 'Samsung RS65R5681M9/PE', voltage: 602 },
            { model: 'Samsung LRF71A9671SG', voltage: 713 },
            { model: 'Panasonic NR-BV361BPKE', voltage: 270 },
            { model: 'Panasonic NR-BS90PV1BD', voltage: 29.3 },
            { model: 'Panasonic NR-BT43PV1TD', voltage: 31 },
            { model: 'Panasonic NR-BV320GKd', voltage: 265 },
            { model: 'Oster OS-PNFME21200BD', voltage: 285 },
            { model: 'Oster OS-PSBSME20SSEBDI', voltage: 358 },
            { model: 'Indurama RI-389', voltage: 320 },
            { model: 'Indurama RI-359', voltage: 308 },
            { model: 'Indurama RI-389D', voltage: 320 },
            { model: 'Indurama RI-289D', voltage: 161 },
            { model: 'LG GB37WGT', voltage: 254 },
            { model: 'LG GB41BPP', voltage: 267 },
            { model: 'LG GB46TGT', voltage: 280 },
            { model: 'LG LS51BPP', voltage: 433 },
        ],
    Lavadora: [
            { model: 'Samsung WD12TP84DBX/PE', voltage: 1600 },
            { model: 'Samsung WA13T5260BV', voltage: 500 },
            { model: 'Samsung WF21T6500GV/PE', voltage: 2400 },
            { model: 'Panasonic NA-F120', voltage: 500 },
            { model: 'Panasonic NA-F190H7', voltage: 700 },
            { model: 'Panasonic NA-FS19P7', voltage: 627 },
            { model: 'LG WT19BV6', voltage: 220 },
            { model: 'LG WT19DV6', voltage: 220 },
            { model: 'LG WT13BSB', voltage: 200 },
            { model: 'LG TS1366NTP', voltage: 200 },
            { model: 'LG WT16BPB', voltage: 200 },
            { model: 'LG WM10WVC4S6', voltage: 2200 },
            { model: 'LG WT25PBVS6', voltage: 2600 },
            { model: 'LG WT9GL', voltage: 1420 },
            { model: 'LG WT21PBVS6', voltage: 2720 },
            { model: 'LG WT17DV6T', voltage: 2500 },
            { model: 'Indurama LRI13BLA', voltage: 480 },
            { model: 'Indurama LRI-13DGR', voltage: 480 },
            { model: 'Indurama LRI-15DGR', voltage: 600 },
            { model: 'Indurama LRI-21CR', voltage: 680 },
            { model: 'BOSCH WAT28402PE', voltage: 880 },
        ],
    Microondas: [
            { model: 'Samsung AGE83X', voltage: 1200 },
            { model: 'Samsung MG32J5133AG/PE', voltage: 1500 },
            { model: 'Samsung AMW831K', voltage: 800 },
            { model: 'Samsung AME1114TW', voltage: 1500 },
            { model: 'Panasonic NN-DS59NBRPH', voltage: 1350 },
            { model: 'Panasonic NN-SC649S', voltage: 1200 },
            { model: 'Panasonic NN-ST965SRPH', voltage: 1200 },
            { model: 'Oster Pogm3702', voltage: 700 },
            { model: 'Oster Poggm3902G', voltage: 800 },
            { model: 'Oster POGME2701', voltage: 700 },
            { model: 'AIWA AWHMG20S01', voltage: 700 },
            { model: 'AIWA AW MM28S50', voltage: 900 },
            { model: 'Indurama MWI-20TCRP', voltage: 1050 },
            { model: 'Indurama MWI-32TCRP', voltage: 1500 },
            { model: 'Indurama MWI-20TCRP', voltage: 700 },
            { model: 'LG MS2596DIR', voltage: 1000 },
            { model: 'LG MS2032GAS', voltage: 1050 },
            { model: 'LG MS2536GIS', voltage: 1000 },
            { model: 'BOSCH BEL554MS0V', voltage: 900 },
            { model: 'Electrolux EMDO25S2GSRUG', voltage: 900 },
            { model: 'Electrolux EMDO30G2GSRUG', voltage: 900 },
            { model: 'Electrolux EMTP24G2GXB', voltage: 1400 },
            { model: 'Electrolux EMDY25S2MXB', voltage: 1200 },
        ],
    TV: [
            { model: 'Samsung RT35K5930S8', voltage: 361 },
            { model: 'Samsung RS64T5B00B1/PE', voltage: 638 },
            { model: 'Samsung RL4363SBABS', voltage: 432 },
            { model: 'Samsung RS65R5681M9/PE', voltage: 602 },
            { model: 'Samsung LRF71A9671SG', voltage: 713 },
            { model: 'Panasonic NR-BV361BPKE', voltage: 270 },
            { model: 'Panasonic NR-BS90PV1BD', voltage: 29.3 },
            { model: 'Panasonic NR-BT43PV1TD', voltage: 31 },
            { model: 'Panasonic NR-BV320GKd', voltage: 265 },
            { model: 'Oster OS-PNFME21200BD', voltage: 285 },
            { model: 'Oster OS-PSBSME20SSEBDI', voltage: 358 },
            { model: 'Indurama RI-389', voltage: 320 },
            { model: 'Indurama RI-359', voltage: 308 },
            { model: 'Indurama RI-389D', voltage: 320 },
            { model: 'Indurama RI-289D', voltage: 161 }
        ],
    Licuadora: [
            { model: 'Panasonic MJ-L700', voltage: 150 },
            { model: 'Panasonic MX-151SG1WZC', voltage: 450 },
            { model: 'Oster BLST3BRPG', voltage: 450 },
            { model: 'Oster BLSTBPST', voltage: 1100 },
            { model: 'Oster ActiFit™ BLSTAFB', voltage: 700 },
            { model: 'Holstein HH-09101067B', voltage: 400 },
            { model: 'Holstein HH-0914902B', voltage: 250 },
            { model: 'Indurama LI-INX', voltage: 1000 },
            { model: 'Indurama LI-CRB', voltage: 500 },
            { model: 'Indurama LI-CRP', voltage: 750 },
            { model: 'Indurama LI-INX', voltage: 1000 },
            { model: 'Mabe BLSTKAGWRD', voltage: 550 },
            { model: 'Mabe BLSTKAGBPB', voltage: 550 }
        ],
    Freidora: [
            { model: 'IMACO AF2714R', voltage: 1400 },
            { model: 'IMACO AF6015M', voltage: 1500 },
            { model: 'IMACO AF5514', voltage: 1400 },
            { model: 'Oster CKSTAF18DDF', voltage: 1000 },
            { model: 'Oster CKSTAF68T', voltage: 1700 },
            { model: 'Indurama FAI-35MN', voltage: 1500 },
            { model: 'Indurama FAI-35DN', voltage: 1500 },
            { model: 'Indurama FAI-35DN', voltage: 1500 }
        ],
    Olla_Arrocera: [
            { model: 'Panasonic SR-Y22FGJLZB', voltage: 700 },
            { model: 'Panasonic SR-DF101', voltage: 750 },
            { model: 'Panasonic SR-DF181', voltage: 750 },
            { model: 'Oster CKSTRC5731S', voltage: 700 },
            { model: 'Oster CKSTRC1700B', voltage: 700 },
            { model: 'Oster CKSTRC5730W', voltage: 700 },
            { model: 'Oster CKSTRC8029T', voltage: 700 },
            { model: 'Oster CKSTRC1700W', voltage: 700 },
            { model: 'Indurama OAI-GR18', voltage: 700 },
            { model: 'Indurama OAI-BL18', voltage: 700 },
            { model: 'Indurama OAI-BL15', voltage: 500 },
            { model: 'Mabe RC15N', voltage: 900 },
            { model: 'Mabe RC18VE', voltage: 950 }
        ],
    Terma: [
            { model: 'ROTOPLAS New Compact Silver', voltage: 4500 },
            { model: 'ROTOPLAS Digital Max', voltage: 5500 },
            { model: 'ROTOPLAS New Sense Pro', voltage: 4500 },
            { model: 'ROTOPLAS Prisma', voltage: 5500 },
            { model: 'SOLE SOLSOL010C', voltage: 1500 },
            { model: 'SOLE SOLENGASN05V3C', voltage: 11000 },
            { model: 'SOLE SOLTEEV050C', voltage: 1500 },
            { model: 'SOLE SOLTEM110V', voltage: 2000 },
            { model: 'SOLE SOLTEM050V', voltage: 1200 },
            { model: 'SOLE SOLRD3000C', voltage: 3000 },
            { model: 'SOLE SOLRD4000V3C', voltage: 4000 },
            { model: 'SOLE SOLTD7000EC', voltage: 7000 },
            { model: 'SOLE SOLRD5500V3C', voltage: 5500 },
        ],
    Cafetera: [
            { model: 'BOSCH TKA8013', voltage: 1160 },
            { model: 'Electrolux ECM10', voltage: 800 },
            { model: 'Electrolux ECM20', voltage: 800 },
            { model: 'Electrolux ECM30', voltage: 800 },
            { model: 'Electrolux ECM25', voltage: 800 },
        ],
    Lavavajilla: [
            { model: 'Electrolux EHCE08M2STG', voltage: 1400 },
            { model: 'Electrolux EHFE14T2MSBXB', voltage: 1760 },
            { model: 'Electrolux EHFE10T2MSBUS', voltage: 1760 },
            { model: 'Electrolux EHFE14T2MSBUS', voltage: 1760 },
        ],
};

const tariffs = {
    BT7: [
        { range: [0, 30], rate: 49.97 },
        { range: [31, 140], rate: 71.39 },
        { range: [141, Infinity], rate: 73.67 }
    ],
    BT5i: [
        { range: [0, 30], rate: 47.61 },
        { range: [31, 140], rate: 68.02 },
        { range: [141, Infinity], rate: 70.20 }
    ],
    BT5f: [
        { range: [0, 30], rate: 78.55 },
        { range: [31, 140], rate: 112.22 },
        { range: [141, Infinity], rate: 115.81 }
    ],
    BT5e: [
        { range: [0, 30], rate: 50.59 },
        { range: [31, 140], rate: 72.27 },
        { range: [141, Infinity], rate: 74.58 }
    ],
    BT5d: [
        { range: [0, 30], rate: 38.60 },
        { range: [31, 140], rate: 55.14 },
        { range: [141, Infinity], rate: 56.90 }
    ],
    BT5b: [
        { range: [0, 30], rate: 50.74 },
        { range: [31, 140], rate: 72.48 },
        { range: [141, Infinity], rate: 74.80 }
    ],
    BT5a: [
        { range: [0, 20], rate: 183.95 },
        { range: [21, 50], rate: 217.08 },
        { range: [141, Infinity], rate: 218.95 }
    ]
};

let appliances = [];

function updateModels() {
    const appliance = document.getElementById('appliance').value;
    const modelSelect = document.getElementById('model');
    const modelGroup = document.getElementById('model-group');

    modelSelect.innerHTML = '<option value="">Selecciona un modelo</option>';

    if (applianceData[appliance]) {
        applianceData[appliance].forEach(model => {
            const option = document.createElement('option');
            option.value = model.model;
            option.text = `${model.model} - ${model.voltage} W`;
            modelSelect.appendChild(option);
        });
        modelGroup.style.display = 'block';
    } else {
        modelGroup.style.display = 'none';
    }
}

function addAppliance() {
    const appliance = document.getElementById('appliance').value;
    const modelSelect = document.getElementById('model');
    const model = modelSelect.value;
    const usageTime = document.getElementById('usageTime').value;
    const duration = parseFloat(document.getElementById('duration').value);

    if (!appliance || !model || !usageTime || isNaN(duration) || duration <= 0) {
        alert('Por favor, ingresa valores válidos para todos los campos.');
        return;
    }

    const voltage = applianceData[appliance].find(item => item.model === model).voltage;
    
    appliances.push({ appliance, model, usageTime, duration, voltage });
    updateApplianceList();
}

function updateApplianceList() {
    const applianceList = document.getElementById('appliance-list');
    applianceList.innerHTML = '';
    appliances.forEach((appliance, index) => {
        applianceList.innerHTML += `
            <div class="appliance-item">
                <p>${appliance.appliance} - ${appliance.model} - ${appliance.usageTime} - ${appliance.duration}h - ${appliance.voltage/1000} W</p>
                <button onclick="removeAppliance(${index})">Eliminar</button>
            </div>
        `;
    });
}

function removeAppliance(index) {
    appliances.splice(index, 1);
    updateApplianceList();
}

function calculateTotalSavings() {
    let totalSavings = 0;
    const selectedTariff = document.getElementById('tariff').value;
    const tariffRates = tariffs[selectedTariff];

    appliances.forEach(appliance => {
        const consumption = (appliance.voltage/1000 * appliance.duration)/1000;

        let rate = 0;
        for (let i = 0; i < tariffRates.length; i++) {
            const range = tariffRates[i].range;
            if (consumption >= range[0] && consumption <= range[1]) {
                rate = tariffRates[i].rate;
                break;
            }
        }

        totalSavings += consumption * rate;
    });

    const resultElement = document.getElementById('scheduler-result');
    resultElement.innerHTML = `<p>Ahorro total: S/${totalSavings.toFixed(2)}</p>`;
}
