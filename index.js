$(document).ready(function(){
    $('.btn').click(function(event){
        event.preventDefault();

        var emailInput = $("#emailInput");
        var errorText = $(".errorText")

        var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailReg.test(emailInput.val())){
        emailInput.addClass("error");
        errorText.show();
        } else {
        emailInput.removeClass("error");
        errorText.hide();    
        }
    });
});