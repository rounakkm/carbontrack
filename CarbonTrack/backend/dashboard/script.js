// Chart for Carbon Footprint Trends
// const ctx = document.getElementById('carbonChart').getContext('2d');
// const carbonChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//         datasets: [{
//             label: 'Carbon Footprint (tons CO₂)',
//             data: [2.8, 2.6, 2.7, 2.5, 2.4, 2.3],
//             borderColor: '#00e676',
//             backgroundColor: 'rgba(0, 230, 118, 0.2)',
//             borderWidth: 2
//         }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//             legend: { display: true }
//         },
//         scales: {
//             y: { beginAtZero: false }
//         }
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('carbonChart').getContext('2d');

    // Create a gradient effect
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 255, 127, 1)'); // Neon Green (Top)
    gradient.addColorStop(1, 'rgba(0, 255, 127, 0.2)'); // Faded Green (Bottom)

    let highlightedIndex = null; // Track clicked bar

    var carbonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'CO₂ Emissions (kg)',
                data: [120, 100, 150, 130, 160, 140, 170],
                backgroundColor: gradient,
                borderColor: '#00ff7f',
                borderWidth: 2,
                borderRadius: 8,
                hoverBackgroundColor: 'rgba(0, 255, 127, 0.8)' // Bright glow on hover
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500, // Smooth animation effect
                easing: 'easeInOutQuart'
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#fff',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 255, 127, 0.9)',
                    titleFont: { size: 16 },
                    bodyFont: { size: 14 },
                    displayColors: false, // Hide color box in tooltip
                    callbacks: {
                        label: function (tooltipItem) {
                            return `CO₂: ${tooltipItem.raw} kg`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#fff' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                y: {
                    ticks: { color: '#fff' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            },
            onClick: function (event, elements) {
                if (elements.length > 0) {
                    let index = elements[0].index;
                    highlightedIndex = highlightedIndex === index ? null : index;
                    updateChartHighlight(carbonChart, highlightedIndex);
                }
            }
        }
    });

    function updateChartHighlight(chart, index) {
        chart.data.datasets[0].backgroundColor = chart.data.labels.map((_, i) => 
            i === index ? 'rgba(0, 255, 127, 1)' : gradient
        );
        chart.update();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("carbonChart").getContext("2d");
    const pieCtx = document.getElementById("categoryChart").getContext("2d");

    // Line Chart (Monthly Carbon Footprint)
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Carbon Footprint (tons)",
                    data: [2.1, 2.5, 2.3, 2.8, 2.6, 2.9],
                    borderColor: "#00e676",
                    backgroundColor: "rgba(0, 230, 118, 0.2)",
                    borderWidth: 2,
                    tension: 0.4,
                    pointBackgroundColor: "#fff",
                    pointBorderColor: "#00e676",
                    pointRadius: 5,
                    hoverRadius: 8,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: {
                    ticks: { color: "#fff" },
                    grid: { color: "rgba(255,255,255,0.2)" },
                },
                y: {
                    ticks: { color: "#fff" },
                    grid: { color: "rgba(255,255,255,0.2)" },
                },
            },
        },
    });

    // Pie Chart (Category-wise CO₂ Emissions)
    new Chart(pieCtx, {
        type: "pie",
        data: {
            labels: ["Transport", "Electricity", "Food", "Waste"],
            datasets: [
                {
                    data: [40, 30, 20, 10],
                    backgroundColor: ["#00e676", "#ffeb3b", "#ff5722", "#9c27b0"],
                    borderColor: "#111",
                    borderWidth: 2,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#fff",
                    },
                },
            },
        },
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const pieCtx = document.getElementById("categoryChart").getContext("2d");


});
