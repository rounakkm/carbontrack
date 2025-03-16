document.addEventListener("DOMContentLoaded", () => {
    const suggestions = [
        "Reduce electricity use by 10% to cut 0.5 tons of CO₂ per year.",
        "Switch to LED bulbs to save energy and reduce emissions.",
        "Consider carpooling to lower transportation-related carbon footprint."
    ];

    const insightsElement = document.getElementById("ai-insight");
    insightsElement.textContent = suggestions[Math.floor(Math.random() * suggestions.length)];
});
