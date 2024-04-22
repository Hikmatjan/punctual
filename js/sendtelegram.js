//bot token
var telegram_bot_id = ""; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id   
var chat_id = ; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var u_name, email, message;
var ready = function() {
    firstName = document.querySelector(".firstName").value;
    lastName = document.querySelector(".lastName").value;
    email = document.querySelector(".email").value;
    message_text = document.querySelector(".message-text").value;
    message = "Ismi: " + firstName + "\nFamiliyasi: " + lastName + "\nEmail: " + email + "\nIzoh: " + message_text;
    // message = "nianfaifkajhf";
};
var sendtelegram = function(event) {
    event.preventDefault();
    
    ready();        
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    
    return false;
};