const appliances = {
    Refrigeradora:[
            { model: 'Samsung RT35K5930S8', power: 361 },
            { model: 'Samsung RS64T5B00B1/PE', power: 638 },
            { model: 'Samsung RL4363SBABS', power: 432 },
            { model: 'Samsung RS65R5681M9/PE', power: 602 },
            { model: 'Samsung LRF71A9671SG', power: 713 },
            { name: '-----------------------------------'},
            { model: 'Panasonic NR-BV361BPKE', power: 270 },
            { model: 'Panasonic NR-BS90PV1BD', power: 29.3 },
            { model: 'Panasonic NR-BT43PV1TD', power: 31 },
            { model: 'Panasonic NR-BV320GKd', power: 265 },
            { name: '-----------------------------------'},
            { model: 'Oster OS-PNFME21200BD', power: 285 },
            { model: 'Oster OS-PSBSME20SSEBDI', power: 358 },
            { name: '-----------------------------------'},
            { model: 'Indurama RI-389', power: 320 },
            { model: 'Indurama RI-359', power: 308 },
            { model: 'Indurama RI-389D', power: 320 },
            { model: 'Indurama RI-289D', power: 161 },
            { name: '-----------------------------------'},
            { model: 'LG GB37WGT', power: 254 },
            { model: 'LG GB41BPP', power: 267 },
            { model: 'LG GB46TGT', power: 280 },
            { model: 'LG LS51BPP', power: 433 },
        ],
    Lavadora: [
            { model: 'Samsung WD12TP84DBX/PE', power: 1600 },
            { model: 'Samsung WA13T5260BV', power: 500 },
            { model: 'Samsung WF21T6500GV/PE', power: 2400 },
            { name: '-----------------------------------'},
            { model: 'Panasonic NA-F120', power: 500 },
            { model: 'Panasonic NA-F190H7', power: 700 },
            { model: 'Panasonic NA-FS19P7', power: 627 },
            { name: '-----------------------------------'},
            { model: 'LG WT19BV6', power: 220 },
            { model: 'LG WT19DV6', power: 220 },
            { model: 'LG WT13BSB', power: 200 },
            { model: 'LG TS1366NTP', power: 200 },
            { model: 'LG WT16BPB', power: 200 },
            { model: 'LG WM10WVC4S6', power: 2200 },
            { model: 'LG WT25PBVS6', power: 2600 },
            { model: 'LG WT9GL', power: 1420 },
            { model: 'LG WT21PBVS6', power: 2720 },
            { model: 'LG WT17DV6T', power: 2500 },
            { name: '-----------------------------------'},
            { model: 'Indurama LRI13BLA', power: 480 },
            { model: 'Indurama LRI-13DGR', power: 480 },
            { model: 'Indurama LRI-15DGR', power: 600 },
            { model: 'Indurama LRI-21CR', power: 680 },
            { name: '-----------------------------------'},
            { model: 'BOSCH WAT28402PE', power: 880 },
        ],
    Microondas: [
            { model: 'Samsung AGE83X', power: 1200 },
            { model: 'Samsung MG32J5133AG/PE', power: 1500 },
            { model: 'Samsung AMW831K', power: 800 },
            { model: 'Samsung AME1114TW', power: 1500 },
            { name: '-----------------------------------'},
            { model: 'Panasonic NN-DS59NBRPH', power: 1350 },
            { model: 'Panasonic NN-SC649S', power: 1200 },
            { model: 'Panasonic NN-ST965SRPH', power: 1200 },
            { name: '-----------------------------------'},
            { model: 'Oster Pogm3702', power: 700 },
            { model: 'Oster Poggm3902G', power: 800 },
            { model: 'Oster POGME2701', power: 700 },
            { name: '-----------------------------------'},
            { model: 'AIWA AWHMG20S01', power: 700 },
            { model: 'AIWA AW MM28S50', power: 900 },
            { name: '-----------------------------------'},
            { model: 'Indurama MWI-20TCRP', power: 1050 },
            { model: 'Indurama MWI-32TCRP', power: 1500 },
            { model: 'Indurama MWI-20TCRP', power: 700 },
            { name: '-----------------------------------'},
            { model: 'LG MS2596DIR', power: 1000 },
            { model: 'LG MS2032GAS', power: 1050 },
            { model: 'LG MS2536GIS', power: 1000 },
            { name: '-----------------------------------'},
            { model: 'BOSCH BEL554MS0V', power: 900 },
            { name: '-----------------------------------'},
            { model: 'Electrolux EMDO25S2GSRUG', power: 900 },
            { model: 'Electrolux EMDO30G2GSRUG', power: 900 },
            { model: 'Electrolux EMTP24G2GXB', power: 1400 },
            { model: 'Electrolux EMDY25S2MXB', power: 1200 },
        ],
    TV: [
            { model: 'Samsung RT35K5930S8', power: 361 },
            { model: 'Samsung RS64T5B00B1/PE', power: 638 },
            { model: 'Samsung RL4363SBABS', power: 432 },
            { model: 'Samsung RS65R5681M9/PE', power: 602 },
            { model: 'Samsung LRF71A9671SG', power: 713 },
            { name: '-----------------------------------'},
            { model: 'Panasonic NR-BV361BPKE', power: 270 },
            { model: 'Panasonic NR-BS90PV1BD', power: 29.3 },
            { model: 'Panasonic NR-BT43PV1TD', power: 31 },
            { model: 'Panasonic NR-BV320GKd', power: 265 },
            { name: '-----------------------------------'},
            { model: 'Oster OS-PNFME21200BD', power: 285 },
            { model: 'Oster OS-PSBSME20SSEBDI', power: 358 },
            { name: '-----------------------------------'},
            { name: 'Indurama RI-389', power: 320 },
            { model: 'Indurama RI-359', power: 308 },
            { model: 'Indurama RI-389D', power: 320 },
            { model: 'Indurama RI-289D', power: 161 }
        ],
    Licuadora: [
            { model: 'Panasonic MJ-L700', power: 150 },
            { model: 'Panasonic MX-151SG1WZC', power: 450 },
            { name: '-----------------------------------'},
            { model: 'Oster BLST3BRPG', power: 450 },
            { model: 'Oster BLSTBPST', power: 1100 },
            { model: 'Oster ActiFit™ BLSTAFB', power: 700 },
            { name: '-----------------------------------'},
            { model: 'Holstein HH-09101067B', power: 400 },
            { model: 'Holstein HH-0914902B', power: 250 },
            { name: '-----------------------------------'},
            { model: 'Indurama LI-INX', power: 1000 },
            { model: 'Indurama LI-CRB', power: 500 },
            { model: 'Indurama LI-CRP', power: 750 },
            { model: 'Indurama LI-INX', power: 1000 },
            { name: '-----------------------------------'},
            { model: 'Mabe BLSTKAGWRD', power: 550 },
            { model: 'Mabe BLSTKAGBPB', power: 550 }
        ],
    Freidora: [
            { model: 'IMACO AF2714R', power: 1400 },
            { model: 'IMACO AF6015M', power: 1500 },
            { model: 'IMACO AF5514', power: 1400 },
            { name: '-----------------------------------'},
            { model: 'Oster CKSTAF18DDF', power: 1000 },
            { model: 'Oster CKSTAF68T', power: 1700 },
            { name: '-----------------------------------'},
            { model: 'Indurama FAI-35MN', power: 1500 },
            { model: 'Indurama FAI-35DN', power: 1500 },
            { model: 'Indurama FAI-35DN', power: 1500 }
        ],
    Olla_Arrocera: [
            { model: 'Panasonic SR-Y22FGJLZB', power: 700 },
            { model: 'Panasonic SR-DF101', power: 750 },
            { model: 'Panasonic SR-DF181', power: 750 },
            { name: '-----------------------------------'},
            { model: 'Oster CKSTRC5731S', power: 700 },
            { model: 'Oster CKSTRC1700B', power: 700 },
            { model: 'Oster CKSTRC5730W', power: 700 },
            { model: 'Oster CKSTRC8029T', power: 700 },
            { model: 'Oster CKSTRC1700W', power: 700 },
            { name: '-----------------------------------'},
            { model: 'Indurama OAI-GR18', power: 700 },
            { model: 'Indurama OAI-BL18', power: 700 },
            { model: 'Indurama OAI-BL15', power: 500 },
            { name: '-----------------------------------'},
            { model: 'Mabe RC15N', power: 900 },
            { model: 'Mabe RC18VE', power: 950 }
        ],
    Terma: [
            { model: 'ROTOPLAS New Compact Silver', power: 4500 },
            { model: 'ROTOPLAS Digital Max', power: 5500 },
            { model: 'ROTOPLAS New Sense Pro', power: 4500 },
            { model: 'ROTOPLAS Prisma', power: 5500 },
            { name: '-----------------------------------'},
            { model: 'SOLE SOLSOL010C', power: 1500 },
            { model: 'SOLE SOLENGASN05V3C', power: 11000 },
            { model: 'SOLE SOLTEEV050C', power: 1500 },
            { model: 'SOLE SOLTEM110V', power: 2000 },
            { model: 'SOLE SOLTEM050V', power: 1200 },
            { model: 'SOLE SOLRD3000C', power: 3000 },
            { model: 'SOLE SOLRD4000V3C', power: 4000 },
            { model: 'SOLE SOLTD7000EC', power: 7000 },
            { model: 'SOLE SOLRD5500V3C', power: 5500 },
        ],
    Cafetera: [
            { model: 'BOSCH TKA8013', power: 1160 },
            { name: '-----------------------------------'},
            { model: 'Electrolux ECM10', power: 800 },
            { model: 'Electrolux ECM20', power: 800 },
            { model: 'Electrolux ECM30', power: 800 },
            { model: 'Electrolux ECM25', power: 800 },
        ],
    Lavavajilla: [
            { model: 'Electrolux EHCE08M2STG', power: 1400 },
            { model: 'Electrolux EHFE14T2MSBXB', power: 1760 },
            { model: 'Electrolux EHFE10T2MSBUS', power: 1760 },
            { model: 'Electrolux EHFE14T2MSBUS', power: 1760 },
        ],
};

const recommendations = {
    Refrigeradora: 'Indurama RI-289D',
    Lavadora: 'LG TS1366NTP',
    Microondas: 'Oster POGME2701',
    TV: 'Indurama RI-289D',
    Licuadora: 'Panasonic MJ-L700',
    Freidora: 'Oster CKSTAF18DDF',
    Olla_Arrocera: 'Indurama OAI-BL15',
    Terma: 'SOLE SOLSOL010C',
    Cafetera: 'Electrolux ECM20',
    Lavavajilla: 'Electrolux EHCE08M2STG',
};

function updateModels(applianceSelectId) {
    const appliance = document.getElementById(applianceSelectId).value;
    const modelSelect = document.getElementById(applianceSelectId.replace('appliance', 'model'));

    modelSelect.innerHTML = '<option value="">Selecciona un modelo</option>';
    
    if (appliances[appliance]) {
        appliances[appliance].forEach(({ model }) => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }

    const powerInputId = applianceSelectId.replace('appliance', 'power');
    document.getElementById(powerInputId).value = '';
}

function updatePower(applianceSelectId, modelSelectId, powerInputId) {
    const appliance = document.getElementById(applianceSelectId).value;
    const model = document.getElementById(modelSelectId).value;
    const powerInput = document.getElementById(powerInputId);

    const selectedAppliance = appliances[appliance]?.find(item => item.model === model);

    if (selectedAppliance) {
        powerInput.value = selectedAppliance.power;
    } else {
        powerInput.value = '';
    }
}

function showRecommendation(applianceSelectId, recommendationId) {
    const appliance = document.getElementById(applianceSelectId).value;
    const recommendationElement = document.getElementById(recommendationId);

    if (recommendations[appliance]) {
        recommendationElement.textContent = `Recomendamos el ${recommendations[appliance]} para el electrodoméstico seleccionado.`;
    } else {
        recommendationElement.textContent = 'Por favor, selecciona un electrodoméstico para ver la recomendación.';
    }
}

function compareAppliances() {
    // Obtener los valores de los campos de entrada
    const appliance1 = document.getElementById('appliance1').value;
    const model1 = document.getElementById('model1').value;
    const power1 = parseFloat(document.getElementById('power1').value);
    const efficiency1 = document.getElementById('efficiency1').value;

    const appliance2 = document.getElementById('appliance2').value;
    const model2 = document.getElementById('model2').value;
    const power2 = parseFloat(document.getElementById('power2').value);
    const efficiency2 = document.getElementById('efficiency2').value;

    // Validar los valores de entrada
    if (!appliance1 || !model1 || isNaN(power1) || !efficiency1 || !appliance2 || !model2 || isNaN(power2) || !efficiency2) {
        alert('Por favor, completa todos los campos con valores válidos.');
        return;
    }

    // Crear un resultado comparativo
    const resultElement = document.getElementById('comparison-result');
    resultElement.innerHTML = `
        <h2>Comparación de Electrodomésticos</h2>
        <table>
            <tr>
                <th>Característica</th>
                <th>${appliance1} - ${model1}</th>
                <th>${appliance2} - ${model2}</th>
            </tr>
            <tr>
                <td>Potencia (W)</td>
                <td>${power1}</td>
                <td>${power2}</td>
            </tr>
            <tr>
                <td>Eficiencia Energética</td>
                <td>${efficiency1}</td>
                <td>${efficiency2}</td>
            </tr>
        </table>
        <p>${appliance1} - ${model1} consume ${power1 > power2 ? 'más' : 'menos'} energía que ${appliance2} - ${model2}.</p>
    `;
}
