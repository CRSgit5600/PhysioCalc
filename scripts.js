function calculate() {
    // Get input values
    const revenue2023 = parseFloat(document.getElementById('revenue2023').value) || 0;
    const revenue2024 = parseFloat(document.getElementById('revenue2024').value) || 0;
    const materialaufwand2023 = parseFloat(document.getElementById('materialaufwand2023').value) || 0;
    const materialaufwand2024 = parseFloat(document.getElementById('materialaufwand2024').value) || 0;
    const personalaufwand2023 = parseFloat(document.getElementById('personalaufwand2023').value) || 0;
    const personalaufwand2024 = parseFloat(document.getElementById('personalaufwand2024').value) || 0;
    const weiterbildungsaufwand2023 = parseFloat(document.getElementById('weiterbildungsaufwand2023').value) || 0;
    const weiterbildungsaufwand2024 = parseFloat(document.getElementById('weiterbildungsaufwand2024').value) || 0;
    const raumkosten2023 = parseFloat(document.getElementById('raumkosten2023').value) || 0;
    const raumkosten2024 = parseFloat(document.getElementById('raumkosten2024').value) || 0;
    const energie2023 = parseFloat(document.getElementById('energie2023').value) || 0;
    const energie2024 = parseFloat(document.getElementById('energie2024').value) || 0;
    const unterhalt2023 = parseFloat(document.getElementById('unterhalt2023').value) || 0;
    const unterhalt2024 = parseFloat(document.getElementById('unterhalt2024').value) || 0;
    const fahrzeuge2023 = parseFloat(document.getElementById('fahrzeuge2023').value) || 0;
    const fahrzeuge2024 = parseFloat(document.getElementById('fahrzeuge2024').value) || 0;
    const leasingkosten2023 = parseFloat(document.getElementById('leasingkosten2023').value) || 0;
    const leasingkosten2024 = parseFloat(document.getElementById('leasingkosten2024').value) || 0;
    const sachversicherungen2023 = parseFloat(document.getElementById('sachversicherungen2023').value) || 0;
    const sachversicherungen2024 = parseFloat(document.getElementById('sachversicherungen2024').value) || 0;
    const verwaltungskosten2023 = parseFloat(document.getElementById('verwaltungskosten2023').value) || 0;
    const verwaltungskosten2024 = parseFloat(document.getElementById('verwaltungskosten2024').value) || 0;
    const beraterhonorare2023 = parseFloat(document.getElementById('beraterhonorare2023').value) || 0;
    const beraterhonorare2024 = parseFloat(document.getElementById('beraterhonorare2024').value) || 0;
    const werbung2023 = parseFloat(document.getElementById('werbung2023').value) || 0;
    const werbung2024 = parseFloat(document.getElementById('werbung2024').value) || 0;
    const reise2023 = parseFloat(document.getElementById('reise2023').value) || 0;
    const reise2024 = parseFloat(document.getElementById('reise2024').value) || 0;
    const operativeKosten2023 = parseFloat(document.getElementById('operativeKosten2023').value) || 0;
    const operativeKosten2024 = parseFloat(document.getElementById('operativeKosten2024').value) || 0;
    const ertrag2023 = parseFloat(document.getElementById('ertrag2023').value) || 0;
    const ertrag2024 = parseFloat(document.getElementById('ertrag2024').value) || 0;
    
    // Perform calculations
    const netRevenue2023 = revenue2023 - materialaufwand2023;
    const netRevenue2024 = revenue2024 - materialaufwand2024;
    const ebitda2023 = netRevenue2023 - personalaufwand2023 - weiterbildungsaufwand2023 - raumkosten2023 - energie2023 - unterhalt2023 - fahrzeuge2023 - leasingkosten2023 - sachversicherungen2023 - verwaltungskosten2023 - beraterhonorare2023 - werbung2023 - reise2023 - operativeKosten2023 + ertrag2023;
    const ebitda2024 = netRevenue2024 - personalaufwand2024 - weiterbildungsaufwand2024 - raumkosten2024 - energie2024 - unterhalt2024 - fahrzeuge2024 - leasingkosten2024 - sachversicherungen2024 - verwaltungskosten2024 - beraterhonorare2024 - werbung2024 - reise2024 - operativeKosten2024 + ertrag2024;
    const multiple2023 = 2.5; // Example value
    const multiple2024 = 3.5; // Example value
    const companyValue2023 = ebitda2023 * multiple2023;
    const companyValue2024 = ebitda2024 * multiple2024;
    
    // Update output fields
    document.getElementById('netRevenue2023').value = netRevenue2023;
    document.getElementById('netRevenue2024').value = netRevenue2024;
    document.getElementById('ebitda2023').value = ebitda2023;
    document.getElementById('ebitda2024').value = ebitda2024;
    document.getElementById('multiple2023').value = multiple2023;
    document.getElementById('multiple2024').value = multiple2024;
    document.getElementById('companyValue2023').value = companyValue2023;
    document.getElementById('companyValue2024').value = companyValue2024;
}

function requestContractDetails() {
    const email = prompt("Please enter your email address:");
    if (email) {
        sendEmail(email);
    }
}

function sendEmail(email) {
    const revenue2023 = document.getElementById('revenue2023').value;
    const revenue2024 = document.getElementById('revenue2024').value;
    const netRevenue2023 = document.getElementById('netRevenue2023').value;
    const netRevenue2024 = document.getElementById('netRevenue2024').value;
    const ebitda2023 = document.getElementById('ebitda2023').value;
    const ebitda2024 = document.getElementById('ebitda2024').value;
    const multiple2023 = document.getElementById('multiple2023').value;
    const multiple2024 = document.getElementById('multiple2024').value;
    const companyValue2023 = document.getElementById('companyValue2023').value;
    const companyValue2024 = document.getElementById('companyValue2024').value;

    const subject = "Valuation Results";
    const body = `Here are your valuation results:\n\n
                  Umsatz (Revenue) 2023: ${revenue2023}\n
                  Umsatz (Revenue) 2024: ${revenue2024}\n
                  Nettoumsatz (Net Revenue) 2023: ${netRevenue2023}\n
                  Nettoumsatz (Net Revenue) 2024: ${netRevenue2024}\n
                  EBITDA 2023: ${ebitda2023}\n
                  EBITDA 2024: ${ebitda2024}\n
                  Multiple 2023: ${multiple2023}\n
                  Multiple 2024: ${multiple2024}\n
                  Unternehmenswert (Company Value) 2023: ${companyValue2023}\n
                  Unternehmenswert (Company Value) 2024: ${companyValue2024}\n`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
