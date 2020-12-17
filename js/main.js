// Whatsapp button

var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?60159';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#4dc247",
        "ctaText": "",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "20",
        "marginRight": "20",
        "position": "right"
    },
    "brandSetting": {
        "brandName": "Ayayay Julia",
        "brandSubTitle": "Papas horneadas y nachos.",
        "brandImg": "../img/foto-perfil-fb.jpg",
        "welcomeText": "Hola, ¿Cómo podemos ayudarte? 😁☕🍰",
        "backgroundColor": "#0a5f54",
        "ctaText": "Chatear ahora",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "50241566624"
    }
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);