// Chart for Carbon Footprint Trends
const ctx = document.getElementById('carbonChart').getContext('2d');
const carbonChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Carbon Footprint (tons CO₂)',
            data: [2.8, 2.6, 2.7, 2.5, 2.4, 2.3],
            borderColor: '#00e676',
            backgroundColor: 'rgba(0, 230, 118, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        },
        scales: {
            y: { beginAtZero: false }
        }
    }
});
