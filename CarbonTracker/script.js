function calculateFootprint() {
    const vehicle = parseFloat(document.getElementById('vehicle').value) || 0;
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const flights = parseFloat(document.getElementById('flights').value) || 0;
    const diet = parseFloat(document.getElementById('diet').value) || 0;

    const totalEmissions = vehicle * 2.31 + electricity * 0.43 + flights * 0.25 + diet;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Total Carbon Footprint: <strong>${totalEmissions.toFixed(2)} kg CO₂</strong>`;

    if (totalEmissions < 1000) {
        resultElement.style.color = "green";
        resultElement.innerHTML += "<br>Great job! Your carbon footprint is low.";
    } else if (totalEmissions < 3000) {
        resultElement.style.color = "orange";
        resultElement.innerHTML += "<br>Moderate footprint, consider reducing some activities.";
    } else {
        resultElement.style.color = "red";
        resultElement.innerHTML += "<br>High footprint! Consider making lifestyle changes.";
    }
}