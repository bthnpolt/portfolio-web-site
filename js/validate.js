document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("contact-form").addEventListener("submit", function(event){
        var valid = true;
        var name = document.getElementById("user_name")
        var email = document.getElementById("user_email")
        var message = document.getElementById("message")
        

        if(!name.checkVali){
            valid = false;
            document.getElementById("user_name").setCustomValidity("Lütfen isim-soyisim giriniz.");
        }else{
            document.getElementById("user_name").setCustomValidity("");
        }

        if(email === ""){
            valid = false;
            document.getElementById("user_email").setCustomValidity("Lütfen email giriniz.");
        }else{
            document.getElementById("user_email").setCustomValidity("");
        }

        if(message === ""){
            valid = false;
            document.getElementById("message").setCustomValidity("Lütfen mesaj giriniz.");
        }else{
            document.getElementById("message").setCustomValidity("");
        }

        if (!valid) {
            event.preventDefault();
        }
    });

});