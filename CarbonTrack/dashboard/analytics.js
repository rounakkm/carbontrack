document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("carbonChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Carbon Footprint (tons)",
                data: [3, 2.8, 2.5, 2.3, 2.0, 1.8],
                backgroundColor: "#16a085",
            }]
        },
        options: {
            responsive: true
        }
    });
});

