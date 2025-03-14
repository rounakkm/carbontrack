function calculateFootprint() {
    const vehicle = document.getElementById("vehicle").value;
    const electricity = document.getElementById("electricity").value;
    const flights = document.getElementById("flights").value;
    const diet = document.getElementById("diet").value;

    if (vehicle && electricity && flights && diet) {
        const totalFootprint = (vehicle * 0.4) + (electricity * 0.8) + (flights * 0.3) + (diet * 0.5);
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<h3>Your estimated carbon footprint is ${totalFootprint.toFixed(2)} kg CO₂.</h3>`;
    } else {
        alert("Please fill in all fields before calculating.");
    }
}
