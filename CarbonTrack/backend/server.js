const express = require('express');
const fs = require('fs');
const OpenAI = require('openai');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));

const openai = new OpenAI({
    apiKey: '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',
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dashboard/index.html');
});

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/dashboard/index.html');
});

app.get('/analytics', (req, res) => {
    res.sendFile(__dirname + '/dashboard/analytics.html');
});

app.get('/insights', (req, res) => {
    res.sendFile(__dirname + '/dashboard/insights.html');
});

app.get('/settings', (req, res) => {
    res.sendFile(__dirname + '/dashboard/settings.html');
});

app.get('/logout', (req, res) => {
    res.sendFile(__dirname + '/dashboard/logout.html');
});

app.post('/calculate-carbon', async (req, res) => {
    try {
        const base64Image = req.body.image;
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{
                role: 'system',
                content: [{
                    type: 'text',
                    text: 'Your task is to calculate the carbon footprint based on the provided data. Please consider the following: 1.Country: India  2.Energy Source: Coal 3.Emission Factor: 0.82 kg of CO₂ per kWh 4.1 Unit of Energy = 1 kWh. Based on the energy consumption provided by the user, calculate the carbon emission in tonnes (where 1 tonne = 1,000 kg). Once the carbon footprint is calculated, provide personalized insights to help reduce emissions.',
                }],
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: 'calculate your carbon footprint based on your daily activities and lifestyle choices. Once the calculation is complete, provide personalized insights on how you can reduce your carbon emissions',
                    },
                    {
                        type: 'image_url',
                        image_url: {
                            url: `data:image/jpeg;base64,${base64Image}`,
                        },
                    },
                ],
            }],
        });

        const response = completion.choices[0].message.content;
        res.json({ result: response });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});