const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client({
    puppeteer: {
        handless: true
    }
});

client.on('qr', (qr) => {
    console.log('QR CODE');
    qrcode.generate(qr, { small: true });
});

client.on('auth_failure', (msg) => {
    console.log(msg);
})

client.on('ready', () => {
    console.log('Bot active');
});

client.on('message', (msg) => {
    if(msg.body == '!ping') {
        return msg.reply('Pong');
    }
})
;

client.initialize();
